import React, { useState, useEffect } from 'react';
import luke from '../../assets/luke.jpg';
import lightside from '../../assets/lightside.png';
import ky from 'ky';
import './style.sass';
import '../../style.sass';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
}));


export const getPersons = () => ky.get("https://swapi.co/api/people").json();

export default function GridComponent() {
  const classes = useStyles();
  const [people, setPerson] = useState([]);

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
        <div className="info grid-form mx-3">
          <div className="bio grid-form">
            <p>Informações</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}