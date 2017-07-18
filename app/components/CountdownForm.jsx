import React from 'react';


class CountdownForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value:'',
		}
		this.onFormSubmit = this.onFormSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e) {
		this.setState({
			value:e.target.value,
		})
	}

	onFormSubmit(e) {
		e.preventDefault();
		var strSeconds = this.state.value;
		if(strSeconds.match(/^[0-9]*$/)) {
			this.setState({
				value:'',
			});
			this.props.onSetCountdown(parseInt(strSeconds, 10));
		}
	}

	render() {
		return (
			<div>
				<form onSubmit={this.onFormSubmit} className="countdown-form">
					<input type="text" placeholder="Enter time in seconds" value={this.state.value} onChange={this.handleChange} />
					<button className="button expanded">Start</button>

				</form>
			</div>
		);
	}	
};

export default CountdownForm
