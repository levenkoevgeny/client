import { createRouter, createWebHistory } from "vue-router"
import { CadetMainView, CadetListView, CadetItemView } from "@/components/cadet"
import { PunishmentListView } from "@/components/cadet/punishment"
import { EncouragementListView } from "@/components/cadet/encouragement"
import { PositionListView } from "@/components/cadet/position"
import { RankHistoryListView } from "@/components/cadet/rank"
import { EntranceMainView } from "@/components/entrance_campaign"
import { SpecialityHistoryView } from "@/components/cadet/speciality"
import { CadetUpdateView } from "@/components/cadet"
import { CadetListOkView } from "@/components/cadet"
import { FiredCadetComponent } from "@/components/cadet/fired"

import {
  EmployeeMainView,
  EmployeeList,
  EmployeeItemView,
  EmployeeUpdateView,
} from "@/components/employee"

import {
  StudentMainView,
  StudentList,
  StudentItemView,
  StudentUpdateView,
} from "@/components/student"

import NavigationPage from "@/components/NavigationPage.vue"

import {
  NotFoundView,
  NetworkErrorView,
  ServerErrorView,
} from "@/components/errors"

const routes = [
  { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFoundView },
  { path: "", name: "navigation", component: NavigationPage },
  {
    path: "/cadet",
    name: "cadet-main",
    component: CadetMainView,
    children: [
      {
        path: "",
        component: CadetListView,
        name: "cadet",
      },
      {
        path: "full",
        component: CadetListOkView,
        name: "cadet-full",
      },
      {
        path: ":id",
        component: CadetItemView,
        name: "cadet-view",
      },
      {
        path: ":id/update",
        component: CadetUpdateView,
        name: "cadet-update",
      },
      {
        path: "encouragement",
        component: EncouragementListView,
        name: "cadet-encouragement",
      },
      {
        path: "punishment",
        component: PunishmentListView,
        name: "cadet-punishment",
      },
      {
        path: "positions",
        component: PositionListView,
        name: "cadet-positions",
      },
      {
        path: "rank-histories",
        component: RankHistoryListView,
        name: "cadet-rank-histories",
      },
      {
        path: "specialities",
        component: SpecialityHistoryView,
        name: "cadet-specialities",
      },
      {
        path: "fired",
        component: FiredCadetComponent,
        name: "cadet-fired",
      },
    ],
  },
  {
    path: "/employee",
    name: "employee-main",
    component: EmployeeMainView,
    children: [
      {
        path: "",
        component: EmployeeList,
        name: "employee",
      },
      {
        path: ":id",
        component: EmployeeItemView,
        name: "employee-view",
      },
      {
        path: ":id/update",
        component: EmployeeUpdateView,
        name: "employee-update",
      },
      {
        path: "employee-encouragement",
        component: EncouragementListView,
        name: "encouragement",
      },
      {
        path: "employee-punishment",
        component: PunishmentListView,
        name: "punishment",
      },
      {
        path: "employee-positions",
        component: PositionListView,
        name: "positions",
      },
      {
        path: "employee-rank-histories",
        component: RankHistoryListView,
        name: "rank-histories",
      },
      {
        path: "fired",
        component: FiredCadetComponent,
        name: "fired",
      },
    ],
  },
  {
    path: "/student",
    name: "student-main",
    component: StudentMainView,
    children: [
      {
        path: "",
        component: StudentList,
        name: "student",
      },
      {
        path: ":id",
        component: StudentItemView,
        name: "student-view",
      },
      {
        path: ":id/update",
        component: StudentUpdateView,
        name: "student-update",
      },
    ],
  },
  {
    path: "/entrance",
    component: EntranceMainView,
    name: "entrance",
  },
  {
    path: "/network-error",
    component: NetworkErrorView,
    name: "network-error",
  },
  {
    path: "/server-error",
    component: ServerErrorView,
    name: "server-error",
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
