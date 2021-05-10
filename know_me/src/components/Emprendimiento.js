import React, {useEffect, useState} from 'react'
import './styles/emprendimiento.css'
import {Boton} from '../components/Boton'
import { Link } from 'react-router-dom'

function Emprendimiento(props) { 
    const [categorias, setCategorias] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(function() {
        setCategorias(props.emprendimiento.categorias.split(','))
        setLoading(false)
    }, loading)

    return (
        <div className="contenedor-emprendimiento">
            <div className="cabecera" style={{backgroundColor: 'red'}}>
                <p className="m-0">{props.emprendimiento.nombre}</p>
            </div>
            <div className="contenido-emprendimiento">
                <p className="font-weight-bold">Dirección:</p>
                <p className="m-0">País: <span className="font-italic">{props.emprendimiento.pais}</span></p>
                <p className="m-0">Departamento: <span className="font-italic">{props.emprendimiento.departamento}</span></p>
                <p className="m-0">Municipio: <span className="font-italic">{props.emprendimiento.municipio}</span></p>
                <p className="m-0">Zona: <span className="font-italic">{props.emprendimiento.zona}</span></p>

                <hr />
                <p className="font-weight-bold">Descripcion:</p>
                <p className="font-italic">{props.emprendimiento.descripcion}</p>

                <hr />

                <p className="font-weight-bold">Categorias:</p>
                <div className="d-flex align-items-center flex-wrap">
                {
                    loading ? '' :
                    categorias.map(function(categoria) {
                        return (
                            <div className="contenedorInput mr-3 mt-2" style={{width: 'fit-content'}}>
                                <span>{categoria}</span>
                            </div>
                        )
                    })
                }
                </div>

                <hr />

                <div className="d-flex justify-content-center">
                    <Link to={`/app/informacion-negocio/${props.emprendimiento._id}`} params={{idEmprendimiento: props.emprendimiento._id}}>
                        <Boton color="verde" texto="Ver información" />
                    </Link>
                    {
                        props.negocioPropio === true ? (
                            <Link to={`/app/editar-negocio/${props.emprendimiento._id}`} params={{idEmprendimiento: props.emprendimiento._id}}>
                                <Boton clases="ml-3" color="amarillo" texto="Editar" />
                            </Link>
                        ) : ''
                    }
                    {
                        props.negocioPropio === true ? (
                            <Link to={`/app/eliminar-negocio/${props.emprendimiento._id}`} params={{idEmprendimiento: props.emprendimiento._id}}>
                                <Boton clases="ml-3" color="rojo" texto="Eliminar" />
                            </Link>
                        ) : ''
                    }
                </div>
            </div>
        </div>
    )
}

export default Emprendimiento