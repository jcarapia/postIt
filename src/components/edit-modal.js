import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {closeEditModal} from '../actions/index'; 
import {editNote} from '../actions/index'; 
import {getNotes} from '../actions/index';


class EditModal extends Component {
	constructor(props) {
		super(props);
		this.state = {status: 'close',
									title: '',
									text: ''
								}
	}

	onTitleChange(e) {
		this.setState({title: e.target.value})
	}

	onTextChange(e) {
		this.setState({text: e.target.value})
	}

	handleCancel() {
		this.props.closeEditModal();
	}

	handleSubmit() {
		let id = this.props.editModal.id;
		let title = this.state.title;
		let text = this.state.text;

		if(!title) {title = this.props.editModal.title};
		if(!text) {text = this.props.editModal.text};	
		this.props.editNote(title, text, id);
		this.props.closeEditModal();
		this.props.getNotes();
	}

  render() {

  	if(this.props.editModal.status === 'open'){

  		let title = this.props.editModal.title;
  		let text = this.props.editModal.text;

  		return (
	      <div className="note-modal">

		  		<ul className="palette group">
		  			<li id="red"></li>
		  			<li id="green"></li>
		  			<li id="yellow"></li>
		  			<li id="blue"></li>	
		  		</ul>

		  		<input type="text" placeholder="Untitled" defaultValue={title} onChange={this.onTitleChange.bind(this)} />

		  		<textarea placeholder="Just start typing here" onChange={this.onTextChange.bind(this)}>{text}</textarea>

		  		<div className="modal-footer">
		  			<button className="btn btn-cancel" onClick={()=> this.handleCancel()}>Cancel</button>
		  			<button className="btn btn-save" onClick={() => this.handleSubmit()}>Save</button>
		  		</div>
	     
	      </div>
    	);
  	} else {
  		return (
				<div></div>
  		)
  	}
  }
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({closeEditModal, editNote, getNotes}, dispatch);
};

function mapStateToProps({editModal}) {
	return {editModal};
}

export default connect(mapStateToProps, mapDispatchToProps)(EditModal);