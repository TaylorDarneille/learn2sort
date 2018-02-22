import React, { Component } from 'react';
import './App.css';

//importing sort data
import SORTS from './SORTS.js'

//importing components
import Navigation from './Nav.js';
import SortPage from './SortPage.js';
import Home from './Home.js';

class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
			sort: -1
		}
	}

	selectSort = (sortIndex) => {
		console.log('resetting sort to', sortIndex);
		this.setState({sort: sortIndex})
	}

  	render() {
  		if(this.state.sort == -1){
  			return (
	  			<div className="App">
	    			<Navigation selectSort={this.selectSort} sort={SORTS.sorts[this.state.sort]} />
	    			<Home />
		      	</div>
	    	);
  		}
  		else {
			return (
	  			<div className="App">
	    			<Navigation selectSort={this.selectSort} sort={SORTS.sorts[this.state.sort]} />
					<SortPage sort={SORTS.sorts[this.state.sort]} />
		      	</div>
		    );	
  		}
	}
}

export default App;
