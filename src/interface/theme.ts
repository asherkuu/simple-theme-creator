export interface ITheme {
  _id: string;
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
  createdAt: Date;
  updatedAt: Date;
}
