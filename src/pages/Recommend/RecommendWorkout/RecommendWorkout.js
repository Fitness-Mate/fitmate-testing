import theme from "./../../../styles/theme";
import {
  RecommendButtonContainer,
  RecommendContainer,
  RecommendTitle,
  RecommendTitleHide,
  TextCheckboxContainer,
} from "../StyledRecommend";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { bodyPartList } from "./../../../recoil/atom";
import { useNavigate } from "react-router-dom";
import {
  SmallButton,
  SmallTextCheckbox,
  BeforeButton,
} from "./../../../components/";

const RecommendWorkout = () => {
  const navigate = useNavigate();

  // 추후에 서버에서 받아와야 함 + 이름
  // const response = bodyPartAPI.get("/list", {
  //   headers: {
  //     Authorization: "Bearer" + JSON.parse(localStorage.getItem("Jwt")),
  //   },
  // });

  // 부위 배열
  const [isBodyPartSelected, setIsBodyPartSelected] = useState([]);

  // 부위 객체(atom)
  const [isBodyPartState, setIsBodyPartState] = useRecoilState(bodyPartList);

  // 부위 선택
  const handleSelect = (idx) => {
    // 배열 업데이트
    const newArr = [...isBodyPartSelected];
    newArr[idx] = !newArr[idx];
    setIsBodyPartSelected(newArr);

    // 객체 업데이트
    const updatedExercisePart = Object.fromEntries(
      Object.entries(isBodyPartState).map(([key, value], index) => [
        key,
        newArr[index],
      ])
    );
    setIsBodyPartState(updatedExercisePart);
  };

  const handleBackPage = () => {
    navigate(-1);
  };

  const handleNextPage = () => {
    // 선택했을때만 다음으로 넘어가도록
    navigate("/recommend/machine");
  };

  return (
    <RecommendContainer>
      <div>
        <RecommendTitle ftsize="32px" ftcolor={theme.Black} ftweight="700">
          운동 부위를 선택해주세요
        </RecommendTitle>
        <br />
        <RecommendTitleHide ftsize="32px" ftcolor={theme.Gray80} ftweight="600">
          {/* 이름 로그인한 사람에게 받아와야 함 */}
          AI가 김정욱님께 최적화된 솔루션을 제공해줘요
        </RecommendTitleHide>
      </div>
      <TextCheckboxContainer>
        {Object.entries(isBodyPartState).map((item, index) => {
          return (
            <SmallTextCheckbox
              key={item}
              handleClick={handleSelect}
              isSelected={isBodyPartSelected[index]}
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

export default RecommendWorkout;
