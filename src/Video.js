import React, { Component } from 'react';

class Video extends Component {
	render(){
		return(
			<div className="video">
				<iframe width="100%" title="This is a unique title!" src={this.props.video} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
			</div>
		)
	}
}

export default Video;


