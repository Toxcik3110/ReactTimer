import React from 'react';
import Clock from 'Clock';
import CountdownForm from 'CountdownForm';


class Countdown extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			count:0,
			countdownStatus:'stopped',
		};
		this.handleSetCountdown = this.handleSetCountdown.bind(this);
		this.startTimer = this.startTimer.bind(this);
	}

	handleSetCountdown(seconds) {
		this.setState({
			count:seconds,
			countdownStatus:'started',
		});
	}

	componentDidUpdate(prevProps, prevState) {
		// console.log(1)
		// console.log(this.state.countdownStatus)
		// console.log(prevState.countdownStatus)
		if(this.state.countdownStatus !== prevState.countdownStatus) {
			switch(this.state.countdownStatus){
				case 'started':
					this.startTimer();
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

	render() {
		var {count} = this.state;
		return (
			<div>
				<Clock totalSeconds={count} />
				<CountdownForm onSetCountdown={this.handleSetCountdown} />
			</div>
		);
	}	
};

export default Countdown
