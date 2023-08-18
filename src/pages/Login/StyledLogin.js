// < 로그인 스타일 >

import styled from "styled-components";
import theme from "../../styles/theme";

export const LoginContainer = styled.div`
  margin: 0 auto;
  padding-top: 135.5px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  color: ${theme.Black};
  font-size: 28px;
  font-weight: 700;
`;

export const InputFrame = styled.div`
  width: 100%;
  margin-top: 48px;
  margin-bottom: 14px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const LoginInput = styled.input`
  width: 100%;
  height: 60px;
  border: 3px solid;
  border-color: ${({ theme }) => theme.Gray10};
  border-radius: 10px;
  padding: 14px;
  font-size: 18px;
  font-weight: 500;
  font-family: "Pretendard";
  &:placeholder {
    color: ${({ theme }) => theme.Gray50};
  }
`;

export const AutomaticLogin = styled.div`
  width: 100%;
  display: flex;
  gap: 8px;
  align-items: center;

  input[type="checkbox"] {
    appearance: none;
    -moz-appearance: none; // Firefox
    -webkit-appearance: none; // Safari and Chrome
    border-radius: 2px;
    cursor: pointer;
    width: 18px;
    height: 18px;
    border: 2px solid;
    outline: 0;
    border-color: ${({ theme }) => theme.Gray50};
  }

  input[type="checkbox"]:checked {
    appearance: checkbox;
    background: ${({ theme }) => theme.Brand};
  }
  color: ${({ theme }) => theme.Gray30};
  font-size: 18px;
  margin-bottom: 94px;
`;
