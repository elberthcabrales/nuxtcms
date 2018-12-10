const state = () => ({
  emails: [],
  singleEmail: {}
})
const getters = {}
const mutations = {
  SET_Emails(state, payload) {
    state.emails = payload
  },
  SET_Email(state, payload) {
    state.singleEmail = Object.assign({}, state.singleEmail, payload)
  },
  SAVE_Email(state, payload) {
    state.emails.push(payload)
  },
  DELETE_EMAIL(state, payload) {
    const index = state.emails.findIndex(p => p.id === payload.id)
    state.emails.splice(index, 1)
  }
}
const actions = {
  setEmails({ commit }, payload) { //esta en plural
    commit('SET_Emails', payload)
  },
  setEmail({ commit }, payload) {
    commit('SET_Email', payload)
  },
  async saveEmail({ commit }, payload) {
    const { data } = await this.$axios.post('/email', payload)
    commit('SAVE_Email', data)
  },
  async deleteEmail({ commit }, payload) {
    const { data } = await this.$axios.delete(`/email/${payload.id}`)
    commit('DELETE_EMAIL', payload)
  }
}

const emailModule = {
  state,
  getters,
  mutations,
  actions
}
export default emailModule
