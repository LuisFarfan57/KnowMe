import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import * as Paginas from '../pages/index'
import Header from '../components/Header'
import './styles/layoutPrivado.css'

function LayoutPrivado() {
    return (
        <div>
            <Header />
            <div className="contenido">
                <Switch>
                    <Route exact path="/app/inicio" component={Paginas.Inicio} />
                    <Route exact path="/app/nuevo-negocio" component={Paginas.NuevoNegocio} />
                    <Route exact path="/app/informacion-negocio" component={Paginas.InformacionNegocio} />
                </Switch>
            </div>
        </div>
    )
}

export default LayoutPrivado