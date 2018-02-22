import React, { Component } from 'react';

class Hint extends Component {
	constructor(props) {
		super(props);
		this.state = {
			hidden: true
		}
	}

	flipHint = () => {
		this.state.hidden ? this.setState({hidden: false}) : this.setState({hidden: true})
	}

	render() {
		if (this.state.hidden){
			return(
				<div className="hint-card covered" onClick={this.flipHint}>
					<h3>Hint #{this.props.index}</h3>
				</div>
			)
		} else {
			return(
				<div className="hint-card uncovered" onClick={this.flipHint}>
					<p>Hint #{this.props.index}: {this.props.hint}</p>
				</div>
			)			
		}
	}
}

export default Hint;