import React, { Component } from 'react';
import  { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Home from './Home';
import Chat from './Pages/Chat';
import Navbar from './Components/Navbar'


class App extends Component {

  render(){

    return(
        <Router>
          <Navbar />
          <br />
            <div className="container mt-3">
              <Switch>
                <Route exact path={"/"} component={Home} />
                <Route path='/chat' component={Chat}/>
              </Switch>
            </div>
      </Router>
    );
  }
}

export default App;
