// < 네브바 포함 레이아웃 >

import React, { useEffect, useState } from "react";
import * as S from "./StyledNavbar";
import { useNavigate } from "react-router-dom";
import TokenApi from "../../apis/TokenApi";

// 브라우저 종료 감지
const Navbar = () => {
  const navigate = useNavigate();
  // 로컬스토리지에 값이 있는 경우 로그인
  const loginState = localStorage.getItem("accessToken");

  // 로그아웃
  const handleLogout = async () => {
    await TokenApi.put("auth/logout", {});
    localStorage.clear();
    navigate("/");
  };

  // 브라우저 종료 시 JWT토큰 관련된 값 삭제(자동 로그아웃)
  const RemoveJwt = (fn) => {
    const cb = React.useRef(fn);

    useEffect(() => {
      const onUnload = cb.current;
      // 브라우저 종료
      window.addEventListener("beforeunload", onUnload);
    }, []);
  };

  RemoveJwt((e) => {
    // 로그인 유지
    if (!JSON.parse(localStorage.getItem("rememberMe"))) {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      localStorage.removeItem("rememberMe");
    }
  });

  return (
    <S.NavbarContainer>
      <button
        className="nav-logo"
        onClick={() => {
          navigate("/");
        }}
      />
      <S.NavLink>
        <S.NavTextContainer>
          <i className="fa-solid fa-bars"></i>
          <S.NavButton>검색하기</S.NavButton>
          <S.NavButton
            onClick={() => {
              navigate("recommend");
            }}
          >
            추천받기
          </S.NavButton>
          <S.NavButton>내 운동</S.NavButton>
        </S.NavTextContainer>
        {!loginState ? (
          <S.NavLoginButton
            className="login"
            onClick={() => {
              navigate("login");
            }}
          >
            로그인
          </S.NavLoginButton>
        ) : (
          <S.NavLoginButton className="login" onClick={handleLogout}>
            로그아웃
          </S.NavLoginButton>
        )}
      </S.NavLink>
    </S.NavbarContainer>
  );
};

export default Navbar;
