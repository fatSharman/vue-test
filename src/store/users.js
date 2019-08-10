const users = {
  namespaced: true,
  state: {
    users: [
      {
        name: 'dyc',
        password: '123456'
      }
    ]
  },
  mutations: {
    checkPassword (state, name) {},
    changePassword (state, userInfo) {}
  },
  getters: {}
}

export default users
