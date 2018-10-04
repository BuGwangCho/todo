import * as types from './mutation_types'

export default {
    [types.UID](state, uid) {
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
        state.counter = state.counter + payload
    },

    ['initialize'](state) {
        state.counter = 0
    }

}