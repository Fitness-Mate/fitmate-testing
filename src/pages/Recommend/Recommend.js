import { Route, Routes } from "react-router-dom";
import {
  RecommendHome,
  RecommendCategory,
  RecommendWorkout,
  RecommendMachine,
} from "./";

const Recommend = () => {
  return (
    <Routes>
      <Route path="/" element={<RecommendHome />} />
      <Route path="category" element={<RecommendCategory />} />
      <Route path="workout" element={<RecommendWorkout />} />
      <Route path="machine" element={<RecommendMachine />} />
    </Routes>
  );
};

export default Recommend;
