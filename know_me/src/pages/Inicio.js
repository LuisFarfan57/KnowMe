import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Emprendimiento from '../components/Emprendimiento'
import ContenedorFiltroInicio from '../components/ContenedorFiltroInicio'
import { loadBalancerUrl } from '../config/config'

function Inicio(props) {
    const [ emprendimientos, setEmprendimientos ] = useState([])
    const [loading, setLoading] = useState(true)
    const [pais, setPais] = useState('')
    const [departamento, setDepartamento] = useState('')
    const [municipio, setMunicipio] = useState('')
    const [zona, setZona] = useState('')
    const [categoria, setCategoria] = useState('')

    useEffect(async function() {
        buscarTodos()
        setLoading(false)
    }, loading)

    const buscarTodos = async function() {
        const response = await axios.get('http://' + loadBalancerUrl + ':3001/api/v1/emprendimiento?noIdUsuario=' + sessionStorage.getItem('usuario_id'), {
            headers: {
              'Authorization': sessionStorage.getItem('usuario_token')
            }})

        if(response.data.errorAutorizacion === true) {
            document.querySelector('#linkNoAutorizado').click()
            return
        }

        setEmprendimientos(response.data.emprendimientos)
    }

    const buscar = async function() {
        const response = await axios.get('http://' + loadBalancerUrl + ':3001/api/v1/emprendimiento?noIdUsuario=' + sessionStorage.getItem('usuario_id') + 
            '&pais=' + pais +
            '&departamento=' + departamento +
            '&municipio=' + municipio +
            '&zona=' + zona +
            '&categoria=' + categoria, {
                headers: {
                    'Authorization': sessionStorage.getItem('usuario_token')
                }
            })

        if(response.data.errorAutorizacion === true) {
            document.querySelector('#linkNoAutorizado').click()
            return
        }

        setEmprendimientos(response.data.emprendimientos)
    }

    return (
        <div>
            <ContenedorFiltroInicio 
                buscar={buscar}
                buscarTodos={buscarTodos}
                recibirPais={function(e) {setPais(e.target.value)}} 
                recibirDepartamento={function(e) {setDepartamento(e.target.value)}} 
                recibirMunicipio={function(e) {setMunicipio(e.target.value)}} 
                recibirZona={function(e) {setZona(e.target.value)}} 
                recibirCategoria={function(e) {setCategoria(e.target.value)}} 
            />
            <div className="container-fluid">
                <div className="row">
                        {
                            loading ? '' :
                            emprendimientos.map(function(emprendimiento) {
                                return (
                                    <div className="col-lg-4 col-12">
                                        <Emprendimiento emprendimiento={emprendimiento} />
                                    </div>
                                )
                            })
                        }
                </div>
            </div>
        </div>
    )
}

export default Inicio