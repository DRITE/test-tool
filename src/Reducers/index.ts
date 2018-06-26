import {combineReducers} from 'redux';
import solutionReducer from './SolutionReducers';


const combainedReducers = combineReducers({
    solution: solutionReducer
});

export default combainedReducers;