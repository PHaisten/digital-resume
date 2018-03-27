import React, { Component } from 'react';

export default class Home extends Component {
	render() {
		return (
			<div>
				<div className="jumbotron">
					<h1 className="display-4">Payton Haisten</h1>
					<p className="lead">
						I am a junior developer with a desire to make beautiful websites and
						applications.
					</p>
					<hr className="my-4" />
					<p>Check out my work!</p>
					<p className="lead">
						<a
							className="btn btn-primary btn-lg"
							href="https://github.com/PHaisten"
							target="_blank"
							role="button"
						>
							Portfolio
						</a>
					</p>
				</div>
			</div>
		);
	}
}
