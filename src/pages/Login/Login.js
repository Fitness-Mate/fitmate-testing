// < 로그인 페이지 >

import { React, useState } from "react";
import * as S from "./StyledLogin";
import { Form, redirect } from "react-router-dom";
import theme from "../../styles/theme";
// import { LoginEmailInput, LoginPWInput } from "./LoginInput";
import { Link } from "react-router-dom";
import { loginPostAPI } from "../../apis/API";
import { NoneScrollContainerWrapper } from "./NoneScrollContainer";
import BigButton from "./../../components/Button/BigButton";

const Login = (props) => {
  // const [isEmailClicked, setIsEmailClicked] = useState(false);
  // const [isPWClicked, setIsPWClicked] = useState(false);
  return (
    <NoneScrollContainerWrapper>
      <S.LoginContainer>
        <S.Title>로그인</S.Title>
        <Form method="post" action="/login">
          <S.InputFrame>
            <S.LoginInput
              placeholder="아이디"
              type="text"
              name="email"
              required
            ></S.LoginInput>
            <S.LoginInput
              placeholder="비밀번호"
              type="password"
              name="password"
              required
            ></S.LoginInput>
          </S.InputFrame>
          <S.AutomaticLogin>
            <input type="checkbox" />
            자동 로그인
          </S.AutomaticLogin>
          <BigButton email={props.email} onClick={props.onClick} type="submit">
            로그인
          </BigButton>
        </Form>
        <Link to="/">
          <BigButton backcolor={theme.White} fontcolor={theme.Brand}>
            홈으로
          </BigButton>
        </Link>
      </S.LoginContainer>
    </NoneScrollContainerWrapper>
  );
};

export const signInAction = async ({ request }) => {
  const data = await request.formData();
  console.log(data);

  const submission = {
    loginEmail: data.get("email"),
    password: data.get("password"),
  };
  console.log(submission);

  //post요청
  let response;
  if (submission.loginEmail === "admin") {
    response = await loginPostAPI.post("", submission);
  } else {
    const response = await loginPostAPI.post("", submission);
    if (response === "ok") {
      console.log(response.data);
    } else {
      return false;
    }
  }

  //ok / fail check
  const responseStatus = response.data;
  console.log(responseStatus);
  if (responseStatus === "ok") {
    localStorage.setItem("Jwt", "tmp");
    return redirect("/");
  } else {
    return { error: "Wrong login Info" };
  }
};

export default Login;
