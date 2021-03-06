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
									text: '',
									color: '',
									saveButtonStatus: 'btn btn-save no-save'
								}
	}

	onTitleChange(e) {
		this.setState({title: e.target.value, saveButtonStatus: 'btn btn-save allow-save'});
	}

	onTextChange(e) {
		this.setState({text: e.target.value, saveButtonStatus: 'btn btn-save allow-save'});
	}

	handleCancel() {
		this.props.closeEditModal();
		this.setState({saveButtonStatus: 'btn btn-save no-save'});
	}

	setColor(color) {
		this.setState({color: color, saveButtonStatus: 'btn btn-save allow-save'});
	}

	buttonStatus() {
		if(this.state.saveButtonStatus === 'btn btn-save allow-save'){
			return 'btn btn-add allow-save';
		} else {
			return 'btn btn-add no-save';
		}
	}

	handleSubmit() {
		if(this.state.saveButtonStatus === 'btn btn-save allow-save'){
			let id = this.props.editModal.id;
			let title = this.state.title;
			let text = this.state.text;
			let color = this.state.color;
			if(!title) {title = this.props.editModal.title};
			if(!text) {text = this.props.editModal.text};	
			this.props.editNote(title, text, color, id);
			this.setState({saveButtonStatus: 'btn btn-save no-save'});
			this.props.closeEditModal();
			this.props.getNotes();
		}
	}

  render() {
  	if(this.props.editModal.status === 'open'){

  		let title = this.props.editModal.title;
  		let text = this.props.editModal.text;
  		let color = this.state.color ? this.state.color : this.props.editModal.color;

  		return (
	      <div className={"note-modal " + color} >

		  		<ul className="palette group">
		  			<li id="red" onClick={() => this.setColor('red')}></li>
		  			<li id="green" onClick={() => this.setColor('green')}></li>
		  			<li id="yellow" onClick={() => this.setColor('yellow')}></li>
		  			<li id="blue" onClick={() => this.setColor('blue')}></li>	
		  		</ul>

		  		<input type="text" placeholder="Untitled" defaultValue={title} onChange={this.onTitleChange.bind(this)} />

		  		<textarea placeholder="Just start typing here" onChange={this.onTextChange.bind(this)}>{text}</textarea>

		  		<div className="modal-footer">
		  			<button className="btn btn-cancel" onClick={()=> this.handleCancel()}>Cancel</button>
		  			<button className={this.buttonStatus()} onClick={() => this.handleSubmit()}>Save</button>
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
	return bindActionCreators({closeEditModal, editNote, getNotes}, dispatch);
};

function mapStateToProps({editModal}) {
	return {editModal};
};

export default connect(mapStateToProps, mapDispatchToProps)(EditModal);