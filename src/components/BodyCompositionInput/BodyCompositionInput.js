import * as S from "./StyledBodyCompositionInput";
import BodyCompositionInputContent from "./BodyCompositionInputContent";

// 체성분 input
const BodyCompositionInput = ({ children }) => {
  // children : 골격근량 or 체지방량
  let inbody;
  switch (children) {
    case "골격근량":
      inbody = "MuscleMass";
      break;
    case "체지방량":
      inbody = "BodyFat";
      break;
    default:
      break;
  }

  return (
    <S.BodyCompositionInputContainer>
      <span className="inputName">{children}</span>
      <BodyCompositionInputContent
        children={children}
        name={`upper${inbody}`}
        bodypart="상체"
      />
      <BodyCompositionInputContent
        children={children}
        name={`lower${inbody}`}
        bodypart="하체"
        enbodypart="lower"
      />
    </S.BodyCompositionInputContainer>
  );
};

export default BodyCompositionInput;
