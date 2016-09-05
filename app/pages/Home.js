import React from 'react';
import BackgroundDefinition from '../components/BackgroundDefinition';
import AmbientDefinition from '../components/AmbientDefinition';

export default class PageComponent extends React.Component {
  render() {
    return (
      <div>
        <BackgroundDefinition primaryColor='#00cccc' secondaryColor='#0000ff' />
        <AmbientDefinition
          channels={
            [
              {
                type: "oscSet",
                notes: [400,450,500,800],
                wave: "square",
                probability: 0.5
              },
              {
                type: "oscSet",
                notes: [300,330],
                wave: "sine",
                probability: 1
              }
            ]
          }
        />
        <h1>{"Matt's website"}</h1>
        <p>My name is Matt and this is my website.</p>
        <p>The site contains text and sound and pictures and information and thoughts, but the container is itself formed of these things, in a way that could be considered gently meta.</p>
        <p>Please feel free to explore.</p>
      </div>
    )
  }
}
