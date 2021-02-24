import { combineReducers } from "redux";
import count from '@store/counter/counter.reducer'
import github from '@store/github/github.reducer'

const rootReducer = combineReducers({
	count,
	github
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;