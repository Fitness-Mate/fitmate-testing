// < 로그인 스타일 >

import styled from 'styled-components';

export const Container = styled.div`
	width: 1440px;
	height: 100vh;
	margin-left: auto;
  margin-right: auto;
`;

export const Login = styled.div`
	width: 842px;
	height: 100%;
	margin-left: auto;
  margin-right: auto;
	display: flex;
  flex-direction: column;
	position: relative;
	align-items: center;
`;

export const LoginContent = styled.div`
	width: 433px;
	margin-left: auto;
  margin-right: auto;
	display: flex;
  flex-direction: column;
	align-items: center;
	position: absolute;
	top: 135.5px;
	display: flex;
`;

export const Title = styled.h1`
	color: ${({ theme }) => theme.Black};
	font-family: "Pretendard";
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
	font-family: "Pretendard";
	padding: 14px;
	font-size: 18px;
	font-weight: 500;
	font-family: "Pretendard";
	&:placeholder{ 
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
		background:: ${({ theme }) => theme.Brand};
	}
	
	color: ${({ theme }) => theme.Gray30};
	font-family: "Pretendard";
	font-size: 18px;
	font-weight: 500;
	margin-bottom: 94px;
`;