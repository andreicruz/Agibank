import React, { useState, useEffect } from 'react';
import './style.sass';
import luke from '../../assets/luke.jpg';
import leia from '../../assets/leia.jpg';
import darth from '../../assets/darth-vader.jpg';
import c3po from '../../assets/c3po.jpg';
import r2d2 from '../../assets/r2-d2.jpg';
import defaultImage from '../../assets/default.jpg';
import ky from 'ky';
import Card from '../Card/index';


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
  const [imagesCharacters] = useState([
    {
      people: [
        { name: 'luke', path: luke },
        { name: 'c', path: c3po },
        { name: 'r2', path: r2d2 },
        { name: 'darth', path: darth },
        { name: 'leia', path: leia},
        { name: 'owen', path: defaultImage},
        { name: 'beru', path: defaultImage},
        { name: 'r5', path: defaultImage},
        { name: 'biggs', path: defaultImage},
        { name: 'obi', path: defaultImage},
        { name: 'anakin', path: defaultImage},
        { name: 'wilhuff', path: defaultImage},
        { name: '', path: defaultImage},
        { name: 'chewbacca', path: defaultImage},
        { name: 'han', path: defaultImage},
        { name: 'greedo', path: defaultImage},
        { name: 'jabba', path: defaultImage},
        { name: 'wedge', path: defaultImage},
        { name: 'jek', path: defaultImage},
        { name: 'yoda', path: defaultImage},
        { name: 'palpatine', path: defaultImage},
        { name: 'boba', path: defaultImage},
        { name: 'ig', path: defaultImage},
        { name: 'bossk', path: defaultImage},
        { name: 'lando', path: defaultImage},
        { name: 'lobot', path: defaultImage},
        { name: 'ackbar', path: defaultImage},
        { name: 'mon', path: defaultImage},
        { name: 'arvel', path: defaultImage},
        { name: 'wicket', path: defaultImage},
        { name: 'nien', path: defaultImage},
      ],
      planets: [
        { name: 'alderaan', path: r2d2 }
      ]
    }
  ]);
  const data = apiReturn.map(item => item.results)

  async function loadReturn() {
    const response = await getData();
    // console.log(response)
    setReturn([...apiReturn, response]);
  }

  function getImages(actualRoute) {
    const object = [];
    data.forEach(element => {
      element.forEach(element => {
        imagesCharacters.forEach(item => {
          item[actualRoute.name].forEach(data => {
            if (data.name === element.name.split((/[ -]/))[0].toLowerCase()) {
              object.push({ object: element, path: data.path })
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
    // setPage(apiReturn.map(item => item.next.split('=')[1]))
    // loadReturn();
    // if(page <= 1) {
    //   setPage(page + 1);
    // }
    getImages(actualRoute);
  }, [apiReturn]);

  useEffect(() => {
    // if(page <= 2){
      loadReturn();
    // }
  }, [page]);

  return (
    <React.Fragment>
      <div className="grid my-5 d-flex">
        {/* <Row> */}
          {objects.map((data, index) => (
            // <Col md={3} key={index + 1}>
              <Card key={index+1} index={index + 1} path={data.path} data={data}/>
            // </Col>
          ))}
        {/* </Row> */}
      </div>
      <button onClick={() => {setPage(page + 1)}}>load more</button>
    </React.Fragment>
  )
}