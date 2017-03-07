import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {openAddModal} from '../actions/index';

class Header extends Component {

	handleClick () {
		this.props.openAddModal();
	}

  render() {
    return (
      <div className="header">
      	<button id="add-note" className="btn btn-add" onClick={ () => this.handleClick() }>
      	<span>&#43;</span>Add Note
      	</button>
      </div>
    );
  }
};

function mapDispatchToProps(dispatch) {
	return bindActionCreators({openAddModal}, dispatch);
};

export default connect(null, mapDispatchToProps)(Header);
