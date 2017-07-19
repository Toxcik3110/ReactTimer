import React from 'react';
import PropTypes from 'prop-types';


class Controls extends React.Component {
	constructor(props) {
		super(props);
		this.onStatusChange = this.onStatusChange.bind(this);
	}

	onStatusChange(newStatus) {
		var that = this;
		return () => {
			that.props.onStatusChange(newStatus);
		}
	}

	render() {
		var {countdownStatus} = this.props;
		var renderStartStopButton = () => {
			if(countdownStatus === 'started') {
				return (<button onClick={this.onStatusChange("paused")} className="button secondary">Pause</button>);
			} else if (countdownStatus === 'paused') {
				return (<button onClick={this.onStatusChange("started")} className="button primary">Start</button>);
			}
		}
		return (
			<div className="controls">
				{renderStartStopButton()}
				<button onClick={this.onStatusChange("stopped")} className="button alert hollow">Clear</button>
			</div>
		);
	}
};

Controls.propTypes = {
	countdownStatus: PropTypes.string.isRequired,
	onStatusChange: PropTypes.func.isRequired,
}

export default Controls
