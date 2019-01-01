const state = () => ({
  emails: [],
  messages:[],
  singleEmail: {}
})
const getters = {}
const mutations = {
  SET_EMAILS(state, payload) {
    state.emails = payload
  },
  SET_MESSAGES(state, payload) {
    state.messages = payload
  },
  SAVE_Email(state, payload) {
    state.emails.push(payload)
  },
  DELETE_EMAIL(state, payload) {
    const index = state.emails.findIndex(p => p.emailId === payload.id)
    state.emails.splice(index, 1)
  }
}
const actions = {
  setEmails({ commit }, payload) { //esta en plural
    commit('SET_EMAILS', payload)
  },
  async setEmail({ commit }, payload) {
    console.log(payload)
    const {data} = await this.$axios.get(`/contact/${payload.id}`)
    console.log(data)
    commit('SET_MESSAGES', data)
  },
  async saveEmail({ commit }, payload) {
    const { data } = await this.$axios.post('/email', payload)
    commit('SAVE_Email', data)
  },
  async deleteEmail({ commit }, payload) {
    const { data } = await this.$axios.delete(`/contact/${payload.id}`)
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
