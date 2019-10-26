import React, { useState } from 'react';
import { Link } from "react-router-dom";
import classNames from "classnames";
import './style.sass';

export default function Card(element){
  // console.log(`index `, element.index)
  // console.log(`path `, element.path)
  // console.log(`object `, element.data.object.name)
  const [isHovered, setHovered] = useState(false);

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
      <Link to={`people/` + element.index} className={classNames({"hover-card": isHovered})} params={'oi'}>
        <div
          className={classNames("background", {"hover-card": isHovered})}
          style={{backgroundImage: `url(${element.path})`}}
          onMouseEnter={() => setHovered(true)} 
          onMouseOut={() => setHovered(false)}
        >  
        </div>
      </Link>
        {/* <p style={{display: isClicked ? 'block' : 'none' }}>{element.data.object.name}</p> */}
      {/* </div> */}
    </React.Fragment>
  )
}