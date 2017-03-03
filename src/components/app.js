import React, { Component } from 'react';

import SearchField from '../containers/search_field'

export default class App extends Component {
  render() {
    return (
      <div>
      React-Redux Template for Heroku
      <SearchField />
      </div>
    );
  }
}
