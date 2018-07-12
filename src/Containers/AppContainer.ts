import {connect} from 'react-redux';
// import * as _ from 'lodash';
import {changeSolutionValue} from '../Actions/ActionCreators'
import App from '../App';
import {bindActionCreators} from 'redux';
import {IStore} from '../Models';


export const mapStateToProps = (store):IStore => {
    // const {taskTitle, taskText, sourceSample} = _.get(store, 'store.', '');
    console.log('AppContainer::storage', store);
    return {
        taskTitle:  store.fetchTask.taskTitle,
        taskText: store.fetchTask.taskText,
        sourceSample: store.fetchTask.sourceSample
    }
};

export const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({changeSolutionValue}, dispatch)
};


export let AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);
