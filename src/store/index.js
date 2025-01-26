import { createStore } from "vuex"
import common from "@/store/modules/common"
import encouragementKinds from "@/store/modules/encouragementKinds"

const store = createStore({
  modules: {
    common,
    encouragementKinds,
  },
})

export default store
