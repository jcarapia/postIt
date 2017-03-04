import React, { Component } from 'react';
import Note from './note';


export default class Board extends Component {

	componentDidMount() {
		let notes = localStorage.getItem('notes')
		notes = JSON.parse(notes);
		console.log('***', notes)
	}

	renderNotes() {
		//let notes = localStorage.getItem('notes')
		//notes = JSON.parse(notes);
		//console.log(notes)

		 let notes = [{title: 'Sample Note 1', text: 'this is the text 1'}, {title: 'Sample Note 2', text: 'this is the text 2'}, {title: 'Sample Note 3', text: 'this is the text 3'}]

		return notes.map(function(note) {
			const title = note.title;
			const text = note.text;

			return (
				<Note title={title} text={text} key={title}/>
			)
		})
	}

  render() {

    return (
      <div className="board">
      	{this.renderNotes()}
      </div>
    );
  }
}