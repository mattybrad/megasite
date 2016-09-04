import React from 'react';
import { connect } from 'react-redux';
import _ from 'underscore';
import * as Actions from '../actions/MusicActions';

class Channel {
  constructor(type, params, actx) {
    this.type = type;
    this.params = params;
    this.actx = actx;
    this.outputNode = this.actx.createGain();
    this.outputNode.connect(this.actx.destination);
    this.outputNode.gain.value = 0.1;
  }

  scheduleSounds() {
    var oscillator;
    oscillator = this.actx.createOscillator();
    oscillator.type = this.params.oscType;
    oscillator.frequency.value = 300;
    oscillator.connect(this.outputNode);
    oscillator.start(this.actx.currentTime);
    oscillator.stop(this.actx.currentTime + 0.05);

    oscillator = this.actx.createOscillator();
    oscillator.type = this.params.oscType;
    oscillator.frequency.value = 600;
    oscillator.connect(this.outputNode);
    oscillator.start(this.actx.currentTime + 0.5);
    oscillator.stop(this.actx.currentTime + 0.7);

    // need to schedule things properly, not based on setInterval
  }
}

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

		this.outputNode = this.actx.createGain();
    this.outputNode.connect(this.actx.destination);
    this.outputNode.gain.value = 0.1;

    var c = new Channel("osc", {
      oscType: "triangle"
    }, this.actx);

    setInterval(this.scheduleAllSounds.bind(this, c), 1000);
	}

  scheduleAllSounds(tempChannel) {
    // will map over all active channels
    if(this.props.active) {
      tempChannel.scheduleSounds();
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
