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
									text: '',
									color: 'red',
									addButtonStatus: 'btn btn-add no-save'
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
		if(this.state.title){
			let id = uniqid();
			let note = {title: this.state.title, text: this.state.text, color: this.state.color, id: id};
			this.props.addNote(note);
			this.setState({title: ''});
			this.setState({text: ''});
			this.props.closeAddModal();
		}
	}

	setColor(color) {
		this.setState({color: color});
	}

	buttonStatus() {
		if(this.state.title){
			return 'btn btn-add allow-save';
		} else {
			return 'btn btn-add no-save';
		}
	}

  render() {

  	if(this.props.addModal[0] === 'open'){
  		return (
	      <div className={"note-modal " + this.state.color}>

		  		<ul className="palette group">
		  			<li id="red" onClick={() => this.setColor('red')}></li>
		  			<li id="green" onClick={() => this.setColor('green')}></li>
		  			<li id="yellow" onClick={() => this.setColor('yellow')}></li>
		  			<li id="blue" onClick={() => this.setColor('blue')}></li>	
		  		</ul>

		  		<input type="text" placeholder="Untitled" onChange={this.onTitleChange.bind(this)} />

		  		<textarea placeholder="Just start typing here" onChange={this.onTextChange.bind(this)}></textarea>

		  		<div className="modal-footer">
		  			<button className="btn btn-cancel" onClick={()=> this.handleCancel()}>Cancel</button>
		  			<button className={this.buttonStatus()} onClick={() => this.handleSubmit()}>Add</button>
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
