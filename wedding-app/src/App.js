import React, { Component } from 'react';
import './App.css';
import Rsvp from './Rsvp.js';

class App extends Component {
  render() {
    return (
      <div className="body">
        <header className="home-header">
          <h1 className="text title ">Patrick + Necoline </h1>
        </header>
        <div className="main-body">
          <p className="title text blue body-title">RSVP</p>
          <Rsvp />
        </div>
      </div>
    );
  }
}

export default App;
