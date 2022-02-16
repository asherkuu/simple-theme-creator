import { css } from "@emotion/react";
import { Theme } from "styles/Theme";

const GlobalStyle = (theme: Theme) => css`
  :root {
    --color_bg_main: ${theme.color_bg_main};
    --color_font_main: ${theme.color_font_main};
  }
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    background-color: var(--color_bg_main);
    color: var(--color_font_main);
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }

  ul,
  li {
    list-style: none;
  }
`;

export default GlobalStyle;
