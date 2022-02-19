import type { NextApiRequest, NextApiResponse } from "next";
import { Result, ValidationError, validationResult } from "express-validator";
import { mongo } from "mongoose";

import ITheme from "../../server/interface/theme";
import Themes from "../../server/model/theme";

import { CatchType } from "typings";

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
        lastId,
        limit = 20,
        page = 1,
        tags = [],
        filter = "",
      } = req.body as {
        lastId: string;
        limit: string;
        page: string;
        tags: string[];
        filter: string;
      };

      // &lt : Matches values that are less than a specified value
      const condition =
        Number(page) !== 1
          ? {
              _id: { $lt: new mongo.ObjectId(lastId) },
              $or: [{ filter }, { tags: { $in: tags } }],
            }
          : {};

      await Themes.find(condition)
        .limit(Number(limit) || 20)
        .sort({ createdAt: -1 })
        .exec(async (err: Object, theme: ITheme[]) => {
          res.status(200).json(theme);
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
 * Delete New Theme
 * @METHOD `DELETE`
 * @PATH `/api/v1/theme`
 */
export const deleteTheme = async (
  req: NextApiRequest,
  res: NextApiResponse<{ _id: string } | CatchType>
) => {
  const errors: Result<ValidationError> = await validationResult(req);
  if (!errors.isEmpty()) {
    const firstError: string = await errors.array().map((err) => err.msg)[0];
    return res.status(422).json({ msg: firstError });
  } else {
    try {
      const theme = (await Themes.findOneAndRemove({
        _id: req.body.id,
      })) as { id: string };

      return res.json({ _id: theme.id });
    } catch (error) {
      return res.status(500).json({
        msg: error.message,
        error,
      });
    }
  }
};
