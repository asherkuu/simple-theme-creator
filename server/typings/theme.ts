export type PostThemeListRequestType = {
  lastId?: string;
  limit: string;
  tags: string[];
  type: "all" | "dark" | "light";
  sort: "new" | "popular";
  popular?: "view" | "favor" | "fork";
  searchWord: string;
};
