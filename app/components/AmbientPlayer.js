import React from 'react';
import _ from 'underscore';

export default class AmbientPlayer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {

		}
	}

	componentDidMount() {
		this.actx = new AudioContext();
		// temp thing to demonstrate web audio working
		this.outputNode = this.actx.createGain();
    this.outputNode.connect(this.actx.destination);
    this.outputNode.gain.value = 0.1;
    this.oscillator = this.actx.createOscillator();
    this.oscillator.type = 'square';
    this.oscillator.frequency.value = 200;
    this.oscillator.connect(this.outputNode);
    this.oscillator.start();
	}

	render() {
		return (
			null
		)
	}
}
