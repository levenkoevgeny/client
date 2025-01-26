import getEncouragementKindAPIInstance from "@/api/cadet/encouragementKindAPI"

const encouragementKindAPIInstance = getEncouragementKindAPIInstance()

const limit = 1000

encouragementKindAPIInstance.searchObj.limit = limit
const state = () => ({
  mainList: { count: "", results: [], previous: null, next: null },
  isError: false,
  errorText: null,
})

const getters = {
  getList(state) {
    return state.mainList
  },
}

const mutations = {
  setList(state, payload) {
    state.mainList = payload
  },
  addItemToList(state, payload) {
    state.mainList.results.push(payload)
  },
  updateItemInList(state, payload) {
    let index = state.mainList.results.findIndex(
      (item) => item.id === payload.id,
    )
    if (index > -1) {
      state.mainList.results[index] = payload
    }
  },
  deleteItemInList(state, payload) {
    let index = state.mainList.results.findIndex(
      (item) => item.id === payload.id,
    )
    if (index > -1) {
      state.mainList.results.splice(index, 1)
    }
  },
}

const actions = {
  async actionGetList({ commit }, payload) {
    encouragementKindAPIInstance.searchObj = { ...payload, limit: limit }
    try {
      const response =
        await encouragementKindAPIInstance.getItemsList("token is here!!!")
      commit("setList", await response.data)
    } catch (error) {
      this.isError = true
      this.errorText = error.message
    }
  },

  async actionAddNewItem({ commit }, payload) {
    try {
      const response = await encouragementKindAPIInstance.addItem(
        "token is here!!!",
        payload,
      )
      commit("addItemToList", await response.data)
    } catch (error) {}
  },

  async actionUpdateItem({ commit }, payload) {
    try {
      const response = await encouragementKindAPIInstance.updateItem(
        "token is here!!!",
        payload,
      )
      commit("updateItemInList", await response.data)
    } catch (error) {}
  },

  async actionDeleteItem({ commit }, payload) {
    try {
      const response = await encouragementKindAPIInstance.deleteItem(
        "token is here!!!",
        payload,
      )
      commit("deleteItemInList", await response.data)
    } catch (error) {}
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}
