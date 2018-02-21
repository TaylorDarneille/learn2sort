import React, { Component } from 'react';
import SORTS from './SORTS.js';

class Nav extends Component {

	selectSort = (e) => {
		this.props.selectSort(e.target.value);
	}

	goHome = () => {
		console.log("Go Home Called");
		// let count = this.state.goHomeCalled+1;
		// this.setState({goHomeCalled: count});
		this.props.selectSort("-1");
	}

	render(){
		const sorts = SORTS.sorts.map((sort) => {
      		return <option value={sort.index}>{sort.title}</option>
    	});
    	console.log("rerendering with this.props.sort: "+this.props.sort);
    	console.log("type of this.props.sort:"+ (typeof this.props.sort));
		return(
			<nav>
				<button onClick={this.goHome}>Learn2Sort</button>
				<select value={this.props.sort} onChange={this.selectSort}>
					<option value="-1">Sorts</option>
					{sorts}
				</select>
			</nav>
		)
	}
}

export default Nav;