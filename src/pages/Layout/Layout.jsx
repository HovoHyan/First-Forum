import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import { Outlet } from "react-router-dom";
import FooterComp from "../../components/footer/FooterComp";

const Layout = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
      <FooterComp />
    </div>
  );
};

export default Layout;
