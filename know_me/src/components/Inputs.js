import React from 'react'
import './styles/inputs.css'

function Label(props) {
    return (
        <label htmlFor={props.for ? props.for : ''}>{props.texto}</label>
    )
}

function TextInput(props) {
    return (
        <div className={`contenedorInput ${props.clases}`}>
            <input className="textInput" type={props.tipo} name={props.name} id={props.id} placeholder={props.placeholder ? props.placeholder:''} />
        </div>
    )
}

function SelectInput(props) {
    return (
        <div className={`contenedorInput ${props.clases}`}>
            <select className="textInput" defaultValue={props.seleccionado} name={props.name} id={props.id}>
                {props.opciones.map(opcion => {
                    return (<option value={opcion.valor}>{opcion.texto}</option>)
                })}
            </select>
        </div>
    )
}

export {TextInput, Label, SelectInput}