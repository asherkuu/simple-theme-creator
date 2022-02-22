import axios from "axios";
import { ITheme } from "interface/theme";
import { atom, selectorFamily } from "recoil";

type GetParameter = {
  limit: number;
};

export const themeState = atom<ITheme[]>({
  key: "themeState",
  default: [],
});

export const getThemeSelector = selectorFamily<ITheme[], GetParameter>({
  key: "getThemeSelector",
  get: (param: GetParameter) => async () => {
    try {
      const { data } = await axios.post("/api/v1/theme", param);
      return data as ITheme[];
    } catch (error) {
      throw error;
    }
  },
});
