// < 스크롤 없는 레이아웃 >

import React from "react";
import { LayoutContainer, NoneScrollContainer } from "./StyledLayOutContainer";

export const NoneScrollContainerWrapper = ({ children }) => {
  return <NoneScrollContainer>{children}</NoneScrollContainer>;
};

export default NoneScrollContainerWrapper;
