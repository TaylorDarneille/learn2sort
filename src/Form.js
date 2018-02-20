import React, { Component } from 'react';

class Form extends Component {
	render(){
		let count = 0;
		const steps = this.props.sort.steps.map((step, i) => {
			let englishStep = i+". "+step;
			count ++;
			return (
				<div className="form-step">
					<label>{englishStep}</label>
					<textarea form="main-form">Enter text here</textarea>
				</div>
			)
		});

		return (
			<form id="main-form">
				{steps}
			</form>
		)
	}
}

export default Form;