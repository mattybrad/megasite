import React from 'react';
import BackgroundDefinition from '../components/BackgroundDefinition';
import AmbientDefinition from '../components/AmbientDefinition';

export default class PageComponent extends React.Component {
  render() {
    return (
      <div>
        <BackgroundDefinition primaryColor='#cc0000' secondaryColor='#0000cc' />
        <AmbientDefinition freq={440} />
        <h1>About</h1>
        <p>Some info about me, maybe even contact info, whatever.</p>
      </div>
    )
  }
}
