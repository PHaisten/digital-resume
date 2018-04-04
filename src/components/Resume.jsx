import React, { Component } from 'react';

export default class Home extends Component {
	render() {
		return (
			<div className="card-columns">
				<div className="card">
					<img
						className="card-img-top"
						src="https://course_report_production.s3.amazonaws.com/rich/rich_files/rich_files/3708/s200/covalence-stacked-600.jpg"
						alt="Covalence Full Stack Bootcamp"
					/>
					<div className="card-body">
						<h5 className="card-title">Covalence Full Stack</h5>
						<p className="card-text">
							- Led a team to create a React-Native app built with Native-Base
							components that matched mentors and mentees with shared areas of
							interest using REST API calls and SQL queries to the database.
						</p>
						<p className="card-text">
							- By using Node.js, our app was given a high level of
							functionality without sacrificing the user experience.
						</p>
						<p className="card-text">
							- Organized project responsibilities and layout with SCRUM client,
							Trello, by assigning duties to team members for daily, weekly, and
							overall goals.
						</p>
					</div>
				</div>
				{/* <div className="card p-3">
					<blockquote className="blockquote mb-0 card-body">
						<p>
							Covalence has taught me not only how to engineer websites and
							applications from start to finish, but to also how to teach
							myself. They provided the resources and I implemented my problem
							solving abilities to learn and improve.
						</p>
					</blockquote>
				</div> */}
				<div className="card">
					<img
						className="card-img-top"
						src="https://media.glassdoor.com/sqll/961423/freetextbooks-squarelogo-1501087578037.png"
						alt="FreeTextbooks"
					/>
					<div className="card-body">
						<small className="text-muted">FreeTextbooks</small>
						<h5 className="card-title">Operations Manager</h5>
						<p className="card-text">
							- Recruited and trained 15 campus managers across seven states to
							implement operational frameworks at their universities to purchase
							over $300,000 in textbooks.
						</p>
						<p className="card-text">
							- Worked with a team to manage the logistics of receiving and
							sending $800,000 inventory from 30 universities to Amazon
							fulfillment centers and 4 college campuses.
						</p>
						<p className="card-text">
							- Downloaded daily pricing reports from sales platforms and
							organized them through Excel spreadsheets using formulas to
							determine optimal listing price.
						</p>
						<p className="card-text">
							- Worked with CTO and Operations team to create new functionality
							to our website and applications that benefited the inventory
							process and our network of nearly 200 reps.
						</p>
					</div>
				</div>
				<div className="card">
					<img
						className="card-img-top"
						src={url('../images/covalence.jpg')}
						alt="Simply Southern Restaurant Group"
					/>
					<div className="card-body">
						<small className="text-muted">
							Simply Southern Restaurant Group
						</small>
						<h5 className="card-title">Corporate Trainer</h5>
						<p className="card-text">
							- Developed and edited over 50 content modules for the company’s
							first ELearning platform using Wisetail’s LMS to improve
							onboarding of new hires.
						</p>
						<p className="card-text">
							- Created and maintained training curriculum and processes to
							implement standards brand-wide.
						</p>
						<p className="card-text">
							- Successfully collaborated with franchise owners and corporate
							staff to grow total number of restaurants from eight to 40 across
							nine states in two years.
						</p>
					</div>
				</div>
				{/* <div className="card bg-primary text-white text-center p-3">
					<blockquote className="blockquote mb-0">
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
							posuere erat.
						</p>
						<footer className="blockquote-footer">
							<small>
								Someone famous in <cite title="Source Title">Source Title</cite>
							</small>
						</footer>
					</blockquote>
				</div>
				<div className="card text-center">
					<div className="card-body">
						<h5 className="card-title">Card title</h5>
						<p className="card-text">
							This card has supporting text below as a natural lead-in to
							additional content.
						</p>
						<p className="card-text">
							<small className="text-muted">Last updated 3 mins ago</small>
						</p>
					</div>
				</div>
				<div className="card">
					<img className="card-img" src="..." alt="Card image" />
				</div>
				<div className="card p-3 text-right">
					<blockquote className="blockquote mb-0">
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
							posuere erat a ante.
						</p>
						<footer className="blockquote-footer">
							<small className="text-muted">
								Someone famous in <cite title="Source Title">Source Title</cite>
							</small>
						</footer>
					</blockquote>
				</div>
				<div className="card">
					<div className="card-body">
						<h5 className="card-title">Card title</h5>
						<p className="card-text">
							This is a wider card with supporting text below as a natural
							lead-in to additional content. This card has even longer content
							than the first to show that equal height action.
						</p>
						<p className="card-text">
							<small className="text-muted">Last updated 3 mins ago</small>
						</p>
					</div>
                </div> */}
				<a
					className="btn btn-primary btn-lg"
					href="../file/PaytonHaistenResume.pdf"
					download="PaytonHaistenResume.pdf"
				>
					Download PDF
				</a>
			</div>
		);
	}
}

// "http://www.chickensaladchick.com/sites/default/files/csc-logo.png"
