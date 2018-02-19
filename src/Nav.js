import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SORTS from './SORTS.js';

class Nav extends Component {
	render(){
		const sorts = SORTS.sorts.map(sort => {
      	return <option value="{sort.title}">{sort.title}</option>
    	});
		return(
			<nav>
				<span className="brand">Learn2Sort</span>
				<select>
					<option selected="selected">Sorts</option>
					{sorts}
				</select>
			</nav>
		)
	}
}

export default Nav;