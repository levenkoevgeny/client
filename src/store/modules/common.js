import getGroupAPIInstance from "@/api/cadet/groupAPI"
import getRankAPIInstance from "@/api/cadet/rankAPI"
import getSubdivisionAPIInstance from "@/api/cadet/subdivisionAPI"
import getSpecialityAPIInstance from "@/api/cadet/specialityAPI"
import getPositionAPIInstance from "@/api/cadet/positionAPI"
import getOrderOwnerAPIInstance from "@/api/cadet/orderOwnerAPI"

const limit = 1000

const groupAPIInstance = getGroupAPIInstance()
const rankAPIInstance = getRankAPIInstance()
const subdivisionAPIInstance = getSubdivisionAPIInstance()
const specialityAPIInstance = getSpecialityAPIInstance()
const positionAPIInstance = getPositionAPIInstance()
const orderOwnerAPIInstance = getOrderOwnerAPIInstance()

groupAPIInstance.searchObj.limit = limit
rankAPIInstance.searchObj.limit = limit
subdivisionAPIInstance.searchObj.limit = limit
specialityAPIInstance.searchObj.limit = limit
positionAPIInstance.searchObj.limit = limit
orderOwnerAPIInstance.searchObj.limit = limit

const state = () => ({
  groups: { count: "", results: [], previous: null, next: null },
  ranks: { count: "", results: [], previous: null, next: null },
  subdivisions: { count: "", results: [], previous: null, next: null },
  specialities: { count: "", results: [], previous: null, next: null },
  positions: { count: "", results: [], previous: null, next: null },
  orderOwners: { count: "", results: [], previous: null, next: null },
})

const getters = {
  getGroups(state) {
    return state.groups
  },
  getRanks(state) {
    return state.ranks
  },
  getSubdivisions(state) {
    return state.subdivisions
  },
  getSpecialities(state) {
    return state.specialities
  },
  getPositions(state) {
    return state.positions
  },
  getOrderOwners(state) {
    return state.orderOwners
  },
}

const actions = {
  async actionGetCommonLists({ commit }, payload) {
    try {
      const responseGroups =
        await groupAPIInstance.getItemsList("token is here!!!")
      commit("setGroups", await responseGroups.data)

      const responseRanks =
        await rankAPIInstance.getItemsList("token is here!!!")
      commit("setRanks", await responseRanks.data)

      const responseSubdivisions =
        await subdivisionAPIInstance.getItemsList("token is here!!!")
      commit("setSubdivisions", await responseSubdivisions.data)

      const responseSpecialities =
        await specialityAPIInstance.getItemsList("token is here!!!")
      commit("setSpecialities", await responseSpecialities.data)

      const responsePositions =
        await positionAPIInstance.getItemsList("token is here!!!")
      commit("setPositions", await responsePositions.data)

      const responseOrderOwner =
        await orderOwnerAPIInstance.getItemsList("token is here!!!")
      commit("setOrderOwners", await responseOrderOwner.data)
    } catch (error) {
      console.log(error)
    }
  },
}

const mutations = {
  setGroups(state, payload) {
    state.groups = payload
  },
  setRanks(state, payload) {
    state.ranks = payload
  },
  setSubdivisions(state, payload) {
    state.subdivisions = payload
  },
  setSpecialities(state, payload) {
    state.specialities = payload
  },
  setPositions(state, payload) {
    state.positions = payload
  },
  setOrderOwners(state, payload) {
    state.orderOwners = payload
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}
