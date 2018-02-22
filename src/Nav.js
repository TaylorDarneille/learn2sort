import React, { Component } from 'react';
import SORTS from './SORTS.js';
import { DropdownButton, MenuItem } from 'react-bootstrap';

class Nav extends Component {

	selectSort = (ek) => {
		console.log("passing ek:"+ek+"into selectSort in Nav.js");
		this.props.selectSort(ek);
	}

	goHome = () => {
		console.log("Go Home Called");
		this.props.selectSort("-1");
	}

	render(){
		const sorts = SORTS.sorts.map((sort) => {
      		return <MenuItem eventKey={sort.index}>{sort.title}</MenuItem>
    	});
		return(
			<nav>
				<button onClick={this.goHome}>Learn2Sort</button>
				<DropdownButton title="Sorts" onSelect={this.selectSort}>
					{/*<MenuItem eventKey="-1">Sorts</MenuItem>*/}
					{sorts}
				</DropdownButton>
			</nav>
		)
	}
}

export default Nav;