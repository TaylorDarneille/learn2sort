import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Nav extends Component {
	render(){
		return(
			<nav>{this.props.sorts.map((sort) => return <h2>sort.title</h2>)}</nav>
		)
	}
}

export default Nav;