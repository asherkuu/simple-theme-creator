import styled from "@emotion/styled";
import { ButtonHover } from "styles/GlobalStyle";

export const NewButton = styled.button`
  ${ButtonHover}

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;

  svg {
    width: 24px;
    height: 24px;
  }
`;

export const MenuItem = styled.span`
  padding: 10px 15px;
  cursor: pointer;
  border-radius: 3px;
  background-color: var(--color_bg_main);
  color: var(--color_font_main);
  transition: background-color 100ms ease-in, color 100ms ease-in;

  :hover {
    background-color: var(--color_btn_hover);
    color: var(--color_font_hover);
  }
`;
