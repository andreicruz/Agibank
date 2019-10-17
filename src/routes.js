import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import HomeComponent from './Components/HomeComponent/index';
import GridComponent from './Components/GridComponent/index';

export default function Routes() {
  return (
    
    <Router>      
      <Switch>
        <Route exact path="/personagens" component={GridComponent}/>
        <Route path="/" component={HomeComponent}/>
      </Switch>
    </Router>
  );   
}