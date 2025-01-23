import getGroupAPIInstance from "@/api/cadet/groupAPI"
import getRankAPIInstance from "@/api/cadet/rankAPI"
import getSubdivisionAPIInstance from "@/api/cadet/subdivisionAPI"
import getSpecialityAPIInstance from "@/api/cadet/specialityAPI"
import getPositionAPIInstance from "@/api/cadet/positionAPI"
import getOrderOwnerAPIInstance from "@/api/cadet/orderOwnerAPI"
import getCadetCategoryAPIInstance from "@/api/cadet/cadetCategoryAPI"

import getMaritalStatusAPIInstance from "@/api/cadet/maritalStatusAPI"
import getSpecializationAPIInstance from "@/api/cadet/specializationAPI"
import getDirectionOrdAPIInstance from "@/api/cadet/directionOrdAPI"
import getComponentOrganAPIInstance from "@/api/cadet/componentOrganAPI"
import getPassportIssueAuthorityAPIInstance from "@/api/cadet/passportIssueAuthorityAPI"
import getForeignLanguageAPIInstance from "@/api/cadet/foreignLanguageAPI"
import getMilitaryOfficeAPIInstance from "@/api/cadet/militaryOfficeAPI"
import getGraduationReasonAPIInstance from "@/api/cadet/graduationReasonAPI"
import getEducationFormAPIInstance from "@/api/student/educationFormAPI"

const limit = 1000

const groupAPIInstance = getGroupAPIInstance()
const rankAPIInstance = getRankAPIInstance()
const subdivisionAPIInstance = getSubdivisionAPIInstance()
const specialityAPIInstance = getSpecialityAPIInstance()
const positionAPIInstance = getPositionAPIInstance()
const orderOwnerAPIInstance = getOrderOwnerAPIInstance()
const cadetCategoryAPIInstance = getCadetCategoryAPIInstance()

const maritalStatusAPIInstance = getMaritalStatusAPIInstance()
const specializationAPIInstance = getSpecializationAPIInstance()
const directionOrdAPIInstance = getDirectionOrdAPIInstance()
const componentOrganAPIInstance = getComponentOrganAPIInstance()
const passportIssueAuthorityAPIInstance = getPassportIssueAuthorityAPIInstance()
const foreignLanguageAPIInstance = getForeignLanguageAPIInstance()
const militaryOfficeAPIInstance = getMilitaryOfficeAPIInstance()
const graduationReasonAPIInstance = getGraduationReasonAPIInstance()
const educationFormAPIInstance = getEducationFormAPIInstance()

groupAPIInstance.searchObj.limit = limit
rankAPIInstance.searchObj.limit = limit
subdivisionAPIInstance.searchObj.limit = limit
specialityAPIInstance.searchObj.limit = limit
positionAPIInstance.searchObj.limit = limit
orderOwnerAPIInstance.searchObj.limit = limit
cadetCategoryAPIInstance.searchObj.limit = limit

maritalStatusAPIInstance.limit = limit
specializationAPIInstance.limit = limit
directionOrdAPIInstance.limit = limit
componentOrganAPIInstance.limit = limit
passportIssueAuthorityAPIInstance.limit = limit
foreignLanguageAPIInstance.limit = limit
militaryOfficeAPIInstance.limit = limit
graduationReasonAPIInstance.limit = limit
educationFormAPIInstance.limit = limit

