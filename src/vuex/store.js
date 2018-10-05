import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import actions from './actions'
import mutations from './mutations'

Vue.use(Vuex)

const state = {
    counter: 1,
    axios: require('axios')
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