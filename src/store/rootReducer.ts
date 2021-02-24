import { combineReducers } from 'redux'
import count from '@store/counter/counter.reducer'
import github from '@store/github/github.reducer'
import modal from '@store/modal/modal.reducer'

const rootReducer = combineReducers({
	count,
	github,
	modal,
})

export default rootReducer
export type RootState = ReturnType<typeof rootReducer>
