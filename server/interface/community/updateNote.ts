import { Document } from "mongoose";

export default interface IUpdateNote extends Document {
  seq: number;
  title: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
}
