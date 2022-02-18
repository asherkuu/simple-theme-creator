import { css } from "@emotion/react";
import { Theme } from "styles/Theme";

const GlobalStyle = (theme: Theme) => css`
  :root {
    --color_bg_main: ${theme.color_bg_main};

    --color_font_main: ${theme.color_font_main};
    --color_font_hover: ${theme.color_font_hover};

    --color_btn_main: ${theme.color_btn_main};
    --color_btn_hover: ${theme.color_btn_hover};
  }
  html,
  body {
    padding: 0;
    margin: 0;
    display: flex;
    font-size: 16px;
    width: 100%;
    min-height: 100vh;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    background-color: var(--color_bg_main);
    color: var(--color_font_main);

    transition: background-color 100ms ease-in, color 100ms ease-in;

    /* text drag disabled */
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  body > #__next {
    display: flex;
    flex: 1;
    padding: 100px 20px 20px;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  ul,
  li {
    list-style: none;
  }

  button {
    cursor: pointer;
    border: none;
  }
`;

export const ButtonHover = css`
  border-radius: 3px;
  color: var(---color_font_main);
  background-color: var(--color_bg_main);
  transition: background-color 100ms ease-in;

  :hover {
    background-color: var(--color_btn_hover);
    color: var(---color_btn_hover);

    svg {
      color: var(--color_font_hover);
    }
  }
`;

export default GlobalStyle;
