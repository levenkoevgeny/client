import { createRouter, createWebHistory } from "vue-router"
import { CadetMainView, CadetListView, CadetItemView } from "@/components/cadet"
import { PunishmentListView } from "@/components/cadet/punishment"
import { EncouragementListView } from "@/components/cadet/encouragement"
import { PositionListView } from "@/components/cadet/position"
import { RankHistoryListView } from "@/components/cadet/rank"
import { EntranceMainView } from "@/components/entrance_campaign"

import {
  NotFoundView,
  NetworkErrorView,
  ServerErrorView,
} from "@/components/errors"

const routes = [
  { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFoundView },
  { path: "", name: "root", redirect: "/kis" },
  {
    path: "/kis",
    name: "kis-main",
    component: CadetMainView,
    children: [
      {
        path: "cadet",
        component: CadetListView,
        name: "cadet",
      },
      {
        path: "cadet/:id",
        component: CadetItemView,
        name: "cadet-view",
      },
      {
        path: "encouragement",
        component: EncouragementListView,
        name: "encouragement",
      },
      {
        path: "punishment",
        component: PunishmentListView,
        name: "punishment",
      },
      {
        path: "positions",
        component: PositionListView,
        name: "positions",
      },
      {
        path: "rank-histories",
        component: RankHistoryListView,
        name: "rank-histories",
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
