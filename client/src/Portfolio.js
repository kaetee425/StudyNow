import React, { Component } from 'react'
import Navpills from './Navpills/Navpills'

import Bio from './Pages/Bio'
import Mapping from './Pages/Mapping'
import Chat from './Pages/Chat'
import Locations from './Pages/Locations'

class Portfolio extends Component {
	state = {
		currentPage: "Mapping"
	};

	handlePageChange = page => {
		this.setState({
			currentPage: page
		})
	};

	renderPage = () => {
		if (this.state.currentPage === "Mapping") {
			return <Mapping />;
		} else if (this.state.currentPage === "Bio") {
			return <Bio />;
		} else if (this.state.currentPage === "Locations") {
			return <Locations />;
		} else if (this.state.currentPage === "Chat") {
			return <Chat />;
		} 
	}

	render() {
		return(
			<div>
				<nav className="navbar navbar-default navbar-fixed-top alert alert-warning">
				  <div className='container'>
				  	<Navpills 
					  	currentPage={this.state.currentPage}
					  	handlePageChange={this.handlePageChange}
				  	/>
				
				  </div>
				 </nav>

			  {this.renderPage()}

			</div>
		)
	}
}

export default Portfolio