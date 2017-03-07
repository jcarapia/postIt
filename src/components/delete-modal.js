import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {closeDeleteModal, deleteNote, getNotes} from '../actions/index';

class DeleteModal extends Component {

	handleCancel() {
		this.props.closeDeleteModal();
	}

	handleDelete(noteId) {
		this.props.deleteNote(noteId);
		this.props.closeDeleteModal();
		this.props.getNotes();
	}

	render() {
		if(this.props.deleteModal.status === 'open'){
			return (
				<div id="delete-modal">
					<h3>Delete Note</h3>
					<p>Are you sure you want to delete this note?</p>
					<div id="delete-modal-footer">
						<button className="btn btn-cancel" onClick={() => this.handleCancel()}>Cancel</button>
						<button className="btn btn-delete" onClick={() => this.handleDelete(this.props.deleteModal.id)}>Delete</button>
					</div>
				</div>	
			)
		} else {
			return (<div></div>)
		}
		
	}
};

function mapDispatchToProps(dispatch) {
	return bindActionCreators({closeDeleteModal, deleteNote, getNotes}, dispatch);
};

function mapStateToProps({deleteModal}) {
	return {deleteModal};
};

export default connect(mapStateToProps, mapDispatchToProps)(DeleteModal);
