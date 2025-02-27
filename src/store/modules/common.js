const state = () => ({})

const actions = {
  async actionGetCommonLists({ dispatch, commit }, payload) {
    try {
      await dispatch("encouragementKinds/actionGetList", null, {
        root: true,
      })
      await dispatch("punishmentKinds/actionGetList", null, { root: true })
      await dispatch("ranks/actionGetList", null, { root: true })
      await dispatch("groups/actionGetList", null, { root: true })
      await dispatch("subdivisions/actionGetList", null, { root: true })
      await dispatch("positions/actionGetList", null, { root: true })
      await dispatch("specialities/actionGetList", null, { root: true })
      await dispatch("specializations/actionGetList", null, { root: true })
      await dispatch("directionsORD/actionGetList", null, { root: true })
      await dispatch("maritalStatuses/actionGetList", null, { root: true })
      await dispatch("componentOrgans/actionGetList", null, { root: true })
      await dispatch("passportAuthorities/actionGetList", null, { root: true })
      await dispatch("foreignLanguages/actionGetList", null, { root: true })
      await dispatch("foreignLanguageLevels/actionGetList", null, {
        root: true,
      })
      await dispatch("militaryOffices/actionGetList", null, { root: true })
      await dispatch("graduationReasons/actionGetList", null, { root: true })
      await dispatch("educationForms/actionGetList", null, { root: true })
      await dispatch("rankGroups/actionGetList", null, { root: true })
      await dispatch("orderOwners/actionGetList", null, { root: true })
      await dispatch("gorovds/actionGetList", null, { root: true })
      await dispatch("rewards/actionGetList", null, { root: true })
      await dispatch("personCategories/actionGetList", null, { root: true })
      await dispatch("educationKind/actionGetList", null, { root: true })
      await dispatch("educationLevel/actionGetList", null, { root: true })
      await dispatch("educationLocalityKind/actionGetList", null, {
        root: true,
      })
      await dispatch("degreeOfKinship/actionGetList", null, { root: true })
    } catch (error) {
      console.log(error)
    }
  },
}

export default {
  namespaced: true,
  state,
  actions,
}
