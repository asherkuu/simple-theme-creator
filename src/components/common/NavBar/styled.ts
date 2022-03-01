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
      border-radius: 8px;
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

export const Filter = styled(Box)`
  > div {
    /* Add filter */
    &:first-of-type {
      /* filter text */
      > p {
        flex: 1;
        font-size: 13px;
        font-weight: bold;
        color: #fff;
      }
      /* filter " + " */
      > div:first-of-type {
        border-radius: 8px;
        box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.07),
          0 4px 6px -1px rgba(0, 0, 0, 0.12);
        > svg {
          font-size: 13px;
        }
      }
      /* filter refresh */
      > div:nth-of-type(2) {
        border-radius: 8px;
        box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.07),
          0 4px 6px -1px rgba(0, 0, 0, 0.12);
        > svg {
          transform: rotateY(-180deg);
          font-size: 16px;
          > path {
            stroke: #fff;
          }
        }
      }
      /* filter " + " hover */
      > div:first-of-type:hover,
      > div:first-of-type.action {
        background-color: #fff;
        cursor: pointer;
        > svg {
          color: #000;
        }
      }
      /* filter refresh hover */
      > div:nth-of-type(2):hover {
        cursor: pointer;
        background-color: #fff;
        > svg > path {
          stroke: #000;
        }
      }
    }

    /* Mode (dark / light) */
    &:nth-of-type(2) {
      > div {
        cursor: pointer;
        border-radius: 8px;
        box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.07),
          0 4px 6px -1px rgba(0, 0, 0, 0.12);
        > svg {
          font-size: 14px;
        }

        /* Light mode hover */
        &:first-of-type:hover,
        &:first-of-type.action {
          background-image: linear-gradient(135deg, #fff, #fbffce);
          > svg {
            color: #000;
          }
        }
        /* Dark mode hover */
        &:nth-of-type(2):hover,
        &:nth-of-type(2).action {
          background-image: linear-gradient(135deg, #181818, #b4b4b4);
          > svg {
            color: #fff;
          }
        }
      }
    }

    /* Select filter color */
    &:nth-of-type(3) > div {
      cursor: pointer;
      border-radius: 6px;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.12),
        0 2px 4px -1px rgba(0, 0, 0, 0.07);
      background-color: #fff;
      > div {
        border-radius: 100%;
        box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.07),
          0 4px 6px -1px rgba(0, 0, 0, 0.12);
        width: 12px;
        height: 12px;
        background-color: #f1d299;
      }
      > p {
        font-size: 12px;
        color: #0d1117;
      }

      &:hover {
        > div {
          position: relative;
          box-shadow: none;
          border-radius: 0;
          background-color: transparent;
          &::after {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            content: "×";
            line-height: 11px;
            font-size: 20px;
            color: #67748e;
          }
        }
      }
    }
  }
`;
