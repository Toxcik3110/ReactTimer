import React from 'react';
import Clock from 'Clock';


class Countdown extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<Clock totalSeconds={129} />
			</div>
		);
	}	
};

export default Countdown
