import React,{Component} from 'react';

import 'font-awesome/css/font-awesome.css';
import 'bootstrap-social/bootstrap-social.css';
import Main from './components/MainComponent';
import { BrowserRouter } from 'react-router-dom';
//components from react
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';

import './App.css';

const store = ConfigureStore();

class App extends Component{
  
  

  render(){
    return (
    <Provider store={store}>
      <div className="App">
       <BrowserRouter>
           <Main></Main>
       </BrowserRouter>     
      </div>
    </Provider>
    );
    }
}

export default App;
