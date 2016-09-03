import React from 'react';
import { connect } from 'react-redux';
import _ from 'underscore';
import * as Actions from '../actions/MusicActions';

const mapStateToProps = (state) => {
  return {
    freq: state.Music.freq,
    active: state.Music.active
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

class AmbientPlayerComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {

		}
	}

	componentDidMount() {
		this.startAmbience();
	}

	startAmbience() {
		this.actx = new AudioContext();
		// temp thing to demonstrate web audio working
		this.outputNode = this.actx.createGain();
    this.outputNode.connect(this.actx.destination);
    this.outputNode.gain.value = 0.1;
    setInterval(this.pulse.bind(this), 500);
	}

  pulse() {
    if(this.props.active) {
      var oscillator = this.actx.createOscillator();
      oscillator.type = 'square';
      oscillator.frequency.value = this.props.freq;
      oscillator.connect(this.outputNode);
      oscillator.start(this.actx.currentTime);
      oscillator.stop(this.actx.currentTime + 0.1);
    }
  }

	render() {
		return (
			null
		)
	}
}

const AmbientPlayer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AmbientPlayerComponent);

export default AmbientPlayer;
