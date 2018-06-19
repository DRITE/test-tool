import {IProduceSelectAction, ISolutionValue, IStore} from '../Models';


export const initialStore = (): IStore  =>({
    taskSolution: '',
    taskText: 'taskText'
});

export type ISolutionPayloads = ISolutionValue | string;

export default function solutionReducer(
    store: IStore = initialStore(),
    action: IProduceSelectAction<ISolutionPayloads>
):IStore {

}