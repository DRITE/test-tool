import ACTION_TYPES from '../Actions/ActionTypes';
import {IProduceSelectAction, IReceiveTaskJSON, ISolutionAction} from '../Models';

export interface ITaskStore extends IReceiveTaskJSON {
    isFetching: boolean
}

export const initialTask = (): ITaskStore => {
    return {
        taskId: undefined,
        taskTitle: '',
        taskText: '',
        sourceSample: '',
        isFetching: false
    }
};

export type ITaskPayloads = ISolutionAction | ITaskStore;


export const fetchTask = (store: ITaskStore = initialTask(), action: IProduceSelectAction<ITaskPayloads>): ITaskStore => {
    switch (action.type) {
        case `${ACTION_TYPES.GET_TASK_DATA}_BEGIN`:
            return {
                ...store,
                isFetching: true
            };
        case `${ACTION_TYPES.GET_TASK_DATA}_SUCCESS`:
            let taskPayload = (action.payload as ITaskStore);
            return {
                ...store,
                isFetching: false,
                taskId: taskPayload.taskId,
                taskTitle: taskPayload.taskTitle,
                taskText: taskPayload.taskText,
                sourceSample: taskPayload.sourceSample
            };
        case `${ACTION_TYPES.GET_TASK_DATA}_ERROR`:
            return {
                ...store,
                taskId: undefined,
                taskTitle: '',
                taskText: '',
                sourceSample: '',
                isFetching: false
            };
        default:
            return store
    }
};