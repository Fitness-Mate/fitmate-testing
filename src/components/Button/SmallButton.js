// < 가로길이가 짧은 버튼 >

import React from "react";
import * as S from "./StyledButton";
import "./StyledButtons.css";

function SmallButton({ children, handleSubmit }) {
  return (
    <S.SmallButton className="Button" onClick={handleSubmit}>
      {children}
    </S.SmallButton>
  );
}

export default SmallButton;
