
export interface IStore {
    taskTitle: string,
    taskText: string,
    sourceSample: string,
    solutionValue?: string,
}

export interface ISolutionStore {
    solutionValue: string,
}

export interface IProduceSelectAction<T>{
    type: string;
    payload?: T;
}

export interface ISolutionAction {
    type: string,
    payload?: string
}

export interface IReceiveTask extends IReceiveTaskJSON{
    type: string
}

export interface IReceiveTaskJSON {
    taskId: number,
    taskTitle: string,
    taskText: string,
    sourceSample: string
}

export interface ITestTask extends ITestTaskJSON{
    type: string
}

/**
 * Информация, которая отправляется на сервер для проверки задачи
 *
 * @param {Number} taskId ID задачи
 * @param {String} solutionId ID решения
 * @param {String} solutionValue Решение в виде строки
 */
export interface ITestTaskJSON {
    taskId: number,
    solutionId: string,
    solutionValue: string
}

/**
 * Результат проверки задачи
 *
 * @param {String} result Рекзультат проверки
 */
export interface ITestTaskResult {
    result: string,
}