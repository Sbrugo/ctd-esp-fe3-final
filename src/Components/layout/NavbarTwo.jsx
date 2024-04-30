import React from "react";
import { Link } from "react-router-dom";
import "./NavbarTwo.css";

const NavbarTwo = () => {
  return (
    <>
      <nav id="navbarTwo-container">
        <ul>
          <Link to="/">Socios</Link>
          <Link to="/contact">Empresas</Link>
          <Link to="/detailhome">Prestadores</Link>
          <Link to="/favs">Proveedores</Link>
        </ul>
      </nav>
    </>
  );
};

export default NavbarTwo;
