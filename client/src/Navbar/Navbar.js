import React, { Component } from 'react';
import { Link } from 'react-router-dom'

const Navbar = () => 

	<div>
		<nav className="navbar navbar-expand-lg alert-warning">
		  <a className="navbar-brand" href="#">Navbar</a>

		  <div className="collapse navbar-collapse" id="navbarSupportedContent">
		    <ul className="navbar-nav mr-auto">
		      
		      <li className="nav-item active">
		        <Link to="/locations">Locations</Link>
		      </li>

		       <li className="nav-item active">
		        <Link to="/mapping">Mapping</Link>
		      </li>

		       <li className="nav-item active">
		        <Link to="/chat">Chat</Link>
		      </li>

		       <li className="nav-item active">
		        <Link to="/bio">Bio</Link>
		      </li>
		 
		    </ul>

		  </div>
		</nav>
	</div>

export default Navbar