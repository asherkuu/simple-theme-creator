import { css } from "@emotion/react";
import { Theme } from "styles/Theme";

const GlobalStyle = (theme: Theme) => css`
  :root {
    --color_bg_main: ${theme.color_bg_main};
    --color_font_main: ${theme.color_font_main};
  }
  body {
    background-color: var(--color_bg_main);
    color: var(--color_font_main);
  }
`;

export default GlobalStyle;
