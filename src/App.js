import "./App.css";
import logo from "./img/freecodecamp-logo.png";
import Boton from "./components/Boton";
import Pantalla from "./components/Pantalla";
import BotonClear from "./components/BotonClear";
import { useState } from "react";
import { evaluate } from "mathjs";

function App() {
  const [input, setInput] = useState("");

  const agregarValor = (valor) => {
    setInput(input + valor);
  };

  const calcularResultado = () => {
    if (input) {
      setInput(evaluate(input));
    } else {
      alert("Introducir valores");
    }
  };

  return (
    <div className="App">
      <div className="freecodecamp-logo-contenedor">
        <img className="freecodecamp-logo" src={logo} alt="logo" />
      </div>
      <div className="contenedor-calculadora">
        <Pantalla input={input} />
        <div className="fila">
          <Boton handleClick={agregarValor}>1</Boton>
          <Boton handleClick={agregarValor}>2</Boton>
          <Boton handleClick={agregarValor}>3</Boton>
          <Boton handleClick={agregarValor}>+</Boton>
        </div>
        <div className="fila">
          <Boton handleClick={agregarValor}>4</Boton>
          <Boton handleClick={agregarValor}>5</Boton>
          <Boton handleClick={agregarValor}>6</Boton>
          <Boton handleClick={agregarValor}>-</Boton>
        </div>
        <div className="fila">
          <Boton handleClick={agregarValor}>7</Boton>
          <Boton handleClick={agregarValor}>8</Boton>
          <Boton handleClick={agregarValor}>9</Boton>
          <Boton handleClick={agregarValor}>*</Boton>
        </div>
        <div className="fila">
          <Boton handleClick={calcularResultado}>=</Boton>
          <Boton handleClick={agregarValor}>0</Boton>
          <Boton handleClick={agregarValor}>.</Boton>
          <Boton handleClick={agregarValor}>/</Boton>
        </div>
        <div className="fila">
          <BotonClear handleClear={() => setInput("")}>Clear</BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
