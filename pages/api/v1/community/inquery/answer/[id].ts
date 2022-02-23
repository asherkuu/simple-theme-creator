import type { NextApiRequest, NextApiResponse } from "next";

import connectDB from "../../../../../../server/middleware/mongodb";
import IInquery from "../../../../../../server/interface/community/inquery";

import { CatchType } from "typings";
import { patchInqueryAnswerById } from "../../../../../../server/controller/community/inquery";

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<IInquery | { id: string } | CatchType>
) => {
  if (req.method === "PATCH") return await patchInqueryAnswerById(req, res);
};

export default connectDB(handler);
