import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './Navbar.css'


const Navbar = () => 

	<div className="navigation">
		<nav className="navbar navbar-expand-lg">

		  <div className="collapse navbar-collapse" id="navbarSupportedContent">
		    <ul className="navbar-nav menu">
		      
		    	<li className="menu__item">
		            <Link to="/mapping" className="menu__link">
		                <span className="menu__title">
		                    <span className="menu__first-word" data-hover="Map">
		                        Map
		                    </span>
		                    <span className="menu__second-word" data-hover="ping">
		                       ping
		                    </span>
		                </span>
		            </Link>
		        </li>

		        <li className="menu__item">
		            <Link to="/locations" className="menu__link">
		                <span className="menu__title">
		                    <span className="menu__first-word" data-hover="Cafe">
		                        Cafe
		                    </span>
		                    <span className="menu__second-word" data-hover="Spots">
		                        Spots
		                    </span>
		                </span>
		            </Link>
		        </li>

		        <li className="menu__item">
		            <Link to="/chat" className="menu__link">
		                <span className="menu__title">
		                    <span className="menu__first-word" data-hover="Chat">
		                        Chat
		                    </span>
		                    <span className="menu__second-word" data-hover="History">
		                        History
		                    </span>
		                </span>
		            </Link>
		        </li>

		        <li className="menu__item">
		            <Link to="/bio" className="menu__link">
		                <span className="menu__title">
		                    <span className="menu__first-word" data-hover="Me">
		                        Me
		                    </span>
		                    <span className="menu__second-word" data-hover="Myself">
		                        Myself
		                    </span>
		                </span>
		            </Link>
		        </li>

		    </ul>

		  </div>
		</nav>
	</div>

export default Navbar
