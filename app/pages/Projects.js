import React from 'react';
import BackgroundDefinition from '../components/BackgroundDefinition';
import AmbientDefinition from '../components/AmbientDefinition';
import ProjectPreview from '../components/ProjectPreview';

export default class PageComponent extends React.Component {
  render() {
    var title="My Project";
    var description="A project wherein I did some stuff, maybe some other stuff. Used certain technologies or techniques.";
    return (
      <div>
        <BackgroundDefinition primaryColor='#ffff00' secondaryColor='#ff0000' />
        <AmbientDefinition freq={440} />
        <h1>Projects</h1>
        <p>This is a future list of projects.</p>
        <ProjectPreview
          title={title}
          description={description}
          interactive={true}
          tags={["electronics","songwriting","programming"]}
        />
        <ProjectPreview
          title={title}
          description={description}
          interactive={true}
          tags={["electronics","songwriting","programming"]}
        />
        <ProjectPreview
          title={title}
          description={description}
          interactive={true}
          tags={["electronics","songwriting","programming"]}
        />
        <ProjectPreview
          title={title}
          description={description}
          interactive={true}
          tags={["electronics","songwriting","programming"]}
        />
      </div>
    )
  }
}
