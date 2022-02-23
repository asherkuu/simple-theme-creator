import type { NextApiRequest, NextApiResponse } from "next";
import { Result, ValidationError, validationResult } from "express-validator";
import { mongo } from "mongoose";

import IInquery from "../../interface/community/inquery";
import Inquerys from "../../model/community/inquery";

import { CatchType } from "typings";
import { GetInqueryListRequestType } from "../../typings/community/inquery";
import inquery from "../../model/community/inquery";

/***
 * GET Inqeury List
 * @METHOD `GET`
 * @PATH `/api/v1/community/inquery`
 */
export const getInqueryList = async (
  req: NextApiRequest,
  res: NextApiResponse<IInquery[] | CatchType>
) => {
  const errors: Result<ValidationError> = await validationResult(req);

  if (!errors.isEmpty()) {
    const firstError: string = await errors.array().map((err) => err.msg)[0];
    return res.status(422).json({ msg: firstError });
  } else {
    const {
      lastId = null,
      limit = 30,
      searchWord = null,
    } = req.query as GetInqueryListRequestType;

    try {
      const filteredBy = () => {
        const filter = {
          _id: { $lt: new mongo.ObjectId(lastId) },
          title: searchWord ? { $regex: searchWord, $options: "i" } : null,
        };

        // // delete not use data
        Object.keys(filter).forEach((item) => {
          !filter[item] && delete filter[item];
        });

        return filter;
      };

      await Inquerys.find(filteredBy())
        .limit(Number(limit))
        .sort({ createdAt: -1 })
        .select([
          "_id",
          "answer",
          "isAnswer",
          "content",
          "user",
          "createdAt",
          "updatedAt",
        ])
        .exec(async (err: Object, inquery: IInquery[]) => {
          if (err) {
            return res.status(400).json({ msg: JSON.stringify(err) });
          }
          return res.status(200).json(inquery);
        });
    } catch (error) {
      res.status(500).json({
        msg: error.message,
        error,
      });
    }
  }
};

/***
 * get inquery Item By Id
 * @METHOD `GET`
 * @PATH `/api/v1/community/inquery/:id`
 */
export const getInqueryById = async (
  req: NextApiRequest,
  res: NextApiResponse<IInquery | CatchType>
) => {
  const errors: Result<ValidationError> = await validationResult(req);
  if (!errors.isEmpty()) {
    const firstError: string = await errors.array().map((err) => err.msg)[0];
    return res.status(422).json({ msg: firstError });
  } else {
    try {
      await Inquerys.findById(req.query.id)
        .select([
          "_id",
          "answer",
          "isAnswer",
          "content",
          "user",
          "createdAt",
          "updatedAt",
        ])
        .exec(async (err: Object, inquery: IInquery) => {
          if (err || !inquery) {
            return res.status(404).json({
              msg: "Can not found inquery",
            });
          }
          return res.status(200).json(inquery);
        });
    } catch (error) {
      return res.status(500).json({
        msg: error.message,
        error,
      });
    }
  }
};

/***
 * Post New inquery
 * @METHOD `POST`
 * @PATH `/api/v1/community/inquery`
 */
export const postInqueryCreate = async (
  req: NextApiRequest,
  res: NextApiResponse<IInquery | CatchType>
) => {
  const errors: Result<ValidationError> = await validationResult(req);
  if (!errors.isEmpty()) {
    const firstError: string = await errors.array().map((err) => err.msg)[0];
    return res.status(422).json({ msg: firstError });
  } else {
    try {
      const newUpdateNote: IInquery = await new Inquerys(req.body).save();
      newUpdateNote.hash_password = "Not Authorized";
      newUpdateNote.salt = "Not Authorized";
      return res.status(200).json(newUpdateNote);
    } catch (error) {
      return res.status(500).json({
        msg: error.message,
        error,
      });
    }
  }
};

/***
 * update inquery
 * @METHOD `PATCH`
 * @PATH `/api/v1/community/inquery/:id`
 */
