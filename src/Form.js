import React, { Component } from 'react';

class Form extends Component {

	componentWillMount() {
		const funcDef = "def "+this.props.sort.title+"_sort(arr):";
		const newState = {};
		const steps = this.props.sort.steps.map((step, i) => {
			newState[i]=funcDef;
		});
		this.setState(newState);
	}

	render(){
		console.log(this.state);
		const steps = this.props.sort.steps.map((step, i) => {
			let englishStep = i+". "+step;
			return (
				<div className="form-step">
					<label>{englishStep}</label>
					{/*<textarea form="main-form">
						{this.state.prevStep}
					</textarea>*/}
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