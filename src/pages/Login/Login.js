// < 로그인 페이지 >

import { React, useState } from "react";
import * as S from "./StyledLogin";
import { BigButton } from "../../components/index";
import { useNavigate } from "react-router-dom";
import theme from "../../styles/theme";
import { loginPostAPI } from "../../apis/API";
import TokenApi from "../../apis/TokenApi";

const Login = (props) => {
  // placeholder

  const [isEmailClicked, setIsEmailClicked] = useState(false);
  const [isPWClicked, setIsPWClicked] = useState(false);
  // 로그인 유지
  const [isKeepLoginClicked, setIsKeppLoginClicked] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSignup = () => {
    navigate("/signup");
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    const submission = {
      loginEmail: email,
      password: password,
      rememberMe: isKeepLoginClicked,
    };

    const res = await TokenApi.post("auth/login", submission);
    if (res.status === 200) {
      const accessToken = res.data.accessToken;
      const refreshToken = res.data.refreshToken;
      // 토큰 저장
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("refreshToken", refreshToken);
      localStorage.setItem("rememberMe", isKeepLoginClicked);
      navigate("/");
    } else {
      alert("로그인 실패");
    }
  };

  return (
    <S.LoginContainer>
      <S.Title>로그인</S.Title>
      <form onSubmit={handleLogin}>
        <S.InputFrame>
          <S.LoginInput
            type="text"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onFocus={() => {
              setIsEmailClicked(true);
            }}
            onBlur={() => {
              setIsEmailClicked(false);
            }}
            placeholder={isEmailClicked ? "" : "이메일"}
            pattern="[a-z0-9]+@[a-z]+\.[a-z]{2,3}"
            title="fit@mate.com와 같은 형식을 준수해주세요"
            required
          />
          <S.LoginInput
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onFocus={() => {
              setIsPWClicked(true);
            }}
            onBlur={() => {
              setIsPWClicked(false);
            }}
            placeholder={isPWClicked ? "" : "비밀번호"}
            autoComplete="on"
            required
          />
        </S.InputFrame>
        <S.AutomaticLogin>
          <input
            type="checkbox"
            onClick={() => setIsKeppLoginClicked(!isKeepLoginClicked)}
          />
          로그인 유지
        </S.AutomaticLogin>
        <BigButton email={props.email} type="submit">
          로그인
        </BigButton>
      </form>
      <BigButton
        backcolor={theme.White}
        fontcolor={theme.Brand}
        handleSubmit={handleSignup}
      >
        회원가입
      </BigButton>
    </S.LoginContainer>
  );
};

export default Login;
