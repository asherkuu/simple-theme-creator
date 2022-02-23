import type { NextApiRequest, NextApiResponse } from "next";

import connectDB from "../../../../../server/middleware/mongodb";
import IInquery from "../../../../../server/interface/community/inquery";

import { CatchType } from "typings";
import {
  getInqueryList,
  postInqueryCreate,
} from "../../../../../server/controller/community/inquery";

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<IInquery[] | IInquery | { id: string } | CatchType>
) => {
  if (req.method === "GET") return await getInqueryList(req, res);
  if (req.method === "POST") return await postInqueryCreate(req, res);
};

export default connectDB(handler);
