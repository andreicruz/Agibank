import React, { useState } from 'react';
import { Link } from "react-router-dom";
import classNames from "classnames";
import './style.sass';

export default function Card(element){
  const [isHovered, setHovered] = useState(false);

  return(
    <React.Fragment>
      <Link to={`people/` + element.index} className={classNames({"hover-card": isHovered})} params={'oi'}>
        <div
          className={classNames("background", {"hover-card": isHovered})}
          style={{backgroundImage: `url(${element.path})`}}
          onMouseEnter={() => setHovered(true)} 
          onMouseOut={() => setHovered(false)}
        >  
        </div>
      </Link>
    </React.Fragment>
  )
}