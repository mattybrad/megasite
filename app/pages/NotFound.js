import React from 'react';

export default class NotFoundComponent extends React.Component {
  render() {
    return (
      <div>
        <h1 className="title">Page Not Found</h1>
        <p>No route found for this URL.</p>
      </div>
    )
  }
}
