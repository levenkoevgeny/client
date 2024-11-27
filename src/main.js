import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import store from "@/store"
import { library } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"

import { faUserGraduate } from "@fortawesome/free-solid-svg-icons"
import { faPersonBreastfeeding } from "@fortawesome/free-solid-svg-icons"
import { faHandHoldingDollar } from "@fortawesome/free-solid-svg-icons"
import { faCreditCardAlt } from "@fortawesome/free-solid-svg-icons"
import { faPlus } from "@fortawesome/free-solid-svg-icons"
import { faTrash } from "@fortawesome/free-solid-svg-icons"
import { faTable } from "@fortawesome/free-solid-svg-icons"
import { faLanguage } from "@fortawesome/free-solid-svg-icons"
import { faFlask } from "@fortawesome/free-solid-svg-icons"
import { faSchool } from "@fortawesome/free-solid-svg-icons"
import { faBriefcase } from "@fortawesome/free-solid-svg-icons"
import { faPersonMilitaryRifle } from "@fortawesome/free-solid-svg-icons"
import { faMedal } from "@fortawesome/free-solid-svg-icons"
import { faStairs } from "@fortawesome/free-solid-svg-icons"
import { faPeopleRoof } from "@fortawesome/free-solid-svg-icons"
import { faDiamondTurnRight } from "@fortawesome/free-solid-svg-icons"
import { faPencil } from "@fortawesome/free-solid-svg-icons"
import { faStar } from "@fortawesome/free-regular-svg-icons"
import { faFileWord } from "@fortawesome/free-regular-svg-icons"
import { faFileExcel } from "@fortawesome/free-regular-svg-icons"
import { faFileExport } from "@fortawesome/free-solid-svg-icons"
import { faListCheck } from "@fortawesome/free-solid-svg-icons"
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons"
import vSelect from "vue-select"

library.add(faUserGraduate)
library.add(faPersonBreastfeeding)
library.add(faHandHoldingDollar)
library.add(faCreditCardAlt)
library.add(faStar)
library.add(faPlus)
library.add(faTrash)
library.add(faTable)
library.add(faLanguage)
library.add(faFlask)
library.add(faSchool)
library.add(faBriefcase)
library.add(faPersonMilitaryRifle)
library.add(faMedal)
library.add(faStairs)
library.add(faPeopleRoof)
library.add(faDiamondTurnRight)
library.add(faPencil)
library.add(faFileWord)
library.add(faFileExcel)
library.add(faFileExport)
library.add(faListCheck)
library.add(faCircleXmark)

createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .component("v-select", vSelect)
  .use(router)
  .use(store)
  .mount("#app")
