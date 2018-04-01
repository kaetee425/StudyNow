import React, { Component } from 'react'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'

import {connect} from 'react-redux'

import './Bio.css'

class Bio extends Component {

	componentDidMount () {
		this.props.auth;
	}

	renderContent() {
		const {auth} = this.props

		if (!auth) {
			return <div> loading... </div>
		}

		const newAvatarSize = "300"
		var imageStr = auth.avatar;
		var newImageStr = imageStr.split('?sz=50')[0]+'?sz='+newAvatarSize
		
		return (
			<div className="profile container">
				<div className="row">
					<div className="col-md-6">
						<img id="image" src={newImageStr}/>
					</div>

					<div className="col-md-6">
						<h2 id="name">{auth.name}</h2>
						<p id="email">{auth.email}</p>
						<hr />

						<h4>What subject(s) are you currently working on?</h4>
						<p>Javascript, React, React Native, General UI</p>

						<h4>What are you masters of?</h4>
						<p>HTML/CSS, Javacsript</p>

						<h4>Any projects in mind? Ongoing proejects?</h4>
						<p>List the general idea below to attract other like minded people!</p>
						<textarea rows="6" cols="50"/>

						<h4>What are you looking to do here?</h4>
						<form>
							<input id="roleform" type="checkbox" name="role" value="mentor"/>I want a mentor.<br />
							<input id="roleform" type="checkbox" name="role" value="study"/>I want people to study with. <br />
							<input id="roleform" type="checkbox" name="role" value="mentorship"/>I want to mentor others.<br />
							<input id="roleform" type="checkbox" name="role" value="projects"/>I want to start projects with others.<br />
						</form>
					</div>
				</div>
			</div>
		)
	}

	render() {
		return (
			<div>	

			<Navbar />		
				{this.renderContent()}
				<Footer />
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		auth: state.auth
	}
}

export default connect(mapStateToProps, null)(Bio)
