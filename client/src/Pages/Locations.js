import React, { Component } from 'react'
import Footer from '../Footer/Footer'
import {connect} from 'react-redux'
import { fetchBizReview, fetchBiz } from './../actions'

import './Locations.css'
import Navbar from '../Navbar/Navbar'

class  Locations extends Component {

	render() {

		return (
			<div>		
				<Navbar />
										
				<form>
					<input name="term" id="cafes" onChange={this.findOnChange} type="text" placeholder="Find: Cafe, Library, Chill Spot..." />
					<input name="location" id="cafes" onChange={this.locationOnChange} type="text" placeholder="Location: Current, SF, Redwood City..." />
					<button onClick={this.handleFormSubmit}>Submit</button>
				</form>

				<Footer />
			</div>
		)
	}
}

function mapStateToProps (state) {
	console.log('state in mapStateToProps: ', state)
	return {
		biz: state.biz
	}
}
export default connect(mapStateToProps, { fetchBizReview, fetchBiz })(Locations)
