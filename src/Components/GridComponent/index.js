import React, { useState } from 'react';
import CardsComponent from '../Cards/index.js';

export default function GridComponent(route) {
  const [routes] = useState([
    { route: 'people'},
    { route: 'films'},
    { route: 'planets'},
  ]);

  const actualRoute = routes.find(item => item.route === route.match.path.split('/')[1])
  return(
    <React.Fragment>
      <CardsComponent name={actualRoute.route}/>
    </React.Fragment>
  )
}