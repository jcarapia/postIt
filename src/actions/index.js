export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';
export const ADD_NOTE = 'ADD_NOTE';
export const GET_NOTES= 'GET_NOTES';
export const OPEN_EDIT_MODAL = 'OPEN_EDIT_MODAL';
export const CLOSE_EDIT_MODAL = 'CLOSE_EDIT_MODAL';
export const EDIT_NOTE = 'EDIT_NOTE';
export const OPEN_DELETE_MODAL = 'OPEN_DELETE_MODAL';
export const CLOSE_DELETE_MODAL = 'CLOSE_DELETE_MODAL';
export const DELETE_NOTE = 'DELETE_NOTE';


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

export function openDeleteModal(noteId) {

	return {	
		type: OPEN_DELETE_MODAL,
		payload: noteId
	}
}

export function closeDeleteModal() {
	console.log('close action')
	return {
		type: CLOSE_DELETE_MODAL,
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

export function deleteNote(noteId) {
	let notes = localStorage.getItem('notes');
	let notesArray = JSON.parse(notes);

	for(var i = 0; i < notesArray.length; i++) {
		if(notesArray[i].id === noteId) {
			notesArray.splice(i,1);
			break;
		}
	};

	localStorage.setItem('notes', JSON.stringify(notesArray));

	return {
		type: DELETE_NOTE,
		payload: 'test'
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



