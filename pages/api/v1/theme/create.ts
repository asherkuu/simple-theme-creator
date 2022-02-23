import type { NextApiRequest, NextApiResponse } from "next";

import connectDB from "../../../../server/middleware/mongodb";
import ITheme from "../../../../server/interface/theme";

import { CatchType } from "typings";
import { postThemeCreate } from "../../../../server/controller/theme";

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<ITheme[] | CatchType>
) => {
  if (req.method === "POST") return await postThemeCreate(req, res);
};

export default connectDB(handler);
