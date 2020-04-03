import React, { useState} from 'react';
import Error from '../components/Error';


const Formulario = ({guardarDatos}) => {

    // Set fomulario

    const [ busqueda, guardarBusqueda] = useState({
        ciudad: '',
        pais: ''
    })

    const [ error, guardarError ] = useState(false);

    // Destructuring

    const { ciudad, pais } = busqueda

    // onChange

    const onChange = e => {
        guardarBusqueda({
            ...busqueda,
            [e.target.name] : e.target.value
        })
    }

    // onSubmit

    const onSubmit = e => {
        e.preventDefault()
        
        
        if(ciudad.trim() === '' || pais.trim() === '') {
            guardarError(true);
            return;
        }

        guardarError(false);

        guardarDatos(busqueda);


    }

    return ( 
        <form
        
            onSubmit = {onSubmit}
        
        >

            {error ? <Error mensaje="Todos los campos son obligatorios" /> : null}

            <div className="input-field col s12">
                <input
                    type= 'text'
                    name='ciudad'
                    id='ciudad'
                    value = {ciudad}
                    onChange= {onChange}                    
                />
                <label htmlFor="ciudad">Ciudad: </label>
            </div>

            <div className="input-field col s12">

                <select
                    name="pais"
                    value = {pais}
                    onChange={onChange}
                >
                    <option value=""> Seleccione un país </option>
                    <option value="US">Estados Unidos</option>
                    <option value="MX">México</option>
                    <option value="AR">Argentina</option>
                    <option value="CO">Colombia</option>
                    <option value="CR">Costa Rica</option>
                    <option value="ES">España</option>
                    <option value="PE">Perú</option>
                    <option value="uk">UK</option>
                </select>

                <label htmlFor="pais">País: </label>
            </div>

            <div className="input-field col s12">
                <input
                    type="submit"
                    value="Buscar Clima"
                    className="waves-effect waves-ligh btn-large btn-block yellow accent-4"
                />
            </div>
        </form>
     );
}
 
export default Formulario;