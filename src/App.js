import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React from 'react';
import NavBar from './components/Navbar';
import Landing from './components/Landing'; 
import Login from './components/Login';

function App() {
  return (
    <Router>
      <NavBar /> 
      <Switch>
        {/* TODO: Rutas hacia Landing page y Login */}
        <Route exact path="/" component={Landing} />
        <Route path="/login" component={Login} />
      </Switch>
    </Router>
  );
};

export default App;
