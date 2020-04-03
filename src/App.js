import React, { Fragment, useState, useEffect } from 'react';
import Header from './components/Header'
import Formulario from './components/Formulario'
import Clima from './components/Clima'


function App() {


  // Recoger los datos de pais y ciudad

  const [ datos, guardarDatos ] = useState({
    ciudad: '',
    pais: ''
  })

  const { ciudad, pais } = datos;

  const [ resultado, guardarResultado ] = useState({})


  useEffect(() => {
  const consultarAPI = async () => {
    
      const url=`http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=da911c5da8ac8830a326fa164a4cd030`;
      const respuesta = await fetch(url);
      const resultado = await respuesta.json();

      guardarResultado(resultado);
  }
  consultarAPI();

}, [ciudad, pais]);
  

  // const { ciudad, pais } = datos;

  return (
    <Fragment>
        <Header titulo="CLIMA REACT" />

        <div className="contenedor-form">
            <div className="container">
              <div className="row">
                <div className="col m6 s12">
                  <Formulario 
                    guardarDatos={guardarDatos}
                  />
                </div>
                <div className="col m6 s12">
                    <Clima 
                      resultado = {resultado}
                    />
                </div>
              </div>
            </div>
          </div>
    </Fragment>
  );
}

export default App;
