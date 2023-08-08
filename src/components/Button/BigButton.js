// < 가로길이가 긴 버튼 >

import React from "react";
import * as S from "./StyledButton";
import "./StyledButtons.css";

function BigButton({ children, handleSubmit }) {
  return (
    <S.BigButton className="Button" onClick={handleSubmit}>
      {children}
    </S.BigButton>
  );
}

export default BigButton;
