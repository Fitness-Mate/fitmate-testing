import * as S from "../StyledSignup";
import { useNavigate } from "react-router-dom";
import rightarrow from "../../../assets/images/rightarrow.svg";
import { MiddleButton, BeforeButton, TextCheckbox } from "../../../components/";
import { useRecoilState } from "recoil";
import { validationState } from "../../../recoil/atom";
import { useState } from "react";
import { userPostAPI } from "../../../apis/API";

const SignupBodyFigure = () => {
  const navigate = useNavigate();
  const currenturl = window.location.pathname;
  const [isValidState, setIsValidState] = useRecoilState(validationState);
  const [isCategorySelect, setIsCategorySelect] = useState(false);

  const categorylist = [
    ["마른 편이에요", [1, 1, 1, 1]],
    ["보통이에요", [2, 2, 2, 2]],
    ["조금 통통한 편이에요", [3, 3, 3, 3]],
    ["뚱뚱해요", [4, 4, 4, 4]],
  ];

  const handleClick = (idx) => {
    const newArr = Array(categorylist.length).fill(false);
    newArr[idx] = true;
    setIsCategorySelect(newArr);
    setIsValidState((pre) => ({
      ...pre,
      upperBodyFat: [categorylist[idx][1][0], true, false],
      lowerBodyFat: [categorylist[idx][1][1], true, false],
      upperMuscleMass: [categorylist[idx][1][2], true, false],
      lowerMuscleMass: [categorylist[idx][1][3], true, false],
    }));
  };

  const handleBackPage = (e) => {
    e.preventDefault();
    navigate(-1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      Object.entries(isValidState)?.filter(([key, value]) => {
        return value[1] === true;
      }).length === 12
    ) {
      // 회원가입 post 요청
      const submission = {};
      for (const key in isValidState) {
        if (key !== "password2") {
          submission[key] = isValidState[key][0];
        }
        if (key === "birthDate") {
          submission[key] = new Date();
        }
        if (key === "height" || key === "weight") {
          submission[key] = Number(isValidState[key][0]);
        }
      }

      const response = await userPostAPI.post("", submission);
      if (response.data === "ok") {
        localStorage.setItem("Jwt", "tmp");
        navigate("/signup/complete", { replace: false }); // 절대 경로로 이동
      } else {
        console.log("회원가입 오류");
        return { error: "Wrong Input" };
      }
    }
  };
  return (
    <S.SignupContainer>
      <S.SignupTitleContainer>
        <S.SignupTitle>
          <S.TitleEmphasis>어떤 체형</S.TitleEmphasis>을 가지고 계신가요?
          <br />
          <span className="recommendText">정확한 추천을 위해 필요해요</span>
        </S.SignupTitle>
      </S.SignupTitleContainer>
      <S.SignupTextContainer>
        {categorylist?.map((item, index) => {
          return (
            <TextCheckbox
              key={index}
              handleClick={handleClick}
              isSelected={isCategorySelect[index]}
              elementidx={index}
            >
              {item[0]}
            </TextCheckbox>
          );
        })}
        <div className="directButtonContainer">
          <button
            className="directbutton"
            onClick={(e) => {
              e.preventDefault();
              navigate(`${currenturl}/direct`);
            }}
          >
            직접 입력하기
            <img
              src={rightarrow}
              className="rightArrow"
              alt="직접 입력하기 버튼 이미지"
            />
          </button>
        </div>
        <S.ButtonContainer>
          <BeforeButton handleSubmit={handleBackPage} />
          <MiddleButton handleSubmit={handleSubmit}>가입 완료하기</MiddleButton>
        </S.ButtonContainer>
      </S.SignupTextContainer>
    </S.SignupContainer>
  );
};

export default SignupBodyFigure;
