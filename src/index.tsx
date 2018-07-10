import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {applyMiddleware, createStore} from 'redux';
import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger';
import {Provider} from 'react-redux';

import combinedReducers from './Reducers/index';
import {AppContainer} from './Containers/AppContainer';
import {getTaskData} from './Actions/ActionCreators';
// import {fetchTask, receiveTask, requestTask} from './Actions/ActionCreators';
// import {fetchTask} from './Actions/ActionCreators';

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION__: any,
    }
}

const store = createStore(
    combinedReducers,
    applyMiddleware(
        thunkMiddleware, // lets us dispatch() functions
        logger // neat middleware that logs actions
    ),
);

console.log('Ща пропробудем получить задачу');
store
    .dispatch(getTaskData(1) as any)
    .then(() => console.log(store.getState()));


// store.dispatch(requestTask('1'));
// store.dispatch(receiveTask({"taskId":"1","taskTitle":"taskTitle","taskText":"task_text_sample","sourceSample":"xuy"}));

ReactDOM.render(
    <Provider store={store}>
        <AppContainer/>
    </Provider>,
    document.getElementById('root')
);
