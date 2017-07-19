import React from 'react';
import Clock from 'Clock';
import CountdownForm from 'CountdownForm';
import Controls from 'Controls';

class Countdown extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			count:0,
			countdownStatus:'stopped',
		};
		this.handleSetCountdown = this.handleSetCountdown.bind(this);
		this.startTimer = this.startTimer.bind(this);
		this.handleStatusChange = this.handleStatusChange.bind(this);
	}

	handleSetCountdown(seconds) {
		this.setState({
			count:seconds,
			countdownStatus:'started',
		});
	}

	componentDidUpdate(prevProps, prevState) {
		if(this.state.countdownStatus !== prevState.countdownStatus) {
			switch(this.state.countdownStatus){
				case 'started':
					this.startTimer();
					break;
				case 'stopped': 
					this.setState({count:0});
				case 'paused':
					clearInterval(this.timer);
					this.timer = undefined;
					break;
			}
		}
	}

	startTimer() {
		var that = this;
		this.timer = setInterval(function() {
			// console.log("2")
			var newCount = that.state.count - 1;
			that.setState({
				count:newCount >= 0 ? newCount : 0,
			})
		}, 1000);
	}

	handleStatusChange(newStatus) {
		this.setState({
			countdownStatus:newStatus,
		});
	}

	render() {
		var {count, countdownStatus} = this.state;
		var that = this;
		var renderControlArea = () => {
			if(countdownStatus !== "stopped") {
				return (<Controls countdownStatus={countdownStatus} onStatusChange={this.handleStatusChange} />);
			} else {
				return (<CountdownForm onSetCountdown={this.handleSetCountdown} />);
			}
		}

		return (
			<div>
				<Clock totalSeconds={count} />
				{renderControlArea()}
			</div>
		);
	}	
};

export default Countdown
