// < 이전 버튼 >

import React from "react";
import * as S from "./StyledButton";

function BeforeButton({backcolor}) {
	return (
			<S.BeforeButton className="Button" backcolor={backcolor}>이전</S.BeforeButton>
	);
}

export default BeforeButton;