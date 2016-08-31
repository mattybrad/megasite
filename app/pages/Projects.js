import React from 'react';
import BackgroundDefinition from '../components/BackgroundDefinition';
import AmbientDefinition from '../components/AmbientDefinition';

export default class HomeComponent extends React.Component {
  render() {
    return (
      <div>
        <BackgroundDefinition primaryColor='#ffff00' secondaryColor='#ff0000' />
        <AmbientDefinition freq={440} />
        <h1>Projects</h1>
        <p>This is a future list of projects.</p>
      </div>
    )
  }
}
