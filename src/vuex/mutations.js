import * as types from './mutation_types'
//import { access } from 'fs';

export default {
    [types.UID](state, uid) {
        console.log('mutation-UID 실행')
        state.uid = uid
    },
    [types.ERROR_STATE](state, errorState) {
        state.errorState = errorState
    },
    [types.IS_AUTH](state, isAuth) {
        state.isAuth = isAuth
    },
    ['addCounterOne'](state) {
        state.counter++;
    },
    ['addCounter'](state, payload) {
        console.log('mutation addCounter 실행');
        state.counter = state.counter + payload
    },
    ['initialize'](state) {
        state.counter = 0
    },
    // ['login'](state, accessToken) {
    //     state.accessToken = null
    // },
    // ['logout'](state) {
    //     state.accessToken = null
    // },
    ['setStoredLogs'](state, payload) {
        console.log('mutation측' + payload);
        state.storedLogs = payload
    }
}