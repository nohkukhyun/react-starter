import { createStore, compose } from "redux";
import rootReducer from "./rootReducer";

declare global {
	interface Window {
		__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
	}
}

const devTools = (window as any).__REDUX_DEVTOOLS_EXTENSION__;

function configureStore() {
	const store = createStore(
		rootReducer,
		devTools && devTools()

	);

	return store;
}

export default configureStore