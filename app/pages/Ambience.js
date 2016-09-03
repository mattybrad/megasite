import React from 'react';
import { connect } from 'react-redux';
import * as BackgroundActions from '../actions/BackgroundActions';
import BackgroundDefinition from '../components/BackgroundDefinition';
import AmbientDefinition from '../components/AmbientDefinition';

const mapStateToProps = (state) => {
  return {
    backgroundActive: state.Background.active
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setBackgroundActive: (isActive) => {
      dispatch(BackgroundActions.setActive(isActive));
    }
  }
}

export default class PageComponent extends React.Component {
  render() {
    return (
      <div>
        <BackgroundDefinition primaryColor='#ff00ff' secondaryColor='#00cc00' />
        <AmbientDefinition freq={440} />
        <h1>Ambience</h1>
        <p onClick={this.props.setBackgroundActive.bind(this, !this.props.backgroundActive)}>Animated background is {this.props.backgroundActive?"active":"inactive"} (click to {this.props.backgroundActive?"deactivate":"activate"})</p>
        <p>Ambient soundtrack is active (click to deactivate)</p>
        <p>This website (or web app, if you will) features a cumulatively painted animated background. Some people might find this distracting or ugly, in which case it can be deactivated above. Others might find it visually or intellectually pleasing, in which case the animation settings can be tweaked below.</p>
        <p>In an even more divisive move, I have created an algorithmic ambient soundtrack for the website. This, too, can be deactivated above, or adjusted below.</p>
      </div>
    )
  }
}

const PageReduxComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(PageComponent);

export default PageReduxComponent;
