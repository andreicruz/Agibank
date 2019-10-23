import React, { useState } from 'react';
import classNames from "classnames";
import './style.sass';

export default function Card(element){
  console.log(`index `, element.index)
  console.log(`path `, element.path)
  console.log(`object `, element.data.object)
  const [isHovered, setHovered] = useState(false);
  const [isClicked, setClick] = useState(false);

  return(
    <React.Fragment>
      {/* <div className="grid-form grid-form--card"> */}
        <div onClick={() => setClick(!isClicked)}
            className={classNames("background", {"hover-card": isHovered}, {"flip-card": isClicked})}
            style={{backgroundImage: `url(${element.path})`}}
            onMouseEnter={() => setHovered(true)} 
            onMouseOut={() => setHovered(!isHovered)}
        >
              
          
        </div>
      {/* </div> */}
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