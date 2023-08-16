import { Route, Routes } from "react-router-dom";
import {
  RecommendInfo,
  RecommendSelectTwo,
  RecommendSelectExcercisePart,
  RecommendSelectFitnesseEuipment,
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
      <Route
        path="fitnessequipment"
        element={<RecommendSelectFitnesseEuipment />}
      />
    </Routes>
  );
};

export default Recommend;
