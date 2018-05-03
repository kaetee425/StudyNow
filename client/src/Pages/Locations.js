import React, { Component } from 'react'
import Footer from '../Footer/Footer'
import {connect} from 'react-redux'
import { fetchBizReview, fetchBiz } from './../actions'

import './Locations.css'
import Navbar from '../Navbar/Navbar'

class  Locations extends Component {

	constructor(props) {
		super(props)

		this.state = {
			businesses: [],
			reviews: [],
			term: '',
			location: ''
		}

		this.findOnChange = this.findOnChange.bind(this)
		this.locationOnChange = this.locationOnChange.bind(this)
	}

	findOnChange = (event) => {
		console.log(event.target.value)

		this.setState({
			term: event.target.value
		})
	}

	locationOnChange = (event) => {
		console.log(event.target.value)

		this.setState({
			location: event.target.value
		})
	}

	handleFormSubmit = (event) => {
		event.preventDefault()

		this.props.fetchBiz({
			term: this.state.term,
			location: this.state.location
		})
	}

	//reviews 

	// componentWillReceiveProps = (newProps) => {
	// 	//reviews
	// 	//second batch of receiving props only if the initial component props changes
	// 	console.log("newProps", newProps)

	// 	if (newProps.bizReviews) {
	// 		this.setstate({
	// 			bizReviews:newProps.bizReviews
	// 		})
	// 	}
	// }


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
		biz: state.biz,
		bizReview: state.bizReview
	}
}
export default connect(mapStateToProps, { fetchBizReview, fetchBiz })(Locations)
