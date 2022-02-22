import axios from "axios";
import { useApiHandler, useSwrHandler } from ".";

const postThemeList = async (data: any) =>
  await axios.post("/api/v1/theme", data);

export const usePostThemeList = () => useApiHandler(postThemeList);
