import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'

import Login from './Login/Login'
import Locations from './Pages/Locations'
import Mapping from './Pages/Mapping'
import Chat from './Pages/Chat'
import Bio from './Pages/Bio'

import Navbar from './Navbar/Navbar'

class App extends Component {
  render() {
    return (
    <Router>
      <div className="App">
      
        <Route exact path='/' component={Login} />

        <Navbar />

        <Route path='/locations' component={Locations} />          
        <Route path='/mapping' component={Mapping} />
        <Route path='/chat' component={Chat} />
        <Route path='/bio' component={Bio} />
        
      </div>
    </Router>
    );
  }
}

export default App;
