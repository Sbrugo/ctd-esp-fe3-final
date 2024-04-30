import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { BrowserRouter, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="layout-container">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;