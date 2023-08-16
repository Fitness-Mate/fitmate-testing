import { bodyPartAPI } from "../../../apis/API";
import theme from "./../../../styles/theme";
import {
  RecommendButtonContainer,
  RecommendContainer,
  RecommendTitle,
  TextCheckboxContainer,
} from "../StyledRecommend";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { bodyPartList } from "./../../../recoil/atom";
import BeforeButton from "./../../../components/Button/BeforeButton";
import { useNavigate } from "react-router-dom";
import SmallButton from "./../../../components/Button/SmallButton";
import SmallTextCheckbox from "./../../../components/TextCheckbox/SmallTextCheckbox";

const RecommendSelectExcercisePart = () => {
  const navigate = useNavigate();
  // 추후에 서버에서 받아와야 함 + 이름
  // const response = bodyPartAPI.get("/list");

  const [isbodyPartListState, setIsbodyPartListState] =
    useRecoilState(bodyPartList);

  const [isBodyPartSelect, setIsBodyPartSelect] = useState([]);

  const handleSelect = (idx) => {
    const entries = Object.entries(isbodyPartListState);
    const newArr = Array(entries.length).fill(false);
    newArr[idx] = true;
    setIsBodyPartSelect(newArr);
    const target = entries.find((key, value) => idx === value)[0];

    const updatedExercisePart = Object.fromEntries(
      Object.entries(isbodyPartListState).map(([key, value]) => [
        key,
        key === target,
      ])
    );
    setIsbodyPartListState(updatedExercisePart);
  };

  const handleBackPage = () => {
    navigate(-1);
  };

  const handleNextPage = () => {
    // 선택했을때만 다음으로 넘어가도록
    navigate("/recommend/fitnessequipment");
  };

  return (
    <RecommendContainer>
      <div>
        <RecommendTitle ftsize="32px" ftcolor={theme.Black} ftweight="700">
          운동 부위를 선택해주세요
        </RecommendTitle>
        <br />
        <RecommendTitle ftsize="32px" ftcolor={theme.Gray80} ftweight="600">
          {/* 이름 로그인한 사람에게 받아와야 함 */}
          AI가 김정욱님께 최적화된 솔루션을 제공해줘요
        </RecommendTitle>
      </div>
      <TextCheckboxContainer>
        {Object.entries(isbodyPartListState).map((item, index) => {
          return (
            <SmallTextCheckbox
              key={item}
              handleClick={handleSelect}
              isSelected={isBodyPartSelect[index]}
              elementidx={index}
            >
              {item}
            </SmallTextCheckbox>
          );
        })}
      </TextCheckboxContainer>
      <RecommendButtonContainer>
        <BeforeButton handleSubmit={handleBackPage}></BeforeButton>
        <SmallButton handleSubmit={handleNextPage}>다음</SmallButton>
      </RecommendButtonContainer>
    </RecommendContainer>
  );
};

export default RecommendSelectExcercisePart;
