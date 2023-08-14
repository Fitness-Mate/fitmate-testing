import { RecommendContainer, RecommendTitle } from "../StyledRecommend";
import thumbs from "../../../../src/assets/images/thumbs.png";
import BigButton from "./../../../components/Button/BigButton";
import { useNavigate } from "react-router-dom";
import theme from "../../../styles/theme";

// 버튼과 이미지의 간격을 어떻게 줄지 고민해 봐야함.
const RecommendInfo = () => {
  const navigate = useNavigate();
  const goNextPage = () => {
    navigate("selecttwo");
  };
  return (
    <RecommendContainer>
      <div>
        <RecommendTitle ftsize="50px" ftcolor={theme.Black} ftweight="700">
          Chat GPT로
        </RecommendTitle>
        <br />
        <RecommendTitle ftsize="56px" ftcolor={theme.Black} ftweight="700">
          10초 만에&nbsp;
        </RecommendTitle>
        <RecommendTitle ftsize="56px" ftcolor={theme.Gray70} ftweight="700">
          운동/보조제
        </RecommendTitle>
        <br />
        <RecommendTitle ftsize="56px" ftcolor={theme.Brand} ftweight="700">
          추천받기
        </RecommendTitle>
      </div>
      <img src={thumbs} alt="따봉 이미지" className="goodImg" />
      <BigButton handleSubmit={goNextPage}>추천 받으러 가기</BigButton>
    </RecommendContainer>
  );
};

export default RecommendInfo;
