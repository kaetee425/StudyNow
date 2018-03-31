// oauth 
//facebook auth 

//jumbotron...video or slides

import React, { Component } from 'react'
import './Login.css'

class Login extends Component {
	render(){
		return(
			<div>
				<div className="video-background">
					<div className="video-foreground">
						<iframe width="560" height="315" src="https://www.youtube.com/embed/tTvXssN6t0A?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=1&playlist=tTvXssN6t0A" frameborder="0" allowfullscreen></iframe>
					</div>
				</div>

				<div id="vidtop-content">
					<div className="vid-info">
						<h3>Put them specs on and bring forth all those "A-Ha!" moments</h3>
						<form>

							<input id="login" type="text" name="email" placeholder="email" /><br />
							<input id="login" type="password" name="password" placeholder="password" /><br />
							<button type="submit" value="submit">Submit</button>

							<a href="/auth/google">Login with Google</a>
						</form>
					</div>
				</div>
			</div>
		)
	}
}

export default Login