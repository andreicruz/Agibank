import React, { useState, useEffect } from 'react';
import ky from 'ky';

export default function PageIntern(route) {
  const getData = () => ky.get(`https://swapi.co/api/starships/9/`).json();
  const [apiReturn, setReturn] = useState([]);

  async function loadReturn() {
    const response = await getData();
    setReturn([response]);
  }

  useEffect(() => {
    loadReturn();
  }, []);

  console.log(apiReturn)
  return(
    <h1>InternComponent</h1>
  )
}