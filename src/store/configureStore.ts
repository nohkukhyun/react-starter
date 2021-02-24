import rootReducer from "./rootReducer";
import rootSaga from './rootSaga'
import { createStore, applyMiddleware, compose } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();

declare global {
	interface Window {
		__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
	}
}

function configureStore() {
	const store = createStore(
		rootReducer,
		composeWithDevTools(applyMiddleware(sagaMiddleware))
	);
	sagaMiddleware.run(rootSaga)
	return store;
}

export default configureStore