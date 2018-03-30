import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './App.css';
import Home from '../src/components/Home';
import NavBar from '../src/components/NavBar';
import Resume from '../src/components/Resume';

class App extends Component {
	render() {
		return (
			<Router>
				<Fragment>
					<NavBar />
					<Switch>
						<Route exact path="/" component={Home} />
						<Route path="/resume" component={Resume} />
					</Switch>
				</Fragment>
			</Router>
		);
	}
}

export default App;
