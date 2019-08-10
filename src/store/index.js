import user from './users'
import common from './common'
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    first: {
      namespaced: true,
      state: {
        navIsCollapse: true
      },
      mutations: {
        toggleNavCollapseStatus (state) {
          state.navIsCollapse = !state.navIsCollapse
        },
        change (state, str) {
          state.string = str
        }
      },
      getters: {
        getPrice (state) {
          return state.count * 500
        }
      }
    },
    user,
    common
  }
})

export default store
