import React from 'react';
import BackgroundDefinition from '../components/BackgroundDefinition';
import AmbientDefinition from '../components/AmbientDefinition';

export default class PageComponent extends React.Component {
  render() {
    return (
      <div>
        <BackgroundDefinition primaryColor='#cc0000' secondaryColor='#0000cc' />
        <AmbientDefinition
          channels={
            [
              {
                type: "oscSet",
                notes: [400,450,500,800],
                wave: "square",
                probability: 1
              }
            ]
          }
        />
        <h1>About</h1>
        <p>I am a professional web developer and unprofessional musician from Oxford. I also have a lot of hobbies that span the amorphous gap between these two pursuits.</p>
        <p>I love the process of proving a concept. I hope this website will, in time, become a repository of working prototypes and demonstrations.</p>
      </div>
    )
  }
}
