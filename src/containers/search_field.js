import React, {Component} from 'react';

export default class SearchField extends Component {
	constructor(props) {

		super(props);

		this.state = {city: ''}
	}

	render() {
		return (
			<form className="input-group">
				<input 
					className="form-control"
					placeholder="Enter the name of a city..."
				/>
				<span className="input-group-btn">
					<button type="submit" className="btn btn-secondary">Submit</button>
				</span>
			</form>
		)
	}

}