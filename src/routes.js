import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import HomeComponent from './Components/HomeComponent/index';
import GridComponent from './Components/GridComponent/index';
import PageIntern from './Components/PageInternComponent/index';

export default function Routes() {
  return (
    <Router>      
      <Switch>
        <Route exact path="/personagens" component={GridComponent}/>
        <Route exact path="/filmes" component={GridComponent}/>
        <Route exact path="/planetas" component={GridComponent}/>
        <Route exact path="/people/:id" component={PageIntern}/>
        <Route path="/" component={HomeComponent}/>
      </Switch>
    </Router>
  );   
}