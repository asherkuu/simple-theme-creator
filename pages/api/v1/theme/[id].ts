import type { NextApiRequest, NextApiResponse } from "next";

import connectDB from "../../../../server/middleware/mongodb";
import ITheme from "../../../../server/interface/theme";

import { CatchType } from "typings";
import {
  deleteThemeById,
  getThemeById,
} from "../../../../server/controller/theme";

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<ITheme | { id: string } | CatchType>
) => {
  if (req.method === "GET") return await getThemeById(req, res);
  if (req.method === "DELETE") return await deleteThemeById(req, res);
};

export default connectDB(handler);
