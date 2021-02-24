import { ActionType, createAction } from 'typesafe-actions'

export const openModal = createAction('@modal/OPEN_MODAL')<any | undefined>()
export const closeModal = createAction('@moda/CLOSE_MODAL')<any>()

export const actions = {
	openModal,
	closeModal,
}
export type modalActions = ActionType<typeof actions>
