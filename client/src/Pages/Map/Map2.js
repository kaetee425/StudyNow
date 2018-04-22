import React, { Component } from 'react'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react'
import './Map2.css'

export class MapContainer extends Component {

	state = {
		showingInforWindow: false,
		activeMarker: {},
		selectedPlace: {},
	};

	onMarkerClick = (props, marker, e) => {
		this.setState({
			selectedPlace: props,
			activeMarker: marker,
			showingInforWindow: true,
		})
	};

	onMapClicked = (props) => {
		if (this.state.showingInforWindow) {
			this.setState({
				showingInforWindow: false,
				activeMarker: null
			})
		}
	}

	render(){
		return(
			<Map className="MapContainer" 
				google={this.props.google} 
				onClick={this.onMapClicked} 
				zoom={12}>

				<Marker onClick={this.onMarkerClick} 
					name={"I'm here! Save me!"} 
					position={{lat: 37.828125, lng: -122.422844}} />

				<InfoWindow 
					marker={this.state.activeMarker}
					visible={this.state.showingInforWindow}>	
					
					<div>
						<p>{this.state.selectedPlace.name}</p>
					</div>

				</InfoWindow>

			</Map>
		)
	}
}

export default GoogleApiWrapper({
	apiKey: "AIzaSyASNnQ5btGrXQ-N5Ph6e4d3nMGTpua12U8"
})(MapContainer)