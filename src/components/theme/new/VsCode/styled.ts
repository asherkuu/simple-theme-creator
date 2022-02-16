import styled from "@emotion/styled";
import { Box } from "components/common/Core";

export const VsCodeBox = styled(Box)`
  border-radius: 8px;
  overflow: hidden;
`;

export const VsCodeHeader = styled(Box)`
  border-bottom: 1px solid rgba(0, 0, 0, 0);
  width: 100%;
  height: 30px;
  background: rgb(60, 60, 60);
  color: rgb(204, 204, 204);
  > img {
    width: 16px;
    height: 16px;
  }
  > p {
    font-size: 0.8em;
    color: rgb(204, 204, 204);
    &:last-of-type {
      flex: 1;
      text-align: center;
    }
  }
`;

export const VsCodeBody = styled(Box)`
  width: 100%;
  > div {
    /* left body */
    &:first-of-type {
      width: 50px;
      background: rgb(51, 51, 51);
      > div {
        /* 아이콘 */
        & {
          > div {
            height: 50px;
            > svg {
              cursor: pointer;
              width: 24px;
              height: 24px;
              &:hover {
                color: #fff;
              }
            }
          }
        }

        /* 선택된 아이콘 - 첫번째 아이콘 */
        &:first-of-type {
          > div:first-of-type {
            border-left: 2px solid #fff;
            > svg {
              color: #fff;
            }
          }
        }
      }
    }

    /* center body */
    &:nth-of-type(2) {
      width: 250px;
      background: rgb(37, 37, 38);
      > div {
        &:first-of-type {
          > p {
            font-size: 11px;
            font-weight: 400;
            color: #bbbbbb;
          }
        }

        &:nth-of-type(2),
        &:nth-of-type(4),
        &:nth-of-type(5) {
          border: 1px solid #cccccc33;
          > svg {
            margin: 0 4px;
          }
          > p {
            font-size: 11px;
            font-weight: 600;
            color: #cccccc;
          }
        }

        &:nth-of-type(3) {
          > div {
            padding-left: 8px;
            cursor: pointer;

            /* hover background color */
            &:hover {
              background-color: #37373d;
            }

            &:nth-of-type(4),
            &:nth-of-type(7),
            &:nth-of-type(8),
            &:nth-of-type(9) {
              padding-left: 24px;
            }

            &:nth-of-type(5),
            &:nth-of-type(6) {
              padding-left: 40px;
            }

            > svg,
            > img {
              margin: 0 4px;
              width: 16px;
              height: 16px;
            }

            > p {
              line-height: 22px;
              font-size: 13px;
              font-weight: 400;
            }

            &:first-of-type {
              > p {
                color: rgb(140, 140, 140);
              }
            }

            /* git color */
            &:nth-of-type(3),
            &:nth-of-type(7) {
              > p {
                color: rgb(226, 192, 141);
              }
            }
          }
        }
      }
    }

    /* right body */
    &:last-of-type {
      background: rgb(30, 30, 30);
    }
  }
`;
export const VsCodeFooter = styled(Box)`
  width: 100%;
  height: 22px;
  background: rgb(0, 122, 204);

  > div {
    &:first-of-type {
      background: rgb(22, 130, 93);
    }
  }
`;
