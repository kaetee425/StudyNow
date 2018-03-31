import React, { Component } from 'react'
import Maps from './Map/Map'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'

class Mapping extends Component {

	render() {
		return (
			<div>
				<Navbar />
				<Maps />
				<Footer />
			</div>
		)
	}
}
export default Mapping