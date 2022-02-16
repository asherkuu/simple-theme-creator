import styled from "@emotion/styled";

export const Wrap = styled.div`
  width: 100%;
  box-sizing: border-box;

  div.grid {
    padding: 5px 0px 30px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-row-gap: 25px;
    grid-gap: 2.86rem;
  }

  @media screen and (max-width: 1650px) {
    div.grid {
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 2.86rem;
      grid-row-gap: 28px;
    }
  }

  @media screen and (max-width: 1250px) {
    div.grid {
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 1.86rem;
      grid-row-gap: 26px;
    }
  }

  @media screen and (max-width: 795px) {
    div.grid {
      grid-template-columns: repeat(1, 1fr);
      grid-gap: 2.86rem;
      grid-row-gap: 30px;
    }
  }
`;
