import React from 'react'
import ReactDOM from 'react-dom'
import App from '@src/App'
import { Provider } from 'react-redux'
import configureStore from '@store/configureStore'
import Modal from './components/modal'

const store = configureStore()

ReactDOM.render(
	<Provider store={store}>
		<App />
		<Modal />
	</Provider>,
	document.getElementById('root')
)
