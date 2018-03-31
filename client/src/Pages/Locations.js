import React, { Component } from 'react'
import Footer from '../Footer/Footer'
import yelp from 'yelp-fusion';
import API from '../utils/API'
import yelplogo from './yelp.png'

import './Locations.css'
import Navbar from '../Navbar/Navbar'

class  Locations extends Component {

	constructor(props) {
		super(props);

		this.state = {
			businesses: [],
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

	renderContent() {
		const {businesses} = this.state

		if (!businesses) {
			<div>loading...</div>
		}

		return (
		businesses.map(business => {
			return(
				<div className="container foodlist">
					<div className="row">

						<div className="col-md-4 foodimg">
							<img src="http://lorempixel.com/output/nature-q-c-640-480-4.jpg" width="200px" height="200px" />
						</div>

						<div className="col-md-8 details">
							<div key={business.id}>
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

//function mapDispatchToProps(data) {
	// return {
		
	// }
// }
export default Locations