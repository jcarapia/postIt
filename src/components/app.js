import React, { Component } from 'react';

import Header from './header';
import Note from './note';
import AddModal from './add-modal';
import SaveModal from './save-modal';

export default class App extends Component {
  render() {
    return (
      <div>
      <Header />
      <Note />
      <Note />
      <SaveModal />
      </div>
    );
  }
}
