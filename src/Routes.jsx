import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
var Main = require('./components/Main.jsx');
var App = require('./Application.jsx');

var Routes = (
	<Route path='/' component={App}>
		<IndexRoute component={Main} />
	</Route>
);

module.exports = Routes;