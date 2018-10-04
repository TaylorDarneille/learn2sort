import React, { Component } from 'react';

class Home extends Component {
	render(){
		return(
			<div className="home">
				<span className="app-title">
					*Learn2Sort*
				</span>
				<h2>To get started, use the drop-down in the upper right-hand corner to choose a sort.</h2>
				<div className="home-page video">
					<iframe width="560" height="315" src="https://www.youtube.com/embed/y9Ecb43qw98" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
				</div>
			</div>
		)
	}
}

export default Home;