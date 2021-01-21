import rootReducer from "./rootReducer";
import { createStore, compose } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';

declare global {
	interface Window {
		__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
	}
}

function configureStore() {
	const store = createStore(
		rootReducer,
		composeWithDevTools()
	);

	return store;
}

export default configureStore