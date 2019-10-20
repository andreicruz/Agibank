import React, { useState, useEffect } from 'react';
import './style.sass';
import luke from '../../assets/luke.jpg';
import leia from '../../assets/leia.jpg';
import r2d2 from '../../assets/darth-vader.jpg';
import han from '../../assets/han-solo.jpg';
import classNames from 'classnames'
import ky from 'ky';


export default function CardComponent(route) {
  const getPersons = () => ky.get(`https://swapi.co/api/${route.name}`).json();
  const [apiReturn, setReturn] = useState([]);
  const [imagesCharacters] = useState([
    // { name: 'luke', path: luke},
    { name: 'leia', path: leia},
    { name: 'r2', path: r2d2}
  ]);
  const data = apiReturn.map(item => item.results)

  async function loadReturn() {
    const response = await getPersons();
    setReturn([response]);
  }

  useEffect(() => {
    loadReturn();
  }, []);
  

  // Todo: Ajustar para uma função
  // Verifica se o objeto da api está no array de imagens
  const datinha = [];
  data.forEach(element => {
    element.forEach(teste => {
      imagesCharacters.forEach(character => {
        if (character.name === teste.name.split((/[ -]/))[0].toLowerCase()) {
          datinha.push(character)
        }
      })
    })
  })
  console.log('newww ', datinha)
  return (
    <React.Fragment>
      <ul>
        {data.map(item => (
          item.map(element => (
            <li key={Math.random()}>
              {element.name}
            </li>
          ))
        ))}
      </ul>
      <div className="grid my-5">
        {datinha.map(character => (
          <div key={Math.random()} className="image grid-form">
            <img src={character.path}/>
          </div>
        ))}
      </div>
    </React.Fragment>
  )
}