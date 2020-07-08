import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import UsersPage from './pages/UsersPage/UsersPage'

import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={UsersPage}/>
      </Switch>
    </Router>
  );
}

export default App;
