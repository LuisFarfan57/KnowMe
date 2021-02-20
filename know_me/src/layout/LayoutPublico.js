import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import * as Paginas from '../pages/index'

function LayoutPublico() {
    return (
        <Switch>
            <Route exact path="/login" component={Paginas.Login} />
            <Route exact path="/registro" component={Paginas.Registro} />
        </Switch>
    )
}

export default LayoutPublico