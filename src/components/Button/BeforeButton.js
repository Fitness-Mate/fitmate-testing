// < 이전 버튼 >

import React from "react";
import * as S from "./StyledButton";

function BeforeButton({ handleSubmit }) {
  return (
    <S.BeforeButtonWrapper className="Button" onClick={handleSubmit}>
      이전
    </S.BeforeButtonWrapper>
  );
}

export default BeforeButton;
