import React from 'react';
import NavBar from '../components/NavBar';

export default class HomeComponent extends React.Component {
  render() {
    return (
      <div>
        <h1 className="title">Audio Catalogue</h1>
        <NavBar activePage="home" />
        <p>Welcome to the OLS audio catalogue tool!</p>
      </div>
    )
  }
}
