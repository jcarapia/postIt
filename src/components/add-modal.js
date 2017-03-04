import React, { Component } from 'react';


export default class AddModal extends Component {
  render() {
    return (
      <div className="note-modal">

	  		<ul className="palette group">
	  			<li id="red"></li>
	  			<li id="green"></li>
	  			<li id="yellow"></li>
	  			<li id="blue"></li>	
	  		</ul>

	  		<input type="text" placeholder="Untitled" />

	  		<textarea placeholder="Just start typing here"></textarea>

	  		<div className="modal-footer">
	  			<button className="btn btn-cancel">Cancel</button>
	  			<button className="btn btn-add">Add</button>
	  		</div>
     
      </div>
    );
  }
}