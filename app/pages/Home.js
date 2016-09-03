import React from 'react';
import BackgroundDefinition from '../components/BackgroundDefinition';
import AmbientDefinition from '../components/AmbientDefinition';

export default class PageComponent extends React.Component {
  render() {
    return (
      <div>
        <BackgroundDefinition primaryColor='#00cccc' secondaryColor='#0000ff' />
        <AmbientDefinition freq={220} />
        <h1>{"Matt's awesome website"}</h1>
        <p>This is some sort of welcome paragraph.</p>
        <p>Here is some more text, probably explaining what sort of things I do.</p>
        <p>Maybe this paragraph is about the ambient music etc, or maybe something else. Whatever.</p>
        <p>Now let's do some scrolling! Now let's do some scrolling! Now let's do some scrolling! Now let's do some scrolling! Now let's do some scrolling! Now let's do some scrolling! Now let's do some scrolling!</p>
        <p>Now let's do some scrolling! Now let's do some scrolling! Now let's do some scrolling! Now let's do some scrolling! Now let's do some scrolling! Now let's do some scrolling! Now let's do some scrolling!</p>
        <p>Now let's do some scrolling! Now let's do some scrolling! Now let's do some scrolling! Now let's do some scrolling! Now let's do some scrolling! Now let's do some scrolling! Now let's do some scrolling!</p>
      </div>
    )
  }
}
