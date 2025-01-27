import { createStore } from "vuex"
import common from "@/store/modules/common"
import encouragementKinds from "@/store/modules/encouragementKinds"
import ranks from "@/store/modules/ranks"
import rankGroups from "@/store/modules/rankGroups"
import groups from "@/store/modules/groups"
import subdivisions from "@/store/modules/subdivisions"
import positions from "@/store/modules/positions"
import orderOwners from "@/store/modules/orderOwners"
import personCategories from "@/store/modules/personCategories"
import specialities from "@/store/modules/specialities"
import specializations from "@/store/modules/specializations"
import directionsORD from "@/store/modules/directionsORD"
import maritalStatuses from "@/store/modules/maritalStatuses"
import componentOrgans from "@/store/modules/componentOrgans"
import passportAuthorities from "@/store/modules/passportAuthorities"
import foreignLanguages from "@/store/modules/foreignLanguages"
import militaryOffices from "@/store/modules/militaryOffices"
import graduationReasons from "@/store/modules/graduationReasons"
import educationForms from "@/store/modules/educationForms"
import punishmentKinds from "@/store/modules/punishmentKinds"

const store = createStore({
  modules: {
    common,
    encouragementKinds,
    ranks,
    rankGroups,
    groups,
    subdivisions,
    positions,
    orderOwners,
    personCategories,
    specialities,
    specializations,
    directionsORD,
    maritalStatuses,
    componentOrgans,
    passportAuthorities,
    foreignLanguages,
    militaryOffices,
    graduationReasons,
    educationForms,
    punishmentKinds,
  },
})

export default store
