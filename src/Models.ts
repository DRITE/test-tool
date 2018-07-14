
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

export interface ITestTaskJSON {
    taskId: number,
    solutionId: string,
    solutionValue: string
}

export interface ITestTaskResult {
    result: string,
}