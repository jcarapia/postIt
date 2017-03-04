import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {closeAddModal} from '../actions/index';


class AddModal extends Component {
	constructor(props) {
		super(props);
		this.state = {status: 'close'}
	}

	handleCancel() {
		this.props.closeAddModal();
	}

	handleNewNote() {
		console.log('new note')
	}

  render() {

  	console.log('***', this.props.addModal[0]);

  	if(this.props.addModal[0] === 'open'){
  		return (
      <div className="note-modal">

	  		<ul className="palette group">
	  			<li id="red"></li>
	  			<li id="green"></li>
	  			<li id="yellow"></li>
	  			<li id="blue"></li>	
	  		</ul>

	  		<input type="text" placeholder={this.props.addModal[0]} />

	  		<textarea placeholder="Just start typing here"></textarea>

	  		<div className="modal-footer">
	  			<button className="btn btn-cancel" onClick={()=> this.handleCancel()}>Cancel</button>
	  			<button className="btn btn-add" onClick={() => this.handleNewNote()}>Add</button>
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
	return bindActionCreators({closeAddModal}, dispatch);
};

function mapStateToProps({addModal}) {
	return {addModal};
}

export default connect(mapStateToProps, mapDispatchToProps)(AddModal);
