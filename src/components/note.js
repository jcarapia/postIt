import React, { Component } from 'react';


export default class Note extends Component {
  render() {
    return (
      <div className="note">
      	<h5>Sample Note
      		<i className="fa fa-trash" aria-hidden="true"></i>
      		<i className="fa fa-pencil" aria-hidden="true"></i>
				</h5>
				<div className="text-container">
					<p>
					Pabst subway tile DIY jianbing. Fixie chillwave vaporware selvage, wayfarers flannel humblebrag heirloom VHS pinterest drinking vinegar portland shabby chic mixtape. Ethical fap mumblecore tote bag literally chillwave, crucifix gluten-free tofu. VHS salvia DIY sriracha squid migas, fanny pack succulents gluten-free tumblr. Shabby chic health goth keytar, man bun dreamcatcher food truck tbh chillwave 8-bit hella iceland artisan. Raw denim actually authentic put a bird on it pork belly, fam tilde taxidermy tofu. YOLO craft beer retro kitsch cardigan selfies, jianbing bicycle rights gochujang banh mi deep v roof party.
					</p>
				</div>
      </div>
    );
  }
}