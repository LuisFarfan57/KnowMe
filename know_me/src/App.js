import './App.css';
import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import * as Paginas from './pages/index'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Paginas.Login} />
        <Route path="/registro" component={Paginas.Registro} />
      </Switch>
    </Router>
  );
}

export default App;
