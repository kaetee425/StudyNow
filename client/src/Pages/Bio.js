import React, { Component } from 'react'
import Footer from '../Footer/Footer'

import {connect} from 'react-redux'

class Bio extends Component {

	componentDidMount () {
		this.props.auth;
	}

	renderContent() {
		const {auth} = this.props
		console.log(this.props)

		if (!auth) {
			return <div> loading... </div>
		}

		
	}

	render() {
		return (
			<div>
				<h1>Bio</h1>
				{this.renderContent()}
				<Footer />
			</div>
		)
	}
}

function mapStateToProps(state) {
	console.log('state in mapStateToProps: ', state)
	return {
		auth: state.auth
	}
}

export default connect(mapStateToProps, null)(Bio)