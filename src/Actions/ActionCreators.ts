import ACTION_TYPES from './ActionTypes';
import {ISolutionAction} from '../Models';


/**
 * Изменение решения задачи
 *
 * @param {string} value - текст решения задачи
 */
export function changeSolutionValue(value: string): ISolutionAction{
    return {
        type: ACTION_TYPES.CHANGE_SOLUTION_VALUE,
        payload: value
    }
}