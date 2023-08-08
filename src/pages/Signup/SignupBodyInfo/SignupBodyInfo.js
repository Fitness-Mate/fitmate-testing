import { useState } from "react";
import * as S from "./../StyledSignup";
import { ProfileInput } from "../../../components";
import { InputName } from "../../../components/ProfileInput/StyledProfileInput";
import female from "../../../assets/images/female.png";
import male from "../../../assets/images/male.png";
import { useNavigate } from "react-router-dom";

const SignupBodyInfo = () => {
  const navigate = useNavigate();
  const [isSelected, setIsSelected] = useState([0, 0]);
  return (
    <S.SignupContainer action="/submit" method="post">
      <S.SignupTitle>
        간단한
        <br />
        <S.TitleEmphasis>신체 정보</S.TitleEmphasis>를 입력해주세요
      </S.SignupTitle>
      <S.BodyInfoContainer>
        <div className="genderSelect">
          <InputName>
            성별
            <span className="essentialSymbol"> *</span>
          </InputName>
          <ul className="genderList">
            <S.GenderItem
              onClick={(e) => {
                e.preventDefault();
                setIsSelected([1, 0]);
              }}
              isSelected={isSelected[0]}
            >
              <img className="genderImg" src={male} alt="성별 이미지(남성)" />
              <S.GenderName isSelected={isSelected[0]}>남성</S.GenderName>
            </S.GenderItem>
            <S.GenderItem
              onClick={(e) => {
                e.preventDefault();
                setIsSelected([0, 1]);
              }}
              isSelected={isSelected[1]}
            >
              <img className="genderImg" src={female} alt="성별 이미지(여성)" />
              <S.GenderName isSelected={isSelected[1]}>여성</S.GenderName>
            </S.GenderItem>
          </ul>
        </div>
        <ProfileInput
          isChecked={true}
          placeholder="키를 입력해주세요 (숫자만) ex)175"
        >
          키
        </ProfileInput>
        <ProfileInput isChecked={true} placeholder="몸무게를 입력해주세요">
          몸무게
        </ProfileInput>
      </S.BodyInfoContainer>
      <button
        onClick={(e) => {
          e.preventDefault();
          navigate(-1);
        }}
      >
        이전
      </button>
      <button
        onClick={(e) => {
          e.preventDefault();
          navigate("/signup/bodyfigure", { replace: false }); // 절대 경로로 이동
        }}
      >
        다음
      </button>
    </S.SignupContainer>
  );
};

export default SignupBodyInfo;
