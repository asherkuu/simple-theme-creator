import type { NextApiRequest, NextApiResponse } from "next";

import connectDB from "../../../../../server/middleware/mongodb";
import IInquery from "../../../../../server/interface/community/inquery";

import { CatchType } from "typings";
import {
  getInqueryById,
  patchInqueryById,
  deleteInqueryById,
} from "../../../../../server/controller/community/inquery";

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<IInquery | { id: string } | CatchType>
) => {
  if (req.method === "GET") return await getInqueryById(req, res);
  if (req.method === "PATCH") return await patchInqueryById(req, res);
  if (req.method === "DELETE") return await deleteInqueryById(req, res);
};

export default connectDB(handler);
