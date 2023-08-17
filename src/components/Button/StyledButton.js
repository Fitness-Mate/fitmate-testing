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

export const MiddleButtonWrapper = styled.button`
  width: 294px;
  height: 62px;
  padding: 22px 24px;

  background: ${theme.Brand};
  color: ${theme.White};
`;

// < 가로 길이가 짧은 버튼 >

export const SmallButtonWrapper = styled.button`
  width: 204px;
  padding: 22px 24px;
  height: 54px;

  background: ${theme.Brand};
  color: ${theme.White};
`;

// < 이전 버튼 >

export const BeforeButtonWrapper = styled.button`
  width: 139px;
  height: 62px;
  padding: 22px 10px;
  font-weight: 700;

  background: ${theme.White};
  color: ${theme.Brand};
`;

// < 목록 버튼 >

export const ListButtonWrapper = styled.button`
  display: inline-flex;
  width: auto;
  height: 44px;
  padding: 10px 24px;
  gap: 10px;
  border-radius: 16px;
  font-size: 17px;

  background: ${theme.Gray10};
  color: ${theme.Black};
`;
