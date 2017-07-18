import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Nav from './Nav';


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
							<h1>Hello!</h1>
						</div>
						<div className="auto cell"></div>
					</div>
				</div>
			</Router>
		);
	}	
};

export default Main
