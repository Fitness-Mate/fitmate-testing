import { useState } from "react";
import * as S from "./StyledBodyCompositionInput";
import { useRecoilState } from "recoil";
import { validationState } from "../../recoil/atom";

const BodyCompositionInputContent = ({ children, bodypart, name }) => {
  const [isClicked, setIsClicked] = useState(false);

  const [isValidState, setIsValidState] = useRecoilState(validationState);

  const handleChange = (e) => {
    const value = e.currentTarget.value;
    const name = e.target.name;
    const updatedState = {
      ...isValidState,
      [name]: [Number(value), true, false],
    };
    setIsValidState(updatedState);
  };

  return (
    <S.BodyCompositionInputContentContainer>
      <span className="bodypart">{`${bodypart} ${children}`}</span>
      <input
        className="inputContent"
        name={name}
        placeholder={isClicked ? "" : "공식"}
        onChange={handleChange}
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
