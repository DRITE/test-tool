import {combineReducers} from 'redux';
// import solutionReducer from './SolutionReducers';
import {fetchTask} from './FetchTaskReducers';


const combinedReducers = combineReducers({
    // solution: solutionReducer,
    fetchTask
});

export default combinedReducers;