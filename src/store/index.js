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
    second: {
      namespaced: true,
      state: {
        count: 0,
        num: 0
      },
      mutations: {
        set (state, payload) {
          state.num = payload
        },
        increment (state) {
          state.count++
        }
      }
    }
  }
})

export default store
