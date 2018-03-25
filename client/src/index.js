import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore, applyMiddleware } from 'redux'
import {Provider} from 'react-redux'
import promise from 'redux-promise'
import reduxThunk from 'redux-thunk'
import reducers from './reducers'

const store = createStore(reducers, {}, applyMiddleware(promise, reduxThunk));


ReactDOM.render(<Provider store={store}><App /></Provider>
	, document.getElementById('root'));
