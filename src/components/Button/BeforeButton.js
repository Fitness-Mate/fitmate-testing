// < 이전 버튼 >

import React from "react";
import * as S from "./StyledButton";

function BeforeButton({ handleSubmit }) {
  return (
    <S.BeforeButton className="Button" onClick={handleSubmit}>
      이전
    </S.BeforeButton>
  );
}

export default BeforeButton;
