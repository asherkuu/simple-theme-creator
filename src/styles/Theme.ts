export interface Theme {
  color_bg_main: string;
  color_font_main: string;
  color_font_hover: string;
  color_btn_main: string;
  color_btn_hover: string;
}

interface ThemeGroup {
  light: Theme;
  dark: Theme;
}

/**
 * @light theme
 */
export const light: Theme = {
  color_bg_main: "#ffffff",
  color_font_main: "#24292f",
  color_font_hover: "#0d1117",
  color_btn_main: "blue",
  color_btn_hover: "#F4F4F4",
};

/**
 * @dark theme
 */
export const dark: Theme = {
  color_bg_main: "#0d1117",
  color_font_main: "#c9d1d9",
  color_font_hover: "#0d1117",
  color_btn_main: "#FFFFFF",
  color_btn_hover: "#BFFFF0",
};

const mode: ThemeGroup = {
  light,
  dark,
};

export default mode;
