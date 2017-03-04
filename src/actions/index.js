export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';
export const ADD_NOTE = 'ADD_NOTE';
export const GET_NOTES= 'GET_NOTES';

export function closeAddModal() {
	console.log('closing modal')
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