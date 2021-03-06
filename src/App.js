import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

const defaultStyle = { color: '#fff' };

class Agreggate extends Component {
  render() {
    return (
      <div style={{ ...defaultStyle, width: '40%', display: 'inline-block' }}>
        <h2>Number Text</h2>
      </div>
    );
  }
}

class Filter extends Component {
  render(){
    return (
      <div style={ { color: defaultTextColor } }>
        <img/>
        <input type="text"/>
      </div>
    );
  }
}

class Playlist extends Component {
  render(){
    return (
      <div style={{ ...defaultStyle, width: "25%", display: "inline-block" }}>
        <img/>
        <h3>Playlist Name</h3>
        <ul>
          <li>Song 1</li>
          <li>Song 2</li>
          <li>Song 3</li>
        </ul>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Title</h1>
        <Agreggate/>
        <Agreggate/>
        <Filter/>
        <Playlist/>
        <Playlist/>
        <Playlist/>
        <Playlist/>
      </div>
    );
  }
}

export default App;
