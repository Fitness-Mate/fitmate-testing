import styled from "styled-components";
export const SearchButtonWrapper = styled.button`
  border-radius: 12px;
  background: ${({ theme }) => theme.White};
  padding: 10px 14px;

  color: ${({ theme }) => theme.Black};
  font-size: 15px;
  font-weight: 700;
  line-height: 150%;
  letter-spacing: -0.3px;

  &:hover {
    border-radius: 12px;
    background: ${({ theme }) => theme.Gray10};
    color: ${({ theme }) => theme.Brand};
  }
`;
