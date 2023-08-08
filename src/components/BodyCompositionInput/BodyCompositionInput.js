import * as S from "./StyledBodyCompositionInput";
import BodyCompositionInputContent from "./BodyCompositionInputContent";

// 체성분 input
const BodyCompositionInput = ({ children }) => {
  // children : 골격근 or 체지방
  return (
    <S.BodyCompositionInputContainer>
      <span className="inputName">{children}</span>
      <BodyCompositionInputContent children={children} bodypart="상체" />
      <BodyCompositionInputContent children={children} bodypart="하체" />
    </S.BodyCompositionInputContainer>
  );
};

export default BodyCompositionInput;
