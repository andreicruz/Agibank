import React from 'react';
import Container from 'react-bootstrap/Container';
import Home from './Components/HomeComponent/index.js';
import Routes from './routes';

function App() {
  return (
    <div className="App">
      <Container>
        <Routes>
          <Home/>
        </Routes>
      </Container>
    </div>
  );
}

export default App;
