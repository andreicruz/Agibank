import React, { useState, useEffect } from 'react';
import './style.sass';
import ky from 'ky';
import Card from '../Card/index';
import { listObjects } from '../../utils/index.js';

export default function CardsComponent(route) {
  const getData = () => ky.get(`https://swapi.co/api/${route.name}/?page=${page}`, {
		retry: {
      limit: 10,
			methods: ['get'],
			statusCodes: [408]
		}
	}).json();
  const [apiReturn, setReturn] = useState([]);
  const [objects, setObjects] = useState([]);
  const [actualRoute, setRoute] = useState('');
  const [page, setPage] = useState(1);
  const objectsa = listObjects();
  const data = apiReturn.map(item => item.results)

  async function loadReturn() {
    const response = await getData();
    setReturn([...apiReturn, response]);
  }

  function getImages(actualRoute) {
    const object = [];
    data.forEach(element => {
      element.forEach(element => {
        objectsa.forEach(item => {
          item[actualRoute.name].forEach(data => {
            if(actualRoute.name !== 'films') {
              if (element.name.toLowerCase().search(data.name) !== -1) {
                object.push({ object: element, path: data.path })
              }
            } else {
              if (element.title.toLowerCase().search(data.name) !== -1) {
                object.push({ object: element, path: data.path })
              }
            }
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

  useEffect(() => {
      loadReturn();
  }, [page]);

  return (
    <React.Fragment>
      <div className="grid my-5 d-flex">
          {objects.map((data, index) => { 
            if(index >= 16) {
              index = index + 1;
            }
            if(index >= 34) {
              index = index + 1;
            }
              return (<Card key={index+1} index={index + 1} path={data.path} data={data} route={route}/>)
          })}
      </div>
      <button style={{display: route.name === 'people' ? 'block' : 'none'}} className="deg_btn" onClick={() => {setPage(page + 1)}}>+</button>
    </React.Fragment>
  )
}