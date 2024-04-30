import React from "react";
import { Button } from "../common/Button";
import "./Heroe.css";

const Heroe = () => {
  return (
    <div className="heroe-container">
      <div className="image-wrapper">
        <div className="color-container"></div>
      </div>
      <div className="heroe-text">
        <p>Bienvenido</p>
        <h2>Encontrá la cobertura de salud que es mejor para vos</h2>
        <h5>
          Te ayudamos a buscar entre diferentes obras sociales para que
          encuentres la que querés.
        </h5>
        <div className="hero-btns">
          <Button
            className="btns"
            buttonStyle="btn--primario"
            buttonSize="btn--mediano"
          >
            Conocé más
          </Button>

          {/* <Button
            className="btns"
            buttonStyle="btn--primario"
            buttonSize="btn--mediano"
          >
            Crear cuenta <i className="far fa-play-circle"></i>
          </Button> */}
        </div>
      </div>
    </div>
  );
};

export default Heroe;
