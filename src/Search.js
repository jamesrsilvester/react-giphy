// Developer TODO: Define App component definition here
import React, { Component } from 'react';


class Search extends Component {

  render() {
    return (
      <div className="Search">
        <form onSubmit={event => this.handleSubmit(event)}>
          <input
            placeholder='Enter Text'
            type='text' />
          <button type='submit'> Add </button>
        </form>
      </div>
    );
  }

  handleSubmit(event){
    console.log('form submitted', event.target);
    event.preventDefault();
  }
}

export default Search;
