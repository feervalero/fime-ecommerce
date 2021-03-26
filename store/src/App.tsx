import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Home from './Home';
import Config from './Config';
import Menu from './Menu';
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/store/config" component={Config}/>
        <Route path="/store" component={Home}/>
      </Switch>
    </Router>
  );
}

export default App;
