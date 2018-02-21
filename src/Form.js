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
			return (<div className="english-step">{englishStep}</div>)
			// if (i==0) {
			// 	return (
			// 		<div className="form-step">
			// 			<label>{englishStep}</label>
			// 			<textarea id={i} form="main-form" onChange={this.updateBoxes} value={this.state[i]}/>
			// 		</div>
			// 	)
			// }
			// else {
			// 	return (
			// 		<div className="form-step">
			// 			<label>{englishStep}</label>
			// 			<textarea id={i} form="main-form" onChange={this.updateBoxes} value={this.state[i-1]}/>
			// 		</div>
			// 	)
			// }
		});
		
		return (
			<div id="main-form">
				{steps}
				<iframe height="400px" width="100%" src="https://repl.it/@tmdarneille/Learn2Bubble?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
			</div>
		)
	}
}

export default Form;