import { Document } from "mongoose";

export default interface ITheme extends Document {
  seq: number;
  user: string;
  title: string;
  tags: string;
  count: {
    view: number;
    fork: number;
    favor: number;
  };
  social?: {
    github?: {
      id: string;
      show: boolean;
    };
  };
  colors: any;
}
