import React, { Component } from 'react';

import Timer from 'react-timer';

export default class Header extends Component {

	render() {

		const Options = { prefix: 'seconds elapsed!', delay: 100};

		return (
			<div className="app-header-container">
				<div className="app-name">
					<h1>Procrastinot</h1>
				</div>
				<div className="timer-container">
					<Timer options={Options} />
				</div>
			</div>
		);
	}
}