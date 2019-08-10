import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { createStore } from 'redux';

import noteReducer from './Reducers/NoteReducer';

const store = createStore(noteReducer);

ReactDOM.render(
    <App store={store} />, document.getElementById('root'));
