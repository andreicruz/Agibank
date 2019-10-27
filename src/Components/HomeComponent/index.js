import React from 'react';
import Banner from '../Banner/index.js';
import Movies from '../../assets/Movies.jpg';
import Characters from '../../assets/Characters.jpg';
import Planets from '../../assets/Planets.jpg';

export default function Home() {
  return(
      <React.Fragment>
        <Banner title={'people'} image={Characters}/>
        <Banner title={'films'} image={Movies}/>
        <Banner title={'planets'} image={Planets}/>
      </React.Fragment>
    )
  }