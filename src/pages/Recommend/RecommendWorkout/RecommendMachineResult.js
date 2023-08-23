import * as S from "./../StyledRecommend";
import theme from "./../../../styles/theme";

const RecommendMachineResult = () => {
  return (
    <S.RecommendMachineResultContainer>
      <S.RecommendTitle ftsize="32px" ftcolor={theme.Black} ftweight="700">
        추천 결과가 준비되었어요
      </S.RecommendTitle>
    </S.RecommendMachineResultContainer>
  );
};

export default RecommendMachineResult;
