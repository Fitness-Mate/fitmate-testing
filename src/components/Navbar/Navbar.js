// < 네브바 포함 레이아웃 >

import React from "react";
import * as S from "./StyledNavbar";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const loginState = localStorage.length;
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
          <S.NavLoginButton
            className="login"
            onClick={() => {
              // 토큰 해제
              localStorage.clear();
              navigate("/");
            }}
          >
            로그아웃
          </S.NavLoginButton>
        )}
      </S.NavLink>
    </S.NavbarContainer>
  );
};

export default Navbar;
