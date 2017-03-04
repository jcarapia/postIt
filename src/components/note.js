import React, { Component } from 'react';


export default class Note extends Component {
  render() {
    return (
      <div className="note">
      	<h5>{this.props.title}
      		<i className="fa fa-trash" aria-hidden="true"></i>
      		<i className="fa fa-pencil" aria-hidden="true"></i>
				</h5>
				<div className="text-container">
					<p>
						{this.props.text}
					</p>
				</div>
      </div>
    );
  }
}