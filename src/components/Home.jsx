import React, { Component } from 'react';

export default class Home extends Component {
	render() {
		return (
			<div>
				<div className="jumbotron">
					<div className="frame">
						<p className="headerText">Payton</p>
						<p className="headerText">Haisten</p>
						<p className="underText">Full Stack Web Developer</p>
					</div>
				</div>
				<div className="container" id="body">
					<div className="row" id="about-section">
						<div className="col" id="about-image" />
						<div className="col">
							<h1 className="row ml-2" id="about-header">
								About Me
							</h1>
							<p className="row ml-2" id="about-text">
								Web Developer with experience in creating responsive websites
								and applications, that are aesthetically pleasing and
								functional. With my experience in operations and training I am
								able to learn in fast pace environments, improve processes and
								efficiencies, and lead others with deadlines in mind.
							</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
