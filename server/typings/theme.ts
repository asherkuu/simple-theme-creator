export type IThemeRequestBody = {
  lastId?: string;
  limit: string;
  page: string;
  tags: string[];
  type: "all" | "dark" | "light";
  sort: "new" | "popular";
  popular?: "view" | "favor" | "fork";
};
