// < 스크롤 없는 레이아웃 >

import React from "react";
import * as S from "../components/Navbar/StyledNavbar";

export const NoneScrollContainer = ({ children }) => {
  return (
    <S.NoneScrollContainerWrapper>{children}</S.NoneScrollContainerWrapper>
  );
};

export default NoneScrollContainer;
