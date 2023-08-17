import { useNavigate } from "react-router-dom";
import { SmallButton } from "../../../components/";
import theme from "../../../styles/theme";
import {
  RecommendButtonContainer,
  RecommendContainer,
  RecommendImgContainer,
  RecommendTitle,
} from "../StyledRecommend";
import { ImgCheckbox } from "../../../components";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { recommendcategory } from "../../../recoil/atom";

// 버튼과 이미지의 간격을 어떻게 줄지 고민해 봐야함.
const RecommendCategory = () => {
  const navigate = useNavigate();

  // 카테고리 배열
  const [isRecommendCategory, setIsRecommendCategory] = useState([]);

  // 카테고리 상태 객체
  const [RecommendCategoryState, setRecommendCategoryState] =
    useRecoilState(recommendcategory);

  const goNextPage = () => {
    if (isRecommendCategory[1]) {
      navigate("/recommend/workout");
    }
  };

  const handleSelect = (idx) => {
    const entries = Object.entries(RecommendCategoryState);

    // 배열 업데이트
    const newArr = Array(entries.length).fill(false);
    newArr[idx] = true;
    setIsRecommendCategory(newArr);

    // 객체(atom) 업데이트
    // key: 보조제, value: [false, "protein"], index: 0
    const updatedRecommendCatgory = Object.fromEntries(
      entries.map(([key, value], index) => [key, [index === idx, value[1]]])
    );
    setRecommendCategoryState(updatedRecommendCatgory);
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

export default RecommendCategory;
