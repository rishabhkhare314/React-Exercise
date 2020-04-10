import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Data from './components/Data'
// import ParentCounter from './components/ParentCounter'
// import'bootstrap/dist/css/bootstrap.css';
// import { Button } from 'react-bootstrap';

import ComponentC from './components/ComponentC';
import { userProvider, UserProvider } from './components/userContext';
function App() {
  return (
    <div className="App">

      <UserProvider value="Rishabh">

        <ComponentC />
      </UserProvider>
      {/* <ParentCounter /> */}
      <Data />
    </div>
  );
}

export default App;
