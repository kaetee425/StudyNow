import React, { Component } from 'react'
import Footer from '../Footer/Footer'

import {connect} from 'react-redux'

class Bio extends Component {

	componentDidMount () {
		this.props.auth;
	}

	renderContent() {

		if (!auth) {
			return <div> loading... </div>
		}

		const newAvatarSize = "300"
		var imageStr = auth.avatar;
		var newImageStr = imageStr.split('?sz=50')[0]+'?sz='+newAvatarSize
		
		return (
			<div className="profile">
				<img id="image" src={newImageStr}/>
				<h2 id="name">{auth.name}</h2>
				<h3 id="email">{auth.email}</h3>
			</div>
		)
	}

	render() {
		return (
			<div>			
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