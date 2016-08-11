import React from 'react';
import Terminal from '../components/Terminal';
import TerminalLine from '../components/TerminalLine';

export default class HomeComponent extends React.Component {
  render() {
    return (
      <div>
        <Terminal>
          <TerminalLine>a</TerminalLine>
          <TerminalLine>b</TerminalLine>
          <TerminalLine>see</TerminalLine>
        </Terminal>
      </div>
    )
  }
}
