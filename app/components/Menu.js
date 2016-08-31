import React from 'react';
import {Link} from 'react-router';

export default class Menu extends React.Component {
	constructor(props) {
		super(props);
		this.state = {

		}
	}

	componentDidMount() {

	}

	render() {
		return (
			<div>
				<Link to="/">Home</Link><span> </span>
				<Link to="/projects">Projects</Link>
			</div>
		)
	}
}
