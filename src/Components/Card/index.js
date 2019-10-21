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
  const [objects, setObjects] = useState([]);
  const [actualRoute, setRoute] = useState('');
  const [imagesCharacters] = useState([
    {
      type: [
        {
          people: [
            { name: 'luke', path: luke},
            { name: 'leia', path: leia},
            { name: 'r2', path: r2d2}
          ] 
        } 
      ]
    }
  ]);
  const data = apiReturn.map(item => item.results)
  console.log(imagesCharacters.map(item => item))

  async function loadReturn() {
    const response = await getPersons();
    setReturn([response]);
  }

  function getImages(actualRoute) {
    console.log('route ', actualRoute.name)
    const teste = actualRoute.name;
    const object = [];
    data.forEach(element => {
      element.forEach(element => {
        imagesCharacters.forEach(item => {
          item.type.forEach(type => {
            type.people.forEach(data => {
              if (data.name === element.name.split((/[ -]/))[0].toLowerCase()) {
                object.push({object: element, path: data.path})
              }
            })
          })
        })
      })
    })
    setObjects(object)
  }

  useEffect(() => {
    setRoute(route);
    loadReturn();
  }, []);
  
  useEffect(() => {
    getImages(actualRoute);
  }, [apiReturn]);

  // Todo: Ajustar para uma função
  // Verifica se o objeto da api está no array de imagens

  
  return (
    <React.Fragment>
      <div className="grid my-5">
        {objects.map(data => (
          <div key={Math.random()} className="image grid-form">
            <h1>{data.object.name}</h1>
            <img src={data.path}/>
          </div>
        ))}
      </div>
    </React.Fragment>
  )
}