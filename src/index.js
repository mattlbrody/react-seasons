import React from 'react';
import ReactDOM from 'react-dom';


class App extends React.Component {
	constructor(props) {
		super(props)

		// THIS IS THE ONLY TIME we do direct assignment to this.state
		this.state = { lat: null, errorMessage: '' };

		window.navigator.geolocation.getCurrentPosition(
			(position) => {
				// we called setState!!!!!
				this.setState({ lat: position.coords.latitude })

				// we did not write, it won't work!!!
				//this.state.lat = position.cords.latitude
			},
			(err) => {
				this.setState({ errorMessage: err.message})
			}
		);
	}

	// React says we have to define render!!
	render() {
		if (this.state.errorMessage && !this.state.lat) {
			return <div>Error: {this.state.ErrorMessage}</div>
		} else if (this.state.lat && !this.state.errorMessage) {
			return <div>latitude: {this.state.lat}</div>
		} else if (!this.state.lat && !this.state.errorMessage) {
			return <div>Loading Latitude...</div>
		}
	}
}

ReactDOM.render(
	<App />, 
	document.querySelector('#root')
);