import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'

import Portfolio from './Portfolio'
import Login from './Login/Login'

class App extends Component {
  render() {
    return (
    <Router>
      <div className="App">
      
        <Route exact path='/' component={Login} />
        <Route path='/main' component={Portfolio} />
        
      </div>
    </Router>
    );
  }
}

export default App;
