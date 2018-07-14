/**
 * Доступные типы действий:
 *
 * CHANGE_SOLUTION_VALUE - Изменение решения задачи
 * GET_TASK_DATA - Получить задачу с сервера
 * TEST_TASK_SOLUTION - Проверить решение задачи
 * CLEAR_SOLUTION_AND_RESULT_AREAS - Очистить область решения и проверки задачи
 */

const ACTION_TYPES = {
    CHANGE_SOLUTION_VALUE: 'CHANGE_SOLUTION_VALUE',
    GET_TASK_DATA: 'GET_TASK_DATA',
    TEST_TASK_SOLUTION: 'TEST_TASK_SOLUTION',
    CLEAR_SOLUTION_AND_RESULT_AREAS: 'CLEAR_SOLUTION_AND_RESULT_AREAS'
};

export default ACTION_TYPES;