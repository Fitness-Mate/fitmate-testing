import * as S from "../StyledSignup";
import { useNavigate } from "react-router-dom";
import { TextCheckbox } from "../../../components/index";
import rightarrow from "../../../assets/images/rightarrow.svg";

const SignupBodyFigure = () => {
  const navigate = useNavigate();
  const currenturl = window.location.pathname;

  return (
    <S.SignupContainer action="/submit" method="post">
      <S.SignupTitleContainer>
        <S.SignupTitle>
          <S.TitleEmphasis>어떤 체형</S.TitleEmphasis>을 가지고 계신가요?
        </S.SignupTitle>
        <span className="recommendText">정확한 추천을 위해 필요해요</span>
      </S.SignupTitleContainer>
      <S.SignupTextContainer>
        <TextCheckbox>마른 편이에요</TextCheckbox>
        <TextCheckbox>보통이에요</TextCheckbox>
        <TextCheckbox>조금 통통한 편이에요</TextCheckbox>
        <TextCheckbox>뚱뚱해요</TextCheckbox>
        <div className="directButtonContainer">
          <button
            className="directbutton"
            onClick={(e) => {
              e.preventDefault();
              navigate(`${currenturl}/direct`);
            }}
          >
            직접 입력하기
            <img
              src={rightarrow}
              className="rightArrow"
              alt="직접 입력하기 버튼 이미지"
            />
          </button>
        </div>
      </S.SignupTextContainer>
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

export default SignupBodyFigure;
