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

	// componentDidMount() {
	// 	API.getBusiness()
	// }

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
				businesses: res.data,
				term: '',
				location: ''
			 })
		}
		).catch(err => console.error(err))
	}

	render() {
		if(this.state.businesses.length === 0 ) {
			return (
			<div>
					<h1>Locations</h1>

					<form>
						<input onChange={this.findOnChange} type="text" placeholder="Find: Cafe, Library, Chill Spot..." /><br />
						<input onChange={this.locationOnChange} type="text" placeholder="Location: Current, SF, Redwood City..." /><br />
						<button onClick={this.handleFormSubmit}>Submit</button>
					</form>
			 	<div>Loading ...</div>
			</div>
			)
		}
		return (
			<div>
				<h1>Locations</h1>

				<form>
					<input onChange={this.findOnChange} type="text" placeholder="Find: Cafe, Library, Chill Spot..." /><br />
					<input onChange={this.locationOnChange} type="text" placeholder="Location: Current, SF, Redwood City..." /><br />
					<button onClick={this.handleFormSubmit}>Submit</button>
				</form>

				<div className='load'>

					{this.state.businesses}
				</div>

				<Footer />
			</div>
		)
	}
}
export default Locations