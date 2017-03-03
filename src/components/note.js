import React, { Component } from 'react';


export default class Note extends Component {
  render() {
    return (
      <div className="header">
      	<button id="add-note" className="btn btn-add"><span>&#43;</span>Add Note</button>
      </div>
    );
  }
}