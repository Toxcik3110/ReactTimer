import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';


class Main extends React.Component {
	constructor(props) {
		super(props);
	}

	// <Route exact path='/' component={Weater} />
	// <Route path='/weather' component={Weater} />
	// <Route path='/about' component={About} />
	// <Route path='/examples' component={Examples} />

	render() {
		return (
			<Router>
				<div>
					<p>Main.jsx Rendered</p>
				</div>
			</Router>
		);
	}	
};

export default Main
