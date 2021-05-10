import React from 'react'
import {SelectInput} from '../components/Inputs'
import {Boton} from '../components/Boton'

function ContenedorFiltroInicio(props) {
    const opcionesPaises = [{
        valor: '',
        texto: 'Todos'
    },
    {
        valor: 'Guatemala',
        texto: 'Guatemala'
    }]

    const opcionesDepartamentos = [{
        valor: '',
        texto: 'Todos'
    }, {
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
        valor: '',
        texto: 'Todos'
    }, {
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
        valor: '',
        texto: 'Todos'
    }, {
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

    const opcionesCategorias = [{
        valor: '',
        texto: 'Todos'
    }, {
        valor: 'Restaurante',
        texto: 'Restaurante'
    }, {
        valor: 'Clínica médica',
        texto: 'Clínica médica'
    }, {
        valor: 'Belleza',
        texto: 'Belleza'
    }, {
        valor: 'Tienda general',
        texto: 'Tienda general'
    }, {
        valor: 'Entretenimiento',
        texto: 'Entretenimiento'
    }, {
        valor: 'Arte',
        texto: 'Arte'
    }, {
        valor: 'Laboratorio',
        texto: 'Laboratorio'
    }, {
        valor: 'Educación',
        texto: 'Educación'
    }, {
        valor: 'Automóviles',
        texto: 'Automóviles'
    }, {
        valor: 'Deportes',
        texto: 'Deportes'
    }]

    return (
        <div className="contenedor_filtros_inicio d-flex align-items-center justify-content-between p-3">
            <div className="d-flex align-items-center">
                <SelectInput onChange={props.recibirPais} name="pais" opciones={opcionesPaises} id="selectPais" clases="mr-3" />
                <SelectInput onChange={props.recibirDepartamento} name="departamento" opciones={opcionesDepartamentos} id="selectDepartamento" clases="mr-3" />
                <SelectInput onChange={props.recibirMunicipio} name="municipio" opciones={opcionesMunicipios} id="selectMunicipio" clases="mr-3" />
                <SelectInput onChange={props.recibirZona} name="zona" opciones={opcionesZonas} id="selectZona" clases="mr-5" />
                <SelectInput onChange={props.recibirCategoria} name="categoria" opciones={opcionesCategorias} id="selectCategoria" />
            </div>
            <div>
                <Boton onClick={props.buscarTodos} color="amarillo" texto="Todos" />
                <Boton clases="ml-3" onClick={props.buscar} color="amarillo" texto="Buscar" />
            </div>
        </div>
    )
}

export default ContenedorFiltroInicio