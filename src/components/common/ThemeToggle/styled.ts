import styled from "@emotion/styled";
import { ButtonHover } from "styles/GlobalStyle";

export const Wrap: any = styled.button`
  ${ButtonHover}

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;

  svg {
    width: 18px;
    height: 18px;
    animation: fade-in 0.2s ease-in;
  }

  @keyframes fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;
