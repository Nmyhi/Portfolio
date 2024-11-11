// App.js
import React, { Component } from 'react';
import Cube from './Components/Cube';

class App extends Component {
  render() {
    return (
      <div style={{ width: '100vw', height: '100vh' }}>
        <Cube />
      </div>
    );
  }
}

export default App;