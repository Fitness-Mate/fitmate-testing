import { useRecoilState } from "recoil";
import { ProfileInputContentWrapper } from "./StyledProfileInput";
import { EmailState, validationState } from "../../recoil/atom";
import ValidateTest from "./../../utils/exp";

const ProfileInputContent = ({
  placeholder,
  name,
  isFocused,
  setIsFocused,
}) => {
  const [isValidState, setIsValidState] = useRecoilState(validationState);
  const [isEmailState, setIsEmailState] = useRecoilState(EmailState);

  const handleChange = (e) => {
    const value = e.currentTarget.value;
    const name = e.target.name;
    let exp = ValidateTest(name);

    // 유효성 검사
    const updatedValidationState = {
      ...isValidState,
      [name]: [value, exp && exp.test(value)],
    };
    setIsValidState(updatedValidationState);

    const passwordSame =
      updatedValidationState.password[0] ===
      updatedValidationState.password2[0];
    // 비밀번호 재확인(value는 그대로, 재확인만 함)
    if (name.includes("password")) {
      setIsValidState((pre) => ({
        ...pre,
        password2: [updatedValidationState.password2[0], passwordSame],
      }));
    }
  };

  // input 태그
  return (
    <ProfileInputContentWrapper
      placeholder={isFocused ? "" : placeholder}
      name={name}
      isFocused={isFocused}
      isEmailState={isEmailState}
      isValidState={isValidState[name][1]}
      onFocus={() => {
        setIsFocused(true);
      }}
      onBlur={() => {
        setIsFocused(false);
      }}
      onChange={handleChange}
    />
  );
};

export default ProfileInputContent;
