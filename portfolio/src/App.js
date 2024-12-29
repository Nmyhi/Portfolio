// App.js
import React, { Component } from 'react';
import Menu from './Components/Menu';

class App extends Component {
  render() {
    return (
      <div style={{ width: '100vw', height: '100vh' }}>
        <Menu/>
      </div>
    );
  }
}

export default App;