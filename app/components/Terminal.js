import React from 'react';
import _ from 'underscore';

export default class Terminal extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			line: 0
		}
	}

	componentDidMount() {
		this.timeout = setTimeout(this.doTick.bind(this), 500);
		this.toggleBlinker();
	}

	doTick() {
		this.setState({
			line: this.state.line + 1
		})
		this.timeout = setTimeout(this.doTick.bind(this), 500);
	}

	toggleBlinker() {
		this.setState({
			blinkState: !this.state.blinkState
		})
		this.blinkTimeout = setTimeout(this.toggleBlinker.bind(this), 250);
	}

	render() {
		return (
			<div>
				{this.props.children.map(function(line, idx){
					if(this.state.line > idx) return (
						<span key={'line_'+idx}>
							{line}
							{idx==this.state.line-1?null:<br/>}
						</span>
					)
					else return null;
				}.bind(this))}
				{this.state.blinkState?<span>_</span>:<span>&nbsp;</span>}
			</div>
		)
	}
}
