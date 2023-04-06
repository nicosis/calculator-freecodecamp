import React, { Children } from "react";
import "../styles/BotonClear.css";

const BotonClear = ({ children, handleClear }) => {
  return <div onClick={handleClear} className="boton-clear">{children}</div>;
};

export default BotonClear;
