<template>
  <div
    class="modal fade"
    id="rankHistoryAddModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
    ref="rankHistoryAddModal"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">
            Добавление записи
          </h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <RankHistoryModalForCadetUpdate
            :main-data="newRecord"
            :order-owners="orderedOrderOwners"
            :ranks="orderedRanks"
          />
        </div>
      </div>
    </div>
  </div>
  <div
    class="shadow p-3 mb-3 bg-body-tertiary rounded"
    id="simple-list-rank-data"
  >
    <base-list-layout-for-cadet-update
      :is-loading="isLoading"
      :main-list-length="orderedMainList.length"
    >
      <template v-slot:title>Присвоение званий</template>
      <template v-slot:add-button>
        <button
          class="btn btn-warning"
          :disabled="isLoading"
          @click="showAddNewRankHistoryModal"
          type="button"
        >
          <span class="fas fa-plus me-2"></span>Добавить запись
        </button>
      </template>
      <template v-slot:thead>
        <tr>
          <th>Звание</th>
          <th>С какого числа присвоено звание</th>
          <th>Дата приказа</th>
          <th>Номер приказа</th>
          <th>Чей приказ</th>
          <th>Доп. информация</th>
        </tr>
      </template>
      <template v-slot:tbody>
        <tr v-for="rankHistory in orderedMainList" :key="rankHistory.id">
          <td>
            {{ rankHistory.get_rank_str || "Нет данных" }}
          </td>
          <td>{{ rankHistory.rank_date }}</td>
          <td>
            {{ rankHistory.rank_order_date || "Нет данных" }}
          </td>
          <td>{{ rankHistory.rank_order_number }}</td>
          <td>{{ rankHistory.get_rank_order_owner_str }}</td>
          <td>{{ rankHistory.extra_data || "Нет данных" }}</td>
        </tr>
      </template>
      <template v-slot:paginator></template>
    </base-list-layout-for-cadet-update>
  </div>
</template>

<script>
import getRankHistoryAPIInstance from "@/api/cadet/rankHistoryAPI"
import getRankAPIInstance from "@/api/cadet/rankAPI"
import getOrderOwnerAPIInstance from "@/api/cadet/orderOwnerAPI"
import { getLoadListFunction } from "../../../../utils"
import RankHistoryModalForCadetUpdate from "@/components/cadet/rank/modals/RankHistoryModalForCadetUpdate.vue"
import BaseListLayoutForCadetUpdate from "@/components/layouts/BaseListLayoutForCadetUpdate.vue"

export default {
  name: "RankHistoryCadetComponent",
  components: { BaseListLayoutForCadetUpdate, RankHistoryModalForCadetUpdate },
  props: {
    cadetId: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      isLoading: true,
      isError: false,
      rankHistoryList: { count: "", results: [], previous: null, next: null },
      rankList: { count: "", results: [], previous: null, next: null },
      orderOwnerList: { count: "", results: [], previous: null, next: null },
      rankHistoryAPIInstance: getRankHistoryAPIInstance(),
      rankAPIInstance: getRankAPIInstance(),
      orderOwnerAPIInstance: getOrderOwnerAPIInstance(),
      newRecord: {
        rank: null,
        rank_date: null,
        rank_order_date: null,
        rank_order_number: "",
        rank_order_owner: null,
        rank_extra_data: "",
      },
      currentRecordForUpdate: {
        id: "",
        cadet: null,
        rank: null,
        rank_date: null,
        rank_order_date: null,
        rank_order_number: "",
        rank_order_owner: null,
        rank_extra_data: "",
      },
    }
  },
  async created() {
    await this.loadData()
  },
  methods: {
    async loadData() {
      const listFunction = getLoadListFunction.bind(this)
      this.isLoading = true
      this.isError = false
      try {
        const [rankHistories, ranks, orderOwners] = await Promise.all([
          listFunction("rankHistory")(this.cadetId),
          listFunction("rank")(),
          listFunction("orderOwner")(),
        ])
        this.rankHistoryList = rankHistories
        this.rankList = ranks
        this.orderOwnerList = orderOwners
      } catch (e) {
        this.isError = true
      } finally {
        this.isLoading = false
      }
    },
    showAddNewRankHistoryModal() {
      let addModal = this.$refs.rankHistoryAddModal
      let myModal = new bootstrap.Modal(addModal, {
        keyboard: false,
      })
      myModal.show()
    },

    async updatePaginator(url) {},
  },
  computed: {
    orderedMainList() {
      return this.rankHistoryList.results
    },
    orderedRanks() {
      return this.rankList.results
    },
    orderedOrderOwners() {
      return this.orderOwnerList.results
    },
  },
  watch: {},
}
</script>

<style scoped></style>
