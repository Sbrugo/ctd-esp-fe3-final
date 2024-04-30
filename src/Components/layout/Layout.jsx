import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { BrowserRouter, Outlet } from "react-router-dom";
import NavbarTwo from "./NavbarTwo";

const Layout = () => {
  return (
    <div className="layout-container">
      <NavbarTwo />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
