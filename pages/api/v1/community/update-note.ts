import type { NextApiRequest, NextApiResponse } from "next";

import connectDB from "../../../../server/middleware/mongodb";
import IUpdateNote from "../../../../server/interface/community/updateNote";

import { CatchType } from "typings";
import { postUpdateNoteList } from "../../../../server/controller/community/updateNote";

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<ITheme[] | { id: string } | CatchType>
) => {
  if (req.method === "POST") return await postUpdateNoteList(req, res);
};

export default connectDB(handler);
