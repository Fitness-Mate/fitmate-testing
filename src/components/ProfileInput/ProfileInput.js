import * as S from "./StyledProfileInput";
import { userIdVerifyAPI } from "../../apis/API";
import { EmailState, validationState } from "../../recoil/atom";
import ProfileInputContent from "./ProfileInputContent";
import { useRecoilState, useRecoilValue } from "recoil";
import { useState } from "react";

// placeholder : Input창 마다 다양해서 Home에서 받아옴
// children : 아이디/비밀번호/이메일 등등..

const ProfileInput = ({ placeholder, children, name }) => {
  // 유효성 검사
  const isValidState = useRecoilValue(validationState);
  // 포커스 검사
  const [isFocused, setIsFocused] = useState(false);
  // 이메일 중복 체크
  const [isEmailState, setIsEmailState] = useRecoilState(EmailState);
  // 서버로부터 이메일 중복확인 + 유효식 검사
  const emailduplicateCheck = (isVerified) => {
    setIsEmailState(isVerified);
  };
  // 서버로 부터 이메일 중복 체크
  const handleEmail = async () => {
    if (isValidState.loginEmail[0] !== "") {
      const verifyResponse = await userIdVerifyAPI.post(
        isValidState.loginEmail[0]
      );
      if (verifyResponse.data === "ok") {
        return true;
      }
      return false;
    }
  };

  // 중복 체크 한 경우
  const Available = (
    <span className="profileInputChecking">사용 가능한 이메일입니다</span>
  );

  // 중복 체크가 안됐거나 규칙이 맞지 않은 경우
  const NotAvailable = (
    <span className="profileInputWarning">
      이메일 중복확인을 하지 않았거나 중복된 이메일입니다
    </span>
  );

  return (
    <S.ProfileInputContainer isValidState={isValidState.loginEmail[1]}>
      <S.InputName>
        {children}
        <span className="essentialSymbol"> *</span>
      </S.InputName>
      {/* 체크가 되지 않았을때만 Warning 문구 */}
      <ProfileInputContent
        placeholder={placeholder}
        name={name}
        isFocused={isFocused}
        setIsFocused={setIsFocused}
      />
      {name === "loginEmail" && (
        <button
          className="duplicateButton"
          type="button"
          onClick={(e) => {
            e.preventDefault();
            // 중복 확인(Promise)
            handleEmail().then((isVerified) => {
              emailduplicateCheck(isVerified);
            });
          }}
        >
          중복확인
        </button>
      )}

      {/* 비밀번호 입력창에만 재확인 입력창을 하나 더 추가 */}
      {children === "비밀번호" && (
        <ProfileInputContent
          placeholder="비밀번호 재확인"
          name="password2"
          isFocused={isFocused}
          setIsFocused={setIsFocused}
        />
      )}
      {/* 이메일은 중복체크 까지 해야 함 */}
      {!isFocused ? (
        isValidState[name][1] ? (
          name === "loginEmail" ? (
            isEmailState ? (
              Available
            ) : (
              NotAvailable
            )
          ) : (
            ""
          )
        ) : (
          <span className="profileInputWarning">
            {children} 생성규칙에 맞지 않습니다
          </span>
        )
      ) : (
        ""
      )}
    </S.ProfileInputContainer>
  );
};

export default ProfileInput;
