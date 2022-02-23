import type { NextApiRequest, NextApiResponse } from "next";
import { Result, ValidationError, validationResult } from "express-validator";
import { mongo } from "mongoose";

import IUpdateNote from "../../interface/community/updateNote";
import UpdateNotes from "../../model/community/updateNote";

import { CatchType } from "typings";
import { GetUpdateNoteListRequestType } from "../../typings/community/update-note";

/***
 * GET UpdateNote List
 * @METHOD `GET`
 * @PATH `/api/v1/community/update-note`
 */
export const getUpdateNoteList = async (
  req: NextApiRequest,
  res: NextApiResponse<IUpdateNote[] | CatchType>
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
    } = req.query as GetUpdateNoteListRequestType;

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

      await UpdateNotes.find(filteredBy())
        .limit(Number(limit))
        .sort({ createdAt: -1 })
        .exec(async (err: Object, updateNote: IUpdateNote[]) => {
          if (err) {
            return res.status(400).json({ msg: JSON.stringify(err) });
          }
          return res.status(200).json(updateNote);
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
 * get Update Note Item By Id
 * @METHOD `GET`
 * @PATH `/api/v1/community/update-note/:id`
 */
export const getUpdateNoteById = async (
  req: NextApiRequest,
  res: NextApiResponse<IUpdateNote | CatchType>
) => {
  const errors: Result<ValidationError> = await validationResult(req);
  if (!errors.isEmpty()) {
    const firstError: string = await errors.array().map((err) => err.msg)[0];
    return res.status(422).json({ msg: firstError });
  } else {
    try {
      await UpdateNotes.findById(req.query.id).exec(
        async (err: Object, updateNote: IUpdateNote) => {
          if (err || !updateNote) {
            return res.status(404).json({
              msg: "Can not found updateNote",
            });
          }
          return res.status(200).json(updateNote);
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
 * Post New Update Note
 * @METHOD `POST`
 * @PATH `/api/v1/community/update-note`
 */
export const postUpdateNoteCreate = async (
  req: NextApiRequest,
  res: NextApiResponse<IUpdateNote[] | CatchType>
) => {
  const errors: Result<ValidationError> = await validationResult(req);
  if (!errors.isEmpty()) {
    const firstError: string = await errors.array().map((err) => err.msg)[0];
    return res.status(422).json({ msg: firstError });
  } else {
    try {
      const newUpdateNote: IUpdateNote[] = await new UpdateNotes(
        req.body
      ).save();
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
 * update Update Note
 * @METHOD `PATCH`
 * @PATH `/api/v1/community/update-note/:id`
 */
export const patchUpdateNoteById = async (
  req: NextApiRequest,
  res: NextApiResponse<IUpdateNote | CatchType>
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
      await UpdateNotes.findOneAndUpdate({ _id: id }, body, {
        new: true,
        runValidators: true,
      }).exec((err: Object, theme: IUpdateNote) => {
        if (err || !theme) {
          return res.status(404).json({ msg: "Can not update Update Note" });
        }

        return res.status(200).json(theme);
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
 * Delete New Update Note
 * @METHOD `DELETE`
 * @PATH `/api/v1/community/update-note/:id`
 */
export const deleteUpdateNoteById = async (
  req: NextApiRequest,
  res: NextApiResponse<{ id: string } | CatchType>
) => {
  const errors: Result<ValidationError> = await validationResult(req);
  if (!errors.isEmpty()) {
    const firstError: string = await errors.array().map((err) => err.msg)[0];
    return res.status(422).json({ msg: firstError });
  } else {
    try {
      await UpdateNotes.findOneAndDelete({
        _id: req.query.id,
      }).exec((err: Object, updateNote: IUpdateNote) => {
        if (err || !updateNote) {
          return res.status(404).json({ msg: "Can not delete Update Note" });
        }
        return res.status(200).json({ id: updateNote._id });
      });
    } catch (error) {
      return res.status(500).json({
        msg: error.message,
        error,
      });
    }
  }
};
