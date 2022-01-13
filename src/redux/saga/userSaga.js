import { call, put, select, takeLatest } from 'redux-saga/effects';
import userAPI from '@library/utils/api/userAPI';
import actions, {_onSuccess, _onFail, _onUnmount} from '@redux/actions';

const saveUserToStore = function* (user) {
    //console.log('>>>>>>>>>>>>>user store', user);
    if (user.result) {
        //storeData('user', { phone: user.phone, password: user.password });
    }
}

export const postLoginAction = function* (action) {
    const { payload: {phone, password}, type} = action
    console.log('postLoginAction')
    try {
        console.log(
            `User Saga - postLoginAction: phone: ${phone} - password: ${password}`,
        );
        console.log(phone)
        let response = yield call(userAPI.login, phone, password); //gọi Api login
        console.log('>>>>>>>>>response',response)
        yield call(saveUserToStore, { phone, password, result: response?.result ? response?.result : false });
        //console.log('>>>>>>>>>>>>>>>User saga response login: ', response);
        if (response?.result) {
            yield put({ type: _onSuccess(actions.LOGIN_ACCOUNT), payload: response }); //gọi action login success
        }
        else {
            yield put({ type: _onFail(actions.LOGIN_ACCOUNT), payload: 'Login thất bại' });
        }
    }
    catch (e) {
        yield put({ type: _onFail(actions.LOGIN_ACCOUNT), payload: e });
    }
}

export const postEditProfile = function* (action) {
    const { payload: {user}, type } = action
    try {
        console.log('User Saga - editProfile');
        let response = yield call(userAPI.editProfiles, user); //gọi api edit profiles
        
        //console.log('>>>>>>>>user saga ', response);
        yield put({ type: _onSuccess(actions.EDIT_PROFILE), payload: response }) //gọi action edit success
    } catch (e) {
        yield put({ type: _onFail(actions.EDIT_PROFILE), payload: e });
    }
}

export const postRegiser = function* (action) {
    const { payload: {user}, type } = action
    try {
        console.log('User Saga - Register');
        console.log(user)
        let response = yield call(userAPI.register, user); //gọi api register
        //gọi lưu mật khẩu
        yield call(saveUserToStore, { phone: user.phone, password: user.password, result: response.result ? response.result : false });
        console.log('>>>>>>>>user saga ', response);
        if (response) {
            yield put({ type: _onSuccess(actions.REGISTER), payload: response }); //gọi action register success
        }
    }catch(e){
        yield put({ type: _onFail(actions.REGISTER), payload: e });
    }
}

export default function* () {
    console.log('userSaga')
    yield takeLatest(actions.LOGIN_ACCOUNT, postLoginAction)
    yield takeLatest(actions.REGISTER, postRegiser)
    yield takeLatest(actions.EDIT_PROFILE, postEditProfile)
}