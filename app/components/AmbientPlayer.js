import React from 'react';
import { connect } from 'react-redux';
import _ from 'underscore';
import * as Actions from '../actions/MusicActions';

// big thanks to https://github.com/cwilso/metronome

class Channel {
  constructor(params, actx) {
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
    this.outputNode.gain.value = (this.params.type=="oscSet")?0.005:0.1;

    if(this.params.type=="oscSet") this.scheduler();
    else if(this.params.type=="crossfadeLoop") this.loadSample();
  }

  stop() {
    this.stopped = true;
    this.outputNode.disconnect();
  }

  loadSample() {
    var request = new XMLHttpRequest();
    request.open('GET', "/mp3/"+this.params.path, true);
    request.responseType = 'arraybuffer';

    request.onload = function() {
      this.actx.decodeAudioData(request.response, function(buffer) {
        this.buffer = buffer;
        this.params.fadeTime = Math.min(this.params.fadeTime, buffer.duration/2);
        this.playSample();
        // var src1 = this.actx.createBufferSource();
        // var src2 = this.actx.createBufferSource();
        // src1.buffer = src2.buffer = buffer;
        // src1.connect(this.outputNode);
        // src2.connect(this.outputNode);
        // src1.
      }.bind(this), function(){});
    }.bind(this)
    request.send();
  }

  playSample() {
    var src = this.actx.createBufferSource();
    var gain = this.actx.createGain();
    gain.gain.setValueAtTime(0.001, this.actx.currentTime);
    gain.gain.exponentialRampToValueAtTime(1.0, this.actx.currentTime + this.params.fadeTime/2);
    gain.gain.setValueAtTime(1.0, this.actx.currentTime + this.buffer.duration - this.params.fadeTime/2);
    gain.gain.exponentialRampToValueAtTime(0.001, this.actx.currentTime + this.buffer.duration);
    src.buffer = this.buffer;
    src.connect(gain);
    gain.connect(this.outputNode);
    src.start();
    setTimeout(this.playSample.bind(this), (this.buffer.duration - this.params.fadeTime) * 1000);
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
    if(prevProps.activeChannelSet != this.props.activeChannelSet || prevProps.active != this.props.active) {
      this.updateChannelSets();
    }
  }

  updateChannelSets() {
    // stop all channels (fading comes later)
    for(var key in this.channelSets) {
      if(this.channelSets.hasOwnProperty(key)) {
        var cs = this.channelSets[key];
        for(var i=0; i<cs.length; i++) {
          cs[i].stop();
        }
      }
    }

    if(this.props.active) {
      this.channelSets[this.props.activeChannelSet] = this.props.channelSets[this.props.activeChannelSet].map(function(channel, idx) {
        return new Channel(channel, this.actx)
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
