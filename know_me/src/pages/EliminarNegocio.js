import React, {useEffect, useState} from 'react'
import TituloPagina from '../components/TituloPagina'
import {TextInput, Label, SelectInput, FileInput, TextArea} from '../components/Inputs'
import {Boton} from '../components/Boton'
import {Link} from 'react-router-dom'
import axios from 'axios'

function EliminarNegocio(props) {
    const [ emprendimiento, setEmprendimiento ] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(async function() {
        debugger
        const response = await axios.get('http://localhost:3001/api/v1/emprendimiento/' + props.match.params.idEmprendimiento, {
            headers: {
              'Authorization': sessionStorage.getItem('usuario_token')
            }})

        if(response.data.errorAutorizacion === true) {
            document.querySelector('#linkNoAutorizado').click()
            return
        }
        
        setEmprendimiento(response.data.emprendimiento)
        setLoading(false)
    }, loading)

    const eliminarEmprendimiento = async function() {
        const response = await axios.delete('http://localhost:3001/api/v1/emprendimiento/' + props.match.params.idEmprendimiento, {
            headers: {
              'Authorization': sessionStorage.getItem('usuario_token')
            }})

        if(response.data.errorAutorizacion === true) {
            document.querySelector('#linkNoAutorizado').click()
            return
        }

        alert('Negocio eliminado')
        document.querySelector('#linkMisNegocios').click()
    }

    return (
        <div className="container pt-5 mt-5 pb-5">
            <div className="row">
                <div className="col">
                    <TituloPagina titulo={'¿Seguro que deseas eliminar el negocio ' + (loading ? '' : emprendimiento.nombre) + '?'} />
                </div>
            </div>

            <div className="row mt-5">
                <div className="col d-flex align-items-center justify-content-center">
                    <Boton onClick={eliminarEmprendimiento} color="verde" texto="Si, eliminar" />
                    <Link id="linkMisNegocios" to="/app/mis-negocios">
                        <Boton clases="ml-3" color="rojo" texto="No, conservar" />
                    </Link>
                </div>
            </div>         
        </div>
    )
}

export default EliminarNegocio