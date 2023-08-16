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
import { fitnessequipment } from "../../../recoil/atom";
import SmallTextCheckbox from "./../../../components/TextCheckbox/SmallTextCheckbox";
import BeforeButton from "./../../../components/Button/BeforeButton";
import SmallButton from "./../../../components/Button/SmallButton";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const RecommendSelectFitnesseEuipment = () => {
  const navigate = useNavigate();
  // 추후에 서버에서 받아와야 함 + 이름
  // const response = bodyPartAPI.get("/list");

  // 운동 기구
  const [isfitnessequipmentState, setIsfitnessequipmentState] =
    useRecoilState(fitnessequipment);

  // 운동 기구 상태 배열
  const [isBodyPartSelect, setIsBodyPartSelect] = useState([]);

  // 모르겠어요 클릭 상태
  const [isSelectX, setIsSelectX] = useState(false);

  // 전체 선택 상태
  const [allSelected, setAllSelected] = useState(false);

  // 운동 기구 선택
  const handleSelect = (idx) => {
    const entries = Object.entries(isfitnessequipmentState);

    // isfitnessequipmenState배열을 그대로 받기(한 버튼에 여러번 클릭을 구현하려면
    const newArr = entries.map(([key, value]) => {
      return value;
    });
    newArr[idx] = !newArr[idx];

    // 위에서 newArr을 그대로 따라감
    const updatedFitnessEquipment = Object.fromEntries(
      entries.map(([key, value], index) => [key, newArr[index]])
    );
    setIsBodyPartSelect(newArr);
    // state 업데이트
    setIsfitnessequipmentState(updatedFitnessEquipment);
    // 배열 업데이트
    // 모르겠어요 비활성화
    setIsSelectX(false);
  };

  // 전체선택
  const handleAllSelect = () => {
    const entries = Object.entries(isfitnessequipmentState);
    let newArr;
    let updatedFitnessEquipment;
    if (allSelected) {
      newArr = Array(entries.length).fill(false);
      setAllSelected(false);
      updatedFitnessEquipment = Object.fromEntries(
        Object.entries(isfitnessequipmentState).map(([key, value]) => [
          key,
          false,
        ])
      );
    } else {
      newArr = Array(entries.length).fill(true);
      setAllSelected(true);
      updatedFitnessEquipment = Object.fromEntries(
        Object.entries(isfitnessequipmentState).map(([key, value]) => [
          key,
          true,
        ])
      );
    }
    setIsfitnessequipmentState(updatedFitnessEquipment);
    setIsBodyPartSelect(newArr);
    setIsSelectX(false);
  };

  // 모르겠어요 클릭
  const handleReset = () => {
    const entries = Object.entries(isfitnessequipmentState);
    const newArr = Array(entries.length).fill(false);
    setIsBodyPartSelect(newArr);
    setIsSelectX(!isSelectX);
    // 객체 -> 배열(순회) -> false -> 객체
    const updatedFitnessEquipment = Object.fromEntries(
      Object.entries(isfitnessequipmentState).map(([key, value]) => [
        key,
        false,
      ])
    );
    setIsfitnessequipmentState(updatedFitnessEquipment);
    setAllSelected(false);
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
        <SmallTextCheckbox handleClick={handleReset} isSelected={isSelectX}>
          모르겠어요
        </SmallTextCheckbox>
        <BorderTextCheckboxContainer>
          <button className="allSelectButton" onClick={handleAllSelect}>
            전체 선택하기
          </button>
          <BorderTextCheckboxInnerContainer>
            {Object.entries(isfitnessequipmentState).map((item, index) => {
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

export default RecommendSelectFitnesseEuipment;
