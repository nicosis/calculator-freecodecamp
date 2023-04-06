import React from "react";
import "../styles/Boton.css";

const Boton = ({ children, handleClick }) => {
  const esOperador = (valor) => {
    return isNaN(valor) && valor != "." && valor != "=";
  };

  return (
    <div
      onClick={() => handleClick(children)}
      className={`boton-contenedor ${
        esOperador(children) ? "operador" : ""
      } `.trimEnd()}
    >
      {children}
    </div>
  );
};

export default Boton;
