import React, { useState, useEffect } from 'react';
import classNames from "classnames";
import ky from 'ky-universal';
import './style.sass';
import { listObjects } from '../../utils/index.js';

export default function PageIntern(route) {
  const getData = () => ky.get(`https://swapi.co/api${route.location.pathname}`).json();
  const [apiReturn, setReturn] = useState([]);
  const [storageMovies, setStorageMovies] = useState([]);
  const [characterMovies, setCharacterMovies] = useState([]);
  const [imageMovies, setMovies] = useState([]);
  const [characterImage, setCharacterImage] = useState([]);
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
    getImages();
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
  }, [storageMovies]);


  useEffect(() => {
    getMovieImages();
  }, [characterMovies]);

  function storageFilms() {
    const films = apiReturn.map(element => element.films.map(film => parseInt(film.split('/')[5])));
    setStorageMovies(films)
  }

  function getMovieImages(){
    if(characterMovies.length > 0) {
      const data = [];
      characterMovies.forEach(movie => {
        objects.forEach(object => {
          object['films'].forEach(item => {
            if(movie.title.toLowerCase().search(item.name) !== -1){
              data.push(item);
            }
          })
        })
      })
      setMovies(data);
    }
  }

  function getImages(){
    const data = [];
    apiReturn.forEach(element => {
      objects.forEach(object => {
        object['people'].forEach(item =>{ 
          if(element.name.toLowerCase().search(item.name) !== -1){
            data.push(item);
          }
        })
      })
    })
    setCharacterImage(data);
  }

  return (
    <React.Fragment>
      {apiReturn.map((element, index) => (
        <div key={index}>
          <div className="grid-form grid-form--intern d-none d-md-block">
            <div className="grid-intern">
              <div className="photo photo--character">
                {characterImage.map((data, index) => (
                    <div key={index}
                    className={classNames("background background--character")}
                    style={{backgroundImage: `url(${ data.path})`}}
                  > </div>
                ))}
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
                  <div className="photo">
                    {imageMovies.map((data, index) => (
                      <div key={index}
                        className={classNames("background")}
                        style={{backgroundImage: `url(${ imageMovies.length <= 2 ? data.pathLargeImage : data.path})`}}
                      >  
                      </div>
                    ))}
                  </div>
              </div>
            </div>
          </div>
          <div className="mobile d-xs-block d-md-none">
            <div className="d-flex  mb-2">
              <div className="photo photo--character photo--mobile">
                {characterImage.map((data, index) => (
                  <div key={index}
                    className={classNames("background background--character")}
                    style={{backgroundImage: `url(${ data.path})`}}
                  > </div>
                ))}
              </div>
              <div className="title">
                <h3 className="font-sw">{element.name}</h3>
                <div className="infos">
                  <div className="item">
                    <div className="font-sw">Hair:</div>
                    <span className="font-sw">{element.hair_color}</span>
                  </div>
                  <div className="item">
                    <div className="font-sw">Skin:</div>
                    <span className="font-sw">{element.skin_color}</span>
                  </div>
                  <div className="item">
                    <div className="font-sw">Eye:</div>
                    <span className="font-sw">{element.eye_color}</span>
                  </div>
                  <div className="item">
                    <div className="font-sw">Birth:</div>
                    <span className="font-sw">{element.birth_year}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="photo">
              {imageMovies.map((data, index) => (
                <div key={index}
                  className={classNames("background")}
                  style={{backgroundImage: `url(${ imageMovies.length <= 2 ? data.pathLargeImage : data.path})`}}
                >  
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </React.Fragment>
  )
}