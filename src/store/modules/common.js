const state = () => ({})

const actions = {
  async actionGetCommonLists({ dispatch, commit }, payload) {
    try {
      await dispatch(
        "encouragementKinds/actionGetList",
        { token: payload.token, searchForm: {} },
        {
          root: true,
        },
      )
      await dispatch(
        "punishmentKinds/actionGetList",
        { token: payload.token, searchForm: {} },
        { root: true },
      )
      await dispatch(
        "ranks/actionGetList",
        { token: payload.token, searchForm: {} },
        { root: true },
      )
      await dispatch(
        "groups/actionGetList",
        { token: payload.token, searchForm: {} },
        { root: true },
      )
      await dispatch(
        "subdivisions/actionGetList",
        { token: payload.token, searchForm: {} },
        { root: true },
      )
      await dispatch(
        "positions/actionGetList",
        { token: payload.token, searchForm: {} },
        { root: true },
      )
      await dispatch(
        "specialities/actionGetList",
        { token: payload.token, searchForm: {} },
        { root: true },
      )
      await dispatch(
        "specializations/actionGetList",
        { token: payload.token, searchForm: {} },
        { root: true },
      )
      await dispatch(
        "directionsORD/actionGetList",
        { token: payload.token, searchForm: {} },
        { root: true },
      )
      await dispatch(
        "maritalStatuses/actionGetList",
        { token: payload.token, searchForm: {} },
        { root: true },
      )
      await dispatch(
        "componentOrgans/actionGetList",
        { token: payload.token, searchForm: {} },
        { root: true },
      )
      await dispatch(
        "passportAuthorities/actionGetList",
        { token: payload.token, searchForm: {} },
        { root: true },
      )
      await dispatch(
        "foreignLanguages/actionGetList",
        { token: payload.token, searchForm: {} },
        { root: true },
      )
      await dispatch(
        "foreignLanguageLevels/actionGetList",
        { token: payload.token, searchForm: {} },
        {
          root: true,
        },
      )
      await dispatch(
        "militaryOffices/actionGetList",
        { token: payload.token, searchForm: {} },
        { root: true },
      )
      await dispatch(
        "graduationReasons/actionGetList",
        { token: payload.token, searchForm: {} },
        { root: true },
      )
      await dispatch(
        "educationForms/actionGetList",
        { token: payload.token, searchForm: {} },
        { root: true },
      )
      await dispatch(
        "rankGroups/actionGetList",
        { token: payload.token, searchForm: {} },
        { root: true },
      )
      await dispatch(
        "orderOwners/actionGetList",
        { token: payload.token, searchForm: {} },
        { root: true },
      )
      await dispatch(
        "gorovds/actionGetList",
        { token: payload.token, searchForm: {} },
        { root: true },
      )
      await dispatch(
        "rewards/actionGetList",
        { token: payload.token, searchForm: {} },
        { root: true },
      )
      await dispatch(
        "personCategories/actionGetList",
        { token: payload.token, searchForm: {} },
        { root: true },
      )
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
