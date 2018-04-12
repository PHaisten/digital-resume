import React, { Component } from 'react';

const navbarStyle = {
	color: 'black',
	backgroundColor: 'whitesmoke',
	paddingBottom: '1em'
};

const navHStyle = {
	color: 'rgb(204, 77, 3)',
	boxShadow: '5px 5px #cccccc',
	backgroundColor: 'white'
};

const navTStyle = {
	color: 'rgb(204, 77, 3)',
	textAlign: 'right'
};

export default class NavBar extends Component {
	render() {
		return (
			<nav
				className="navbar navbar-expand-lg navbar-light bg-light"
				style={navbarStyle}
			>
				<a className="navbar-brand p-2" href="/" style={navHStyle} id="nav-h">
					Payton Haisten
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon" />
				</button>
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav">
						<li className="nav-item">
							<a className="nav-link" href="/" style={navTStyle}>
								Home
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#experience" style={navTStyle}>
								Experience
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#skills" style={navTStyle}>
								Skills
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#work" style={navTStyle}>
								Work
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#contact" style={navTStyle}>
								Contact
							</a>
						</li>
					</ul>
				</div>
			</nav>
		);
	}
}
