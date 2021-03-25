import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Config from './Config';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/config" component={Config}/>
        <Route path="/" component={Home}/>
      </Switch>
    </Router>
  );
}

export default App;
