import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Emprendimiento from '../components/Emprendimiento'
import ContenedorFiltroInicio from '../components/ContenedorFiltroInicio'
import TituloPagina from '../components/TituloPagina'
import { loadBalancerUrl } from '../config/config'

function MisNegocios(props) {
    const [ emprendimientos, setEmprendimientos ] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(async function() {
        const response = await axios.get('http://' + loadBalancerUrl + ':3001/api/v1/emprendimiento?idUsuario=' + sessionStorage.getItem('usuario_id'), {
            headers: {
              'Authorization': sessionStorage.getItem('usuario_token')
            }})

        if(response.data.errorAutorizacion === true) {
            document.querySelector('#linkNoAutorizado').click()
            return
        }

        setEmprendimientos(response.data.emprendimientos)
        setLoading(false)
    }, loading)

    return (
        <div className="container-fluid mt-3">
            <div className="row">
                <div className="col pt-5">
                    <TituloPagina titulo="Mis negocios" />
                </div>
            </div>
            <div className="row mt-5">
                    {
                        loading ? '' :
                        emprendimientos.map(function(emprendimiento) {
                            return (
                                <div className="col-lg-4 col-12">
                                    <Emprendimiento emprendimiento={emprendimiento} negocioPropio={true} />
                                </div>
                            )
                        })
                    }
            </div>
        </div>
    )
}

export default MisNegocios