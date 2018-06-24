import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
// import thunk from 'redux-thunk';

// import * as reducers from './store/reducers';
// import {App} from './App';
import combinedReducers from './Reducers/index';
import {AppContainer} from './Containers/AppContainer';

let store = createStore(combinedReducers,  window.__REDUX_DEVTOOLS_EXTENSION__());





ReactDOM.render(
    <Provider store={store}>
        {/*<App taskText={'Через пропсы передали какой-то текст'}/>*/}
        <AppContainer />
    </Provider>,
    document.getElementById('root')
);
