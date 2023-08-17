import React from "react";
import { Outlet } from "react-router-dom";
import { MainLayoutWrapper } from "./StyledMainLayout";
import Navbar from "../components/Navbar/Navbar";

const MainLayout = () => {
  return (
    <MainLayoutWrapper>
      {/* 고정 Nav 바 */}
      <Navbar />

      {/* 변화하는 부분 */}
      <Outlet />
    </MainLayoutWrapper>
  );
};

export default MainLayout;
