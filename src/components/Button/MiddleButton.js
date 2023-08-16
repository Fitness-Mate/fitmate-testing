// < 가로길이가 중간인 버튼 >

import React from "react";
import * as S from "./StyledButton";
import "./StyledButtons.css";

function MiddleButton({ children, handleSubmit }) {
  return (
    <S.MiddleButtonWrapper className="Button" onClick={handleSubmit}>
      {children}
    </S.MiddleButtonWrapper>
  );
}

export default MiddleButton;
