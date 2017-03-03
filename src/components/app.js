import React, { Component } from 'react';

import Header from './header';
import Note from './note';

export default class App extends Component {
  render() {
    return (
      <div>
      <Header />
      <Note />
      <Note />
      </div>
    );
  }
}
