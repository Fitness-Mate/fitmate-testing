import { useNavigate } from "react-router-dom";
import confetti from "../../../assets/images/confetti.png";
import * as S from "../StyledSignup";
import { useRecoilState } from "recoil";
import { validationState } from "../../../recoil/atom";
import { BigButton } from "./../../../components/";
import theme from "../../../styles/theme";

const SignupComplete = () => {
  const navigate = useNavigate();
  const [isValidState, setIsValidState] = useRecoilState(validationState);

  const GoHomePage = (e) => {
    e.preventDefault();
    navigate("/");
  };

  const GoRecommendPage = (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <S.SignupContainer>
      {/* 제목들 중 마지막 페이지만 가운데 정렬 -> 인라인으로 처리 */}
      <S.SignupTitle flex={true}>
        <S.TitleEmphasis>
          {isValidState.userName}님
          <br />
          회원가입이 완료되셨습니다
        </S.TitleEmphasis>
        <br />
        <span className="congratu">
          FITMATE회원이 되신 것을 축하합니다!
          <br />내 체형 맞춤 서비스를 바로 이용해 보세요.
        </span>
      </S.SignupTitle>
      <img src={confetti} alt="완료 이미지" className="congratuImg" />
      <div className="buttonCompleteContainer">
        <BigButton handleSubmit={GoRecommendPage}>추천 받기</BigButton>
        <BigButton
          backcolor={theme.White}
          fontcolor={theme.Brand}
          handleSubmit={GoHomePage}
        >
          홈으로
        </BigButton>
      </div>
    </S.SignupContainer>
  );
};

export default SignupComplete;
