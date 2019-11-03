import Vue from 'vue'
import Vuex from 'vuex'
import state from './state/index'
import getters from './getters/index'
import mutations from './mutations/index'
import actions from './actions/index'
import plugins from './plugins/index'

Vue.use(Vuex)

const isDev = process.env.NODE_ENV === 'development'

const store = new Vuex.Store({
    strict: isDev,
    state,
    getters,
    mutations,
    actions,
    plugins
})

export default store
