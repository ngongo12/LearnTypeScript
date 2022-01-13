export default {
    LOGIN_ACCOUNT: 'LOGIN_ACCOUNT',
    LOGOUT: 'LOGOUT',
    EDIT_PROFILE: 'EDIT_PROFILE',
    REGISTER: 'REGISTER',
}

export const _onSuccess = (action: string) => action + '_SUCCESS';
export const _onFail = (action: string) => action + '_FAIL';
export const _onUnmount = (action: string) => action + '__UNMOUNT';