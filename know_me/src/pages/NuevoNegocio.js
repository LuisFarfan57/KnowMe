import React from 'react'
import TituloPagina from '../components/TituloPagina'
import {TextInput, Label, SelectInput, FileInput, TextArea} from '../components/Inputs'
import {Boton} from '../components/Boton'
import {Link} from 'react-router-dom'

function NuevoNegocio(props) {
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

    return (
        <div className="container pt-5 mt-5 pb-5">
            <div className="row">
                <div className="col">
                    <TituloPagina titulo="Publica tu negocio" />
                </div>
            </div>

            <form method="post" id="formRegistro" enctype="multipart/form-data">
                <div className="row mt-5">
                    <div className="col-lg-6 col-12">
                        <Label for="nombreDelNegocio" texto="Nombre del negocio" />
                        <TextInput name="nombreDelNegocio" id="nombreDelNegocio" clases="mb-3" tipo="text" />

                        <Label for="descripcion" texto="Descripción" />
                        <TextArea name="descripcion" id="descripcion" clases="mb-3" rows="7" />

                        <Label for="telefono" texto="Número de teléfono *opcional" />
                        <TextInput name="telefono" id="telefono" clases="mb-3" tipo="text" />

                        <Label for="email" texto="Correo electrónico *opcional" />
                        <TextInput name="email" id="email" clases="mb-3" tipo="email" />

                        <Label for="paginaWeb" texto="Página web *opcional" />
                        <TextInput name="paginaWeb" id="paginaWeb" clases="mb-3" tipo="text" />
                    </div>

                    <div className="col-lg-6 col-12">                        
                        <Label texto="Ubicación" />
                        <div className="d-flex flex-column align-items-start">
                            <SelectInput name="pais" opciones={opcionesPaises} id="selectPais" clases="mb-3 w-lg-75 w-100" />
                            <SelectInput name="departamento" opciones={opcionesDepartamentos} id="selectDepartamento" clases="mb-3 w-lg-75 w-100" />
                            <SelectInput name="municipio" opciones={opcionesMunicipios} id="selectMunicipio" clases="mb-3 w-lg-75 w-100" />
                            <SelectInput name="zona" opciones={opcionesZonas} id="selectZona" clases="w-lg-75 w-100" />
                        </div>

                        <Boton color="amarillo" texto="Seleccionar categorías" clases="mt-5" />
                    </div>
                    <div className="col-12">
                        <label for="imagenes" className="boton boton-amarillo">
                            + Agregar imágenes
                        </label>
                        <FileInput name="imagenes" id="imagenes" />
                    </div>
                    <div className="col-12 mt-5 d-flex justify-content-center">
                        <Link to="/app/informacion-negocio">
                            <Boton color="verde" texto="Crear" />
                        </Link>                        
                    </div>
                </div>
            </form>            
        </div>
    )
}

export default NuevoNegocio