export const patchInqueryById = async (
  req: NextApiRequest,
  res: NextApiResponse<IInquery | CatchType>
) => {
  const errors: Result<ValidationError> = await validationResult(req);
  if (!errors.isEmpty()) {
    const firstError: string = await errors.array().map((err) => err.msg)[0];
    return res.status(422).json({ msg: firstError });
  } else {
    const {
      query: { id },
      body,
    } = req;

    try {
      await Inquerys.findOne({ _id: id }).exec(
        async (err: Object, inquery: IInquery) => {
          if (err || !inquery) {
            return res.status(400).json({
              msg: "Password do not Match. Please check password.",
            });
          }

          // isAnswer true
          if (inquery.isAnswer) {
            return res.status(400).json({
              msg: "Can not updated Inquery why it is already exist the answer.",
            });
          }

          // check password
          if (!(inquery as any).authenticate(body.password)) {
            return res.status(400).json({
              msg: "Password do not Match.",
            });
          }

          await Inquerys.findOneAndUpdate({ _id: id }, body, {
            new: true,
            runValidators: true,
          }).exec((err: Object, inquery: IInquery) => {
            if (err || !inquery) {
              return res.status(404).json({ msg: "Can not update inquery" });
            }

            inquery.hash_password = "Not Authorized";
            inquery.salt = "Not Authorized";

            return res.status(200).json(inquery);
          });
        }
      );
    } catch (error) {
      return res.status(500).json({
        msg: error.message,
        error,
      });
    }
  }
};

/***
 * update or delete inquery answer
 * @METHOD `PATCH`
 * @PATH `/api/v1/community/inquery/answer/:id`
 */
export const patchInqueryAnswerById = async (
  req: NextApiRequest,
  res: NextApiResponse<IInquery | CatchType>
) => {
  const errors: Result<ValidationError> = await validationResult(req);
  if (!errors.isEmpty()) {
    const firstError: string = await errors.array().map((err) => err.msg)[0];
    return res.status(422).json({ msg: firstError });
  } else {
    const {
      query: { id },
      body: { content, type },
    } = req;

    try {
      if (type === "PATCH") {
        await Inquerys.findOneAndUpdate(
          { _id: id },
          {
            "answer.content": content,
            "answer.createdAt": new Date(),
            "answer.updatedAt": new Date(),
            isAnswer: true,
          },
          {
            new: true,
            runValidators: true,
          }
        )
          .select([
            "_id",
            "seq",
            "answer",
            "isAnswer",
            "content",
            "user",
            "createdAt",
            "updatedAt",
          ])
          .exec((err: Object, inquery: IInquery) => {
            if (err || !inquery) {
              return res
                .status(404)
                .json({ msg: "Can not update inquery answer" });
            }

            return res.status(200).json(inquery);
          });
      }

      if (type === "DELETE") {
        await Inquerys.findOneAndUpdate(
          { _id: id },
          {
            "answer.content": null,
            "answer.createdAt": null,
            "answer.updatedAt": null,
            isAnswer: false,
          },
          {
            new: true,
            runValidators: true,
          }
        )
          .select([
            "_id",
            "seq",
            "answer",
            "isAnswer",
            "content",
            "user",
            "createdAt",
            "updatedAt",
          ])
          .exec((err: Object, inquery: IInquery) => {
            if (err || !inquery) {
              return res
                .status(404)
                .json({ msg: "Can not delete inquery answer" });
            }

            return res.status(200).json(inquery);
          });
      }
    } catch (error) {
      return res.status(500).json({
        msg: error.message,
        error,
      });
    }
  }
};

/***
 * Delete New inquery
 * @METHOD `DELETE`
 * @PATH `/api/v1/community/inquery/:id`
 */
export const deleteInqueryById = async (
  req: NextApiRequest,
  res: NextApiResponse<{ id: string } | CatchType>
) => {
  const errors: Result<ValidationError> = await validationResult(req);
  if (!errors.isEmpty()) {
    const firstError: string = await errors.array().map((err) => err.msg)[0];
    return res.status(422).json({ msg: firstError });
  } else {
    try {
      await Inquerys.findOneAndDelete({
        _id: req.query.id,
      }).exec((err: Object, inquery: IInquery) => {
        if (err || !inquery) {
          return res.status(404).json({ msg: "Can not delete inquery" });
        }
        return res.status(200).json({ id: inquery._id });
      });
    } catch (error) {
      return res.status(500).json({
        msg: error.message,
        error,
      });
    }
  }
};
