import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Loader from './Loader';


class App extends React.Component {

	state = { lat: null, errorMessage: ''};

	componentDidMount() {
		window.navigator.geolocation.getCurrentPosition(
			position => this.setState({ lat: position.coords.latitude }),
			err => this.setState({ errorMessage: err.message})
		);
	}

	renderContent() {
		if (this.state.errorMessage && !this.state.lat) {
			return <div>Error: {this.state.ErrorMessage}</div>
		} else if (this.state.lat && !this.state.errorMessage) {
			return <SeasonDisplay lat={this.state.lat} />
		} else if (!this.state.lat && !this.state.errorMessage) {
			return <Loader message="Please accept location request"/>
		}
	}

	// React says we have to define render!!
	render() {
		return (
			<div className="border red">
				{this.renderContent()}
			</div>
		);
	}
}

ReactDOM.render(
	<App />, 
	document.querySelector('#root')
);