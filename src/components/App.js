import React, { Component } from 'react';
import Wallet from './Wallet';
import Loot from './Loot';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Loot Check</h1>
        <hr />
        <Wallet />
        {/* <Loot /> */}
      </div>
    );
  }
}

export default App;
