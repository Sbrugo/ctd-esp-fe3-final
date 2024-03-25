import React, { useState } from "react";

const Form = () => {
  const [nombre, setNombre] = useState("");
  //Aqui deberan implementar el form completo con sus validaciones
  const handleInput = (e) => {
    if (e.target.id === "nombre") {
      setNombre(e.target.value);
    }
  };

  return (
    <div>
      <form>
        <input type="text" id="nombre" value="nombre" onChange={handleInput} />
        <input type="email" id="email" value="email" onChange={handleInput} />
        <button>Enviar</button>
      </form>
    </div>
  );
};

export default Form;
