import type { NextApiRequest, NextApiResponse } from "next";

import connectDB from "../../../../server/middleware/mongodb";
import ITheme from "../../../../server/interface/theme";

import { CatchType } from "typings";
import { getThemeList, postTheme } from "../../../../server/controller/theme";

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<ITheme[] | CatchType>
) => {
  if (req.method === "GET") return getThemeList(req, res);
  if (req.method === "POST") return postTheme(req, res);
};

export default connectDB(handler);
