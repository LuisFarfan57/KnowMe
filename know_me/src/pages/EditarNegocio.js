import React, {useState, useEffect} from 'react'
import TituloPagina from '../components/TituloPagina'
import {TextInput, Label, SelectInput, FileInput, TextArea} from '../components/Inputs'
import {Boton} from '../components/Boton'
import {Link} from 'react-router-dom'
import ModalSeleccionCategorias from '../components/ModalSeleccionCategorias'
import axios from 'axios'
import { loadBalancerUrl } from '../config/config'

function EditarNegocio(props) {
    const opcionesPaises = [
    {
        valor: 'Guatemala',
        texto: 'Guatemala'
    }]

    const opcionesDepartamentos = [{
        valor: 'Guatemala',
        texto: 'Guatemala'
    }, {
        valor: 'Sacatepequez',
        texto: 'Sacatepequez'
    }, {
        valor: 'Petén',
        texto: 'Petén'
    }, {
        valor: 'Jutiapa',
        texto: 'Jutiapa'
    }, {
        valor: 'Jalapa',
        texto: 'Jalapa'
    }, {
        valor: 'Alta Verapaz',
        texto: 'Alta Verapaz'
    }, {
        valor: 'Baja Verapaz',
        texto: 'Baja Verapaz'
    }, {
        valor: 'Suchitepequez',
        texto: 'Suchitepequez'
    }, {
        valor: 'Quiché',
        texto: 'Quiché'
    }, {
        valor: 'Huehuetenango',
        texto: 'Huehuetenango'
    }, {
        valor: 'San Marcos',
        texto: 'San Marcos'
    }, {
        valor: 'Retalhuleu',
        texto: 'Retalhuleu'
    }, {
        valor: 'Zacapa',
        texto: 'Zacapa'
    }, {
        valor: 'Izabal',
        texto: 'Izabal'
    }, {
        valor: 'Sololá',
        texto: 'Sololá'
    }, {
        valor: 'Escuintla',
        texto: 'Escuintla'
    }, {
        valor: 'Santa Rosa',
        texto: 'Santa Rosa'
    }, {
        valor: 'El Progreso',
        texto: 'El Progreso'
    }, {
        valor: 'Quetzaltenango',
        texto: 'Quetzaltenango'
    }, {
        valor: 'Mazatenango',
        texto: 'Mazatenango'
    }, {
        valor: 'Chimaltenango',
        texto: 'Chimaltenango'
    }, {
        valor: 'Chiquimula',
        texto: 'Chiquimula'
    }]

    const opcionesMunicipios = [{
        valor: 'Guatemala',
        texto: 'Guatemala'
    }, {
        valor: 'Villa Nueva',
        texto: 'Villa Nueva'
    }, {
        valor: 'Amatilán',
        texto: 'Amatilán'
    }]

    const opcionesZonas = [{
        valor: '1',
        texto: 'Zona 1'
    }, {
        valor: '2',
        texto: 'Zona 2'
    }, {
        valor: '3',
        texto: 'Zona 3'
    }, {
        valor: '4',
        texto: 'Zona 4'
    }]

    const [ emprendimiento, setEmprendimiento ] = useState({
        nombre: '',
        descripcion: '',
        telefono: '',
        email: '',
        webPage: '',
        municipio: '',
        departamento: '',
        pais: '',
        zona: '',
        categorias: ''
    })
    const [loading, setLoading] = useState(true)
    const [categoriasSeleccionadas, agregarCategoria] = useState([])
    const [categorias, setCategorias] = useState([])

    useEffect(async function() {
        debugger
        const response = await axios.get('http://' + loadBalancerUrl + ':3001/api/v1/emprendimiento/' + props.match.params.idEmprendimiento, {
            headers: {
              'Authorization': sessionStorage.getItem('usuario_token')
            }})

        if(response.data.errorAutorizacion === true) {
            document.querySelector('#linkNoAutorizado').click()
            return
        }
        
        setEmprendimiento(response.data.emprendimiento)

        const categorias = response.data.emprendimiento.categorias.split(',')
        setCategorias(categorias)
        for (let i = 0; i < categorias.length; i++) {
            const elemento = document.querySelector('#check_' + categorias[i].replace(/\s/g, ""))
            if (elemento) elemento.click()
        }

        const selectPais = document.querySelector('#selectPais')
        for (let i = 0; i < selectPais.options.length; i++) {
            const element = selectPais.options[i];
            
            if (element.value === response.data.emprendimiento.pais) {
                selectPais.selectedIndex = i
                selectPais.value = element.value
                break
            }
        }

        const selectDepartamento = document.querySelector('#selectDepartamento')
        for (let i = 0; i < selectDepartamento.options.length; i++) {
            const element = selectDepartamento.options[i];
            
            if (element.value === response.data.emprendimiento.departamento) {
                selectDepartamento.selectedIndex = i
                selectDepartamento.value = element.value
                break
            }
        }

        const selectMunicipio = document.querySelector('#selectMunicipio')
        for (let i = 0; i < selectMunicipio.options.length; i++) {
            const element = selectMunicipio.options[i];
            
            if (element.value === response.data.emprendimiento.municipio) {
                selectMunicipio.selectedIndex = i
                selectMunicipio.value = element.value
                break
            }
        }

        const selectZona = document.querySelector('#selectZona')
        for (let i = 0; i < selectZona.options.length; i++) {
            const element = selectZona.options[i];
            
            if (element.value === response.data.emprendimiento.zona) {
                selectZona.selectedIndex = i
                selectZona.value = element.value
                break
            }
        }
        setLoading(false)
    }, loading)

    const verificarCategoria = function(e) {
        if (e.target.checked === true) agregarCategoria(function(array) {
            return [...array, e.target.value]
        })
        else agregarCategoria(function(array) {
            const index = array.indexOf(e.target.value)
            if (index > -1) {
                array.splice(index, 1);
            }

            return array
        })
    }

    const handleSubmit = async function(e) {
        debugger
        e.preventDefault()

        const data = new FormData(document.querySelector('#formEditarNegocio'))

        const datos = new URLSearchParams()
        datos.append('nombre', data.get('nombre'))
        datos.append('descripcion', data.get('descripcion'))
        datos.append('telefono', data.get('telefono'))
        datos.append('email', data.get('email'))
        datos.append('webPage', data.get('paginaWeb'))
        datos.append('municipio', data.get('municipio'))
        datos.append('departamento', data.get('departamento'))
        datos.append('pais', data.get('pais'))
        datos.append('zona', data.get('zona'))
        datos.append('categorias', categoriasSeleccionadas)

        const response = await axios.put('http://' + loadBalancerUrl + ':3001/api/v1/emprendimiento/' + props.match.params.idEmprendimiento, datos, {
            headers: {
              'Authorization': sessionStorage.getItem('usuario_token') 
            }})

        if(response.data.errorAutorizacion === true) {
            document.querySelector('#linkNoAutorizado').click()
            return
        }

        document.querySelector('#linkIrANegocio').click()
    }

    return (
        <div className="container pt-5 mt-5 pb-5">
            <div className="row">
                <div className="col">
                    <TituloPagina titulo="Edita tu negocio" />
                </div>
            </div>

            <form id="formEditarNegocio" onSubmit={handleSubmit}>
                <div className="row mt-5">
                    <div className="col-lg-6 col-12">
                        <Label for="nombre" texto="Nombre del negocio" />
                        <TextInput valor={emprendimiento.nombre} name="nombre" id="nombre" clases="mb-3" tipo="text" />

                        <Label for="descripcion" texto="Descripción" />
                        <TextArea valor={emprendimiento.descripcion} name="descripcion" id="descripcion" clases="mb-3" rows="7" />

                        <Label for="telefono" texto="Número de teléfono *opcional" />
                        <TextInput valor={emprendimiento.telefono} name="telefono" id="telefono" clases="mb-3" tipo="text" />

                        <Label for="email" texto="Correo electrónico *opcional" />
                        <TextInput valor={emprendimiento.email} name="email" id="email" clases="mb-3" tipo="email" />

                        <Label for="paginaWeb" texto="Página web *opcional" />
                        <TextInput valor={emprendimiento.webPage} name="paginaWeb" id="paginaWeb" clases="mb-3" tipo="text" />
                    </div>

                    <div className="col-lg-6 col-12">                        
                        <Label texto="Ubicación" />
                        <div className="d-flex flex-column align-items-start">
                            <SelectInput name="pais" opciones={opcionesPaises} id="selectPais" clases="mb-3 w-lg-75 w-100" />
                            <SelectInput name="departamento" opciones={opcionesDepartamentos} id="selectDepartamento" clases="mb-3 w-lg-75 w-100" />
                            <SelectInput name="municipio" opciones={opcionesMunicipios} id="selectMunicipio" clases="mb-3 w-lg-75 w-100" />
                            <SelectInput name="zona" opciones={opcionesZonas} id="selectZona" clases="w-lg-75 w-100" />
                        </div>

                        <p className="mt-3">Seleccionar categorías</p>
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-lg-5 col-12 d-flex flex-column">
                                    <label id="check_Restaurante"><input onChange={verificarCategoria} type="checkbox" value="Restaurante"></input><span className="ml-2" for="categoria_restaurante">Restaurante</span></label>
                                    <label id="check_Entretenimiento"><input onChange={verificarCategoria} type="checkbox" value="Entretenimiento"></input><span className="ml-2" for="categoria_restaurante">Entretenimiento</span></label>
                                    <label id="check_Automóviles"><input onChange={verificarCategoria} type="checkbox" value="Automóviles"></input><span className="ml-2" for="categoria_restaurante">Automóviles</span></label>
                                    <label id="check_Clínicasmédicas"><input onChange={verificarCategoria} type="checkbox" value="Clínicas médicas"></input><span className="ml-2" for="categoria_restaurante">Clínicas médicas</span></label>
                                    <label id="check_Arte"><input onChange={verificarCategoria} type="checkbox" value="Arte"></input><span className="ml-2" for="categoria_restaurante">Arte</span></label>
                                </div>                            
                                <div className="col-lg-5 col-12 ml-lg-3 ml-0 mt-lg-0 mt-3 d-flex flex-column">
                                    <label id="check_Deportes"><input onChange={verificarCategoria} type="checkbox" value="Deportes"></input><span className="ml-2" for="categoria_restaurante">Deportes</span></label>
                                    <label id="check_Belleza"><input onChange={verificarCategoria} type="checkbox" value="Belleza"></input><span className="ml-2" for="categoria_restaurante">Belleza</span></label>
                                    <label id="check_Tiendageneral"><input onChange={verificarCategoria} type="checkbox" value="Tienda general"></input><span className="ml-2" for="categoria_restaurante">Tienda general</span></label>
                                    <label id="check_Educación"><input onChange={verificarCategoria} type="checkbox" value="Educación"></input><span className="ml-2" for="categoria_restaurante">Educación</span></label>
                                    <label id="check_Laboratorio"><input onChange={verificarCategoria} type="checkbox" value="Laboratorio"></input><span className="ml-2" for="categoria_restaurante">Laboratorio</span></label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 mt-5 d-flex justify-content-center">
                        <Boton tipo="submit" color="verde" texto="Editar" />
                    </div>
                </div>
            </form>
            <Link id="linkIrANegocio" to={`/app/informacion-negocio/${props.match.params.idEmprendimiento}`} params={{idEmprendimiento: props.match.params.idEmprendimiento}}></Link>            
        </div>
    )
}

export default EditarNegocio