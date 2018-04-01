import React, { Component } from 'react'
import Footer from '../Footer/Footer'
import yelp from 'yelp-fusion';
import API from '../utils/API'
import yelplogo from './yelp.png'
import {connect} from 'react-redux'
import { fetchBizReview } from './../actions'

import './Locations.css'
import Navbar from '../Navbar/Navbar'

class  Locations extends Component {

	constructor(props) {
		super(props);

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

	componentWillReceiveProps = (newProps) => {
		console.log('newProps', newProps);
		if (newProps.biz) {
			this.setState({
				reviews: newProps.biz
			});
		}
	}

	locationOnChange = (event) => {
		this.setState({
			location: event.target.value
		})
	}

	handleFormSubmit = (event) => {
		event.preventDefault()

		API.getBusiness({
			term: this.state.term,
			location: this.state.location
		}).then(res => {
			this.setState({
				businesses: res.data
			})
		})
		  .catch(err => console.error(err))
	}

	handleShowReview = (bizID) => {
		// event.preventDefault()
		
		this.props.fetchBizReview(bizID);
		this.props.biz;
		// console.log(bizID)
		console.log(this.props.biz)

	}

	renderContent() {
		const {businesses} = this.state

		if (!businesses) {
			<div>loading...</div>
		}

		return (
		businesses.map(business => {
			console.log(business)
			return(
				<div key={business.id} className="container foodlist">
					<div className="row">

						<div className="col-md-4 foodimg">
							<img src="http://lorempixel.com/output/nature-q-c-640-480-4.jpg" width="200px" height="200px" />
							<button onClick={()=> this.handleShowReview(business.id)}>Click for reviews</button>
						</div>

						<div className="col-md-8 details">
							<div>
								<p className="bizname">{business.name}</p>
								<p className="bizaddy">{business.location.display_address}</p>
								<p className="bizphone">{business.display_phone}</p>
								<p className="bizprice">{business.price}</p>
								<a href="{business.url}"><img className="yelplogo" src={yelplogo} /></a>
							</div>
						</div>
					</div>
				</div>
			)
		})
		)
	}

	render() {

		return (
			<div>		
				<Navbar />
										
				<form>
					<input id="cafes" onChange={this.findOnChange} type="text" placeholder="Find: Cafe, Library, Chill Spot..." />
					<input id="cafes" onChange={this.locationOnChange} type="text" placeholder="Location: Current, SF, Redwood City..." />
					<button onClick={this.handleFormSubmit}>Submit</button>
				</form>

				<div className='load'>
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
		biz: state.biz
	}
}
export default connect(mapStateToProps, { fetchBizReview })(Locations)
