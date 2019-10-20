import React, { useState, useEffect } from 'react';
import './style.sass';
import luke from '../../assets/luke.jpg';
import leia from '../../assets/leia.jpg';
import darth from '../../assets/darth-vader.jpg';
import han from '../../assets/han-solo.jpg';
import classNames from 'classnames'
import ky from 'ky';


export default function CardComponent(route) {
  const getPersons = () => ky.get(`https://swapi.co/api/${route.name}`).json();
  const [apiReturn, setReturn] = useState([]);
  const data = apiReturn.map(item => item.results)

  async function loadReturn() {
    const response = await getPersons();
    setReturn([response]);
  }

  useEffect(() => {
    loadReturn();
  }, []);
  
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
        <div className="image grid-form">
          <img src={luke}/>
        </div>
        <div className="image grid-form ml-2">
          <img src={leia}/>
        </div>
        <div className="image grid-form ml-2">
          <img src={darth}/>
        </div>
        <div className="image grid-form ml-2">
          <img src={han}/>
        </div>
      </div>
    </React.Fragment>
  )
}