import React from 'react';
import { render } from 'react-dom';
import { Listings } from './sections';
import * as serviceWorker from './serviceWorker';

render(
	// takes 2 arguments
	// 1. what's being rendered
	<React.StrictMode>
		<Listings title='TinyHouse Listings' />
	</React.StrictMode>,
	// 2. where it's being rendered
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
