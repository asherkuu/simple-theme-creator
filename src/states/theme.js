import axios from "axios";
import { atom, selectorFamily } from "recoil";

export const themeState = atom({
  key: "themeState",
  default: { data: [], loading: true },
});

export const getThemeSelector = selectorFamily({
  key: "theme/get",
  get:
    (param) =>
    async ({ get }) => {
      try {
        const { data } = await axios.post("/api/v1/theme", param);
        return data;
      } catch (error) {
        throw error;
      }
    },
  set: ({ set }, newValue) => {
    set(themeState, newValue);
  },
});
