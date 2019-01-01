const state = () => ({
  images: [],
  singleImage: {
    path: "",
    title: "",
    description: "",
    tipo: "slide"
  },
  loading: false,
})
const getters = {}
const mutations = {
  SET_IMAGES(state, payload) {
    state.images = payload
  },
  SET_SINGLEIMAGE(state, payload) {
    state.singleImage = payload
  },
  SAVE_IMAGE(state, payload) {
    state.images.push(payload)
  },
  DELETE_IMAGE(state, payload) {
    const index = state.images.findIndex(p => p.id === payload.id)
    state.images.splice(index, 1)
  },
  toggleLoading(state) {
    state.loading = !state.loading
  }
}
const actions = {
  fetchImages({ state, commit }) {
    commit('toggleLoading')
    this.$axios.get(`/image`).then(res => {
      commit('toggleLoading')
      const {data} = res;
      commit('SET_IMAGES', data)
    })
  },
  setSingleImage({ commit }, payload) {
    commit('SET_SINGLEIMAGE', payload)
  },
  async uploadImages({ commit }, e) {
    commit('toggleLoading')
      const form = new FormData()
      form.append('inputfile',e.target["files"].files[0])
      form.append('tipo', 'slide')
      form.append('title', e.target["title"].value)
      form.append('description', e.target["description"].value)
      const { data } = await this.$axios.post('/image', form)
      commit('SAVE_IMAGE', data)
    commit('toggleLoading')
  },
  async deleteEmage({ commit }, payload) {
    const { data } = await this.$axios.delete(`/image/${payload.id}`)
   
    commit('DELETE_IMAGE', {id:data})
  }

}

const imageModule = {
  state,
  getters,
  mutations,
  actions
}
export default imageModule
