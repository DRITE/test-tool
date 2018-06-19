import ACTION_TYPES from './ActionTypes';

export function changeSolution(value: string){
    return {
        type: ACTION_TYPES.CHANGE_SOLUTION_VALUE,
        payload: value
    }
}