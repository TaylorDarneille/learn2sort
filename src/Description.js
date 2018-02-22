import React, { Component } from 'react';
import SORTS from './SORTS.js';

class Description extends Component {
	render(){
		return(
			<div className="description">
				<p>{this.props.sort.description}</p>
			</div>
		)
	}
}

export default Description;