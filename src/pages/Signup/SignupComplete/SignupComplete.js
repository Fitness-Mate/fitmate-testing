import { useNavigate } from "react-router-dom";
import confetti from "../../../assets/images/confetti.png";
import * as S from "../StyledSignup";

const SignupComplete = () => {
  const navigate = useNavigate();
  return (
    <S.SignupContainer>
      {/* 제목들 중 마지막 페이지만 가운데 정렬 -> 인라인으로 처리 */}
      <S.SignupTitle flex={true}>
        <S.TitleEmphasis>
          김정욱님
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
      <button
        onClick={(e) => {
          e.preventDefault();
        }}
      >
        추천받기
      </button>
      <button
        onClick={(e) => {
          e.preventDefault();
          navigate("/");
        }}
      >
        홈으로
      </button>
    </S.SignupContainer>
  );
};

export default SignupComplete;

//   <div className="completeContainer">
//     <div className="completeContent">
//       <div className="congratuTextContainer">
//         <span className="congratuText1">
//           김정욱님
//           <br />
//           회원가입이 완료되셨습니다
//         </span>
//         <span className="congratuText2">
//           FITMATE 회원이 되신 것을 축하합니다!
//           <br />내 체형 맞춤 서비스를 바로 이용해 보세요
//         </span>
//       </div>
//       <img
//         className="congratuImg"
//         src={confetti}
//         alt="회원가입 축하 이미지"
//       />
//     </div>
//   </div>
//   <div className="buttonContainer">
//     <button>버튼1</button>
//     <button>버튼2</button>
//   </div>
