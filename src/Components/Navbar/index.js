import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Container from 'react-bootstrap/Container';
import './style.sass';
import { Link } from "react-router-dom";
import header from '../../assets/header.png';
import { faBars, faHome } from '@fortawesome/free-solid-svg-icons'

export default function Navbar() {
  const [showMenu, setDisplayMenu] = useState(false);
  const [routes] = useState([
    { path: 'people'},
    { path: 'films' },
    { path: 'home', image: header },
    { path: 'planets' },
  ]);

  return(
    <React.Fragment>
      <header className="d-none d-md-block">
        <div className="header-web">
          <Container>
            <nav className="menu">
              {routes.map((data, index) => (
                <div key={index} className="column font-sw">
                  <div className="background">                                      
                    <Link to={`/` + data.path}>{data.path}</Link>
                  </div>
                </div>
              ))}
            </nav>
            </Container>
          </div>
      </header>
      <header className="header-mobile d-xs-block d-md-none">
        <Container>
          <div className="itens">
            <div className="home">
              <Link to="/home"><FontAwesomeIcon size={'2x'} icon={faHome}/></Link>
            </div>
            <div className="menu">
              <span onClick={() => setDisplayMenu(!showMenu)}>
                <FontAwesomeIcon size={'2x'} icon={faBars} />
              </span>
            </div>
          </div>
          <div style={{display: showMenu === true ? 'block' : 'none'}} className="hidden-menu">
            <ul className="nav navbar-nav">
              {routes.map((data, index) => (
                <li key={index}>
                  <Link onClick={() => setDisplayMenu(false)} to={`/` + data.path}>{data.path}</Link>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </header>
    </React.Fragment>
  )
}