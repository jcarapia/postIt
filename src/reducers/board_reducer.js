import {ADD_NOTE, GET_NOTES} from '../actions/index';

export default function(state = [], action) {
	switch(action.type) {
		case ADD_NOTE: 
			return [...action.payload];
		case GET_NOTES: 
			return [...action.payload];
	}

	return state;
};