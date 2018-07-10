
export interface IStore {
    taskText: string,
    solutionValue: string,
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