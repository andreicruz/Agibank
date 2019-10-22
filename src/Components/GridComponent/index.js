import React, { useState, useEffect } from 'react';
import CardsComponent from '../Cards/index.js';

export default function GridComponent(route) {
  const [routes] = useState([
    { route: 'personagens', newRoute: 'people'},
    { route: 'filmes', newRoute: 'films'},
    { route: 'planetas', newRoute: 'planets'},
  ]);

  const actualRoute = routes.find(item => item.route === route.match.path.split('/')[1])
  return(
    <React.Fragment>
      <CardsComponent name={actualRoute.newRoute}/>
    </React.Fragment>
  )
}