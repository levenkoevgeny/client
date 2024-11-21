import { createStore } from "vuex"
import common from "@/store/modules/common"

const store = createStore({
  modules: {
    common,
  },
})

export default store
