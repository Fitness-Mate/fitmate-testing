import theme from "./../../../styles/theme";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  SmallButton,
  SmallTextCheckbox,
  BeforeButton,
} from "./../../../components/";
import { useRecoilState } from "recoil";
import { bodyPartState } from "./../../../recoil/atom";
import { userBodyPartAPI } from "./../../../apis/API";
import {
  RecommendButtonContainer,
  RecommendContainer,
  RecommendTitle,
  RecommendTitleHide,
  TextCheckboxContainer,
} from "./../StyledRecommend";

const RecommendWorkoutPart = () => {
  const navigate = useNavigate();
  // 운동 부위 객체
  const [selectedBodyPart, setSelectedBodyPart] = useRecoilState(bodyPartState);
  // 운동 부위 배열
  const [isBodyPartSelected, setIsBodyPartSelected] = useState([]);

  const fetchData = async () => {
    const response = await userBodyPartAPI.get("", {
      // 나중에 토큰 제거
      headers: {
        Authorization: "Bearer " + localStorage.getItem("Jwt"),
      },
    });
    const newArr = response.data.bodyPartKoreanName.map((obj) => ({
      ...obj,
      isSelected: false,
    }));
    setIsBodyPartSelected(newArr);
  };

  // 최초 렌더링 시 부위 목록 받아옴
  useEffect(() => {
    fetchData();
  }, []);

  // 부위 선택
  const handleSelect = (idx) => {
    // 배열 업데이트
    const newArr = [...isBodyPartSelected];
    newArr[idx].isSelected = !newArr[idx].isSelected;
    setIsBodyPartSelected(newArr);
  };

  const handleBackPage = () => {
    navigate(-1);
  };

  const handleNextPage = () => {
    // 전역 객체 업데이트
    const SelectedObj = {
      bodyPartKoreanName: [],
    };
    isBodyPartSelected.forEach((item) => {
      if (item.isSelected) {
        SelectedObj.bodyPartKoreanName.push(item.koreanName);
      }
    });

    setSelectedBodyPart(SelectedObj);
    navigate("/recommend/machine");
  };

  return (
    <RecommendContainer>
      <div>
        <RecommendTitle ftsize="32px" ftcolor={theme.Black} ftweight="700">
          운동 부위를 선택해주세요
        </RecommendTitle>
        <br />
        <RecommendTitleHide>
          {/* 이름 로그인한 사람에게 받아와야 함 */}
          AI가 김정욱님께 최적화된 솔루션을 제공해줘요
        </RecommendTitleHide>
      </div>
      <TextCheckboxContainer>
        {isBodyPartSelected.map((item, index) => {
          return (
            <SmallTextCheckbox
              key={item.koreanName}
              handleClick={handleSelect}
              isSelected={item.isSelected}
              elementidx={index}
            >
              {item.koreanName}
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

export default RecommendWorkoutPart;
