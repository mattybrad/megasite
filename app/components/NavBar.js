import React from 'react';
import { Link } from 'react-router';

export default class NavBar extends React.Component {
  render() {
    return (
      <div>
        <div className="nav">
          <div className="nav-left">
            <Link className={"nav-item is-tab" + (this.props.activePage=="home" ? " is-active" : "")} to="/home">Home</Link>
            <Link className={"nav-item is-tab" + (this.props.activePage=="listentries" ? " is-active" : "")} to="/listentries">List Entries</Link>
          </div>
        </div>
        <br/>
      </div>
    )
  }
}
