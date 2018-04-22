import React, { Component } from 'react'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react'
import './Map2.css'

export class MapContainer extends Component {
	render(){
		return(
			<Map className="MapContainer" google={this.props.google} zoom={14}>
				<Marker onClick={this.onMarkerClick} name={'Current Location'} />

				<InfoWindow onClose={this.onInfoWindowClose}>	
					<div>
						<h1>Place</h1>
					</div>
				</InfoWindow>

			</Map>
		)
	}
}

export default GoogleApiWrapper({
	apiKey: "AIzaSyASNnQ5btGrXQ-N5Ph6e4d3nMGTpua12U8"
})(MapContainer)