import React, { useState, useEffect } from 'react';
import luke from '../../assets/luke.jpg';
import leia from '../../assets/leia.jpg';
import darth from '../../assets/darth-vader.jpg';
import han from '../../assets/han-solo.jpg';
import classNames from 'classnames'
import ky from 'ky';
import './style.sass';
import '../../style.sass';

export const getPersons = () => ky.get("https://swapi.co/api/people").json();

export default function GridComponent() {
  const [people, setPerson] = useState([]);
  const [isOpened, setValue] = useState(false);

  async function loadPersons() {
    const response = await getPersons();
    console.log(response);
    setPerson(response);
  }

  useEffect(() => {
    loadPersons();
  }, []);
  
  return(
    <React.Fragment>
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