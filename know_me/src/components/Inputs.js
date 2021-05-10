import React from 'react'
import './styles/inputs.css'

function Label(props) {
    return (
        <label className={props.clases ? props.clases : ''} htmlFor={props.for ? props.for : ''}>{props.texto}</label>
    )
}

function TextInput(props) {
    return (
        <div className={`contenedorInput ${props.clases ? props.clases : ''}`}>
            <input onChange={props.onChange} defaultValue={props.valor ? props.valor : ''} className="textInput" type={props.tipo} name={props.name} id={props.id} placeholder={props.placeholder ? props.placeholder:''} />
        </div>
    )
}

function TextArea(props) {
    return (
        <div className={`contenedorInput ${props.clases ? props.clases : ''}`}>
            <textarea defaultValue={props.valor ? props.valor : ''} rows={props.rows} className="textInput" name={props.name} id={props.id} />
        </div>
    )
}

function SelectInput(props) {
    return (
        <div className={`contenedorInput ${props.clases ? props.clases : ''}`}>
            <select onChange={props.onChange ? props.onChange : function(){}} className="textInput" defaultValue={props.seleccionado} name={props.name} id={props.id}>
                {props.opciones.map(opcion => {
                    return (<option value={opcion.valor}>{opcion.texto}</option>)
                })}
            </select>
        </div>
    )
}

function FileInput(props) {
    return (
        <input onChange={props.onChange ? props.onChange : function() {}} className="fileInput" type="file" name={props.name} id={props.id} />
    )
}

export {TextInput, Label, SelectInput, FileInput, TextArea}