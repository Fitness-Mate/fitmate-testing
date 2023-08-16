import {
  RecommendContainer,
  RecommendTitle,
  ButonWrapper,
} from "../StyledRecommend";
import thumbs from "../../../../src/assets/images/thumbs.png";
import { BigButton } from "./../../../components/";
import { useNavigate } from "react-router-dom";
import theme from "../../../styles/theme";

// 버튼과 이미지의 간격을 어떻게 줄지 고민해 봐야함.
const RecommendHome = () => {
  const navigate = useNavigate();
  const goNextPage = () => {
    navigate("category");
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
      {/* 가운데 정렬 버튼 Wrapper */}
      <ButonWrapper>
        <BigButton handleSubmit={goNextPage}>추천 받으러 가기</BigButton>
      </ButonWrapper>
    </RecommendContainer>
  );
};

export default RecommendHome;
