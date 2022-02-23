import { Document } from "mongoose";

export default interface ITheme extends Document {
  seq: number;
  title: string;
  type: "dark" | "light";
  tags: ArrayConstructor;
  count: {
    view: number;
    fork: number;
    favor: number;
  };
  colors: any;
}
