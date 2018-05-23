import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import BasicExample from './app/BasicExample'
/* code to access electron for i/o communications */
// const electron = window.require('electron');
// const fs = electron.remote.require('fs');
// const ipcRenderer  = electron.ipcRenderer;

class App extends Component {
  render() {
    return (
      <BasicExample/>
    );
  }
}

export default App;
