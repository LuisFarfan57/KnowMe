import React from 'react'
import {SelectInput} from '../components/Inputs'
import {Boton} from '../components/Boton'

function ContenedorFiltroInicio(props) {
    const opcionesPaises = [{
        valor: 'guatemala',
        texto: 'Guatemala'
    }]

    const opcionesDepartamentos = [{
        valor: 'guatemala',
        texto: 'Guatemala'
    }, {
        valor: 'sacatepequez',
        texto: 'Sacatepequez'
    }, {
        valor: 'peten',
        texto: 'Petén'
    }, {
        valor: 'jutiapa',
        texto: 'Jutiapa'
    }, {
        valor: 'jalapa',
        texto: 'Jalapa'
    }, {
        valor: 'alta_verapaz',
        texto: 'Alta Verapaz'
    }, {
        valor: 'baja_verapaz',
        texto: 'Baja Verapaz'
    }, {
        valor: 'suchitepeques',
        texto: 'Suchitepequez'
    }, {
        valor: 'quiche',
        texto: 'Quiché'
    }, {
        valor: 'huehuetenango',
        texto: 'Huehuetenango'
    }, {
        valor: 'san_marcos',
        texto: 'San Marcos'
    }, {
        valor: 'retalhuleu',
        texto: 'Retalhuleu'
    }, {
        valor: 'zacapa',
        texto: 'Zacapa'
    }, {
        valor: 'izabal',
        texto: 'Izabal'
    }, {
        valor: 'solola',
        texto: 'Sololá'
    }, {
        valor: 'escuintla',
        texto: 'Escuintla'
    }, {
        valor: 'santa_rosa',
        texto: 'Santa Rosa'
    }, {
        valor: 'el_progreso',
        texto: 'El Progreso'
    }, {
        valor: 'quetzaltenango',
        texto: 'Quetzaltenango'
    }, {
        valor: 'mazatenango',
        texto: 'Mazatenango'
    }, {
        valor: 'chimaltenango',
        texto: 'Chimaltenango'
    }, {
        valor: 'chiquimula',
        texto: 'Chiquimula'
    }]

    const opcionesMunicipios = [{
        valor: 'guatemala',
        texto: 'Guatemala'
    }, {
        valor: 'villa_nueva',
        texto: 'Villa Nueva'
    }, {
        valor: 'amatitlan',
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

    const opcionesCategorias = [{
        valor: 'restaurante',
        texto: 'Restaurante'
    }, {
        valor: 'clinica_medica',
        texto: 'Clínica médica'
    }, {
        valor: 'belleza',
        texto: 'Belleza'
    }, {
        valor: 'tienda_general',
        texto: 'Tienda general'
    }, {
        valor: 'entretenimiento',
        texto: 'Entretenimiento'
    }, {
        valor: 'arte',
        texto: 'Arte'
    }, {
        valor: 'laboratorio',
        texto: 'Laboratorio'
    }, {
        valor: 'educacion',
        texto: 'Educación'
    }, {
        valor: 'automoviles',
        texto: 'Automóviles'
    }, {
        valor: 'deportes',
        texto: 'Deportes'
    }]

    return (
        <div className="contenedor_filtros_inicio d-flex align-items-center justify-content-between p-3">
            <div className="d-flex align-items-center">
                <SelectInput name="pais" opciones={opcionesPaises} id="selectPais" clases="mr-3" />
                <SelectInput name="departamento" opciones={opcionesDepartamentos} id="selectDepartamento" clases="mr-3" />
                <SelectInput name="municipio" opciones={opcionesMunicipios} id="selectMunicipio" clases="mr-3" />
                <SelectInput name="zona" opciones={opcionesZonas} id="selectZona" clases="mr-5" />
                <SelectInput name="categoria" opciones={opcionesCategorias} id="selectCategoria" />
            </div>
            <div>
                <Boton color="amarillo" texto="Buscar" />
            </div>
        </div>
    )
}

export default ContenedorFiltroInicio