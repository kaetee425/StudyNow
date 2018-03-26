import React, { Component } from 'react'
import Footer from '../Footer/Footer'
import yelp from 'yelp-fusion';
// import keys from '../config/keys';
import API from '../utils/API'


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
				<div key={business.id}>
					<p>{business.name}</p>
					<p>{business.display_phone}</p>
					<p>{business.price}</p>
					<p>{business.location.display_address}</p>
					<p>{business.url}</p>
				</div>
			)
		})
		)
	}

	render() {

		return (
			<div>
				<h1>Locations</h1>

				<form>
					<input onChange={this.findOnChange} type="text" placeholder="Find: Cafe, Library, Chill Spot..." /><br />
					<input onChange={this.locationOnChange} type="text" placeholder="Location: Current, SF, Redwood City..." /><br />
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
export default Locations