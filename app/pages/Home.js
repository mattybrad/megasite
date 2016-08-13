import React from 'react';
import Terminal from '../components/Terminal';
import TerminalLine from '../components/TerminalLine';

export default class HomeComponent extends React.Component {
  render() {
    return (
      <div>
        <Terminal>
          <TerminalLine>Welcome</TerminalLine>
          <TerminalLine>There will be text here...</TerminalLine>
          <TerminalLine>Stuff goes here</TerminalLine>
          <TerminalLine>Processing...</TerminalLine>
          <TerminalLine>Would you like to experience audio?</TerminalLine>
        </Terminal>
      </div>
    )
  }
}
