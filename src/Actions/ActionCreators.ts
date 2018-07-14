import ACTION_TYPES from './ActionTypes';
import * as Models from '../Models';
import {IReceiveTaskJSON, ITestTask, ITestTaskJSON, ITestTaskResult} from '../Models';
import * as Redux from 'redux';
import {dispatchAsync, getTask, testTask} from '../utils';
import {IReceiveTask} from '../Models';


/**
 * Изменение решения задачи
 *
 * @param {string} value - текст решения задачи
 */
export function changeSolutionValue(value: string): Models.ISolutionAction {
    return {
        type: ACTION_TYPES.CHANGE_SOLUTION_VALUE,
        payload: value
    }
}


/**
 * Запрос на получение конкретной задачи по taskId
 * @param {number} taskId
 * @returns {(dispatch: Dispatch<IReceiveTask>) => Promise<IReceiveTaskJSON>}
 */
export function getTaskData(
    taskId: number
): (dispatch: Redux.Dispatch<IReceiveTask>) => Promise<IReceiveTaskJSON> {
    return dispatchAsync<number, IReceiveTaskJSON, string>(
        ACTION_TYPES.GET_TASK_DATA,
        () => getTask(taskId),
        taskId
    )
}


/**
 * Отправка решения задачи на проверку
 * @param {ITestTaskJSON} testTaskData
 * @returns {(dispatch: Dispatch<ITestTask>) => Promise<ITestTaskResult>}
 */
export function testTaskSolution(
    testTaskData: ITestTaskJSON
): (dispatch: Redux.Dispatch<ITestTask>) => Promise<ITestTaskResult> {
    return dispatchAsync<ITestTaskJSON, ITestTaskResult, string>(
        ACTION_TYPES.TEST_TASK_SOLUTION,
        () => testTask(testTaskData),
        {
            ...testTaskData
        }
    )
}

// TODO для получения всех задач делать GET на /tasks . Возвращает массив задач (item -- вся инфа по задаче)

/**
 * Очистка области решения и результата прверки задачи
 * @returns {ISolutionAction}
 */
export function clearSolutionAndResultAreas(): Models.ISolutionAction {
    return {
        type: ACTION_TYPES.CLEAR_SOLUTION_AND_RESULT_AREAS
    }
}