import { _onFail, _onSuccess, _onUnmount } from '@redux/actions';
import { stateDefault } from './initialStates';

export const reducerDefault = (state: any = stateDefault, action: any, Action: string) : any => {
    switch (action.type) {
        case Action:
            return { ...state, isLoading: true };
        case _onSuccess(Action):
            return { ...state, isLoading: false };
        case _onFail(Action):
            return { ...state, isLoading: false };
        case _onSuccess(Action):
            return { ...stateDefault };
        default:
            return state;
    }
}