import { useState, useEffect } from "react";
import axios from "axios";

import "./App.css";

function App() {
  const [indicators, setIndicators] = useState([]);

  const getIndicators = () => {
    axios
      .get("https://5bwfup1x0i.execute-api.us-east-1.amazonaws.com/dev")
      .then((response) => {
        const result = Object.values(response.data.body);
        setIndicators(result);
        console.log(indicators);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getIndicators();
  }, []);

  return (
    <div className="container">
      <h1 className="header">Simple App</h1>

      <hr />
      <h4>Lista de indicadores</h4>
      <hr />

      <div className="table">
        <div className="table-header">
          <div className="header__item">
            <a id="name" className="filter__link" href="#">
              Código
            </a>
          </div>
          <div className="header__item">
            <a id="wins" className="filter__link filter__link--number" href="#">
              Fecha
            </a>
          </div>
          <div className="header__item">
            <a
              id="draws"
              className="filter__link filter__link--number"
              href="#"
            >
              Nombre
            </a>
          </div>
          <div className="header__item">
            <a
              id="losses"
              className="filter__link filter__link--number"
              href="#"
            >
              Unidad_medida
            </a>
          </div>
          <div className="header__item">
            <a
              id="total"
              className="filter__link filter__link--number"
              href="#"
            >
              Valor
            </a>
          </div>
        </div>
        <div className="table-content">
          {indicators.length > 0 &&
            indicators.slice(3).map((indicator) => {
              return (
                <div className="table-row" key={indicator.codigo}>
                  <div className="table-data">{indicator.codigo}</div>
                  <div className="table-data">{indicator.fecha}</div>
                  <div className="table-data">{indicator.nombre}</div>
                  <div className="table-data">{indicator.unidad_medida}</div>
                  <div className="table-data">{indicator.valor}</div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default App;
