var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-dom/test-utils');

import Countdown from 'Countdown';

describe('Countdown', () => {
	it('should exist', () => {
		expect(Countdown).toExist();
	});

	describe('handleSetCountdown', () => {
		it('should set state to started and countdown', () => {
			var countdown = TestUtils.renderIntoDocument(<Countdown/>);
			countdown.handleSetCountdown(10)
			
			expect(countdown.state.count).toBe(10);
			expect(countdown.state.countdownStatus).toBe('started');

			setTimeout(() => {
				expect(countdown.state.count).toBe(9);
				done();
			}, 1001);
		});

		it('should never set count less than zero', () => {
			var countdown = TestUtils.renderIntoDocument(<Countdown/>);
			countdown.handleSetCountdown(1)
			
			// expect(countdown.state.count).toBe(0);
			// expect(countdown.state.countdownStatus).toBe('started');

			setTimeout(() => {
				expect(countdown.state.count).toBe(0);
				done();
			}, 3001);
		});
	});



	// describe('formatSeconds', () => {
	// 	it('should format seconds', () => {
	// 		var clock = TestUtils.renderIntoDocument(<Clock />);
	// 		var seconds = 615;
	// 		var expected = '10:15';
	// 		var actual = clock.formatSeconds(seconds);
	// 		expect(actual).toBe(expected);
	// 	});
	// 	it('should format seconds when min/sec are less than 10', () => {
	// 		var clock = TestUtils.renderIntoDocument(<Clock />);
	// 		var seconds = 61;
	// 		var expected = '01:01';
	// 		var actual = clock.formatSeconds(seconds);
	// 		expect(actual).toBe(expected);
	// 	});
	// });
});