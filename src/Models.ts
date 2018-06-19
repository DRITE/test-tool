
export interface IStore {
    taskText: string,
    taskSolution: string,
}

export interface ISolutionValue {
    solutionValue: string,
}

export interface IProduceSelectAction<T>{
    type: string,
    payload?: T
}