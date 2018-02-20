import React, { Component } from 'react';
import Title from './Title.js';
import Form from './Form.js';
import Video from './Video.js';

class SortPage extends Component {
	render(){
		return(
			<div className="sort-page">
				<Title title={this.props.sort.title} />
				<Video />
				<Form sort={this.props.sort} />
			</div>
		)
	}
}

export default SortPage;