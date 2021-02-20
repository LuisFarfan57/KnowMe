import React from 'react'
import TituloPagina from '../components/TituloPagina'
import {TextInput, Label, SelectInput, FileInput, TextArea} from '../components/Inputs'
import {Boton} from '../components/Boton'
import {Link} from 'react-router-dom'

function InformacionNegocio(props) {
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
                    <TituloPagina titulo="Tienda de la esquina" />
                </div>
            </div>

            <div className="row mt-5">
                <div className="col-lg-6 col-12">
                    <Label clases="font-weight-bold" texto="Descripción" />
                    <p className="mb-3">Esta es la tienda de la esquina</p>

                    <Label clases="font-weight-bold" texto="Número de teléfono" />
                    <p className="mb-3">12345678</p>

                    <Label clases="font-weight-bold" texto="Correo electrónico" />
                    <p className="mb-3">tienda@correo.com</p>

                    <Label clases="font-weight-bold" texto="Página web" />
                    <p className="mb-3">www.tienda.com</p>
                </div>

                <div className="col-lg-6 col-12">                        
                    <Label clases="font-weight-bold" texto="Ubicación" />
                    <div className="d-flex flex-column">
                        <div className="contenedorInput mb-3">
                            <span>Guatemala</span>
                        </div>

                        <div className="contenedorInput mb-3">
                            <span>Guatemala</span>
                        </div>

                        <div className="contenedorInput mb-3">
                            <span>Villa Nueva</span>
                        </div>

                        <div className="contenedorInput mb-3">
                            <span>Zona 2</span>
                        </div>
                    </div>

                    <Label clases="font-weight-bold" texto="Categorías" />
                    <div className="d-flex flex-column">
                        <div className="contenedorInput mb-3">
                            <span>Restaurante</span>
                        </div>

                        <div className="contenedorInput mb-3">
                            <span>Entretenimiento</span>
                        </div>
                    </div>
                </div>
                
                <div className="col-12 mt-5 d-flex justify-content-center">
                    <Link to="/app/inicio">
                        <Boton color="verde" texto="Regresar" />
                    </Link>                        
                </div>
            </div>         
        </div>
    )
}

export default InformacionNegocio