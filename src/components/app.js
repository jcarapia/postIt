import React, { Component } from 'react';

import Header from '../Components/header';
import Note from '../Components/note';

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
