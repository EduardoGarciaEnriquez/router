//container component
import React, {Component} from 'react';
import Navbar from './components/navbar';
import Home from './components/home';
import About from './components/about';
import Contact from './components/contact';
import {BrowserRouter, Route} from 'react-router-dom';

class App extends Component{
  render(){
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar/>
          <Route path="/home.js" component={Home}/>
          <Route path="/about.js" component={About}/>
          <Route path="/contact.js" component={Contact}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
