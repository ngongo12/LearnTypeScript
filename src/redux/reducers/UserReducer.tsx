import { reducerDefault } from "@redux/common/reducer";
import actions, { _onFail, _onSuccess, _onUnmount } from "@redux/actions";

const initData = {
    isLoading: false,
    isLogined: false,
    message: null
}

const userReducer = (state = initData, { type, payload }: any) => {
    console.log(`userReducer type: ${type}`);
    console.log('userReducer payload', payload)
    console.log('userReducer state ', state);
    switch (type) {
        case actions.LOGIN_ACCOUNT:
            return {
                ...state,
                isLoading: true,
                message: null
            }
        case actions.REGISTER:
            return {
                ...state,
                isLoading: true,
                message: null
            }
        case _onSuccess(actions.LOGIN_ACCOUNT): case _onSuccess(actions.EDIT_PROFILE): case _onSuccess(actions.REGISTER):
            return {
                ...state,
                isLoading: false,
                success: true,
                ...payload,
            }
        case _onFail(actions.LOGIN_ACCOUNT): case _onFail(actions.EDIT_PROFILE): case _onFail(actions.REGISTER):
            return {
                ...state,
                message: payload,
                success: false,
                isLoading: false,
            }
        case actions.EDIT_PROFILE:
            return {
                ...state,
                isLoading: true,
                success: false,
                message: null
            }
        case actions.LOGOUT:
            return {
                isLoading: false,
                isLogined: false,
                message: null,
                user: null,
                notFirst: true
            }
        default:
            return state;
    }
}

export default userReducer