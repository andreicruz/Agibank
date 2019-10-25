import React, { useState, useEffect } from 'react';
import classNames from "classnames";
import ky from 'ky';
import './style.sass';
import luke from '../../assets/luke.jpg';
import { listObjects } from '../../utils/index.js';

export default function PageIntern(route) {
  const getData = () => ky.get(`https://swapi.co/api${route.location.pathname}`).json();
  const [apiReturn, setReturn] = useState([]);
  const [storageMovies, setStorageMovies] = useState([]);
  const [characterMovies, setCharacterMovies] = useState([]);
  const [data, setData] = useState([]);
  const objects = listObjects();

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
    if(storageMovies.length > 0){
      const movies = storageMovies[0].map(async film => {
        const data = await getFilms(film)
        return data
      });
    
      (async () => {
        const result = await Promise.all(movies);
        setCharacterMovies(result)
      })();
    }
  
    getImages();
  }, [storageMovies]);


  useEffect(() => {
    getImages();
  }, [characterMovies]);

  function storageFilms() {
    const films = apiReturn.map(element => element.films.map(film => parseInt(film.split('/')[5])));
    setStorageMovies(films)
  }

  function getImages(){
    if(characterMovies.length > 0) {
      const teste = [];
      characterMovies.forEach(movie => {
        objects.forEach(object => {
          object['movies'].map((item => {
            if(movie.title.toLowerCase().search(item.name) != -1){
              teste.push(item);
            }
          }))
        })
      })
      setData(teste);
    }
  }

  // console.log(`fcharacter movies` , characterMovies)
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
                <div className="teste">
                  {data.map(data => (
                    <div
                      className={classNames("background")}
                      style={{backgroundImage: `url(${data.path})`}}
                    >  
                    </div>
                    // <img src={data.path}/>
                  ))}
                  {/* {characterMovies.map(item => (
                    <h3>{item.title}</h3>
                  ))} */}
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