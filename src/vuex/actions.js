import * as types from './mutation_types'
import api from '../service'

let setUID = (context, data) => {
    alert('uid저장');
    context.commit('UID', data)
}

let setErrorState = (context, data) => {
    context.commit(ERROR_STATE, data)
}

let setIsAuth = (context, data) => {
    context.commit('IS_AUTH', data)
}

export default {
    async login(store, { uid, password }) {
        let loginResponse = await api.login(uid, password)
        switch (loginResponse) {
            case 'noAuth':
                setErrorState(store, 'Not qualified or Wrong student number/Password. Please check it and log in again.')
                setIsAuth(store, false)
                break
            case 'done':
                setErrorState(store, 'You have already finished the questionnaire. Thank you.')
                setIsAuth(store, false)
                break
            default:
                setUID(store, loginResponse.data[0].UID)
                setErrorState(store, '')
                setIsAuth(store, true)
        }
        return store.getters.getIsAuth
    },
    addCounterOne: context => context.commit('addCounterOne'),
    asyncIncrement: (context, payload) => setTimeout(function() {
        context.commit('addCounter', payload.by)
    }, payload.duration),
    getLoginLogData: context => context.commit('getLoginLogData'),
    getPageLogData: context => context.commit('getPageLogData'),
    getScrapLogData: context => context.commit('getScrapLogData'),
    login2(store, { uid, password }) {
        let loginResponse = '';
        if (uid === '1234' && password === '1234') {
            loginResponse = 'true'
        }
        if (loginResponse) {
            setIsAuth(store, loginResponse);
            setUID(store, uid);
        }
    },
    LOGOUT({ commit }) {
        commit('LOGOUT')
    },
    goStorage(context, condition) {
        console.log(condition.table_name);
        context.state.axios.get('http://222.231.4.31/~lucy1010/storage/insert_storage_test1.php?table=' + condition.table_name +
            '&id=1234&year=' + condition.year + '&seq=' + condition.seq
        ).then(function(response) {
            console.log(response)
        }).catch(function(err) {
            console.log(err)
        })
        context.state.axios.get('http://222.231.4.31/~lucy1010/storage/get_stored_logs_test1.php?table=' +
            condition.table_name + '&year=' + condition.year + '&id=1234'
        ).then(function(response) {
            context.commit('setStoredLogs', response.data);
        }).catch(function(err) {
            console.log(err)
        })
    },
    getStoredLogsProc(context, condition) {
        console.log(condition.table_name);
        console.log(condition.year);
        context.state.axios.get('http://222.231.4.31/~lucy1010/storage/get_stored_logs_test1.php?table=' +
            condition.table_name + '&year=' + condition.year + '&id=1234'
        ).then(function(response) {
            console.log(response.data)
            context.commit('setStoredLogs', response.data);
        }).catch(function(err) {
            console.log(err)
        })
    },
    deleteStoredLog(context, condition) {
        console.log(condition.table_name);
        console.log(condition.year);
        console.log(condition.seq);
        context.state.axios.get('http://222.231.4.31/~lucy1010/storage/delete_stored_logs_test1.php?table=' +
            condition.table_name + '&year=' + condition.year + '&id=1234' + '&seq=' + condition.seq
        ).then(function(response) {
            console.log(response.data)
        }).catch(function(err) {
            console.log(err)
        })
        context.state.axios.get('http://222.231.4.31/~lucy1010/storage/get_stored_logs_test1.php?table=' +
            condition.table_name + '&year=' + condition.year + '&id=1234'
        ).then(function(response) {
            context.commit('setStoredLogs', response.data);
        }).catch(function(err) {
            console.log(err)
        })
    }
}