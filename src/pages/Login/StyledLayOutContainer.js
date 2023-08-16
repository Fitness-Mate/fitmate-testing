// < layout 스타일 >

import styled from "styled-components";

// < 스크롤이 있는 nav 아래 container 스타일 >

export const ScrollContainer = styled.div`
  width: 100%;
  display: flex;
  margin-top: 64px;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 200px;
`;

// < 스크롤이 없는 nav 아래 container 스타일 >

export const NoneScrollContainer = styled.div`
  width: 100%;
  min-height: calc(100vh - 64px);
  display: flex;
  align-items: center;
  margin-top: 0;
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
`;

// < 전체적인 layout container 스타일 >

export const LayoutContainer = styled.div`
  width: 1440px;
  height: 100%;
  margin-top: 0;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 1440px) {
    width: 1000px;
  }

  @media (max-width: 1065px) {
    width: calc(100% - 2rem);
  }

  .navigation {
    width: 100%;
    height: 64px;
    font-size: 15px;
    font-family: Pretendard;
    font-weight: 700;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
  }
`;

export const NavLogo = styled.div`
  .nav-logo {
    background-color: #ff7373;
    width: 110px;
    height: 20px;
    overflow: hidden;
    cursor: pointer;
  }
`;

export const NavLink = styled.div`
  display: flex;
  line-height: 150%;

  .login {
    border-radius: 12px;
    background: ${({ theme }) => theme.Brand};
    color: ${({ theme }) => theme.White};
    margin-left: 1vw;
  }
`;

export const NavText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 24px;
`;
