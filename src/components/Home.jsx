import React, { Component } from 'react';

const submitStyle = {
	color: 'rgb(204, 77, 3)',
	display: 'block'
};

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
				<div className="container" id="about">
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
				<div id="experience">
					<h1 className="row" id="experience-header">
						Experience
					</h1>
					<hr />

					<h5 className="row d-inline-flex">Covalence Full Stack Program</h5>
					<p
						className="row d-inline-flex font-weight-light text-muted"
						id="dates"
					>
						January 2018 - March 2018
					</p>

					<h6 className="text-muted">Student</h6>
					<div className="container" id="experience-text">
						<p className="row">
							- Led a team to create a React-Native app built with Native-Base
							components that matched mentors and mentees with shared areas of
							interest using REST API calls and SQL queries to the database.
						</p>
						<p className="row">
							- By using Node.js, our app was given a high level of
							functionality without sacrificing the user experience.
						</p>
						<p className="row">
							- Organized project responsibilities and layout with SCRUM client,
							Trello, by assigning duties to team members for daily, weekly, and
							overall goals.
						</p>
					</div>

					<h5 className="row d-inline-flex">FreeTextbooks</h5>
					<p
						className="row d-inline-flex font-weight-light text-muted"
						id="dates"
					>
						June 2016 - October 2017
					</p>

					<h6 className="text-muted">Operations Manager</h6>
					<div className="container" id="experience-text">
						<p className="row">
							- Recruited and trained 15 campus managers across seven states to
							implement operational frameworks at their universities to purchase
							over $300,000 in textbooks.
						</p>
						<p className="row">
							- Worked with a team to manage the logistics of receiving and
							sending $800,000 inventory from 30 universities to Amazon
							fulfillment centers and 4 college campuses.
						</p>
						<p className="row">
							- Downloaded daily pricing reports from sales platforms and
							organized them through Excel spreadsheets using formulas to
							determine optimal listing price.
						</p>
						<p className="row">
							- Worked with CTO and Operations team to create new functionality
							to our website and applications that benefited the inventory
							process and our network of nearly 200 reps.
						</p>
					</div>

					<h5 className="row d-inline-flex">
						Simply Southern Restaurant Group
					</h5>
					<p
						className="row d-inline-flex font-weight-light text-muted"
						id="dates"
					>
						November 2013 – June 2016
					</p>
					<h6 className="text-muted">Corporate Trainer</h6>
					<div className="container" id="experience-text">
						<p className="row">
							- Developed and edited over 50 content modules for the company’s
							first ELearning platform using Wisetail’s LMS to improve
							onboarding of new hires.
						</p>
						<p className="row">
							- Created and maintained training curriculum and processes to
							implement standards brand-wide.
						</p>
						<p className="row">
							- Successfully collaborated with franchise owners and corporate
							staff to grow total number of restaurants from eight to 40 across
							nine states in two years.
						</p>
					</div>
					<a
						className="btn btn-light pagination-centered"
						href="../file/PaytonHaistenResume.pdf"
						download="PaytonHaistenResume.pdf"
						style={submitStyle}
					>
						Download Resume
					</a>
				</div>
				<div className="container" id="skills">
					<div className="row" id="about-section">
						<div className="col">
							<h1 className="row" id="about-header">
								Skills
							</h1>
							<p className="row ml-2" id="about-text">
								HTML
							</p>
							<div className="progress">
								<div
									className="progress-bar progress-bar-striped progress-bar-animated"
									role="progressbar"
									aria-valuenow="75"
									aria-valuemin="0"
									aria-valuemax="100"
									style="width: 75%"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
