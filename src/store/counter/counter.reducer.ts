import { getType } from 'typesafe-actions'
import { countActions, actions as count } from './counter.action'

interface countTypes {
	number: number
}

const initialState: countTypes = {
	number: 0
}

function countReducer(state: countTypes = initialState, action: countActions) {
	switch (action.type) {
		case getType(count.increaseCount):
			return {
				...state,
				number: state.number + 1
			}

		case getType(count.decreaseCount):
			return {
				...state,
				number: state.number - 1
			}

		default: return state
	}
}

export default countReducer