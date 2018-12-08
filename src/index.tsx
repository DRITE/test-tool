import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {applyMiddleware, createStore} from 'redux';
import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger';
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import combinedReducers from './app/interview/Reducers/index';
import {AppContainer} from './app/interview/Containers/index';
import {getTaskData} from './app/interview/Actions/ActionCreators';
import {User} from './app/interview/Components/User';
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

function f() {
    console.log('qqqqqqqqqqqqqqqq');
    store
    .dispatch(getTaskData(1) as any)
    .then(() => console.log(store.getState()));
}
setTimeout(f, 0);

// function p() {
//     store
//         .dispatch(testTaskSolution({
//             taskId: 1,
//             solutionId: '1',
//             solution: `private int calculateMatrix(int[][] array) {
//         int summ = 0;
//         for (int i = 0; i < 5; i++) {
//             for (int j = 0; j < 5; j++) {
//                 if ((i == j) || (i == (5 - j - 1)))
//                     summ += array[i][j];
//             }
//         }
//         return summ;
//     }`
//         }) as any)
//         .then(() => console.log(store.getState()))
// }
// setTimeout(p, 1_000);


// store.dispatch(requestTask('1'));
// store.dispatch(receiveTask({"taskId":"1","taskTitle":"taskTitle","taskText":"task_text_sample","sourceSample":"xuy"}));

ReactDOM.render(
    <Provider store={store}>
        {/*<AppContainer/>*/}
        <Router>
            <div>
                <Route path='/app' component={AppContainer}/>
                <Route path='/user' component={User}/>
            </div>
        </Router>
    </Provider>,
    document.getElementById('root')
);
