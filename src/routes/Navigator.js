import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import { Home, Admin, Login } from "../pages/index";
import Signup from "../pages/Signup/Signup";
import Recommend from "./../pages/Recommend/Recommend";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<MainLayout />}>
      <Route path="/" element={<Home />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/signup/*" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/recommend/*" element={<Recommend />} />
      <Route path="*" element={<div>없는페이지</div>} />
    </Route>
  )
);

const Navigator = () => {
  return <RouterProvider router={router} />;
};

export default Navigator;
