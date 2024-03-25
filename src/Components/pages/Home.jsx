import React, { useEffect, useState } from "react";
import Card from "../common/Card";
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const [dentistas, setDentistas] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((res) => setDentistas(res));
  }, []);

  return (
    <main className="">
      {/* Aqui deberias renderizar las cards */}
      <h1>Home</h1>
      <div className="card-grid">
        {dentistas.map((dentista) => {
          return <Card key={dentista.id} dentista={dentista} />;
        })}
      </div>
    </main>
  );
};

export default Home;
