// < 로그인 페이지 >

import React from "react";
import * as S from "./StyledLogin";
import { BigButton } from "../../components/Button";
import theme from "../../styles/theme";

export const Login = () => {
    return (
        <S.Container>
					<S.Login>
						<S.LoginContent>
							<S.Title>로그인</S.Title>
							<S.InputFrame>
								<S.LoginInput placeholder="아이디"></S.LoginInput>
								<S.LoginInput placeholder="비밀번호"></S.LoginInput>
							</S.InputFrame>
							<S.AutomaticLogin>
								<input type="checkbox"/>
								자동 로그인
							</S.AutomaticLogin>
							<BigButton>로그인</BigButton>
							<BigButton backcolor={theme.White} fontcolor={theme.Brand}>홈으로</BigButton>
						</S.LoginContent>
					</S.Login>
				</S.Container>
    );
};

export default Login;