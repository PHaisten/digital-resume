import React, { Component } from 'react';
// import NetlifyForm from 'react-netlify-form';
var reactNetlifyForm = require('react-netlify-form');

export default class ContactForm extends Component {
	render() {
		return (
			<div className="row">
				{/* <form name="contact" method="POST" netlify netlify-honeypot="bot-field">
					<p>
						<label>
							Your Name: <input type="text" name="name" />
						</label>
					</p>
					<p>
						<label>
							Your Email: <input type="email" name="email" />
						</label>
					</p>
					<p>
						<label>
							Message: <textarea name="message" />
						</label>
					</p>
					<p>
						<button type="submit">Send</button>
					</p>
                </form> */}
				<reactNetlifyForm>
					{formState => (
						<div>
							{formState.loading && 'Loading...'}
							{formState.error && 'Error.'}
							{formState.success && 'Success.'}
							<input type="text" name="Name" required />
							<textarea name="Message" required />
							<button>Submit</button>
						</div>
					)}
				</reactNetlifyForm>
			</div>
		);
	}
}
