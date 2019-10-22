import Vue from 'vue'
import Vuex from 'vuex'
import state from './state/index'
import mutations from './mutations/index'
import getters from './getters/index'

Vue.use(Vuex)

const store = new Vuex.Store({
    state,
    mutations,
    getters
})

export default store
