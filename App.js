import React from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';
import { decode, encode } from 'base-64'

import { init } from './helpers/db';
import contatosReducer from './store/contatosReducer';

import Navigator from './navigation/Navigator';

if (!global.btoa) { global.btoa = encode }
if (!global.atob) { global.atob = decode }

init().then(() => {
	console.log("A criação da base foi um sucesso!");
}).catch((err) => {
	console.log('A criação da base falhou!');
	console.log(err);
});

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