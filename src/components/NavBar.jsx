import React, { Component } from 'react';
import { render } from 'react-dom';

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
	color: 'rgb(204, 77, 3)'
};

export default class NavBar extends Component {
	render() {
		return (
			<nav
				className="navbar navbar-inverse bg-inverse d-flex"
				style={navbarStyle}
				id="navbar"
			>
				<a
					className="navbar-brand mr-auto p-2"
					style={navHStyle}
					id="nav-h"
					href="/"
				>
					Payton Haisten
				</a>
				<a
					className="nav-item nav-link p-2"
					style={navTStyle}
					id="nav-t"
					href="/"
				>
					Home
				</a>
				<a
					className="nav-item nav-link p-2"
					id="nav-t"
					style={navTStyle}
					href="/work"
				>
					Work
				</a>
				<a
					className="nav-item nav-link p-2"
					id="nav-t"
					style={navTStyle}
					href="/resume"
				>
					Resumé
				</a>
				<a
					className="nav-item nav-link p-2"
					id="nav-t"
					style={navTStyle}
					href="/contact"
				>
					Contact
				</a>
			</nav>
		);
	}
}
