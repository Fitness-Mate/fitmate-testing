import { Route, Routes } from "react-router-dom";
import {
  RecommendInfo,
  RecommendSelectTwo,
  RecommendSelectExcercisePart,
} from "./index";

const Recommend = () => {
  return (
    <Routes>
      <Route path="/" element={<RecommendInfo />} />
      <Route path="selecttwo" element={<RecommendSelectTwo />} />
      <Route
        path="selectexercisepart"
        element={<RecommendSelectExcercisePart />}
      />
    </Routes>
  );
};

export default Recommend;
