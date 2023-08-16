// < 스크롤 있는 레이아웃 >

import React from "react";
import * as S from "./StyledLayoutContainer";

export const ScrollContainerWrapper = ({ children }) => {
  return <S.ScrollContainer>{children}</S.ScrollContainer>;
};

export default ScrollContainerWrapper;
