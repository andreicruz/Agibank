import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import './style.sass';
import { Link } from "react-router-dom";

export default function Navbar() {
  const [top] = useState(false);
  document.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
      console.log('scrollei')
    }
  })

  const [routes] = useState([
    { path: 'people' },
    { path: 'films' },
    { path: 'home' },
    { path: 'planets' },
  ]);

  return(
    <React.Fragment>
      <header onScroll={console.log('oiii')} className="header-web d-none d-md-block">
        <Container>
          <nav className="menu">
            {routes.map((data, index) => (
              <div key={index} className="column">
                <Link to={`/` + data.path}>aaaaaaa</Link>
                {/* <a className="font-sw" href="#people">
                  {data.path}
                </a> */}
              </div>
            ))}
          </nav>
          </Container>
      </header>
    </React.Fragment>
  )
}