import {OPEN_EDIT_MODAL, CLOSE_EDIT_MODAL} from '../actions/index';

export default function(state = {status:'close', title:'', text:'', color: '', id:''}, action) {
	switch(action.type) {
		case OPEN_EDIT_MODAL: 
			let title = action.payload.title;
			let text = action.payload.text;
			let color = action.payload.color;
			let id = action.payload.id;
			return {status: 'open', title, text, color, id};
		case CLOSE_EDIT_MODAL:
			return {status: 'close' }
	}

	return state;
};