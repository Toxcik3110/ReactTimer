import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/Main';

//Load foundation
import 'style-loader!css-loader!foundation-sites/dist/css/foundation.min.css';
$(document).foundation();

//APP CSS
import 'style-loader!css-loader!sass-loader!applicationStyles';

ReactDOM.render(
	<Main />,
	document.getElementById("app")
);