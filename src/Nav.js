import React, { Component } from 'react';
import SORTS from './SORTS.js';

class Nav extends Component {

	constructor(props) {
		super(props);
		this.state = {
			goHomeCalled: 0
		}
	}

	selectSort = (e) => {
		this.props.selectSort(e.target.value);
	}

	goHome = () => {
		console.log("Go Home Called");
		let count = this.state.goHomeCalled+1;
		this.setState({goHomeCalled: count});
		this.props.selectSort(-1);
	}

	render(){
		const sorts = SORTS.sorts.map((sort) => {
      		return <option value={sort.index}>{sort.title}</option>
    	});
    	console.log("this.state.goHomeCalled: "+this.state.goHomeCalled);
		return(
			<nav>
				<button onClick={this.goHome}>Learn2Sort</button>
				<select onChange={this.selectSort}>
					<option selected="selected" value="-1">Sorts</option>
					{sorts}
				</select>
			</nav>
		)
	}
}

export default Nav;