import { LoginInputContent } from "./StyledLogin";

export const LoginEmailInput = ({ isClicked, setIsClicked }) => {
  return (
    <LoginInputContent
      isClicked={isClicked}
      placeholder={isClicked === true ? "" : "이메일"}
      onFocus={() => {
        setIsClicked(true);
      }}
      onBlur={() => {
        setIsClicked(false);
      }}
    />
  );
};

export const LoginPWInput = ({ isClicked, setIsClicked }) => {
  return (
    <LoginInputContent
      isClicked={isClicked}
      placeholder={isClicked === true ? "" : "비밀번호"}
      onFocus={() => {
        setIsClicked(true);
      }}
      onBlur={() => {
        setIsClicked(false);
      }}
    />
  );
};
