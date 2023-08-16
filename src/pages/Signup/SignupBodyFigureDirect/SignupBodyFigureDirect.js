import { useNavigate } from "react-router-dom";
import { BodyCompositionInput } from "../../../components";
import * as S from "../StyledSignup";
import { BeforeButton, MiddleButton } from "../../../components/";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { validationState } from "../../../recoil/atom";
import { userPostAPI } from "../../../apis/API";

const SignupBodyFigureDirect = () => {
  // 객체 초기화
  useEffect(() => {
    setIsValidState((pre) => ({
      ...pre,
      upperBodyFat: ["", false, false],
      lowerBodyFat: ["", false, false],
      upperMuscleMass: ["", false, false],
      lowerMuscleMass: ["", false, false],
    }));
  }, []);

  const navigate = useNavigate();
  const [isValidState, setIsValidState] = useRecoilState(validationState);
  console.log(isValidState);

  const handleBackPage = (e) => {
    e.preventDefault();
    navigate(-1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      Object.entries(isValidState)?.filter(([key, value]) => {
        return value[1] === true;
      }).length === 12
    ) {
      // 회원가입 post 요청
      const submission = {};
      for (const key in isValidState) {
        if (key !== "password2") {
          submission[key] = isValidState[key][0];
        }
        if (key === "birthDate") {
          submission[key] = new Date();
        }
        if (key === "height" || key === "weight") {
          submission[key] = Number(isValidState[key][0]);
        }
      }

      const response = await userPostAPI.post("", submission);
      if (response.data === "ok") {
        localStorage.setItem("Jwt", "tmp");
        navigate("/signup/complete", { replace: false }); // 절대 경로로 이동
      } else {
        console.log("회원가입 오류");
      }
    }
  };

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
      <S.ButtonContainer>
        <BeforeButton handleSubmit={handleBackPage} />
        <MiddleButton handleSubmit={handleSubmit}>가입 완료하기</MiddleButton>
      </S.ButtonContainer>
    </S.SignupContainer>
  );
};

export default SignupBodyFigureDirect;
