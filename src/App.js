import React, { Component } from 'react';
import logo from './logo.svg';
import profile from './images/BostonProfilePhoto.jpg'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <img src={profile} className="Profile-photo" alt="Anjali's profile photo"/>
          <h1 className="App-title">Anjali Gopinathan</h1>
          <h3 className="App-description">I am a high school student interested in computer science, development, ..</h3>
        </header>
        <p className="App-intro">
          To get started, edit the <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
