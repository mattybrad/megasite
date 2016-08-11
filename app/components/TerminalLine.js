import React from 'react';
import _ from 'underscore';

export default class TerminalLine extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			char: 0
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
