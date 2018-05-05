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

	//input form setup

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

	// additional prop input for reviews + Biz after original page load 
	componentWillReceiveProps = (newProps) => {
		//reviews
		//second batch of receiving props only if the initial component props changes
		console.log("newProps", newProps)

		if (newProps.bizReviews) {
			this.setState({
				bizReviews:newProps.bizReviews
			})
		}
		
		if (newProps.biz) {
			this.setState({
				businesses:newProps.biz
			})
		}
	}

	//yelp business content load section
	renderContent() {
		const {businesses} = this.state

		if (!businesses) {
			<div>loading...</div>
		}

		return (
			businesses.map(business => {
				console.log("business:", business)

				return(

					<div key={business.id} className="constainer bizlist">
						<div>
							<p className="bizname">{business.name}</p>
							<p className="bizrate">{business.rating}</p>						
							<p className="bizaddy">{business.location.display_address}</p>
							<p className="biznum">{business.display_phone}</p>
							<p className="bizprice">{business.price}</p>	
							<p className="bizhours">Opens until ...</p>
						</div>
					</div>
				)
			})
		)
	}

	//business Reviews 

	// handleShowReview = (bizID) => {
	// 	this.props.fetchBizReview(bizID);
	// 	this.props.biz

	// 	console.log(this.props.biz)
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

				<div className="load">
					{this.renderContent()}
				</div>

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
