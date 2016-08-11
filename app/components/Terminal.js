import React from 'react';
import _ from 'underscore';

export default class Terminal extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			line: 1,
			char: 0,
			text: ""
		}
	}

	componentDidMount() {

	}

	render() {
		return (
			<div>
				{this.props.children.map(function(line, idx){
					if(this.state.line > idx) return line;
					else return null;
				}.bind(this))}
			</div>
		)
	}
}
