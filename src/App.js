import React,{Component} from 'react';

import 'font-awesome/css/font-awesome.css';
import 'bootstrap-social/bootstrap-social.css';
import Main from './components/MainComponent';
import { BrowserRouter } from 'react-router-dom';

import './App.css';

class App extends Component{
  
  

  render(){
    return (
      <div className="App">
       <BrowserRouter>
           <Main></Main>
       </BrowserRouter>
      
     
      </div>
    );
    }
}

export default App;
