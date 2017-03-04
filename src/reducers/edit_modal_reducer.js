import {OPEN_EDIT_MODAL, CLOSE_EDIT_MODAL} from '../actions/index';


export default function(state = {status:'close', title:'', text:'', id:''}, action) {
	switch(action.type) {
		case OPEN_EDIT_MODAL: 
		console.log('from the edit reducer', action.payload)
			let title = action.payload.title;
			let text = action.payload.text;
			let id = action.payload.id;
			return {status: 'open', title, text, id};
		case CLOSE_EDIT_MODAL:
			return {status: 'close' }
	}

	return state;
};