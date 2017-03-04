import React, { Component } from 'react';
import Note from './note';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {getNotes} from '../actions/index';


class Board extends Component {

	componentDidMount() {
		this.props.getNotes();
	}

	renderNotes() {

		let notes = this.props.board;

		if(notes){
			return notes.map(function(note, index) {
				const title = note.title;
				const text = note.text;
				const color = note.color;
				const id = note.id

				return (
					<Note title={title} text={text} color={color} id={id} key={id}/>
				)
			});
		} else {
			return (<div></div>)
		}
	}

  render() {

    return (
      <div className="board">
      	{this.renderNotes()}
      </div>
    );
  }
};

function mapDispatchToProps(dispatch) {
	return bindActionCreators({getNotes}, dispatch);
};

function mapStateToProps({board}) {
	return {board};
};

export default connect(mapStateToProps, mapDispatchToProps)(Board);


