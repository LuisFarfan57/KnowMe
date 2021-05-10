import React from 'react'
import './styles/boton.css'

function Boton(props) {
    return (
        <button onClick={props.onClick ? props.onClick : function() {}} type={props.tipo ? props.tipo : 'button'} className={`boton boton-${props.color} ${props.clases}`}>{props.texto}</button>
    )
}

export {Boton}