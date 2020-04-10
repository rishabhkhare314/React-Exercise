import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Data from './components/Data'
import ParentCounter from './components/ParentCounter'
// import'bootstrap/dist/css/bootstrap.css';
// import { Button } from 'react-bootstrap';
function App() {
  return (
    <div className="App">
      <ParentCounter />
      <Data />
    </div>
  );
}

export default App;
