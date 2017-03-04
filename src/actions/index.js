export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';

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