import { css } from "@emotion/react";
import { Theme } from "styles/Theme";

const GlobalStyle = (theme: Theme) => css`
  @font-face {
    font-family: "FiraCode";
    font-style: normal;
    src: local("FiraCode"), url(/fonts/FiraCode.woff2) format("woff2"),
      local("FiraCode"), url(/fonts/FiraCode.woff) format("woff");
    font-display: swap;
  }

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
    font-family: -apple-system, FiraCode, sans-serif;
    background-color: var(--color_bg_main);
    color: var(--color_font_main);

    transition: background-color 100ms ease-in, color 100ms ease-in;
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
