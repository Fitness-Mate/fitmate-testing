// < 이전 버튼 >

import React from "react";
import * as S from "./StyledButton";

function BeforeButton({ backcolor, handleSubmit }) {
  return (
    <S.BeforeButton
      className="Button"
      backcolor={backcolor}
      onClick={handleSubmit}
    >
      이전
    </S.BeforeButton>
  );
}

export default BeforeButton;
