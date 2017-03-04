import React, { Component } from 'react';
import uniqid from 'uniqid';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {closeAddModal} from '../actions/index';
import {addNote} from '../actions/index';


class AddModal extends Component {
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
		this.props.closeAddModal();
	}

	handleSubmit() {
		let id = uniqid();
		let note = {title: this.state.title, text: this.state.text, id: id};
		this.props.addNote(note);
		this.props.closeAddModal();
	}

  render() {

  	if(this.props.addModal[0] === 'open'){
  		return (
	      <div className="note-modal">

		  		<ul className="palette group">
		  			<li id="red"></li>
		  			<li id="green"></li>
		  			<li id="yellow"></li>
		  			<li id="blue"></li>	
		  		</ul>

		  		<input type="text" placeholder="Untitled" onChange={this.onTitleChange.bind(this)} />

		  		<textarea placeholder="Just start typing here" onChange={this.onTextChange.bind(this)}></textarea>

		  		<div className="modal-footer">
		  			<button className="btn btn-cancel" onClick={()=> this.handleCancel()}>Cancel</button>
		  			<button className="btn btn-add" onClick={() => this.handleSubmit()}>Add</button>
		  		</div>
	     
	      </div>
    	);
  	} else {
  		return (
				<div></div>
  		)
  	}
  }
};

function mapDispatchToProps(dispatch) {
	return bindActionCreators({closeAddModal, addNote}, dispatch);
};

function mapStateToProps({addModal}) {
	return {addModal};
};

export default connect(mapStateToProps, mapDispatchToProps)(AddModal);
