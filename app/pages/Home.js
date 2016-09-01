import React from 'react';
import BackgroundDefinition from '../components/BackgroundDefinition';
import AmbientDefinition from '../components/AmbientDefinition';

export default class HomeComponent extends React.Component {
  render() {
    return (
      <div>
        <BackgroundDefinition primaryColor='#99ffff' secondaryColor='#0000ff' />
        <AmbientDefinition freq={220} />
        <h1>{"Matt's awesome website"}</h1>
        <p>This is some sort of welcome paragraph.</p>
        <p>Here is some more text, probably explaining what sort of things I do.</p>
        <p>Maybe this paragraph is about the ambient music etc, or maybe something else. Whatever.</p>
      </div>
    )
  }
}
