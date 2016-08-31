import React from 'react';
import { connect } from 'react-redux';
import _ from 'underscore';
import * as Actions from '../actions/MusicActions';

const mapStateToProps = (state) => {
  return {

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setAmbience: (freq) => {
      dispatch(Actions.setAmbience(freq));
    }
  }
}

class AmbientDefinitionComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {

		}
	}

	componentDidMount() {
		this.props.setAmbience(this.props.freq);
	}

	render() {
		return (
		    null
		)
	}
}

const AmbientDefinition = connect(
  mapStateToProps,
  mapDispatchToProps
)(AmbientDefinitionComponent);

export default AmbientDefinition;
