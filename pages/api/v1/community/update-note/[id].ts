import type { NextApiRequest, NextApiResponse } from "next";

import connectDB from "../../../../../server/middleware/mongodb";
import IUpdateNote from "../../../../../server/interface/community/updateNote";

import { CatchType } from "typings";
import {
  getUpdateNoteById,
  patchUpdateNoteById,
  deleteUpdateNoteById,
} from "../../../../../server/controller/community/updateNote";

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<IUpdateNote | { id: string } | CatchType>
) => {
  if (req.method === "GET") return await getUpdateNoteById(req, res);
  if (req.method === "PATCH") return await patchUpdateNoteById(req, res);
  if (req.method === "DELETE") return await deleteUpdateNoteById(req, res);
};

export default connectDB(handler);
