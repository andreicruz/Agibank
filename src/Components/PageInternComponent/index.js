import React, { useState, useEffect } from 'react';
import { Row, Col, OverlayTrigger, Tooltip } from 'react-bootstrap';
import ky from 'ky';
import './style.sass';
import luke from '../../assets/luke.jpg';

export default function PageIntern(route) {
  const getData = () => ky.get(`https://swapi.co/api${route.location.pathname}`).json();
  const [apiReturn, setReturn] = useState([]);
  console.log(route.location.pathname)

  async function loadReturn() {
    const response = await getData();
    setReturn([response]);
  }

  useEffect(() => {
    loadReturn();
  }, []);

  console.log(apiReturn.map(element => console.log(element.films)))
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