import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import Home from './Home';
import Settings from './Settings';
import Login from './admin/Login';


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/settings">
          <Settings />
        </Route>
        <Route path="/admin">
          <Login />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
