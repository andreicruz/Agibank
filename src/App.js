import React from 'react';
import Home from './Components/HomeComponent/index.js';
import Routes from './routes';

function App() {
  return (
    <div className="App">
      <Routes>
        <Home/>
      </Routes>
    </div>
  );
}

export default App;
