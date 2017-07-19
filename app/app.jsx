import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/Main';

//Load foundation
$(document).foundation();

//APP CSS
import 'style-loader!css-loader!sass-loader!applicationStyles';

ReactDOM.render(
	<Main />,
	document.getElementById("app")
);