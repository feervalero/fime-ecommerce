import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Home';
import Config from './Config';
import Menu from './Menu';
function App() {
  return (
    <Router>
      <Menu />
      <Switch>
        <Route path="/config" component={Config}/>
        <Route path="/" component={Home}/>
      </Switch>
    </Router>
  );
}

export default App;
