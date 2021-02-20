import './App.css';
import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import LayoutPublico from './layout/LayoutPublico'
import LayoutPrivado from './layout/LayoutPrivado'

function App(props) {
  return (
    <Router>
      <Switch>
        <Route path="/app" component={LayoutPrivado} />
        <Route path="/" component={LayoutPublico} />
      </Switch>
    </Router>
  );
}

export default App;
