import React from 'react';
import './style.sass';

export default function Banner({title, image}) {
  return(
    <div className="banner">
      <div className="background" style={{backgroundImage : `url(${image})`}}  >
        <h3>{title}</h3>
      </div>
    </div>
    )
  }