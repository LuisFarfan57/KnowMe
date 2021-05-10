import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import * as Paginas from '../pages/index'
import Header from '../components/Header'
import './styles/layoutPrivado.css'

function LayoutPrivado() {
    return (
        <div>
            <Header />
            <div className="alert alert-danger hide" id="errorAutorizacion">
                No autorizado
            </div>
            <div className="contenido">
                <Switch>
                    <Route exact path="/app/inicio" component={Paginas.Inicio} />
                    <Route exact path="/app/nuevo-negocio" component={Paginas.NuevoNegocio} />
                    <Route exact path="/app/mis-negocios" component={Paginas.MisNegocios} />
                    <Route exact path="/app/informacion-negocio/:idEmprendimiento" component={Paginas.InformacionNegocio} />
                    <Route exact path="/app/editar-negocio/:idEmprendimiento" component={Paginas.EditarNegocio} />
                    <Route exact path="/app/eliminar-negocio/:idEmprendimiento" component={Paginas.EliminarNegocio} />
                </Switch>
                <Link id="linkNoAutorizado" to="/login"></Link>
            </div>
        </div>
    )
}

export default LayoutPrivado