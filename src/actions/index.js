export const ADD_MODAL = 'ADD_MODAL';

export function openAddModal() {
	console.log('hello')
	return {
		type: ADD_MODAL,
		payload: 'open'
	}
}

export function closeAddModal() {
	return {
		type: CLOSE_MODAL,
		payload: 'close'
	}
}