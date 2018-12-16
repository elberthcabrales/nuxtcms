const state = () => ({
  pages: [], //uno de sus elementos sera tag
  tags:[], //uno de sus elementos sera page
  singlePage : {
    category: "",
    tagsInPage:[],
    tilte: "",
    description: "",
    autor: "",
    id: "",
    autor:null,
    content: "<p>Escribe en mi :)</p>",
  }
})
const getters = {}
const mutations = {
  SET_TAGS_IN_PAGE(state,payload){
    state.singlePage = payload;
  },
  SET_PAGES(state, payload) {
    state.pages = payload
  },
  SAVE_PAGE(state, payload) {
    state.pages.push(payload)
  },
  UPDATE_PAGE(state, payload) {
    const index = state.pages.findIndex(p => p.id === payload.id)
    state.pages[index].title = payload.title
    state.pages[index].description = payload.description
  },
  DELETE_PAGE(state, payload) {
    const index = state.pages.findIndex(p => p.id === payload.id)
    state.pages.splice(index, 1)
  },
  SAVE_TAGEPAGE(state,payload){
    const tag = state.tags.find(p => p.id === payload.tagId)
    const index = state.pages.findIndex(p => p.id === payload.id)
    state.pages[index].tag.push(tag)
  },
  //tags
  SET_TAGS(state,payload){
    state.tags = payload
  },
  SAVE_TAG(state,payload){
    state.tags.push(payload)
  },
  UPDATE_TAG(state, payload) {
    const index = state.tags.findIndex(p => p.id === payload.id)
    state.tags[index].value = payload.value
  },
  DELETE_TAG(state, payload) {
    const index = state.tags.findIndex(p => p.id === payload.id)
    state.tad.splice(index, 1)
  }
}
const actions = {
  setPages({ commit }, payload) { //esta en plural
    commit('SET_PAGES', payload)
  },
  async savePage({ commit }, payload) {
    const { data } = await this.$axios.post('/page', payload)
    commit('SAVE_PAGE', data)
  },
  async updatePage({ commit }, payload) {
    const { data } = await this.$axios.patch(`/page/${payload.id}`, payload)
    commit('UPDATE_PAGE', data)
  },
  async deletePage({ commit }, payload) {
    const { data } = await this.$axios.delete(`/page/${payload.id}`)
    commit('DELETE_PAGE', data)
  },
   //set tags
  setTags({commit},payload){
    commit('SET_TAGS',payload)
  },
  async saveTag({commit},payload){
    const {data} = await this.$axios.post('/tag',payload)
    commit('SAVE_TAG',data)
  },
  async updateTag({ commit }, payload) {
    const { data } = await this.$axios.patch(`/tag/${payload.id}`, payload)
    commit('UPDATE_TAG', data)
  },
  async deleteTag({ commit }, payload) {
    const { data } = await this.$axios.delete(`/page/${payload.id}`)
    commit('DELETE_TAG', data)
  },
  async addTagToPag({commit}, payload){ // pageId,tagId
    const {data} = await this.$axio.post('/page/tag',payload)
    commit('SAVE_TAGEPAGE',data)
  },
  //singePage
  setTagsInPage({ commit }, payload) { //esta en plural
    commit('SET_TAGS_IN_PAGE', payload)
  },
}

const pageModule = {
  state,
  getters,
  mutations,
  actions
}
export default pageModule
