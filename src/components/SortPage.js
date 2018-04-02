import React, { Component } from 'react';
import Title from './Title.js';
import Steps from './Steps.js';
import Video from './Video.js';
import Repl from './Repl.js';
import Description from './Description.js';
import { Grid, Col, Row } from 'react-bootstrap';


class SortPage extends Component {
	render(){
		return(
			<div className="sort-page">
				<Title title={this.props.sort.title} />
				<Grid>
					<Row className="show-grid">
						<Col sm={6} md={6} lg={6}>
							<Video video={this.props.sort.video}/>
						</Col>
						<Col sm={6} md={6} lg={6}>
							<Description sort={this.props.sort} />
						</Col>
					</Row>
					<Row className="show-grid">
					<Col sm={6} md={6} lg={6}>
						<Steps sort={this.props.sort} />
					</Col>
					<Col sm={6} md={6} lg={6}>
						<Repl sort={this.props.sort} />
					</Col>
					</Row>
				</Grid>
			</div>
		)
	}
}

export default SortPage;