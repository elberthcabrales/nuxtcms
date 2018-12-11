const state = () => ({
    users: [],
  })
  const getters = {}
  const mutations = {
    SET_USERS(state, payload) {
      state.users = payload
    },
    UPDATE_USER(state, payload) {
      const index = state.users.findIndex(p => p.id === payload.id)
      state.users[index].email = payload.email
      state.users[index].username = payload.username
    },
    DELETE_USER(state, payload) {
      const index = state.users.findIndex(p => p.id === payload.id)
      state.users.splice(index, 1)
    }
  }
  const actions = {
    setUsers({ commit }, payload) { //esta en plural
      commit('SET_USERS', payload)
    },
    async saveUser({ commit }, payload) {
      const { data } = await this.$axios.post('/user', payload)
      commit('SAVE_POST', data)
    },
    async updateUser({ commit }, payload) {
      const { data } = await this.$axios.patch(`/user/${payload.id}`, payload)
      commit('UPDATE_POST', data)
    },
    async deleteUser({ commit }, payload) {
      const { data } = await this.$axios.delete(`/user/${payload.id}`)
      commit('DELETE_USER', payload)
    }
  }
  
  const userModule = {
    state,
    getters,
    mutations,
    actions
  }
  export default userModule
  