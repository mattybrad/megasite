import React from 'react';
import _ from 'underscore';

export default class MapContainer extends React.Component {
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
				{this.props.children}
			</div>
		)
	}
}
