/**
 * Доступные типы действий:
 *
 * CHANGE_SOLUTION_VALUE - Изменение решения задачи
 * REQUEST_TASK - Запрос на получение задачи
 * RECEIVE_TASK - Ответ на получение задачи
 * REQUEST_TASKS_LIST - Запрос на получение всех задач
 * RECEIVE_TASKS_LIST - Ответ на получение всех задач
 * GET_TASK_DATA - Получить задачу с сервера
 * TEST_TASK_SOLUTION - Проверить решение задачи
 */

const ACTION_TYPES = {
    CHANGE_SOLUTION_VALUE: 'CHANGE_SOLUTION_VALUE',
    REQUEST_TASK: 'REQUEST_TASK',
    RECEIVE_TASK: 'RECEIVE_TASK',
    REQUEST_TASKS_LIST: 'REQUEST_TASKS_LIST',
    RECEIVE_TASKS_LIST: 'RECEIVE_TASKS_LIST',
    GET_TASK_DATA: 'GET_TASK_DATA',
    TEST_TASK_SOLUTION: 'TEST_TASK_SOLUTION'
};

export default ACTION_TYPES;