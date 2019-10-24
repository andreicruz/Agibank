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

  console.log(apiReturn)
  return (
    <React.Fragment>
      <div className="grid-form grid-form--intern">
        <div className="grid-intern">
          <div key={Math.random()} className="image">
            <img src={luke} />
          </div>
          <div className="infos">
            {/* {apiReturn.map((element, index) => ( */}
              <div className="title">
                <h2 className="font-sw">Luke Skywalker</h2>
                <span className="font-sw">Blond</span>
              </div>
            {/* // ))} */}
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
        </div>
      </div>
    </React.Fragment>
  )
}