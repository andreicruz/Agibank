import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import './style.sass';
import { Link } from "react-router-dom";
import header from '../../assets/header.png';

export default function Navbar() {
  const [top] = useState(false);
  document.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
      console.log('scrollei')
    }
  })

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
                  {/* <a className="font-sw" href="#people">
                    {data.path}
                  </a> */}
                </div>
              ))}
            </nav>
            </Container>
          </div>
      </header>
    </React.Fragment>
  )
}