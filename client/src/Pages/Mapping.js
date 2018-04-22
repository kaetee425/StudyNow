import React, { Component } from 'react'
// import Maps from './Map/Map'
import Map2 from './Map/Map2'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'

class Mapping extends Component {

	render() {
		return (
			<div>
				<Navbar />
				<Map2 />
				<Footer />
			</div>
		)
	}
}
export default Mapping