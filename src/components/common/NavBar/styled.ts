import styled from "@emotion/styled";
import { Box } from "../Core";

export const Category = styled(Box)`
  > div {
    border-radius: 8px;
    cursor: pointer;
    &:hover,
    &.action {
      background-color: #ffffff;
      > div {
        background-image: linear-gradient(135deg, #ff0080, #7928ca);
        > svg path {
          fill: #fff;
        }
      }
      > p {
        font-weight: bold;
        color: #252f40;
      }
    }
    & > div {
      border-radius: 100%;
      box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.07),
        0 4px 6px -1px rgba(0, 0, 0, 0.12);
      width: 32px;
      height: 32px;
      background-color: #fff;
      > svg path {
        fill: #67748e;
      }
    }
    > p {
      font-size: 14px;
      letter-spacing: -0.39px;
      color: #67748e;
    }
  }
`;
