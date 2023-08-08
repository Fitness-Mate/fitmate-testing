import { Route, Routes } from "react-router-dom";
import {
  SignupBodyFigure,
  SignupBodyFigureDirect,
  SignupBodyInfo,
  SignupProfile,
  SignupComplete,
} from "./index";

// 회원가입 페이지에 대한 정보를 모두 담는 컴포넌트

const Signup = () => {
  return (
    <Routes>
      <Route path="/" element={<SignupProfile />} />
      <Route path="bodyinfo" element={<SignupBodyInfo />} />
      <Route path="bodyfigure" element={<SignupBodyFigure />} />
      <Route path="bodyfigure/direct" element={<SignupBodyFigureDirect />} />
      <Route path="complete" element={<SignupComplete />} />
    </Routes>
  );
};

export default Signup;
