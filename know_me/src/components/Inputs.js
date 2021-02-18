import React from 'react'
import './styles/inputs.css'

function TextInput(props) {
    return (
        <div className={`contenedorInput ${props.clases}`}>
            <input className="textInput" type="text" placeholder={props.placeholder ? props.placeholder:''} />
        </div>
    )
}

function PasswordInput(props) {
    return (
        <div className={`contenedorInput ${props.clases}`}>
            <input className="textInput" type="password" placeholder={props.placeholder ? props.placeholder:''} />
        </div>
    )
}

export {TextInput, PasswordInput}