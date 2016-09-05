import React from 'react';
import { connect } from 'react-redux';
import _ from 'underscore';
import * as Actions from '../actions/MusicActions';

class Channel {
  constructor(type, params, actx) {
    this.type = type;
    this.params = params;
    this.actx = actx;
    this.current16thNote = 0;
    this.tempo = 120;
    this.lookahead = 25.0;
    this.scheduleAheadTime = 0.1;
    this.nextNoteTime = 0.0;

    this.outputNode = this.actx.createGain();
    this.outputNode.connect(this.actx.destination);
    this.outputNode.gain.value = 0.1;

    this.scheduler();
  }

  scheduler() {
    while(this.nextNoteTime < this.actx.currentTime + this.scheduleAheadTime) {
      this.scheduleNote(this.current16thNote, this.nextNoteTime);
      this.nextNote();
    }
    setTimeout(this.scheduler.bind(this), this.lookahead);
  }

  scheduleNote(beatNumber, time) {
    //currentNoteStartTime = time;
    // create an oscillator
    var osc = this.actx.createOscillator();
    osc.connect(this.outputNode);

    if (! (beatNumber % 16) )         // beat 0 == low pitch
    osc.frequency.value = 220.0;
    else if (beatNumber % 4)          // quarter notes = medium pitch
    osc.frequency.value = 1000 * Math.random();
    else                              // other 16th notes = high pitch
    osc.frequency.value = 880.0;
    osc.start( time );
    osc.stop( time + 0.2 );
  }

  nextNote() {
    // Advance current note and time by a 16th note...
    var secondsPerBeat = 60.0 / this.tempo;	// picks up the CURRENT tempo value!
    this.nextNoteTime += 0.25 * secondsPerBeat;	// Add 1/4 of quarter-note beat length to time

    this.current16thNote++;	// Advance the beat number, wrap to zero
    if (this.current16thNote == 16) {
      this.current16thNote = 0;
    }
    console.log(this.current16thNote)
  }

  scheduleSounds() {
    // var oscillator;
    // oscillator = this.actx.createOscillator();
    // oscillator.type = this.params.oscType;
    // oscillator.frequency.value = 300;
    // oscillator.connect(this.outputNode);
    // oscillator.start(this.actx.currentTime);
    // oscillator.stop(this.actx.currentTime + 0.05);
    //
    // oscillator = this.actx.createOscillator();
    // oscillator.type = this.params.oscType;
    // oscillator.frequency.value = 600;
    // oscillator.connect(this.outputNode);
    // oscillator.start(this.actx.currentTime + 0.5);
    // oscillator.stop(this.actx.currentTime + 0.7);

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
      //tempChannel.scheduleSounds();
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
