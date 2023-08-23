import { useState, useEffect } from "react";
import {
  BorderTextCheckboxContainer,
  BorderTextCheckboxInnerContainer,
  RecommendButtonContainer,
  RecommendContainer,
  RecommendTextContainer,
  RecommendTitle,
  RecommendTitleContainer,
} from "./../StyledRecommend";
import {
  SmallButton,
  BeforeButton,
  SmallTextCheckbox,
} from "./../../../components/";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import theme from "../../../styles/theme";
import {
  nonAdminMachineAPI,
  recommendPostAPI,
  recommendWorkoutHistoryAPI,
} from "./../../../apis/API";
import { bodyPartState } from "./../../../recoil/atom";

const RecommendMachine = () => {
  const navigate = useNavigate();

  // 운동 부위 객체
  const [selectedBodyPart, setSelectedBodyPart] = useRecoilState(bodyPartState);

  // 운동 기구 배열
  const [isMachineSelected, setIsMachineSelected] = useState([]);

  const fetchData = async () => {
    // 부위를 선택했을때만 서버에서 기구 리스트를 받아옴
    if (selectedBodyPart.bodyPartKoreanName.length) {
      const response = await nonAdminMachineAPI.post(
        "/list",
        selectedBodyPart,
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("accessToken"),
          },
        }
      );
      const newArr = response.data.map((obj, index) => ({
        ...obj,
        isSelected: false,
      }));
      setIsMachineSelected(newArr);
    }
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
    const newArr = isMachineSelected.map((item, index) => {
      if (index === idx) {
        item.isSelected = !item.isSelected;
      }
      return item;
    });
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

  const handleSubmit = async () => {
    // 선택된 기구
    const checkedMachineList = isMachineSelected
      .filter((machine) => machine.isSelected)
      .map((item) => item.koreanName);

    // 선택된 부위
    const checkedBodyPartList = Object.entries(selectedBodyPart).map(
      ([key, value]) => {
        return value;
      }
    )[0];

    // 선택된 기구 + 부위 객체
    const recommendExercise = {
      // 배열
      bodyPartKoreanName: checkedBodyPartList, // ["등", "가슴"]
      machineKoreanName: checkedMachineList, // ["바벨", "케틀벨"]
    };
    const response = await recommendPostAPI.post(
      `/workout`,
      recommendExercise,
      {
        headers: {
          Authorization:
            "Bearer " + JSON.parse(localStorage.getItem("accessToken")),
        },
      }
    );
    const recommendId = response.data;
    const response2 = await recommendWorkoutHistoryAPI.get(`/${recommendId}`, {
      headers: {
        Authorization:
          "Bearer " + JSON.parse(localStorage.getItem("accessToken")),
      },
    });

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
                  isSelected={item.isSelected}
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
        <SmallButton handleSubmit={handleSubmit}>추천받기</SmallButton>
      </RecommendButtonContainer>
    </RecommendContainer>
  );
};

export default RecommendMachine;
