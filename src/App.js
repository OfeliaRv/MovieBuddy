import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import Dashboard from './pages/Dashboard';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import Featured from './pages/Featured';
import ComingSoon from './pages/ComingSoon';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/featured">
            <Featured />
          </Route>
          <Route path="/coming_soon">
            <ComingSoon />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
