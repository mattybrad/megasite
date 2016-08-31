import React from 'react';
import BackgroundDefinition from '../components/BackgroundDefinition';

export default class HomeComponent extends React.Component {
  render() {
    return (
      <div>
        <BackgroundDefinition primaryColor='#ffff00' secondaryColor='#ff0000' />
        <h1>Projects</h1>
        <p>This is a future list of projects.</p>
      </div>
    )
  }
}
