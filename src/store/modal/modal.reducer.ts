import { getType } from 'typesafe-actions'
import { modalActions, actions as modal } from './modal.action'

interface ModalTypes {
	show: boolean
	component: any
	idx: number
}

const initialState: ModalTypes = {
	show: false,
	component: null,
	idx: 0,
}

function modalReducer(state: ModalTypes = initialState, action: modalActions) {
	switch (action.type) {
		case getType(modal.openModal):
			return {
				...state,
				show: true,
				component: action.payload,
				idx: state.idx + 1,
			}

		case getType(modal.closeModal):
			return {
				...state,
				show: false,
				component: null,
				idx: state.idx - 1,
			}

		default:
			return state
	}
}

export default modalReducer
