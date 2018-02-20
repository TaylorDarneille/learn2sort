import React, { Component } from 'react';

class SortPage extends Component {
	render(){
		return(<h1>This is the sort page! Currently displaying: {this.props.sort.title}</h1>)
	}
}

export default SortPage;