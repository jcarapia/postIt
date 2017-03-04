import {ADD_NOTE, GET_NOTES} from '../actions/index';


export default function(state = [], action) {
	console.log(action)
	switch(action.type) {
		case ADD_NOTE: 
		console.log('the payload', action.payload)
			return [...action.payload];
		case GET_NOTES: 
			return [...action.payload];
	}

	return state;
};