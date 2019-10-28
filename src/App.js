import React from 'react';
import Container from 'react-bootstrap/Container';
import Home from './Components/HomeComponent/index.js';
import Routes from './routes';
import Navbar from './Components/Navbar/index.js';

function App() {
  return (
    <div className="App">
      {/* <Navbar/> */}
      {/* <Container>z */}
        <Routes>
          <Home/>
        </Routes>
      {/* </Container> */}
    </div>
  );
}

export default App;
