// < 가로길이가 짧은 버튼 >

import React from "react";
import * as S from "./StyledButton";
import "./StyledButtons.css";

<<<<<<< HEAD
function SmallButton({ children, handleSubmit }) {
  return (
    <S.SmallButton className="Button" onClick={handleSubmit}>
      {children}
    </S.SmallButton>
  );
=======
function SmallButton({ children }) {
	return (
			<S.SmallButtonWrapper className="Button">{ children }</S.SmallButtonWrapper>
	);
>>>>>>> 70fd3b9e16deb87ad11491c24b3fe0ea63927bfb
}

export default SmallButton;
