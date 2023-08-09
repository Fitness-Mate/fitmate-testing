// < 버튼 스타일 >

import styled from "styled-components";
import theme from "./../../styles/theme";

// < 가로 길이가 긴 버튼 >

export const BigButtonWrapper = styled.button`
  width: 433px;
  height: 62px;
  padding: 22px 24px;
  background: ${(props) => props.backcolor || props.theme.Brand};
  color: ${(props) => props.fontcolor || props.theme.White};
`;

// < 가로 길이가 중간인 버튼 >

export const MiddleButton = styled.button`
  width: 294px;
  height: 62px;
  padding: 22px 24px;

  background: ${theme.Brand};
  color: ${theme.White};
`;

// < 가로 길이가 짧은 버튼 >

export const SmallButton = styled.button`
  width: 204px;
  height: 62px;
  padding: 22px 24px;

  background: ${({ theme }) => theme.Brand};
  color: ${({ theme }) => theme.White};
`;

// < 이전 버튼 >

export const BeforeButton = styled.button`
  width: 139px;
  height: 62px;
  padding: 22px 10px;
  font-weight: 700;

  background: ${(props) => props.backcolor || props.theme.Gray10};
  color: ${({ theme }) => theme.Brand};
`;

// < 목록 버튼 >

export const ListButton = styled.button`
  display: inline-flex;
  width: auto;
  height: 44px;
  padding: 10px 24px;
  gap: 10px;
  border-radius: 16px;
  font-size: 17px;

  background: ${({ theme }) => theme.Gray10};
  color: ${({ theme }) => theme.Black};
`;
