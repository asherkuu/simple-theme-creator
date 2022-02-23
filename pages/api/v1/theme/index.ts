import type { NextApiRequest, NextApiResponse } from "next";

import connectDB from "../../../../server/middleware/mongodb";
import ITheme from "../../../../server/interface/theme";

import { CatchType } from "typings";
import {
  postThemeList,
  deleteThemeById,
} from "../../../../server/controller/theme";

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<ITheme[] | { id: string } | CatchType>
) => {
  if (req.method === "POST") return await postThemeList(req, res);
};

export default connectDB(handler);
