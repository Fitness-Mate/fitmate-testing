// < 글만 있는 체크박스 스타일 >

import styled from "styled-components";

// 만들어진 레이아웃 특정 란에 넣으면
// 거기에 맞게 채워지도록 가로 100%로 설정(디자인에 따라 세로는 설정 X)

export const TextCheckbox = styled.button`
  display: flex;
  width: 100%;
  padding: 10px 14px;
  background: ${({ theme }) => theme.Gray10};
  border-radius: 16px;
  justify-content: space-between;
  align-items: center;
  border: 2px solid
    ${({ theme, isSelected }) => (isSelected ? theme.Brand : "none")};

  &:hover {
    border: 2px solid
      ${({ isSelected, theme }) => (isSelected ? "none" : theme.Gray30)};

    .check-shape {
      fill: ${({ isSelected, theme }) =>
        isSelected ? theme.White : theme.Black};
    }

    .choice-article {
      color: ${({ isSelected, theme }) => (isSelected ? "none" : theme.Black)};
    }
  }

  .choice-article {
    color: ${({ isSelected, theme }) =>
      isSelected ? theme.Brand : theme.Gray70};
    font-size: 22px;
    font-weight: 600;
  }

  .check-background {
    fill: ${({ isSelected, theme }) =>
      isSelected ? theme.Brand : theme.Gray10};
  }

  .check-shape {
    fill: ${({ isSelected, theme }) =>
      isSelected ? theme.White : theme.Gray30};
  }
`;
