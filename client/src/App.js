import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import { connect } from 'react-redux';
import * as actions from './actions';

import Login from './Login/Login'
import Locations from './Pages/Locations'
import Mapping from './Pages/Mapping'
import Chat from './Pages/Chat'
import Bio from './Pages/Bio'

// import Navbar from './Navbar/Navbar'

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }


  render() {
    return (
    <Router>
      <div className="App">
      
        <Route exact path='/' component={Login} />

        <Route path='/mapping' component={Mapping} />
        <Route path='/locations' component={Locations} />          
        <Route path='/chat' component={Chat} />
        <Route path='/bio' component={Bio} />
        
      </div>
    </Router>
    );
  }
}

export default connect(null, actions)(App);
