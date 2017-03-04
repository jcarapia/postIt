import {OPEN_MODAL, CLOSE_MODAL} from '../actions/index';


export default function(state = ['close'], action) {
	switch(action.type) {
		case CLOSE_MODAL: 
			return [action.payload];
		case OPEN_MODAL:
			return [action.payload];
	}

	return state;
};