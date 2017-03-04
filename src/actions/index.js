export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';
export const ADD_NOTE = 'ADD_NOTE';
export const GET_NOTES= 'GET_NOTES';
export const OPEN_EDIT_MODAL = 'OPEN_EDIT_MODAL';
export const CLOSE_EDIT_MODAL = 'CLOSE_EDIT_MODAL';
export const EDIT_NOTE = 'EDIT_NOTE';

export function closeAddModal() {
	return {
		type: CLOSE_MODAL,
		payload: 'close'
	}
}

export function openAddModal() {
	return {
		type: OPEN_MODAL,
		payload: 'open'
	}
}

export function openEditModal(note) {
	//let test = {title: 'title', text: 'text', id:'id'}
	return {
		type: OPEN_EDIT_MODAL,
		payload: note
	}
}

export function closeEditModal() {
	console.log('closing modal')
	return {
		type: CLOSE_EDIT_MODAL,
		payload: 'close'
	}
}

export function getNotes() {
	let notes = localStorage.getItem('notes');
	if(!notes){notes = "[]"};
	let notesArray = JSON.parse(notes);

	return {
		type: GET_NOTES,
		payload: notesArray
	}

}

export function addNote(note) {
	let notes = localStorage.getItem('notes');
	if(!notes){notes = "[]"};

	let notesArray = JSON.parse(notes);
	notesArray.push(note);
	localStorage.setItem('notes', JSON.stringify(notesArray));

	return {
		type: ADD_NOTE,
		payload: notesArray
	}
}

export function editNote(title, text, id) {
	let notes = localStorage.getItem('notes');
	let notesArray = JSON.parse(notes);

	for(var i = 0; i < notesArray.length; i++) {
		if(notesArray[i].id === id){
			notesArray[i].title = title;
			notesArray[i].text = text;
		}
	}
	
	localStorage.setItem('notes', JSON.stringify(notesArray));

	return {
		type: EDIT_NOTE,
		payload: 'test'
	}
}



