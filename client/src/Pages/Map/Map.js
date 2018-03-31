import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'

const AnyReactComponent = ({text}) => <div>{text}</div>

export default class Maps extends Component {
	static defaultProps = {
		center: { lat: 37.558, lng:-122.270},
		zoom: 11
	}

	render(){
		return(
			<div style={{ height: '100vh', width: '100%' }}>
				<GoogleMapReact
					defaultCenter={this.props.center}
					defaultZoom={this.props.zoom}>
					<AnyReactComponent
						lat={37.558}
						lng={-122.270}
						text={"Where's Waldo?"}
					/>
				</GoogleMapReact>
			</div>
		)
	}
}