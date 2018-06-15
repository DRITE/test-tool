import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

import * as reducers from './store/reducers';
import {App} from './App';

let store = createStore(combineReducers(reducers), applyMiddleware(thunk));


ReactDOM.render(
    <Provider store={store}>
        <App taskText={'Через пропсы передали какой-то текст'}/>
    </Provider>,
    document.getElementById('root')
);
