import ACTION_TYPES from './ActionTypes';


/**
 * Изменение решения задачи
 *
 * @param {string} value - текст решения задачи
 */
export function changeSolution(value: string){
    return {
        type: ACTION_TYPES.CHANGE_SOLUTION_VALUE,
        payload: value
    }
}