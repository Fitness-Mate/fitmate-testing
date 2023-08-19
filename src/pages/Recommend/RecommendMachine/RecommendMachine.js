import {
  BorderTextCheckboxContainer,
  BorderTextCheckboxInnerContainer,
  RecommendButtonContainer,
  RecommendContainer,
  RecommendTextContainer,
  RecommendTitle,
  RecommendTitleContainer,
} from "./../StyledRecommend";
import theme from "./../../../styles/theme";
import {
  SmallButton,
  BeforeButton,
  SmallTextCheckbox,
} from "./../../../components/";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { nonAdminMachineAPI } from "../../../apis/API";
import { bodyPartState } from "../../../recoil/atom";
import { useRecoilState } from "recoil";

const RecommendMachine = () => {
  const navigate = useNavigate();

  // 운동 부위 객체
  const [selectedBodyPart, setSelectedBodyPart] = useRecoilState(bodyPartState);

  console.log(selectedBodyPart);
  // 운동 기구 배열
  const [isMachineSelected, setIsMachineSelected] = useState([]);

  const fetchData = async () => {
    const response = await nonAdminMachineAPI.post("/list", selectedBodyPart, {
      headers: {
        Authorization: "Bearer " + JSON.parse(localStorage.getItem("Jwt")),
      },
    });
    const newArr = response.data.map((obj, index) => ({
      ...obj,
      isSelected: false,
    }));
    setIsMachineSelected(newArr);
  };
  // 최초 렌더링 시 운동기구 목록 받아옴
  useEffect(() => {
    fetchData();
  }, []);

  // 모르겠어요 클릭 상태
  const [isNotSelected, setIsNotSelected] = useState(false);

  // 전체 선택 상태
  const [isAllSelected, setIsAllSelected] = useState(false);

  // 운동 기구 선택
  const handleSelect = (idx) => {
    // 배열 업데이트
    const newArr = [...isMachineSelected];
    newArr[idx].isSelected = !newArr[idx].isSelected;
    setIsMachineSelected(newArr);

    // 모르겠어요 비활성화
    setIsNotSelected(false);
  };

  // 전체선택
  const handleAllSelect = () => {
    const newArr = isMachineSelected.map((item, index) => {
      item.isSelected = !isAllSelected;
      return item;
    });

    // 전체 선택 state 반전
    setIsAllSelected(!isAllSelected);
    // 배열 업데이트
    setIsMachineSelected(newArr);
    // 모르겠어요 해제
    setIsNotSelected(false);
  };

  // 모르겠어요 클릭
  const handleReset = () => {
    const newArr = isMachineSelected.map((obj) => ({
      ...obj,
      isSelected: false,
    }));
    setIsMachineSelected(newArr);
    setIsNotSelected(!isNotSelected);

    setIsAllSelected(false);
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
      <RecommendTitleContainer>
        <RecommendTitle ftsize="32px" ftcolor={theme.Black} ftweight="700">
          운동 부위를 선택해주세요
        </RecommendTitle>
        <br />
        <RecommendTitle ftsize="32px" ftcolor={theme.Gray80} ftweight="600">
          {/* 이름 로그인한 사람에게 받아와야 함 */}
          AI가 김정욱님께 최적화된 솔루션을 제공해줘요
        </RecommendTitle>
      </RecommendTitleContainer>
      <RecommendTextContainer>
        <SmallTextCheckbox handleClick={handleReset} isSelected={isNotSelected}>
          모르겠어요
        </SmallTextCheckbox>
        <BorderTextCheckboxContainer>
          <button className="allSelectButton" onClick={handleAllSelect}>
            전체 선택하기
          </button>
          <BorderTextCheckboxInnerContainer>
            {isMachineSelected.map((item, index) => {
              return (
                <SmallTextCheckbox
                  key={item.koreanName}
                  handleClick={handleSelect}
                  isSelected={isMachineSelected[index].isSelected}
                  elementidx={index}
                >
                  {item.koreanName}
                </SmallTextCheckbox>
              );
            })}
          </BorderTextCheckboxInnerContainer>
        </BorderTextCheckboxContainer>
      </RecommendTextContainer>
      <RecommendButtonContainer>
        <BeforeButton handleSubmit={handleBackPage}></BeforeButton>
        <SmallButton handleSubmit={handleNextPage}>추천받기</SmallButton>
      </RecommendButtonContainer>
    </RecommendContainer>
  );
};

export default RecommendMachine;
