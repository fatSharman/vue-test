const common = {
  namespaced: true,
  state: {
    componentName: ''
  },
  mutations: {
    setName (state, name) {
      state.componentName = name
    }
  },
  getters: {}
}

export default common
