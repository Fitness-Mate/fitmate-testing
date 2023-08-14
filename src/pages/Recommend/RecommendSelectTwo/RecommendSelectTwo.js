import { useNavigate } from "react-router-dom";
import { SmallButton } from "../../../components/Button/index";
import theme from "../../../styles/theme";
import {
  RecommendButtonContainer,
  RecommendContainer,
  RecommendImgContainer,
  RecommendTitle,
} from "../StyledRecommend";

// 버튼과 이미지의 간격을 어떻게 줄지 고민해 봐야함.
const RecommendSelectTwo = () => {
  const navigate = useNavigate();
  const goNextPage = () => {
    navigate("/recommend/selectexercisepart");
  };
  return (
    <RecommendContainer>
      <div>
        <RecommendTitle ftsize="32px" ftcolor={theme.Black} ftweight="700">
          어떤 추천을&nbsp;
        </RecommendTitle>
        <RecommendTitle ftsize="32px" ftcolor={theme.Gray80} ftweight="700">
          받으시겠어요?
        </RecommendTitle>
        <br />
        <br />
        <RecommendTitle ftsize="24px" ftcolor={theme.Gray80} ftweight="600">
          AI가 김정욱님에게 최적화된 솔루션을 제공해줘요
        </RecommendTitle>
      </div>
      <RecommendImgContainer></RecommendImgContainer>
      <RecommendButtonContainer>
        <SmallButton handleSubmit={goNextPage}>다음</SmallButton>
      </RecommendButtonContainer>
    </RecommendContainer>
  );
};

export default RecommendSelectTwo;
