import React from 'react'
import PropTypes from 'prop-types'

const Resultado = ({operacion, resultado}) => {
  return (
    <div>
        <br />
        <span>{operacion}: {resultado}</span>
    </div>
  )
}
// Se define el tipo de dato que se espera para cada propiedad
Resultado.propTypes = {
    operacion: PropTypes.string,
    resultado: PropTypes.number
}

export default Resultado
