import React, { useState } from 'react';
import classNames from "classnames";
import './style.sass';

export default function Card(element){
  // console.log(`index `, element.index)
  // console.log(`path `, element.path)
  // console.log(`object `, element.data.object.name)
  const [isHovered, setHovered] = useState(false);
  const [isClicked, setClick] = useState(false);

  // function mouseOut(){
  //   if(isClicked){
  //     setHovered(true)
  //   }else{
  //     setHovered(!isHovered)
  //   }
  // }

  return(
    <React.Fragment>
      {/* <div className="grid-form grid-form--card"> */}
        <div onClick={() => setClick(!isClicked)}
            className={classNames("background", {"hover-card": isHovered}, {"flip-card": isClicked}, {"active-card": isClicked})}
            style={{backgroundImage: `url(${element.path})`}}
            onMouseEnter={() => setHovered(true)} 
            onMouseOut={() => setHovered(false)}
        >
          <p>{element.data.object.name}</p>    
              <p>{element.data.object.name}</p>
          <p>{element.data.object.name}</p>    
        </div>
        {/* <p style={{display: isClicked ? 'block' : 'none' }}>{element.data.object.name}</p> */}
      {/* </div> */}
    </React.Fragment>
  )
}