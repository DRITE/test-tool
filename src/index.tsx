import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import combinedReducers from './Reducers/index';
import {AppContainer} from './Containers/AppContainer';

declare global{
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION__: any,
    }
}

const store = createStore(combinedReducers,  window.__REDUX_DEVTOOLS_EXTENSION__());





ReactDOM.render(
    <Provider store={store}>
        <AppContainer />
    </Provider>,
    document.getElementById('root')
);
