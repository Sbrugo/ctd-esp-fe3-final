import React, { useContext } from "react";
import { ContextGlobal } from "../../context/ContextProvider";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { Button } from "../common/Button";
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const { dark, setDark } = useContext(ContextGlobal);

  const cambiarTema = () => {
    if (dark) {
      setDark(false);
    } else {
      setDark(true);
    }
  };

  return (
    <>
      <nav className="navbar-container">
        <Link to="/" className="navbar-logo">
          SA-LUD
        </Link>

        <ul>
          <Link to="/">Conocé SA-LUD</Link>
          <Link to="/contact">Quiero ser Socio</Link>
          <Link to="/detailhome">Información al Socio</Link>
          <Link to="/favs">Gestiones Online</Link>
          <Link to="/favs">Cartilla Médica</Link>
          <Link to="/favs">Salud y Bienestar</Link>
          <Link to="/favs">Novedades</Link>
          <Link to="/favs">Contacto</Link>
        </ul>
        <Button
          className="btns"
          buttonStyle="btn--primario"
          buttonSize="btn--chico"
          onClick={cambiarTema}
          id="btn--chico"
        >
          Modo Oscuro <i className="far fa-play-circle"></i>
        </Button>
      </nav>
    </>
  );
};

export default Navbar;
