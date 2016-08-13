import React from 'react';
import _ from 'underscore';

export default class MapNode extends React.Component {
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
				<div>{this.props.label}</div>
				{this.props.children?this.props.children.map(function(node, idx){
					return (
						node
					)
				}):null}
			</div>
		)
	}
}
