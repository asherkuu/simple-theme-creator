import { Document } from "mongoose";

export default interface IInquery extends Document {
  seq: number;
  content: string;
  user: string;
  hash_password: string;
  salt: string;
  answer?: {
    content?: string;
    createdAt?: Date;
    updatedAt?: Date;
  };
  isAnswer: boolean;
  createdAt: Date;
  updatedAt: Date;
}
