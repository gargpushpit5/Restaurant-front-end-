import React from 'react';

import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/MenuComponent';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
     <Navbar dark color="primary">
         <NavbarBrand href="/">hello welocme to first tutorial</NavbarBrand>
      </Navbar>
         <Menu></Menu>
       </div>
    
    </div>
  );
}

export default App;
