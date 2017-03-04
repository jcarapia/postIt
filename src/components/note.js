import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {openEditModal} from '../actions/index';
import {openDeleteModal} from '../actions/index';

class Note extends Component {

	editNote() {
		let title = this.props.title;
		let text = this.props.text;
		let id = this.props.id;
		this.props.openEditModal({title, text, id});
	}

	deleteNote() {
		let id = this.props.id;
		this.props.openDeleteModal(id);
	}

  render() {	
    return (
      <div className="note">
      	<h5>{this.props.title}
      		<i className="fa fa-trash" aria-hidden="true" onClick={() => this.deleteNote()}></i>
      		<i className="fa fa-pencil" aria-hidden="true" onClick={() => this.editNote()}></i>
				</h5>
				<div className="text-container">
					<p>
						{this.props.text}
					</p>
				</div>
      </div>
    );
  }
};

function mapDispatchToProps(dispatch) {
	return bindActionCreators({openEditModal, openDeleteModal}, dispatch);
};


export default connect(null, mapDispatchToProps)(Note);