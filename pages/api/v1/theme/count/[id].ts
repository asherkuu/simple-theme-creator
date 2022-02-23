import type { NextApiRequest, NextApiResponse } from "next";

import connectDB from "../../../../../server/middleware/mongodb";
import ITheme from "../../../../../server/interface/theme";

import { CatchType } from "typings";
import { patchThemeCountById } from "../../../../../server/controller/theme";

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<ITheme | CatchType>
) => {
  if (req.method === "PATCH") return await patchThemeCountById(req, res);
};

export default connectDB(handler);
