import React, { useState } from 'react';
import classNames from "classnames";
import './style.sass';

export default function Card(element){
  const [isHovered, setHovered] = useState(false);
  return(
    <React.Fragment>
      <div className="grid-form grid-form--card">
        <div className={classNames("background", {"flip-card": isHovered})}
            style={{backgroundImage: `url(${element.path})`}}
            onMouseEnter={() => setHovered(true)} 
            onMouseOut={() => setHovered(!isHovered)}
        >
              
          
        </div>
      </div>
      {/* <div key={element.index} className="image grid-form">
        <img 
          src={element.path}
          className={classNames({"flip-card": isHovered})}
          onMouseEnter={() => setHovered(true)} 
          onMouseOut={() => setHovered(!isHovered)}
        />
        {isHovered ? '😁' : '☹️'}
      </div> */}
    </React.Fragment>
  )
}