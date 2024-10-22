import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import { library } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"

import { faUserGraduate } from "@fortawesome/free-solid-svg-icons"
import { faPersonBreastfeeding } from "@fortawesome/free-solid-svg-icons"
import { faHandHoldingDollar } from "@fortawesome/free-solid-svg-icons"
import { faCreditCardAlt } from "@fortawesome/free-solid-svg-icons"
import { faPlus } from "@fortawesome/free-solid-svg-icons"
import { faTrash } from "@fortawesome/free-solid-svg-icons"
import { faStar } from "@fortawesome/free-regular-svg-icons"
import vSelect from "vue-select"

library.add(faUserGraduate)
library.add(faPersonBreastfeeding)
library.add(faHandHoldingDollar)
library.add(faCreditCardAlt)
library.add(faStar)
library.add(faPlus)
library.add(faTrash)

createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .component("v-select", vSelect)
  .use(router)
  .mount("#app")
