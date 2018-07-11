import ACTION_TYPES from '../Actions/ActionTypes';
import {IProduceSelectAction, IReceiveTaskJSON, ISolutionAction} from '../Models';

export interface ITaskStore extends IReceiveTaskJSON {
    isFetching: boolean,

    result: string,
    solutionId: string,
}

export const initialTask = (): ITaskStore => {
    return {
        isFetching: false,

        taskId: undefined,
        taskTitle: '',
        taskText: '',
        sourceSample: '',

        result: '',
        solutionId: '1'
    }
};

export type ITaskPayloads = ISolutionAction | ITaskStore;


export const fetchTask = (store: ITaskStore = initialTask(), action: IProduceSelectAction<ITaskPayloads>): ITaskStore => {
    switch (action.type) {
        // Get Task
        case `${ACTION_TYPES.GET_TASK_DATA}_BEGIN`:
        case `${ACTION_TYPES.TEST_TASK_SOLUTION}_BEGIN`:
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
            // Test Task
        case `${ACTION_TYPES.TEST_TASK_SOLUTION}_SUCCESS`:
            let testPayload = (action.payload as ITaskStore);
            return {
                ...store,
                result: testPayload.result
            };
        case `${ACTION_TYPES.TEST_TASK_SOLUTION}_ERROR`:
            return {
                ...store,
                isFetching: false
            };
        default:
            return store
    }
};