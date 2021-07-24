import React from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Cadastrar } from './pages/Cadastrar';
import { Visualizar } from './pages/Visualizar';
import { Editar } from './pages/Editar';
import { Deletar } from './pages/Deletar';


function App() { 

  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/cadastrar" component={Cadastrar}/>
          <Route path="/visualizar/:id" component={Visualizar}/>
          <Route path="/editar/:id" component={Editar}/>
          <Route path="/deletar/:id" component={Deletar}/>
        </Switch>
      </Router>      
    </div>
  );
}

export default App;
