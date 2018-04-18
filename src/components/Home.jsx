import React, { Component } from 'react';
import ScrollUpButton from 'react-scroll-up-button';

const submitStyle = {
	color: 'rgb(204, 77, 3)',
	display: 'block'
};

const languageHtml = {
	width: '90%'
};

const languageCss = {
	width: '85%'
};

const languageJs = {
	width: '70%'
};

const languageSql = {
	width: '45%'
};

const framework = {
	width: '90%'
};

const linkb = {
	color: 'rgb(204, 77, 3)'
};

const linkc = {
	backgroundColor: 'rgb(204, 77, 3)',
	color: 'white'
};

export default class Home extends Component {
	displayScroll() {}

	scrollToTop() {
		window.scrollTo(0, 0);
	}

	render() {
		return (
			<div>
				<section className="jumbotron">
					<div className="frame">
						<p className="headerText">Payton</p>
						<p className="headerText">Haisten</p>
						<p className="underText">Full Stack Web Developer</p>
					</div>
				</section>
				<section className="container" id="about">
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
				</section>
				<section className="container-fluid" id="experience">
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
						<p className="row mt-2">
							- Was tasked to lead a team to create a React-Native app built
							with Native-Base components that matched mentors and mentees with
							shared areas of interest using REST API calls and SQL queries to
							the database.
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
				</section>
				<section className="container-fluid" id="skills">
					<h1 className="row" id="skill-header">
						Skills
					</h1>
					<hr />
					<div className="container-fluid p-4">
						<h3 className="">Languages</h3>
						<h6 className="py-2">HTML</h6>
						<div className="progress">
							<div
								className="progress-bar progress-bar-striped progress-bar-animated bg-warning py-1"
								role="progressbar"
								aria-valuenow="75"
								aria-valuemin="0"
								aria-valuemax="100"
								style={languageHtml}
							/>
						</div>
						<h6 className="py-1">CSS</h6>
						<div className="progress">
							<div
								className="progress-bar progress-bar-striped progress-bar-animated bg-warning py-1"
								role="progressbar"
								aria-valuenow="75"
								aria-valuemin="0"
								aria-valuemax="100"
								style={languageCss}
							/>
						</div>
						<h6 className="py-1">JavaScript/JQuery</h6>
						<div className="progress">
							<div
								className="progress-bar progress-bar-striped progress-bar-animated bg-warning py-1"
								role="progressbar"
								aria-valuenow="50"
								aria-valuemin="0"
								aria-valuemax="100"
								style={languageJs}
							/>
						</div>
						<h6 className="py-1">Node.js</h6>
						<div className="progress">
							<div
								className="progress-bar progress-bar-striped progress-bar-animated bg-warning py-1"
								role="progressbar"
								aria-valuenow="75"
								aria-valuemin="0"
								aria-valuemax="100"
								style={languageJs}
							/>
						</div>
						<h6 className="py-1">Express</h6>
						<div className="progress">
							<div
								className="progress-bar progress-bar-striped progress-bar-animated bg-warning w-50 py-1"
								role="progressbar"
								aria-valuenow="50"
								aria-valuemin="0"
								aria-valuemax="100"
							/>
						</div>
						<h6 className="py-1">ES6/ES7</h6>
						<div className="progress">
							<div
								className="progress-bar progress-bar-striped progress-bar-animated bg-warning w-50 py-1"
								role="progressbar"
								aria-valuenow="50"
								aria-valuemin="0"
								aria-valuemax="100"
							/>
						</div>
						<h6 className="py-1">SQL</h6>
						<div className="progress">
							<div
								className="progress-bar progress-bar-striped progress-bar-animated bg-warning py-1"
								role="progressbar"
								aria-valuenow="25"
								aria-valuemin="0"
								aria-valuemax="100"
								style={languageSql}
							/>
						</div>
					</div>
					<div className="container-fluid p-4">
						<h3 className="">Frameworks</h3>
						<h6 className="py-1">React.js</h6>
						<div className="progress">
							<div
								className="progress-bar progress-bar-striped progress-bar-animated bg-warning py-1"
								style={framework}
								role="progressbar"
								aria-valuenow="90"
								aria-valuemin="0"
								aria-valuemax="100"
							/>
						</div>
						<h6 className="py-1">React.Native</h6>
						<div className="progress">
							<div
								className="progress-bar progress-bar-striped progress-bar-animated bg-warning py-1 w-75"
								role="progressbar"
								aria-valuenow="75"
								aria-valuemin="0"
								aria-valuemax="100"
							/>
						</div>
						<h6 className="py-2">Bootstrap</h6>
						<div className="progress">
							<div
								className="progress-bar progress-bar-striped progress-bar-animated bg-warning w-75"
								style={framework}
								role="progressbar"
								aria-valuenow="75"
								aria-valuemin="0"
								aria-valuemax="100"
							/>
						</div>
						<h6 className="py-2">WordPress</h6>
						<div className="progress">
							<div
								className="progress-bar progress-bar-striped progress-bar-animated bg-warning w-50"
								style={framework}
								role="progressbar"
								aria-valuenow="50"
								aria-valuemin="0"
								aria-valuemax="100"
							/>
						</div>
					</div>
					<div className="container-fluid p-4">
						<h3 className="">Tools</h3>
						<h6 className="py-1">Github/Git</h6>
						<div className="progress">
							<div
								className="progress-bar progress-bar-striped progress-bar-animated bg-warning py-1"
								style={framework}
								role="progressbar"
								aria-valuenow="90"
								aria-valuemin="0"
								aria-valuemax="100"
							/>
						</div>
						<h6 className="py-1">VSC</h6>
						<div className="progress">
							<div
								className="progress-bar progress-bar-striped progress-bar-animated bg-warning py-1"
								style={framework}
								role="progressbar"
								aria-valuenow="90"
								aria-valuemin="0"
								aria-valuemax="100"
							/>
						</div>
						<h6 className="py-1">Adode CS</h6>
						<div className="progress">
							<div
								className="progress-bar progress-bar-striped progress-bar-animated bg-warning py-1 w-75"
								style={framework}
								role="progressbar"
								aria-valuenow="75"
								aria-valuemin="0"
								aria-valuemax="100"
							/>
						</div>
					</div>
				</section>
				<section className="container-fluid" id="work">
					<h1 className="row" id="experience-header">
						Work
					</h1>
					<hr className="pb-4" />
					<div className="row" id="mentor">
						<div className="col d-inline-flex" id="mentorimg" />
						<div className="col mt-5">
							<h3 className="row" id="work-header">
								Mentor.me
							</h3>
							<p className="row" id="work-text">
								While in Covalence, we were tasked with creating a React Native
								app that functioned as a way for thos who wanted to learn more
								about web development and programming to connect.
							</p>
							<a
								className="btn btn-light btn-sm ml-2"
								style={linkb}
								href="https://github.com/PHaisten/mentor.me-frontend"
								target="_blank"
								rel="noopener noreferrer"
							>
								View Project
							</a>
						</div>
					</div>
					<div className="row" id="mentor">
						<div className="col mt-5 mr-5">
							<h3 className="row" id="work-header">
								Chirpr
							</h3>
							<p className="row" id="work-text">
								Another Covalence project I was tasked with was to make a
								Twitter clone called, Chirpr. The site utilizes Bootstrap, REST
								API calls, MySQL database, Node.js, and React.js. Click the link
								below to view my code!
							</p>
							<a
								className="btn btn-light btn-sm ml-2"
								style={linkb}
								href="https://github.com/PHaisten/chirpr"
								target="_blank"
								rel="noopener noreferrer"
							>
								View Project
							</a>
						</div>
						<div className="col d-inline-flex" id="chirprimg" />
					</div>
					<div className="row" id="mentor">
						<div className="col d-inline-flex mr-5" id="currentimg" />
						<div className="col mt-5">
							<h3 className="row" id="work-header">
								The Current
							</h3>
							<p className="row" id="work-text">
								Using WordPress, I created a blog for a friend called The
								Current. I consulted with my friend and trained him on how to
								manage his blog using the CMS. Installed SEO, Google Analytics,
								and many more traffic driving plugins to increase and track web
								presence. Click below to view the finished product!
							</p>
							<a
								className="btn btn-light btn-sm ml-2"
								style={linkb}
								href="http://thecurrent.me"
								target="_blank"
								rel="noopener noreferrer"
							>
								View Project
							</a>
						</div>
					</div>
					<h2 className="row" id="more-header">
						Much more to come...
					</h2>
				</section>

				<section className="container-fluid" id="contact">
					<div className="col-lg-8">
						<h2 className="row offset-md-2" id="contact-header">
							Reach out if you like my work!
						</h2>

						<a
							className="row btn btn-xl offset-md-5 mt-3"
							style={linkc}
							href="mailto:me@paytonhaisten.com"
						>
							Let's chat
						</a>
					</div>
				</section>
				<ScrollUpButton />
				<footer class="footer">
					<div class="container">
						<span class="text-muted">Developed by Payton Haisten.</span>

						<a
							href="https://www.facebook.com/phaisten"
							target="_blank"
							rel="noopener noreferrer"
							className="fa fa-facebook-square"
							id="icon1"
							aria-hidden="true"
						>
							.
						</a>
						<a
							href="https://www.linkedin.com/in/phaisten/"
							target="_blank"
							rel="noopener noreferrer"
							className="fa fa-linkedin"
							id="icon2"
							aria-hidden="true"
						>
							.
						</a>
						<a
							href="https://github.com/PHaisten"
							target="_blank"
							rel="noopener noreferrer"
							className="fa fa-github"
							id="icon3"
							aria-hidden="true"
						>
							.
						</a>
						<a
							href="https://instagram.com/PHaisten"
							target="_blank"
							rel="noopener noreferrer"
							className="fa fa-instagram"
							id="icon4"
							aria-hidden="true"
						>
							.
						</a>
					</div>
				</footer>
			</div>
		);
	}
}
