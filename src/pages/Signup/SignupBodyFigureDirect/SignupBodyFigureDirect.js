import { useNavigate } from "react-router-dom";
import { BodyCompositionInput } from "../../../components";
import * as S from "../StyledSignup";

const SignupBodyFigureDirect = () => {
  const navigate = useNavigate();
  return (
    <S.SignupContainer>
      <S.SignupTitle>
        정확한 추천을 위해
        <br />
        <S.TitleEmphasis>골격근령과 체지방량</S.TitleEmphasis>
        을 입력해주세요
        <br />
        <span className="warningNoWrite">
          입력하지 않으면 기본값이 입력돼요
        </span>
      </S.SignupTitle>
      <S.BodyCompositionInputList>
        <BodyCompositionInput>골격근량</BodyCompositionInput>
        <BodyCompositionInput>체지방량</BodyCompositionInput>
      </S.BodyCompositionInputList>
      <button
        onClick={(e) => {
          e.preventDefault();
          navigate(-1);
        }}
      >
        이전
      </button>
      <button
        onClick={(e) => {
          e.preventDefault();
          navigate("/signup/complete", { replace: false }); // 절대 경로로 이동
        }}
      >
        가입 완료하기
      </button>
    </S.SignupContainer>
  );
};

export default SignupBodyFigureDirect;
