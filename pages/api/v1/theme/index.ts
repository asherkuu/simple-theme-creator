import type { NextApiRequest, NextApiResponse } from "next";

import connectDB from "../../../../server/middleware/mongodb";
import ITheme from "../../../../server/interface/theme";

import { CatchType } from "typings";
import {
  getThemeList,
  postTheme,
  deleteTheme,
} from "../../../../server/controller/theme";

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<ITheme[] | { _id: string } | CatchType>
) => {
  if (req.method === "GET") return getThemeList(req, res);
  if (req.method === "POST") return postTheme(req, res);
  if (req.method === "DELETE") return deleteTheme(req, res);
  return Promise.reject("error");
};

export default connectDB(handler);
