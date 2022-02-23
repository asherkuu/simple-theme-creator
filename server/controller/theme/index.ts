import type { NextApiRequest, NextApiResponse } from "next";
import { Result, ValidationError, validationResult } from "express-validator";
import { mongo } from "mongoose";

import ITheme from "../../interface/theme";
import Themes from "../../model/theme";

import { CatchType } from "typings";
import { PostThemeListRequestType } from "../../typings/theme";

/**
  $eq     =    Matches values that are equal to a specified value.
  $gt     >    Matches values that are greater than a specified value.
  $gte    >=   Matches values that are greater than or equal to a specified value.
  $in          Matches any of the values specified in an array.
  $lt     <    Matches values that are less than a specified value.
  $lte    <=   Matches values that are less than or equal to a specified value.
  $ne     !=   Matches all values that are not equal to a specified value.
  $nin         Matches none of the values specified in an array.
 */

/***
 * GET Theme List
 * @METHOD `POST`
 * @PATH `/api/v1/theme`
 */
export const postThemeList = async (
  req: NextApiRequest,
  res: NextApiResponse<ITheme[] | CatchType>
) => {
  const errors: Result<ValidationError> = await validationResult(req);

  if (!errors.isEmpty()) {
    const firstError: string = await errors.array().map((err) => err.msg)[0];
    return res.status(422).json({ msg: firstError });
  } else {
    try {
      const {
        lastId = null,
        limit = 30,
        tags = [],
        type = "all",
        sort = "new",
        popular = null,
        searchWord = null,
      } = req.body as PostThemeListRequestType;

      const filteredBy = () => {
        const filter = {
          _id: { $lt: new mongo.ObjectId(lastId) },
          type: type === "all" ? null : type,
          $or: [],
          title: searchWord ? { $regex: searchWord, $options: "i" } : null,
        };

        // add $or filter
        tags.length > 0 && filter.$or.push({ tags: { $in: tags } });

        // // delete not use data
        Object.keys(filter).forEach((item) => {
          !filter[item] && delete filter[item];
        });
        filter.$or.length === 0 && delete filter.$or;

        return filter;
      };

      const sortBy = () => {
        if (sort === "popular" && ["view", "favor", "fork"].includes(popular)) {
          return { [`count.${popular}`]: -1 };
        } else {
          return { createdAt: -1 };
        }
      };

      await Themes.find(filteredBy())
        .limit(Number(limit))
        .sort(sortBy())
        .exec(async (err: Object, theme: ITheme[]) => {
          if (err) {
            return res.status(400).json({ msg: JSON.stringify(err) });
          }
          return res.status(200).json(theme);
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
 * Post New Theme
 * @METHOD `POST`
 * @PATH `/api/v1/theme`
 */
export const postThemeCreate = async (
  req: NextApiRequest,
  res: NextApiResponse<ITheme[] | CatchType>
) => {
  const errors: Result<ValidationError> = await validationResult(req);
  if (!errors.isEmpty()) {
    const firstError: string = await errors.array().map((err) => err.msg)[0];
    return res.status(422).json({ msg: firstError });
  } else {
    try {
      const newTheme: ITheme[] = await new Themes(req.body).save();
      return res.status(200).json(newTheme);
    } catch (error) {
      return res.status(500).json({
        msg: error.message,
        error,
      });
    }
  }
};

/***
 * get Theme Item By Id
 * @METHOD `GET`
 * @PATH `/api/v1/theme/:id`
 */
export const getThemeById = async (
  req: NextApiRequest,
  res: NextApiResponse<ITheme | CatchType>
) => {
  const errors: Result<ValidationError> = await validationResult(req);
  if (!errors.isEmpty()) {
    const firstError: string = await errors.array().map((err) => err.msg)[0];
    return res.status(422).json({ msg: firstError });
  } else {
    try {
      await Themes.findById(req.query.id).exec(
        async (err: Object, theme: ITheme) => {
          if (err || !theme) {
            return res.status(404).json({
              msg: "Can not found theme",
            });
          }

          await Themes.findOneAndUpdate(
            { _id: req.query.id },
            { $inc: { ["count.view"]: 1 } },
            {
              new: true,
              runValidators: true,
            }
          ).exec((err: Object, theme: ITheme) => {
            if (err || !theme) {
              return res.status(404).json({ msg: "Can not update Theme" });
            }

            return res.status(200).json(theme);
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
 * update Theme Count
 * @METHOD `PATCH`
 * @PATH `/api/v1/theme/count/:id`
 */
export const patchThemeCountById = async (
  req: NextApiRequest,
  res: NextApiResponse<ITheme | CatchType>
) => {
  const errors: Result<ValidationError> = await validationResult(req);
  if (!errors.isEmpty()) {
    const firstError: string = await errors.array().map((err) => err.msg)[0];
    return res.status(422).json({ msg: firstError });
  } else {
    const {
      query: { id },
      body: { target },
    } = req;

    try {
      if (!id) {
        return res.status(400).json({ msg: "Check 'id' field again" });
      }
      if (!["view", "favor", "fork"].includes(target)) {
        return res.status(400).json({ msg: "Check 'target' field again" });
      }
      await Themes.findOneAndUpdate(
        { _id: id },
        { $inc: { [`count.${target}`]: 1 } },
        {
          new: true,
          runValidators: true,
        }
      ).exec((err: Object, theme: ITheme) => {
        if (err || !theme) {
          return res.status(404).json({ msg: "Can not update Theme" });
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
 * Delete New Theme
 * @METHOD `DELETE`
 * @PATH `/api/v1/theme/`
 */
export const deleteThemeById = async (
  req: NextApiRequest,
  res: NextApiResponse<{ id: string } | CatchType>
) => {
  const errors: Result<ValidationError> = await validationResult(req);
  if (!errors.isEmpty()) {
    const firstError: string = await errors.array().map((err) => err.msg)[0];
    return res.status(422).json({ msg: firstError });
  } else {
    try {
      await Themes.findOneAndDelete({
        _id: req.query.id,
      }).exec((err: Object, theme: ITheme) => {
        if (err || !theme) {
          return res.status(404).json({ msg: "Can not delete Theme" });
        }
        return res.status(200).json({ id: theme._id });
      });
    } catch (error) {
      return res.status(500).json({
        msg: error.message,
        error,
      });
    }
  }
};
