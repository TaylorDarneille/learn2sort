import React, { Component } from 'react';
import Hint from "./Hint.js";

class Steps extends Component {

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
			return (<Hint index={i} hint={step}/>)
		});
		
		return (
			<div className="steps">
				{steps}
			</div>
		)
	}
}

export default Steps;