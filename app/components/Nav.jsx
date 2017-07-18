import React from 'react';
import {NavLink} from 'react-router-dom';

class Nav extends React.Component {
	constructor(props) {
		super(props);
		this.onSearch = this.onSearch.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.state = {value:''};
	}

	handleChange(e) {
		this.setState({
			value: e.target.value
		});
	}

	onSearch(e) {
		e.preventDefault();
		var location = this.state.value;
		if(location.length > 0) {
			var encodedLocation = encodeURIComponent(location);
			this.state.value = '';
			window.location.search='?location=' + encodedLocation;
		}
	}

	render() {
		return (
			<div className="top-bar">
				<div className="top-bar-left">
					<ul className="menu">
						<li className="menu-text">React weather app</li>
						<li><NavLink to="/timer" activeClassName="active-link" activeStyle={{fontWeight: 'bold'}}>Timer</NavLink></li>
						<li><NavLink to="/countdown" activeClassName="active-link" activeStyle={{fontWeight: 'bold'}}>Countdown</NavLink></li>
					</ul>
				</div>
				<div className="top-bar-right">
					<form onSubmit={this.onSearch}>
						<ul className="menu">
							<li className="menu-text">Created by <a href="https://github.com/Toxcik3110" target="_blank">Toxcik</a></li>
						</ul>
					</form>
				</div>
			</div>
		);
	}
}

export default Nav