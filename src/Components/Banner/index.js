import React from 'react';
import './style.sass';
import { Link } from "react-router-dom";

export default function Banner({title, image}) {
  return(
    <Link to={title}>
      <div className="banner">
        <div className="background" style={{backgroundImage : `url(${image})`}}  >
          <h3>{title}</h3>
        </div>
      </div>
    </Link>
    )
  }