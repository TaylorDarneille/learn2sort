import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SORTS from './SORTS.js';

class Nav extends Component {

	selectSort = (e) => {
		this.props.selectSort(e.target.value);
	}

	render(){
		const sorts = SORTS.sorts.map((sort) => {
      		return <option value={sort.index}>{sort.title}</option>
    	});
		return(
			<nav>
				<span className="brand">Learn2Sort</span>
				<select onChange={this.selectSort}>
					<option selected="selected" value="-1">Sorts</option>
					{sorts}
				</select>
			</nav>
		)
	}
}

export default Nav;