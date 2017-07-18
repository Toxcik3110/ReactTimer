import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Nav from './Nav';
import Timer from './Timer';
import Countdown from './Countdown';


class Main extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Router>
				<div>
					<Nav />
					<div className="grid-x grid-margin-x">
						<div className="auto cell"></div>
						<div className="medium-6 large-4 cell">
							<Route exact path='/' component={Timer} />
							<Route path='/timer' component={Timer} />
							<Route path='/countdown' component={Countdown} />
						</div>
						<div className="auto cell"></div>
					</div>
				</div>
			</Router>
		);
	}	
};

export default Main
