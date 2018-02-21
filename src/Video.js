import React, { Component } from 'react';

class Video extends Component {
	render(){
		return(
			<div className="video">
				<iframe width="560" title="This is a unique title!" height="315" src={this.props.video} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
			</div>
		)
	}
}

export default Video;


