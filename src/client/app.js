import React from 'react';
import PropTypes from 'prop-types';
import {  BrowserRouter as Router, Route } from 'react-router-dom'
import {
  compose,
} from 'recompose';

import Login from './containers/login';
import Home from './containers/home';


class App extends React.Component {
    
  static childContextTypes = {
    insertCss: PropTypes.func,
  }

  getChildContext () {
    return {
        insertCss: styles => styles._insertCss(),
    }
  } 

  render() {
    return (
      <Router>
        <React.Fragment>
         <Route exact path="/" component={Login}/>
          <Route path="/home" component={Home}/>
          </React.Fragment>
      </Router>      
    );
  }
}

export default compose(

)(App);
