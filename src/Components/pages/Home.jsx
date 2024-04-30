import React, { useContext } from "react";
import Card from "../common/Card";
import { ContextGlobal } from "../../context/ContextProvider";
import "./Home.css";
import Heroe from "../common/Heroe";

const Home = () => {
  const { dentists } = useContext(ContextGlobal);

  return (
    <>
      <main>
        <Heroe />
        <div className="features-container">
          <h1>Home</h1>
          <div className="card-grid">
            {dentists.dentistas.map((dentista) => {
              return <Card key={dentista.id} dentista={dentista} />;
            })}
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
