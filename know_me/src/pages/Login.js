import React from 'react'
import TituloPagina from '../components/TituloPagina'
import {TextInput} from '../components/Inputs'
import {Boton} from '../components/Boton'
import {Link} from 'react-router-dom'
import axios from 'axios'
import { loadBalancerUrl } from '../config/config'

function Login(props) {
    const handleSubmit = async function(e) {
        const datos = new URLSearchParams()
        datos.append('email', document.getElementById('email').value)
        datos.append('password', document.getElementById('password').value)

        const response = await axios.post('http://' + loadBalancerUrl + ':3000/api/v1/security/login', datos)
        debugger

        if(response.data.message) document.getElementById('error').classList.remove('hide')
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

    return (
        <div className="container pt-5 mt-5">
            <div className="row">
                <div className="col-lg-4 offset-lg-4 col-12">
                    <TituloPagina titulo="Login" />
                    <div className="alert alert-danger hide mt-3" id="error">Credenciales incorrectas</div>
                    <TextInput placeholder="Email" name="email" id="email" tipo="text" clases="mb-3 mt-5"/>
                    <TextInput placeholder="Contraseña" name="password" id="password" tipo="password" />

                    <div className="d-flex flex-lg-row flex-column justify-content-center align-items-center mt-3">

                        <Boton onClick={handleSubmit} texto="Iniciar sesión" color="verde" />
                        
                        <Link to="/registro">
                            <Boton texto="Registrarse" color="amarillo" clases="ml-lg-3 mt-lg-0 mt-3" />
                        </Link>
                    </div>
                </div>
            </div>
            <Link id="linkIrAInicio" to="/app/inicio"></Link>
        </div>
    )
}

export default Login