import {OPEN_DELETE_MODAL, CLOSE_DELETE_MODAL} from '../actions/index';


export default function(state = {status:'close', id:''}, action) {
	switch(action.type) {
		case OPEN_DELETE_MODAL: 
			console.log('delete reducer', action.payload)
			return {status: 'open', id: action.payload}
		case CLOSE_DELETE_MODAL:
			console.log('close reducer')
			return {status: 'close', id:'' }
	}

	return state;
};