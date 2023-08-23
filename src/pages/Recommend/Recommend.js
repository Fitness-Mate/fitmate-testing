import { Route, Routes } from "react-router-dom";
import {
  RecommendHome,
  RecommendCategory,
  RecommendWorkoutPart,
  RecommendMachine,
  RecommendMachineResult,
  RecommendSupplementResult,
  RecommendSupplementType,
  RecommendSupplementPurpose,
  RecommendSupplementBudget,
} from "./";

const Recommend = () => {
  return (
    <Routes>
      <Route path="/" element={<RecommendHome />} />
      <Route path="category" element={<RecommendCategory />} />

      <Route path="workout" element={<RecommendWorkoutPart />} />
      <Route path="machine" element={<RecommendMachine />} />
      <Route path="machineresult" element={<RecommendMachineResult />} />

      <Route path="supplementbudget" element={<RecommendSupplementBudget />} />
      <Route
        path="supplementpurpose"
        element={<RecommendSupplementPurpose />}
      />
      <Route path="supplementtype" element={<RecommendSupplementType />} />
      <Route path="supplementresult" element={<RecommendSupplementResult />} />
    </Routes>
  );
};

export default Recommend;
