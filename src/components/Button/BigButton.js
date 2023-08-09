// < 가로길이가 긴 버튼 >

import React from "react";
import * as S from "./StyledButton";
import "./StyledButtons.css";

function BigButton({ backcolor, fontcolor, children, handleSubmit }) {
  return (
    <S.BigButtonWrapper
      backcolor={backcolor}
      fontcolor={fontcolor}
      className="Button"
      onClick={handleSubmit}
    >
      {children}
    </S.BigButtonWrapper>
  );
}

export default BigButton;
