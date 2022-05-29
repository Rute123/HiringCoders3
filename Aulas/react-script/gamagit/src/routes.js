//Arquivo que gerencia as rotas e redireciona

import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Repositories from './pages/Repositories';
import Home from './pages/Home';

export default function Routes(){
    return ( 
      <BrowserRouter>
       <Switch>
         <Route path="/" exact component={Home} />
         <Route path = "/repositories" exact component = {Repositories} />
       </Switch>
      </BrowserRouter>
    )
}
