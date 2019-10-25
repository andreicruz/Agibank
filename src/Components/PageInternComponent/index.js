import React, { useState, useEffect } from 'react';
import { Row, Col, OverlayTrigger, Tooltip } from 'react-bootstrap';
import ky from 'ky';
import './style.sass';
import luke from '../../assets/luke.jpg';

export default function PageIntern(route) {
  const getData = () => ky.get(`https://swapi.co/api${route.location.pathname}`).json();
  // const getFilms = ()=> ky.get(`https://swapi.co/api${route.location.pathname}`).json();
  const [apiReturn, setReturn] = useState([]);
  const [storageMovies, setStorageMovies] = useState([]);
  let movies = [1,2,3];
  const getFilms = async (id) =>{
    const res = await fetch(`https://swapi.co/api/films/${id}`);
    const data = await res.json();
    return data;
  }

  async function loadReturn() {
    const response = await getData();
    setReturn([response]);
  }

  useEffect(() => {
    loadReturn();
  }, []);

  useEffect(() => {
    storageFilms();
  }, [apiReturn]);

  useEffect(() => {
    // console.log('storageee', storageMovies)
    
    if(storageMovies.length > 0){
      // storageMovies.forEach((item,index) => movies.push(item[index]))
      movies = storageMovies.map(async film => {
        const teste = await getFilms(film)
        return teste
      });
    
      console.log('movies ', movies);
      (async () => {
        const resultado = await Promise.all(movies);
        console.log('ress ', resultado);
      })();
    }
  
  }, [storageMovies]);

  function storageFilms() {
    const films = apiReturn.map(element => element.films.map(film => parseInt(film.split('/')[5])));
    movies.push(films.forEach((item, index) => item[index]))
    setStorageMovies(films)
  }



  return (
    <React.Fragment>
      {apiReturn.map((element, index) => (
        <div className="grid-form grid-form--intern">
          <div className="grid-intern">
            <div className="image">
              <img src={luke} />
            </div>
            <div className="about">            
                <div className="title">
                  <h3 className="font-sw">{element.name}</h3>
                  <div className="infos">
                    <div className="item">
                      <div className="font-sw">Hair</div>
                      <span className="font-sw">{element.hair_color}</span>
                    </div>
                    <div className="item">
                      <div className="font-sw">Skin</div>
                      <span className="font-sw">{element.skin_color}</span>
                    </div>
                    <div className="item">
                      <div className="font-sw">Eye</div>
                      <span className="font-sw">{element.eye_color}</span>
                    </div>
                    <div className="item">
                      <div className="font-sw">Birth</div>
                      <span className="font-sw">{element.birth_year}</span>
                    </div>
                  </div>
                </div>
                <div>
                  {element.films.map(item => (
                    <h3>{item}</h3>
                  ))}
                </div>
              {/* <Row>
                <Col xs={3}>
                  <div key={Math.random()} className="image">
                    <img src={luke} />
                  </div>
                </Col>
                <Col xs={3}>
                  <div key={Math.random()} className="image">
                    <img src={luke} />
                  </div>
                </Col>
                <Col xs={3}>
                  <div key={Math.random()} className="image">
                    <img src={luke} />
                  </div>
                </Col>
                <Col xs={3}>
                  <div key={Math.random()} className="image">
                    <img src={luke} />
                  </div>
                </Col>
              </Row>
              <Row>
                <Col xs={3}>
                  <div key={Math.random()} className="image">
                    <img src={luke} />
                  </div>
                </Col>
              </Row> */}
            </div>
            <div className="image">
              <img src={luke} />
            </div>
          </div>
        </div>
      ))};
    </React.Fragment>
  )
}