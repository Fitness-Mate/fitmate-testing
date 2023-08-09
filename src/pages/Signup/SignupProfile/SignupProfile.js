import * as S from "../StyledSignup";
import { useRecoilValue } from "recoil";
import { ProfileInput } from "../../../components";
import { useNavigate } from "react-router-dom";
import { validationState } from "./../../../recoil/atom";
import BigButton from "./../../../components/Button/BigButton";

// 회원가입 페이지에 대한 정보를 모두 담는 컴포넌트
// 우선 이메일은
const SignupProfile = () => {
  const navigate = useNavigate();
  const isValidState = useRecoilValue(validationState);

  // 제출
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      Object.entries(isValidState).filter(([key, value]) => {
        return value[1] === true;
      }).length === 5
    ) {
      navigate(`bodyinfo`);
    }

    // 모든 유효성 검사 + 이메일 중복 확인을 만족해야 다음으로 버튼 활성화
  };

  return (
    <S.SignupContainer>
      <S.SignupTitle>
        <S.TitleEmphasis>회원정보</S.TitleEmphasis>를 입력해주세요.
      </S.SignupTitle>
      <S.ProfileInputcontainer>
        <ProfileInput
          placeholder="이름을 입력해주세요 (2자리 이상)"
          name="username"
        >
          이름
        </ProfileInput>
        <ProfileInput
          placeholder="생년월일을 입력해주세요 ex) 1998-06-16"
          name="birthdate"
        >
          생년월일
        </ProfileInput>
        <ProfileInput placeholder="이메일을 입력해주세요" name="email">
          이메일
        </ProfileInput>
        <ProfileInput
          placeholder="비밀번호를 입력해주세요 (영문 숫자 조합 8자리 이상)"
          name="password"
        >
          비밀번호
        </ProfileInput>
      </S.ProfileInputcontainer>
      <S.ButtonContainer>
        <BigButton handleSubmit={handleSubmit}>다음으로</BigButton>
      </S.ButtonContainer>
    </S.SignupContainer>
  );
};

export default SignupProfile;
