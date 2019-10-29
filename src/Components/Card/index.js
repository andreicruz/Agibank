import React, { useState } from 'react';
import { Link } from "react-router-dom";
import classNames from "classnames";
import './style.sass';

export default function Card(element){
  const [isHovered, setHovered] = useState(false);

  console.log(element)
  // TODO Em cards botei a route. element.route
  return(
    <React.Fragment>
      <Link to={`people/` + element.index} className={classNames({"hover-card": isHovered})}>
        <div
          className={classNames("background", {"hover-card": isHovered})}
          style={{backgroundImage: `url(${element.path})`}}
          onMouseEnter={() => setHovered(true)} 
          onMouseOut={() => setHovered(false)}
        >  
        <p>{element.data.object.name}</p>
        </div>
      </Link>
    </React.Fragment>
  )
}