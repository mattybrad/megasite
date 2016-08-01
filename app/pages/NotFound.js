import React from 'react';
import NavBar from '../components/NavBar';

export default class NotFoundComponent extends React.Component {
  render() {
    return (
      <div>
        <h1 className="title">Page Not Found</h1>
        <NavBar />
        <p>No route found for this URL.</p>
      </div>
    )
  }
}
