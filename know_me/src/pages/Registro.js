import React from 'react'
import TituloPagina from '../components/TituloPagina'
import {TextInput, Label, SelectInput} from '../components/Inputs'
import {Boton} from '../components/Boton'
import {Link} from 'react-router-dom'

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']

function Registro(props) {
    const fechaActual = new Date()
    const anioSeleccionado = fechaActual.getFullYear()
    const mesSeleccionado = fechaActual.getMonth()
    const diaSeleccionado = fechaActual.getDate()

    const opcionesDias = []
    for (let i = 1; i <= 31; i++) {
        opcionesDias[i-1] = {
            valor: i,
            texto: i
        }   
    }

    const opcionesMeses = []
    for (let i = 1; i <= 12; i++) {
        opcionesMeses[i-1] = {
            valor: i,
            texto: meses[i - 1]
        }   
    }

    const opcionesAnios = []
    for (let i = 1900; i <= anioSeleccionado; i++) {
        opcionesAnios[i - 1900] = {
            valor: i,
            texto: i
        }   
    }

    return (
        <div className="container pt-5 mt-5 pb-5">
            <div className="row">
                <div className="col">
                    <TituloPagina titulo="Regístrate" />
                </div>
            </div>

            <form method="post" id="formRegistro">
                <div className="row mt-5">
                    <div className="col-lg-6 col-12">
                        <Label for="nombres" texto="Nombres" />
                        <TextInput name="nombres" id="nombres" clases="mb-3" tipo="text" />

                        <Label for="apellidos" texto="Apellidos" />
                        <TextInput name="apellidos" id="apellidos" clases="mb-3" tipo="text" />

                        <Label for="username" texto="Nombre de usuario" />
                        <TextInput name="username" id="username" clases="mb-3" tipo="text" />

                        <Label for="email" texto="Correo electrónico" />
                        <TextInput name="email" id="email" clases="mb-3" tipo="email" />                        
                    </div>

                    <div className="col-lg-6 col-12">
                    <Label for="telefono" texto="Número de teléfono" />
                        <TextInput name="telefono" id="telefono" clases="mb-3" tipo="text" />

                        <Label texto="Fecha de nacimiento" />
                        <div className="d-flex align-items-center mb-3">
                            <SelectInput name="dia" id="dia" opciones={opcionesDias} seleccionado={anioSeleccionado} />
                            <SelectInput name="mes" id="mes" clases="ml-3" opciones={opcionesMeses} seleccionado={mesSeleccionado} />
                            <SelectInput name="anio" id="anio" clases="ml-3" opciones={opcionesAnios} seleccionado={diaSeleccionado} />
                        </div>

                        <Label for="password" texto="Contraseña" />
                        <TextInput name="password" id="password" clases="mb-3" tipo="password" />

                        <Label for="rePassword" texto="Confirmar contraseña" />
                        <TextInput name="username" id="username" clases="mb-3" tipo="password" />
                    </div>
                    <div className="col-12 mt-5 d-flex justify-content-center">
                        <Link to="/inicio">
                            <Boton color="verde" texto="Registrarse" />
                        </Link>                        
                    </div>
                </div>
            </form>            
        </div>
    )
}

export default Registro