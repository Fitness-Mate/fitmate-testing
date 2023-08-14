import styled from "styled-components";
import theme from "../../styles/theme";

export const SearchContainer = styled.div`
  width: 686px;
  height: 56px;
  padding: 14px;
  border-radius: 10px;
  border: 1px solid
    ${({ theme, isClicked }) => (isClicked ? theme.Gray10 : theme.Gray10)};
  display: flex;
  gap: 14px;
  align-items: center;
  box-shadow: ${({ isClicked }) =>
    isClicked ? "2px 2px 9px 0px rgba(0,0,0,0.1)" : "none"};

  .searchIcon {
    width: 24px;
    height: 24px;
  }
`;

export const SearchInputContent = styled.input`
  &::-webkit-input-placeholder {
    color: ${theme.Gray50};
  }
  border: none;
  width: 100%;
  color: ${({ theme }) => theme.Gray50};
  font-size: 18px;
  font-weight: 500;
`;
