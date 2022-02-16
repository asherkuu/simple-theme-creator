import axios from "axios";
import { useApiHandler, useSwrHandler } from ".";

export const useGetThemeList = (last_id: string, limit = 20, page = 1) =>
  useSwrHandler(`/api/v1/theme?last_id=${last_id}&limit=${limit}&page=${page}`);
