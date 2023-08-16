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
import { useRecoilState } from "recoil";
import { machineList } from "../../../recoil/atom";
import {
  SmallButton,
  BeforeButton,
  SmallTextCheckbox,
} from "./../../../components/";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

const RecommendMachine = () => {
  const navigate = useNavigate();

  // 운동 기구 배열
  const [isMachineSelected, setIsMachineSelected] = useState([]);

  // 운동 기구 객체(atom)
  const [isMachineState, setIsMachineState] = useRecoilState(machineList);

  // 모르겠어요 클릭 상태
  const [isNotSelected, setIsNotSelected] = useState(false);

  // 전체 선택 상태
  const [isAllSelected, setIsAllSelected] = useState(false);

  // 운동 기구 선택
  const handleSelect = (idx) => {
    // 배열 업데이트
    const newArr = [...isMachineSelected];
    newArr[idx] = !newArr[idx];
    setIsMachineSelected(newArr);

    // 객체 업데이트
    const updatedFitnessEquipment = Object.fromEntries(
      Object.entries(isMachineState).map(([key, value], index) => [
        key,
        newArr[index],
      ])
    );
    setIsMachineState(updatedFitnessEquipment);

    // 모르겠어요 비활성화
    setIsNotSelected(false);
  };

  // 전체 선택
  const handleAllSelectInner = (allSelected) => {
    return Object.fromEntries(
      Object.entries(isMachineState).map(([key, value]) => [key, !allSelected])
    );
  };

  // 전체선택
  const handleAllSelect = () => {
    const entries = Object.entries(isMachineState);
    const newArr = Array(entries.length).fill(!isAllSelected);
    const updatedFitnessEquipment = handleAllSelectInner(isAllSelected);

    // 전체 선택 state 반전
    setIsAllSelected(!isAllSelected);
    // 객체 업데이트
    setIsMachineState(updatedFitnessEquipment);
    // 배열 업데이트
    setIsMachineSelected(newArr);
    // 모르겠어요 해제
    setIsNotSelected(false);
  };

  // 모르겠어요 클릭
  const handleReset = () => {
    const entries = Object.entries(isMachineState);
    const newArr = Array(entries.length).fill(false);
    setIsMachineSelected(newArr);
    setIsNotSelected(!isNotSelected);
    // 객체 -> 배열(순회) -> false -> 객체
    const updatedFitnessEquipment = Object.fromEntries(
      Object.entries(isMachineState).map(([key, value]) => [key, false])
    );
    setIsMachineState(updatedFitnessEquipment);
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
            {Object.entries(isMachineState).map((item, index) => {
              return (
                <SmallTextCheckbox
                  key={item}
                  handleClick={handleSelect}
                  isSelected={isMachineSelected[index]}
                  elementidx={index}
                >
                  {item}
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
