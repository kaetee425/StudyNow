import React, { Component } from 'react'
import Footer from '../Footer/Footer'


class  Locations extends Component {
	render() {
		return (
			<div>
				<h1>Locations</h1>

				<form>
					<input type="text" placeholder="Search" /><br />
					<button>Submit</button>
				</form>

				<Footer />
			</div>
		)
	}
}
export default Locations