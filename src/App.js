import React,{Component} from 'react';

import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/MenuComponent';
import './App.css';
import {DISHES} from './shared/dishes.js';

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES
    };
  }

  render(){
    
    return (
      <div className="App">
        <div className="container">
       <Navbar dark color="primary">
           <NavbarBrand href="/">hello welocme to first tutorial</NavbarBrand>
        </Navbar>
           <Menu dishes={this.state.dishes}></Menu>
         </div>
      
      </div>
    );
  }
 
}

export default App;
