import React, { Component } from 'react';

class Repl extends Component {

	render(){
		
		return (
			<iframe height="800vh" width="600vh" src={this.props.sort.repl} scrolling="no" frameBorder="no" allowtransparency="true" allowFullScreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
		)
	}
}

export default Repl;