import { useState } from "react";
import * as S from "./StyledBodyCompositionInput";

const BodyCompositionInputContent = ({ children, bodypart }) => {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <S.BodyCompositionInputContentContainer>
      <span className="bodypart">{`${bodypart} ${children}`}</span>
      <input
        className="inputContent"
        placeholder={isClicked === true ? "" : "공식"}
        // 클릭했을 때
        onFocus={() => {
          setIsClicked(true);
        }}
        // focus를 벗어났을 때
        onBlur={() => {
          setIsClicked(false);
        }}
      />
    </S.BodyCompositionInputContentContainer>
  );
};

export default BodyCompositionInputContent;
