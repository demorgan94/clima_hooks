import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Error from './components/Error';
import Clima from './components/Clima';

export default function App() {

  const [ciudad, guardarCiudad] = useState('');
  const [pais, guardarPais] = useState('');
  const [error, guardarError] = useState(false);
  const [resultado, guardarResultado] = useState({});

  useEffect(() => {
    if (ciudad === '') return;

    const consultarAPI = async () => {
      const appId = '7b0b2dfe100a08f45a713ea6313a6060';

      const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`;

      const req = await fetch(url);
      const res = await req.json();

      guardarResultado(res);
    }

    consultarAPI();
  }, [ciudad, pais]);

  const datosConsulta = datos => {
    if (datos.ciudad === '' || datos.pais === '') {
      guardarError(true);
      return;
    }

    guardarCiudad(datos.ciudad);
    guardarPais(datos.pais);
    guardarError(false);
  }

  let componente;
  if (error) {
    componente = <Error mensaje='Ambos campos son obligatorios' />
  } else if (resultado.cod === "404") {
    componente = <Error mensaje='La ciudad no existe en nuestro registro' />
  } else {
    componente = <Clima resultado={resultado} />;
  }

  return (
    <div className="App">
      <Header titulo="Clima React Hooks" />
      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <div className="col s12 m6">
              <Formulario datosConsulta={datosConsulta} />
            </div>
            <div className="col s12 m6">
              {componente}
            </div>
          </div>
        </div>
      </div>
    </div>
  )

}
