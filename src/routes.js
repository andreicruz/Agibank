import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import HomeComponent from './Components/HomeComponent/index';
import GridComponent from './Components/GridComponent/index';
import PageIntern from './Components/PageInternComponent/index';
import Navbar from './Components/Navbar/index';

export default function Routes() {
  return (
    <Router>
      <div>
        <Navbar/>
        <Switch>
          <Route key="1" exact path="/people" component={GridComponent}/>
          <Route key="2"exact path="/films" component={GridComponent}/>
          <Route key="3"exact path="/planets" component={GridComponent}/>
          <Route exact path="/people/:id" component={PageIntern}/>
          <Route path="/" component={HomeComponent}/>
        </Switch>
      </div>
    </Router>
  );   
}