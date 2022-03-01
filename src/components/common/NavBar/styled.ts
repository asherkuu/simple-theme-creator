import styled from "@emotion/styled";
import { Box } from "../Core";

export const PageNavigation = styled(Box)`
  > div {
    > p {
      font-size: 14px;
      letter-spacing: -0.39px;
      line-height: 16px;
      opacity: 0.5;
      color: #c9d1d9;

      &:last-of-type {
        opacity: 1;
      }
    }
  }
  > p {
    font-size: 16px;
    font-weight: bold;
    line-height: 18px;
    letter-spacing: -0.44px;
    color: #fff;
  }
`;

export const SearchBar = styled(Box)`
  position: relative;
  > svg {
    position: absolute;
    top: 50%;
    left: 20px;
    transform: translateY(-50%);
    font-size: 18px;
  }
  > input {
    padding: 11px 11px 11px 58px;
    border-radius: 8px;
    border: solid 1px #e7e7e7;
    width: 100%;
    background-color: #0d1117;
    &::placeholder {
      font-size: 14px;
      letter-spacing: -0.39px;
      color: #c9d1d9;
    }
  }
`;
