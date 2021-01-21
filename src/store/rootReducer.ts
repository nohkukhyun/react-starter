import { combineReducers } from "redux";
import count from '@store/counter/counter.reducer'

const rootReducer = combineReducers({
	count
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;