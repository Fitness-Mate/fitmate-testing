// < 스크롤 있는 레이아웃 >

import React from "react";
import * as S from "./StyledLayoutContainer";

export const ScrollContainer = ({ children }) => {
  return <S.ScrollContainerWrapper>{children}</S.ScrollContainerWrapper>;
};

export default ScrollContainer;
