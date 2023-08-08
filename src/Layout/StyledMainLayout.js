import { styled } from "styled-components";
// 페이지를 공통적으로 감싸는 Wrapper
export const MainLayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 64px;
`;

export const Navbar = styled.div`
  display: flex;
  height: 64px;
  padding: 10px 35px 11px 40px;
  justify-content: flex-end;
  align-items: center;
  align-self: stretch;
`;
