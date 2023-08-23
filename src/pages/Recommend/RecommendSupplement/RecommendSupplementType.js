import { useNavigate } from "react-router-dom";
import { BeforeButton, SmallButton } from "../../../components/";
import theme from "../../../styles/theme";
import {
  RecommendButtonContainer,
  RecommendContainer,
  RecommendImgContainer,
  RecommendTitle,
} from "../StyledRecommend";
import { ImgCheckbox } from "../../../components";
import { useState } from "react";

// 버튼과 이미지의 간격을 어떻게 줄지 고민해 봐야함.
const RecommendSupplementType = () => {
  const navigate = useNavigate();

  const [category, setCategory] = useState({
    PROTEIN: [false, "protein"],
    BCAA: [false, "fitness"],
  });

  const handleBackPage = () => {
    navigate(-1);
  };

  const goNextPage = () => {
    navigate("/recommend/supplementbudget");
  };

  // 카테고리 선택
  const handleSelect = (idx) => {
    const entries = Object.entries(category);
    const updatedCategory = Object.fromEntries(
      entries.map(([key, value], index) => [key, [index === idx, value[1]]])
    );
    setCategory(updatedCategory);
  };

  return (
    <RecommendContainer>
      <div>
        <RecommendTitle ftsize="32px" ftcolor={theme.Black} ftweight="700">
          보조제 유형을 선택해주세요
        </RecommendTitle>
        <br />
        <br />
        <RecommendTitle ftsize="24px" ftcolor={theme.Gray80} ftweight="600">
          AI가 김정욱님에게 최적화된 솔루션을 제공해줘요
        </RecommendTitle>
      </div>
      <RecommendImgContainer>
        {Object.entries(category).map(([key, value], index) => {
          return (
            <ImgCheckbox
              key={key}
              handleClick={handleSelect}
              isSelected={value[0]}
              elementidx={index}
              articleimg={value[1]}
            >
              {key}
            </ImgCheckbox>
          );
        })}
      </RecommendImgContainer>
      <RecommendButtonContainer>
        <BeforeButton handleSubmit={handleBackPage}></BeforeButton>
        <SmallButton handleSubmit={goNextPage}>다음</SmallButton>
      </RecommendButtonContainer>
    </RecommendContainer>
  );
};

export default RecommendSupplementType;
