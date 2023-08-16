import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { Home, Admin } from "../pages/index";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";
import Recommend from "./../pages/Recommend/Recommend";
import LayoutContainer from "../Layout/LayoutContainer";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path ="/" element={<LayoutContainer />}>
      <Route index element={<Home />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/signup/*" element={<Signup />} />
      <Route path="/login/*" element={<Login />} />
      <Route path="/recommend/*" element={<Recommend />} />
      <Route path="*" element={<div>없는페이지</div>} />
    </Route>
  )
);

const Navigator = () => {
  return <RouterProvider router={router} />;
};

export default Navigator;