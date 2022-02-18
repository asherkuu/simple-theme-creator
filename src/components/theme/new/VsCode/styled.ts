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
  > div {
    width: 35px;
    > img {
      width: 16px;
      height: 16px;
    }
  }
  > p {
    padding: 0 8px;
    font-size: 0.8em;
    line-height: 30px;
    height: 100%;
    color: #cccccc;

    &:last-of-type {
      flex: 1;
      text-align: center;
    }
    &:hover:not(&:last-of-type) {
      cursor: pointer;
      background: #ffffff1a;
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
          > svg {
            cursor: pointer;
          }
        }

        &:nth-of-type(2),
        &:nth-of-type(4),
        &:nth-of-type(5) {
          border: 1px solid #cccccc33;
          cursor: pointer;

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
      > div {
        &:first-of-type {
          background: #252526;
          /* open file name */
          > div:first-of-type {
            height: 35px;
            > div {
              padding: 0 10px;
              border-right: 1px solid #252526;
              cursor: pointer;
              min-width: 120px;
              background: #2d2d2d;
              color: #ffffff;

              &.selectFile {
                border-top: 1px solid #00000000;
                border-right: 1px solid #252526;
                border-bottom: 1px solid #00000000;
                background: #1e1e1e;
                > div {
                  border-radius: 100%;
                  width: 8px;
                  height: 8px;
                  background-color: #fff;
                }
              }

              > img {
                margin-right: 4px;
                width: 16px;
                height: 16px;
              }
              > p {
                flex: 1;
                font-size: 13px;
                font-weight: 400;
                color: rgba(255, 255, 255, 0.5);
              }
            }
          }

          > div:last-of-type {
            padding: 0 8px;
            > svg {
              cursor: pointer;
            }
          }
        }

        /* file directory */
        &:nth-of-type(2) {
          padding: 0 12px;
          height: 22px;
          > div {
            height: 100%;
            > p {
              line-height: 22px;
              font-size: 12px;
              color: rgba(204, 204, 204, 0.8);
            }
            > svg {
              font-size: 16px;
            }
            > img {
              margin-right: 4px;
              width: 16px;
              height: 16px;
            }
          }
        }

        /* code */
        &:nth-of-type(3) {
          flex: 1;
          height: calc(100% - 35px - 22px);
          svg {
            height: 100%;
            > text {
              > tspan {
                fill: rgb(133, 133, 133);
                font-size: 14px;
                line-height: 19px;
              }
            }
          }
          > div:nth-of-type(2) {
            overflow-y: scroll;
            tspan {
              fill: #fff;
              /* code color */
              &.color1 {
                fill: #e06c75;
              }
              &.color2 {
                fill: #c678dd;
              }
              &.color3 {
                fill: #d19a66;
              }
              /* &.color4 {
                  fill: ;
                } */
              &.color5 {
                fill: #e5c07b;
              }
              &.color6 {
                fill: #61afef;
              }
              &.color7 {
                fill: #98c379;
              }
              /* &.color8 {
                  fill: ;
                } */
              &.color9 {
                fill: #56b6c2;
              }
              /* &.color10 {
                  fill: ;
                }
                &.color11 {
                  fill: ;
                } */
              &.color12 {
                fill: #7f848e;
              }
            }
          }
        }
      }
    }
  }
`;
export const VsCodeFooter = styled(Box)`
  width: 100%;
  height: 22px;
  background: rgb(0, 122, 204);

  > div {
    padding: 0 6px;
    cursor: pointer;
    &:first-of-type {
      background: rgb(22, 130, 93);
      > svg {
        margin-right: 0;
      }
    }
    &:hover:not(&:first-of-type) {
      background: #ffffff1f;
    }
    > p {
      line-height: 22px;
      font-size: 12px;
      color: #fff;
    }
    > svg {
      margin-right: 4px;
      font-size: 14px;
      color: #fff;
    }
  }
`;
