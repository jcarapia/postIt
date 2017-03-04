import React, { Component } from 'react';

import Header from './header';
import Note from './note';
import AddModal from './add-modal';
import EditModal from './edit-modal';
import DeleteModal from './delete-modal';
import Board from './board';

export default class App extends Component {


  render() {

    return (
      <div>
      <Header />
      <Board />
      <AddModal />
      <EditModal />
      <DeleteModal />
      </div>
    );
  }
};
