export interface Theme {
  color_bg_main: string;
  color_font_main: string;
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
};

/**
 * @dark theme
 */

export const dark: Theme = {
  color_bg_main: "#0d1117",
  color_font_main: "#c9d1d9",
};

const mode: ThemeGroup = {
  light,
  dark,
};

export default mode;
