import React from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';

import contatosReducer from './store/contatosReducer';

import Navigator from './navigation/Navigator';

const store = createStore(
	combineReducers({
		contatosReducer
	}),
	applyMiddleware(reduxThunk)
);

export default function App() {
	return (
		<Provider store={store}>
			<Navigator />
		</Provider>
	);
}