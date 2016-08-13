import React from 'react';
import MapContainer from '../components/MapContainer';
import MapNode from '../components/MapNode';

export default class HomeComponent extends React.Component {
  render() {
    return (
      <div>
        <MapContainer>
          <MapNode label="main">
            <MapNode label="sub a" />
            <MapNode label="sub b" />
            <MapNode label="sub c">
              <MapNode label="sub c1" />
              <MapNode label="sub c2" />
              <MapNode label="sub c3" />
            </MapNode>
          </MapNode>
        </MapContainer>
      </div>
    )
  }
}
