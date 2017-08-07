// Developer TODO: Define App component definition here
import React, { Component } from 'react';
import Search from './Search.js'

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <h1>Hello World</h1>
        <Search />
      </div>
    );
  }
}

export default Home;
