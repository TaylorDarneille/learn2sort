import React, { Component } from 'react';

class Form extends Component {

	componentWillMount() {
		const funcDef = "def "+this.props.sort.title+"_sort(arr):";
		const newState = {};
		for (let i=0; i<this.props.sort.steps.length; i++) {
			newState[i]=funcDef;
		};
		this.setState(newState);
	}

	updateBoxes = (e) => {
		console.log("udpating box: "+e.target.id);
		this.setState({[e.target.id]: e.target.value});
	}

	render(){
		console.log(this.state);
		const steps = this.props.sort.steps.map((step, i) => {
			let englishStep = i+". "+step;
			if (i==0) {
				return (
					<div className="form-step">
						<label>{englishStep}</label>
						<textarea id={i} form="main-form" onChange={this.updateBoxes} value={this.state[i]}/>
					</div>
				)
			}
			else {
				return (
					<div className="form-step">
						<label>{englishStep}</label>
						<textarea id={i} form="main-form" onChange={this.updateBoxes} value={this.state[i-1]}/>
					</div>
				)
			}
		});
		
		return (
			<form id="main-form">
				{steps}
			</form>
		)
	}
}

export default Form;