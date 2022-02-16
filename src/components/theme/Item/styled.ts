import styled from "@emotion/styled";

export const Wrap: any = styled.article`
  width: 100%;
  height: 20rem;
  max-width: 460px;
  min-height: 18rem;
  max-height: 20rem;

  background-color: orange;
  border-radius: 10px;
  margin: 0 auto;

  cursor: pointer;

  &.feed {
    animation: fade-in ${(props: any) => props.sec}ms ease-in;
    box-shadow: 0px 5px 15px rgb(0 0 0 / 20%);

    header {
      display: flex;
      height: 1.6rem;

      ul {
        display: flex;
        align-items: center;
        gap: 5px;
        position: absolute;
        width: 100px;
        height: 1.5rem;
        z-index: 1;
        padding: 0;
        margin: 0 0 0 8px;

        li {
          float: left;
          &:first-of-type {
            background-color: red;
            border-radius: 15px;
            width: 10px;
            height: 10px;
          }
          &:nth-of-type(2) {
            background-color: yellow;
            border-radius: 15px;
            width: 10px;
            height: 10px;
          }
          &:nth-of-type(3) {
            background-color: green;
            border-radius: 15px;
            width: 10px;
            height: 10px;
          }
        }
      }

      h3 {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        text-align: center;
        font-size: 0.8rem;
        margin: 0;
      }
    }

    article {
      display: flex;
      height: calc(100% - 26px);

      section.left-bar {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        flex: 0.1;
        float: left;
        min-width: 40px;
        background-color: #fff;
        border-bottom-left-radius: 10px;

        div {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
          margin: 10px 0;

          svg {
            width: 18px;
            height: 18px;
          }
        }
      }

      section.main {
        flex: 0.9;
        float: right;
        background-color: ${(props: any) => props.itemColor.background};
        border-bottom-right-radius: 10px;

        header {
          display: flex;
          height: 1.6rem;
          background-color: #ccc;

          span {
            display: flex;
            align-items: center;
            padding-left: 10px;
            width: 110px;
            border-right: 0.5px solid #ccc;
            background-color: #fff;
            font-size: 0.8rem;
          }
        }

        .space-area {
          margin-left: 5px;
        }
      }
    }
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
