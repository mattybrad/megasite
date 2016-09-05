import React from 'react';
import { connect } from 'react-redux';
import _ from 'underscore';
import * as Actions from '../actions/MusicActions';

// big thanks to https://github.com/cwilso/metronome

class Channel {
  constructor(type, params, actx) {
    this.type = type;
    this.params = params;
    this.actx = actx;
    this.current16thNote = 0;
    this.tempo = 40;
    this.lookahead = 25.0;
    this.scheduleAheadTime = 0.1;
    this.nextNoteTime = 0.0;
    this.stopped = false;

    this.outputNode = this.actx.createGain();
    this.outputNode.connect(this.actx.destination);
    this.outputNode.gain.value = 0.1;

    this.scheduler();
  }

  stop() {
    this.stopped = true;
    this.outputNode.disconnect();
  }

  scheduler() {
    if(!this.stopped) {
      while(this.nextNoteTime < this.actx.currentTime + this.scheduleAheadTime) {
        this.scheduleNote(this.current16thNote, this.nextNoteTime);
        this.nextNote();
      }
      setTimeout(this.scheduler.bind(this), this.lookahead);
    }
  }

  scheduleNote(beatNumber, time) {
    if(Math.random() < this.params.probability) {
      var osc = this.actx.createOscillator();
      osc.connect(this.outputNode);
      osc.type = this.params.wave;
      osc.frequency.value = this.params.notes[Math.floor(Math.random()*this.params.notes.length)];
      osc.start( time );
      osc.stop( time + 0.2 );
    }
  }

  nextNote() {
    // Advance current note and time by a 16th note...
    var secondsPerBeat = 60.0 / this.tempo;	// picks up the CURRENT tempo value!
    this.nextNoteTime += 0.25 * secondsPerBeat;	// Add 1/4 of quarter-note beat length to time

    this.current16thNote++;	// Advance the beat number, wrap to zero
    if (this.current16thNote == 16) {
      this.current16thNote = 0;
    }
  }
}

const mapStateToProps = (state) => {
  return {
    channelSets: state.Music.channelSets,
    active: state.Music.active,
    activeChannelSet: state.Music.activeChannelSet
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
    this.channelSets = {}
	}

	componentDidMount() {
    this.initAudio();
	}

  componentDidUpdate(prevProps, prevState) {
    if(prevProps.activeChannelSet != this.props.activeChannelSet) {
      // stop all channels (fading comes later)
      for(var key in this.channelSets) {
        if(this.channelSets.hasOwnProperty(key)) {
          var cs = this.channelSets[key];
          for(var i=0; i<cs.length; i++) {
            cs[i].stop();
          }
        }
      }

      this.channelSets[this.props.activeChannelSet] = this.props.channelSets[this.props.activeChannelSet].map(function(channel, idx) {
        return new Channel("oscSet", channel, this.actx)
      }.bind(this))
    }
  }

	initAudio() {
		this.actx = new AudioContext();
		this.outputNode = this.actx.createGain();
    this.outputNode.connect(this.actx.destination);
    this.outputNode.gain.value = 0.1;
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
