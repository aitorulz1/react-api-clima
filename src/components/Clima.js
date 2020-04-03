import React, { Fragment } from 'react';

const Clima = ({resultado}) => {

    const { name, timezone, visibility, main } = resultado;

    if(!name) return null;

     // Grados kelvin
     
     const kelvin = 273.15;

    return ( 
        <div className="card-panel white col s12">
        <div className="black-text">
            <h2>El clima de {name} es: </h2>

            <p className="temperatura">
                La Hora de la zona es: {timezone}
            </p>

            <p className="temperatura">
                Y la visibilidad es de: {visibility}
            </p>

            <p className="temperatura">
                 { parseFloat( main.temp - kelvin, 10).toFixed(2) } <span> &#x2103; </span>                    
             </p>

             <p>La temperatura mínima es de:
                { parseFloat(main.temp_min - kelvin, 10 ).toFixed(2)} <span> &#x2103; </span> 
             </p>
             
             <p>La temperatura máxima es de:
                { parseFloat(main.temp_max - kelvin, 10 ).toFixed(2)} <span> &#x2103; </span> 
             </p>
            
            

        </div>
    </div>
     );
}
 
export default Clima;