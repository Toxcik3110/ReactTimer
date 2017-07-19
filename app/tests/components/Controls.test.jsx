var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-dom/test-utils');

import Controls from 'Controls';

describe('Controls', () => {
	it('should exist', () => {
		expect(Controls).toExist();
	});
	describe('render', () => {
		it('should render pause when started', () => {
			var clock = TestUtils.renderIntoDocument(<Controls countdownStatus="started" />);
			var $el = $(ReactDOM.findDOMNode(clock));
			var $pauseButton = $el.find('button:contains(Pause)');
			
			expect($pauseButton.length).toBe(1);
		});
		it('should render start when paused', () => {
			var clock = TestUtils.renderIntoDocument(<Controls countdownStatus="paused" />);
			var $el = $(ReactDOM.findDOMNode(clock));
			var $pauseButton = $el.find('button:contains(Start)');
			
			expect($pauseButton.length).toBe(1);
		});
	});
});