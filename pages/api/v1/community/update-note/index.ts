import type { NextApiRequest, NextApiResponse } from "next";

import connectDB from "../../../../../server/middleware/mongodb";
import IUpdateNote from "../../../../../server/interface/community/updateNote";

import { CatchType } from "typings";
import {
  getUpdateNoteList,
  postUpdateNoteCreate,
} from "../../../../../server/controller/community/updateNote";

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<IUpdateNote[] | { id: string } | CatchType>
) => {
  if (req.method === "GET") return await getUpdateNoteList(req, res);
  if (req.method === "POST") return await postUpdateNoteCreate(req, res);
};

export default connectDB(handler);
