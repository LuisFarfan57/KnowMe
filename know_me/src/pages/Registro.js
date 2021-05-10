import React, { useEffect, useState } from 'react'
import TituloPagina from '../components/TituloPagina'
import {TextInput, Label, SelectInput, FileInput} from '../components/Inputs'
import {Boton} from '../components/Boton'
import {Link} from 'react-router-dom'
import axios from 'axios'

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

    const handleSubmit = async function(e) {
        e.preventDefault()
        const data = new FormData(document.querySelector('#formRegistro'))

        const datos = new URLSearchParams()
        datos.append('email', data.get('email'))
        datos.append('reEmail', data.get('reEmail'))
        datos.append('nombre', data.get('nombres'))
        datos.append('apellido', data.get('apellidos'))
        datos.append('telefono', data.get('telefono'))
        datos.append('fechaNacimiento', data.get('anio') + '-' + data.get('mes') + '-' + data.get('dia'))
        datos.append('username', data.get('username'))
        datos.append('password', data.get('password'))
        datos.append('rePassword', data.get('rePassword'))
        datos.append('imagenPerfil', image)

        const response = await axios.post('http://localhost:3000/api/v1/usuario/nuevo', datos)

        if(response.data.message) {
            document.getElementById('error').classList.remove('hide')
            document.getElementById('error').innerText = response.data.message
        }
        else {
            if(!document.getElementById('error').classList.contains('hide')) document.getElementById('error').classList.add('hide')
            
            sessionStorage.setItem('usuario_id', response.data.usuario._id)
            sessionStorage.setItem('usuario_nombre', response.data.usuario.nombre)
            sessionStorage.setItem('usuario_apellido', response.data.usuario.apellido)
            sessionStorage.setItem('usuario_email', response.data.usuario.email)
            sessionStorage.setItem('usuario_imagenPerfil', response.data.usuario.imagenPerfil)
            sessionStorage.setItem('usuario_token', response.data.token)
            sessionStorage.setItem('estaAutenticado', true)

            document.querySelector('#linkIrAInicio').click()
        }
    }

    const [loading, setLoading] = useState(true)
    const [image, setImage] = useState("")

    const uploadImage = async function(e) {
        debugger
        const files = e.target.files
        const data = new FormData()
        data.append('file', files[0])
        data.append('upload_preset', 'KnowMe')
        data.append('upload_preset', 'KnowMe')
        setLoading(true)

        const res = await fetch("https://api.cloudinary.com/v1_1/dhmn4hjie/image/upload", { method: 'POST', body: data})

        const file = await res.json()

        console.log(file.url)

        setLoading(false)
        setImage(file.url)
    }

    return (
        <div className="container pt-5 mt-5 pb-5">
            <div className="row">
                <div className="col">
                    <TituloPagina titulo="Regístrate" />
                </div>
            </div>

            <div className="alert alert-danger hide mt-3" id="error"></div>

            <form onSubmit={handleSubmit} id="formRegistro" encType="multipart/form-data">
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

                        <Label for="reEmail" texto="Confirma tu Correo electrónico" />
                        <TextInput name="reEmail" id="reEmail" clases="mb-3" tipo="email" />

                        <Label for="fotoPerfil" texto="Foto de perfil" />
                        <FileInput onChange={uploadImage} name="fotoPerfil" id="fotoPerfil" />

                        {
                            loading ? (
                                <div></div>
                            ):(
                                <div className="mt-3">
                                    <img src={image} style={{width:'10rem', height:'10rem', objectFit:'cover'}}></img>
                                </div>
                            )
                        }
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
                        <TextInput name="rePassword" id="rePassword" clases="mb-3" tipo="password" />
                    </div>
                    <div className="col-12 mt-5 d-flex justify-content-center">
                        <Boton tipo="submit" color="verde" texto="Registrarse" />
                    </div>
                </div>
            </form>            
            <Link id="linkIrAInicio" to="/app/inicio"></Link>
        </div>  
    )
}

export default Registro