import { useNavigate } from "react-router-dom";
import { SmallButton } from "../../../components/Button/index";
import theme from "../../../styles/theme";
import {
  RecommendButtonContainer,
  RecommendContainer,
  RecommendImgContainer,
  RecommendTitle,
} from "../StyledRecommend";
import ImgCheckbox from "../../../components/ImgCheckbox/ImgCheckbox";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { recommendcategory } from "../../../recoil/atom";

// 버튼과 이미지의 간격을 어떻게 줄지 고민해 봐야함.
const RecommendSelectTwo = () => {
  const navigate = useNavigate();
  const goNextPage = () => {
    navigate("/recommend/selectexercisepart");
  };
  const [isRecommendCategory, setIsRecommendCategory] = useState([]);

  const [RecommendCategoryState, setRecommendCategoryState] =
    useRecoilState(recommendcategory);

  const handleSelect = (idx) => {
    const entries = Object.entries(RecommendCategoryState);
    const newArr = Array(entries.length).fill(false);
    newArr[idx] = true;
    setIsRecommendCategory(newArr);

    const updatedRecommendCatgory = Object.fromEntries(
      entries.map(([key, value], index) => [key, [index === idx, value[1]]])
    );
    setRecommendCategoryState(updatedRecommendCatgory);
  };
  console.log(RecommendCategoryState);

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
      <RecommendImgContainer>
        {Object.entries(RecommendCategoryState).map(([key, value], index) => {
          return (
            <ImgCheckbox
              key={key}
              handleClick={handleSelect}
              isSelected={isRecommendCategory[index]}
              elementidx={index}
              articleimg={value[1]}
            >
              {key} 추천 받을래요
            </ImgCheckbox>
          );
        })}
      </RecommendImgContainer>
      <RecommendButtonContainer>
        <SmallButton handleSubmit={goNextPage}>다음</SmallButton>
      </RecommendButtonContainer>
    </RecommendContainer>
  );
};

export default RecommendSelectTwo;
