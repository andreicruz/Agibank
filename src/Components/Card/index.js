import React, { useState, useEffect } from 'react';
import { Spinner, Row, Col, OverlayTrigger, Tooltip } from 'react-bootstrap';
import './style.sass';
import luke from '../../assets/luke.jpg';
import leia from '../../assets/leia.jpg';
import darth from '../../assets/darth-vader.jpg';
import c3po from '../../assets/c3po.jpg';
import r2d2 from '../../assets/r2-d2.jpg';
import defaultImage from '../../assets/default.jpg';
import classNames from 'classnames'
import ky from 'ky';


export default function CardComponent(route) {
  const getPersons = () => ky.get(`https://swapi.co/api/${route.name}`).json();
  const [apiReturn, setReturn] = useState([]);
  const [objects, setObjects] = useState([]);
  const [actualRoute, setRoute] = useState('');
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
        { name: 'obi', path: defaultImage}
      ],
      planets: [
        { name: 'alderaan', path: r2d2 }
      ]
    }
  ]);
  const data = apiReturn.map(item => item.results)

  async function loadReturn() {
    const response = await getPersons();
    setReturn([response]);
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
    getImages(actualRoute);
  }, [apiReturn]);

  return (
    <React.Fragment>
      <div className="grid my-5">
        <Row>
          {objects.map((data, index) => (
            ['top'].map(placement => (
              <OverlayTrigger
                key={placement}
                placement={placement}
                overlay={
                  <Tooltip id={`tooltip-${placement}`}>
                    <p className="font-sw">{data.object.name}</p>
                  </Tooltip>
                }
              >
                <Col md={3}>
                  <div key={index} className="image grid-form">
                    <img src={data.path} />
                  </div>
                </Col>
              </OverlayTrigger>
            ))
          ))}
        </Row>
      </div>
    </React.Fragment>
  )
}