import { ISolutionAction, ISolutionStore} from '../Models';
import ACTION_TYPES from '../Actions/ActionTypes';


export const initialSolution = (): ISolutionStore => {
    return{
        solutionValue: ''
    }
};


export type ISolutionPayloads = ISolutionStore | string;

export default function solutionReducer(
    store: ISolutionStore = initialSolution(),
    action: ISolutionAction
    // action: IProduceSelectAction<ISolutionPayloads>
):ISolutionStore {

    switch (action.type) {
        case ACTION_TYPES.CHANGE_SOLUTION_VALUE:
            return {
                ...store,
                solutionValue: action.payload
            };
        default:
            return {
                ...store,
            }
    }
}