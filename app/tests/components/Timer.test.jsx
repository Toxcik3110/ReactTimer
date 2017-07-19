var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-dom/test-utils');

import Timer from 'Timer';

describe('Timer', () => {
	it('should exist', () => {
		expect(Timer).toExist();
	});

	it('should start timer on started status', () => {
		var timer = TestUtils.renderIntoDocument(<Timer/>);
		timer.handleStatusChange('started');
		expect(timer.state.count).toBe(0);
		setTimeout(() => {
			expect(timer.state.timerStatus).toBe('started');
			expect(timer.state.count).toBe(1);
			done();
		}, 1001);
	});

	it('should pause timer on paused status', () => {
		var timer = TestUtils.renderIntoDocument(<Timer/>);
		timer.setState({count:10});
		timer.handleStatusChange('started');
		timer.handleStatusChange('paused');
		setTimeout(() => {
			expect(timer.state.timerStatus).toBe('paused');
			expect(timer.state.count).toBe(10);
			done();
		}, 1001);
	});

	it('should stop timer on stopped status', () => {
		var timer = TestUtils.renderIntoDocument(<Timer/>);
		timer.setState({count:10});
		timer.handleStatusChange('started');
		timer.handleStatusChange('stopped');
		setTimeout(() => {
			expect(timer.state.timerStatus).toBe('stopped');
			expect(timer.state.count).toBe(0);
			done();
		}, 1001);
	});

	// 	it('should never set count less than zero', () => {
	// 		var countdown = TestUtils.renderIntoDocument(<Countdown/>);
	// 		countdown.handleSetCountdown(1)
	// 		setTimeout(() => {
	// 			expect(countdown.state.count).toBe(0);
	// 			done();
	// 		}, 3001);
	// 	});

	// 	it('should pause countdown on paused status', () => {
	// 		var countdown = TestUtils.renderIntoDocument(<Countdown/>);
	// 		countdown.handleSetCountdown(3);
	// 		countdown.handleStatusChange('paused');
	// 		setTimeout(() => {
	// 			expect(countdown.state.count).toBe(3);
	// 			expect(countdown.state.countdownStatus).toBe('paused');
	// 			done();
	// 		}, 1001);
	// 	});

	// 	it('should reset count on stopped', () => {
	// 		var countdown = TestUtils.renderIntoDocument(<Countdown/>);
	// 		countdown.handleSetCountdown(3);
	// 		countdown.handleStatusChange('stopped');
	// 		setTimeout(() => {
	// 			expect(countdown.state.count).toBe(0);
	// 			expect(countdown.state.countdownStatus).toBe('stopped');
	// 			done();
	// 		}, 1001);
	// 	});
	// });
});