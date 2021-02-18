import React from 'react'
import './styles/boton.css'

function Boton(props) {
    return (
        <button type={props.tipo ? props.tipo : 'button'} className={`boton boton-${props.color} ${props.clases}`}>{props.texto}</button>
    )
}

export {Boton}