import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import actions from './actions'
import mutations from './mutations'
import axios from 'axios'
Vue.use(Vuex)


function getData(table) {
    const axois = require('axios');
    return axios.get('http://222.231.4.31/~lucy1010/log/log_api_test.php?table=' + table + '&year=2018&limit=50')
        .then(function(response) {
            let logData = response.data.Data;
            return logData;
        }).catch(function(err) {
            console.log(err);
        });
}
let login = getData('login');
let page = getData('page');
let scrap = getData('scrap');
const state = {
    uid: '1234',
    isAuth: 'false',
    errorState: '',
    counter: 1,
    axios: require('axios'),
    table: ['LOGIN', 'PAGE', 'SCRAP'],
    cols: {
        'LOGIN': ['seq', 'id', 'mac', 'device', 'version', 'sip', 'uip', 'login', 'logout'],
        'PAGE': ['seq', 'id', 'ip', 'version', 'pageSerial', 'regDate'],
        'SCRAP': ['seq', 'id', 'ip', 'version', 'scrapSerial', 'regDate']
    },
    colsNum: {
        'LOGIN': 9,
        'PAGE': 6,
        'SCRAP': 6
    },
    object: {
        'LOGIN': login,
        'PAGE': page,
        'SCRAP': scrap
    },
    storedLogs: {}
}

// const mutations = {
//     addCounter(state) {
//         state.counter++
//     }
// }
export default new Vuex.Store({
    state,
    mutations,
    getters,
    actions
})