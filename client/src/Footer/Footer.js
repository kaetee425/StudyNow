import React, { Component } from 'react'
import './Footer.css'

import facebook from './facebook.png'
import google from './google.png'
import linkedin from './linkedin.png'
import twitter from './twitter.png'
import youtube from './youtube.png'

const Footer = () => 

<div className="footer">

	<hr />

	<ul className="social">
		<li><a href="#"><img src={facebook} width="30" height="50" /></a></li>
		<li><a href="#"><img src={google} width="30" height="50" /></a></li>
		<li><a href="#"><img src={youtube} width="30" height="50" /></a></li>
		<li><a href="#"><img src={linkedin} width="30" height="50" /></a></li>
		<li><a href="#"><img src={twitter} width="30" height="50" /></a></li>
	</ul>

	<p>Got something to tell us?<span id="footerEmail"> katie@katie.com</span></p>
	<p>Copyright &copy; 2018 Lumi Inc.</p>

</div>

export default Footer