const state = () => ({
  groups: { count: "", results: [], previous: null, next: null },
  ranks: { count: "", results: [], previous: null, next: null },
  subdivisions: { count: "", results: [], previous: null, next: null },
  specialities: { count: "", results: [], previous: null, next: null },
  positions: { count: "", results: [], previous: null, next: null },
  orderOwners: { count: "", results: [], previous: null, next: null },
  cadetCategories: { count: "", results: [], previous: null, next: null },
  maritalStatuses: { count: "", results: [], previous: null, next: null },
  specializations: { count: "", results: [], previous: null, next: null },
  directionsOrd: { count: "", results: [], previous: null, next: null },
  componentOrgans: { count: "", results: [], previous: null, next: null },
  passportIssueAuthorities: {
    count: "",
    results: [],
    previous: null,
    next: null,
  },
  foreignLanguages: { count: "", results: [], previous: null, next: null },
  militaryOffices: { count: "", results: [], previous: null, next: null },
  graduationReasons: { count: "", results: [], previous: null, next: null },
  educationForms: { count: "", results: [], previous: null, next: null },
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
  getCadetCategories(state) {
    return state.cadetCategories
  },
  getMaritalStatuses(state) {
    return state.maritalStatuses
  },
  getSpecializations(state) {
    return state.specializations
  },
  getDirectionsOrd(state) {
    return state.directionsOrd
  },
  getComponentOrgans(state) {
    return state.componentOrgans
  },
  getPassportIssueAuthorities(state) {
    return state.passportIssueAuthorities
  },
  getForeignLanguages(state) {
    return state.foreignLanguages
  },
  getMilitaryOffices(state) {
    return state.militaryOffices
  },
  getGraduationReasons(state) {
    return state.graduationReasons
  },
  getEducationForms(state) {
    return state.educationForms
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

      const responseCadetCategory =
        await cadetCategoryAPIInstance.getItemsList("token is here!!!")
      commit("setCadetCategories", await responseCadetCategory.data)

      const responseMaritalStatus =
        await maritalStatusAPIInstance.getItemsList("token is here!!!")
      commit("setMaritalStatuses", await responseMaritalStatus.data)

      const responseSpecialization =
        await specializationAPIInstance.getItemsList("token is here!!!")
      commit("setSpecializations", await responseSpecialization.data)

      const responseDirectionsOrd =
        await directionOrdAPIInstance.getItemsList("token is here!!!")
      commit("setDirectionsOrd", await responseDirectionsOrd.data)

      const responseComponentOrgan =
        await componentOrganAPIInstance.getItemsList("token is here!!!")
      commit("setComponentOrgans", await responseComponentOrgan.data)

      const responsePassportIssueAuthority =
        await passportIssueAuthorityAPIInstance.getItemsList("token is here!!!")
      commit(
        "setPassportIssueAuthorities",
        await responsePassportIssueAuthority.data,
      )

      const responseForeignLanguage =
        await foreignLanguageAPIInstance.getItemsList("token is here!!!")
      commit("setForeignLanguages", await responseForeignLanguage.data)

      const responseMilitaryOffice =
        await militaryOfficeAPIInstance.getItemsList("token is here!!!")
      commit("setMilitaryOffices", await responseMilitaryOffice.data)

      const responseGraduationReason =
        await graduationReasonAPIInstance.getItemsList("token is here!!!")
      commit("setGraduationReasons", await responseGraduationReason.data)

      const responseEducationForms =
        await educationFormAPIInstance.getItemsList("token is here!!!")
      commit("setEducationForms", await responseEducationForms.data)
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
  setCadetCategories(state, payload) {
    state.cadetCategories = payload
  },
  setMaritalStatuses(state, payload) {
    state.maritalStatuses = payload
  },
  setSpecializations(state, payload) {
    state.specializations = payload
  },
  setDirectionsOrd(state, payload) {
    state.directionsOrd = payload
  },
  setComponentOrgans(state, payload) {
    state.componentOrgans = payload
  },
  setPassportIssueAuthorities(state, payload) {
    state.passportIssueAuthorities = payload
  },
  setForeignLanguages(state, payload) {
    state.foreignLanguages = payload
  },
  setMilitaryOffices(state, payload) {
    state.militaryOffices = payload
  },
  setGraduationReasons(state, payload) {
    state.graduationReasons = payload
  },
  setEducationForms(state, payload) {
    state.educationForms = payload
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}
