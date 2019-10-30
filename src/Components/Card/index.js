import React, { useState } from 'react';
import { Link } from "react-router-dom";
import classNames from "classnames";
import './style.sass';

export default function Card(element){
  const [isHovered, setHovered] = useState(false);

  return(
    <React.Fragment>
      <Link to={`people/` + element.index} 
        style={{display: element.route.name === 'people' ? 'block' : 'none'}}
        className={classNames({"hover-card": isHovered})} target="_blank"
      >
        <div className="transform">
          <p>{element.data.object.name !== undefined ? element.data.object.name : element.data.object.title}</p>
          <div
            className={classNames("background", {"hover-card": isHovered})}
            style={{backgroundImage: `url(${element.path})`}}
            onMouseEnter={() => setHovered(true)} 
            onMouseOut={() => setHovered(false)}
          >  
          </div>
        </div>
      </Link>
      <div className={classNames("transform", {"hover-card": isHovered})} style={{display: element.route.name !== 'people' ? 'block !important' : 'none'}}>
        <p>{element.data.object.name !== undefined ? element.data.object.name : element.data.object.title}</p>
        <div
          className="background"
          style={{backgroundImage: `url(${element.path})`}}
          onMouseEnter={() => setHovered(true)} 
          onMouseOut={() => setHovered(false)}
        >  
        </div>
      </div>
    </React.Fragment>
  )
}