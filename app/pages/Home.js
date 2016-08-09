import React from 'react';
import CogSystem from '../components/CogSystem';

export default class HomeComponent extends React.Component {
  render() {
    return (
      <div>
        <CogSystem width={8} height={6} />
      </div>
    )
  }
}
