import React, { Component } from 'react';

import '../styles/Hubcore.css';
import HelloWorld from './HelloWorld.js';

class Hubcore extends Component {
  render() {
    return (
      <div>
        <h1>Hubcore!</h1>
        <HelloWorld />
      </div>
    );
  }
}

export default Hubcore;
