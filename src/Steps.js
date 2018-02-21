import React, { Component } from 'react';

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
			let englishStep = i+". "+step;
			return (<div className="english-step">{englishStep}</div>)
		});
		
		return (
			<div id="main-form">
				{steps}
				<iframe height="400px" width="100%" src={this.props.sort.repl} scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
			</div>
		)
	}
}

export default Steps;