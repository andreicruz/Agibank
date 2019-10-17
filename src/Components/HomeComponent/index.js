import React from 'react';
import Banner from '../Banner/index.js';
import Movies from '../../assets/Movies.jpg';
import Characters from '../../assets/Characters.jpg';
import Planets from '../../assets/Planets.jpg';

export default function Home() {
  return(
      <React.Fragment>
        <Banner title={'Personagens'} image={Characters}/>
        <Banner title={'Filmes'} image={Movies}/>
        <Banner title={'Planetas'} image={Planets}/>
      </React.Fragment>
    )
  }