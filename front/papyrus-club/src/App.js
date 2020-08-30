import React, { Component } from 'react';
import  { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Home from './Pages/Home';
import Chat from './Pages/Chat';

import Join from './Components/Join';
import Navbar from './Components/Navbar'
import ChatWindow from './Components/ChatWindow';

class App extends Component {

  render(){
    return(
        <Router>
          <Navbar />
          <br />
              <Switch>
                <Route exact path={"/"} component={Home} />
                <Route path='/chat' component={Chat}/>
                <Route path='/join' component={Join}/>
                <Route path='/chatwindow' component={ChatWindow}/>
              </Switch>
      </Router>
    );
  }
}

export default App;
