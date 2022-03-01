import styled from "@emotion/styled";
import { Box } from "../Core";

export const Logo = styled.p`
  padding: 24px 0;
  margin-right: 20px;
  border-bottom: 1px solid #f5f5f5;
  font-size: 14px;
  font-weight: 600;
  text-align: center;
  letter-spacing: -0.39px;
  width: 270px;
  color: #c9d1d9;
`;

export const PageNavigation = styled(Box)`
  > div {
    > p {
      font-size: 14px;
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
    color: #e7e7e7;
    background-color: #0d1117;
    &::placeholder {
      font-size: 14px;
      color: #c9d1d9;
    }
  }
`;

export const CreateThemeButton = styled.button`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  padding: 0 10px;
  gap: 5px;
  border-radius: 8px;
  box-shadow: 0 20px 27px 0 rgba(0, 0, 0, 0.05);
  height: 39px;
  background-image: linear-gradient(135deg, #ff0080, #7928ca);

  > svg {
    font-size: 14px;
    color: #fff;
  }
  > p {
    font-size: 14px;
    font-weight: bold;
    color: #fff;
  }
`;
