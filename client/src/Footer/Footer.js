import React, { Component } from 'react'
import './Footer.css'

import facebook from './facebook.png'
import google from './google.png'
import linkedin from './linkedin.png'
import twitter from './twitter.png'

const Footer = () => 

<div className="footer alert alert-warning" role="warning">

	<ul className="social">
		<li><a href="#"><img src={facebook} width="40" height="40" /></a></li>
		<li><a href="#"><img src={google} width="40" height="40" /></a></li>
		<li><a href="#"><img src={linkedin} width="40" height="40" /></a></li>
		<li><a href="#"><img src={twitter} width="40" height="40" /></a></li>
	</ul>
	
	<hr />

	<h7>Got something to tell us?<span id="footerEmail"> katie@katie.com</span></h7><br />
	<h8> &copy; 2018 aHA Inc. All Rights Reserved</h8>

</div>

export default Footer