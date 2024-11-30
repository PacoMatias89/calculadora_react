import React, {useState} from 'react'
import PropTypes from 'prop-types'
import Resultado from './Resultado'
import { operations } from '../helpers/operations'

const NumberInput = ()=> {

    // Se crea un objeto con dos propiedades que se inicializan en 0
    const [numeros, setNumeros] = useState({
        numero1: 0,
        numero2: 0
    })
    const {
        handleChange,
        suma,
        resta,
        multiplicacion,
        division
    } = operations(numeros, setNumeros)
    return (
        <>
            <label className='mx-2'>
                Número 1:{""} <input name='numero1' value={numeros.numero1} onChange={handleChange} type="number" />
            </label>
            <label className='mx-2'>
                Número 2:{""} <input name='numero2' value={numeros.numero2} onChange={handleChange} type="number" />
            </label>

            <Resultado operacion="Suma" resultado={suma()} />
            <Resultado operacion="Resta" resultado={resta()} />
            <Resultado operacion="Multiplicación" resultado={multiplicacion()} />
            <Resultado operacion="División" resultado={division()} />
        </>
    )
}



NumberInput.propTypes = {
    name: PropTypes.string
}

export default NumberInput
