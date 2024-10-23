<template>
  <div
    class="modal fade"
    id="rewardAddModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
    ref="rewardAddModal"
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
      </div>
    </div>
  </div>

  <div
    class="shadow p-3 mb-3 bg-body-tertiary rounded"
    id="simple-list-rewards-data"
  >
    <base-list-layout-for-cadet-update
      :is-loading="isLoading"
      :main-list-length="orderedMainList.length"
    >
      <template v-slot:title>Награды</template>
      <template v-slot:add-button>
        <button
          class="btn btn-warning"
          :disabled="isLoading"
          @click="showAddNewRewardModal"
          type="button"
        >
          <span class="fas fa-plus me-2"></span>Добавить запись
        </button>
      </template>
      <template v-slot:thead>
        <tr>
          <th>Чем награжден</th>
          <th>За что награжден</th>
          <th>Номер приказа</th>
          <th>Дата приказа</th>
        </tr>
      </template>
      <template v-slot:tbody>
        <tr v-for="reward in orderedMainList" :key="reward.id">
          <td>{{ reward.get_reward_str || "Нет данных" }}</td>
          <td>{{ reward.reason || "Нет данных" }}</td>
          <td>{{ reward.order_number || "Нет данных" }}</td>
          <td>{{ reward.reward_date || "Нет данных" }}</td>
        </tr>
      </template>
      <template v-slot:paginator></template>
    </base-list-layout-for-cadet-update>
  </div>
</template>

<script>
import getRewardAPIInstance from "@/api/cadet/rewardAPI"
import getRewardHistoryAPIInstance from "@/api/cadet/rewardHistoryAPI"
import { getLoadListFunction } from "../../../../utils"
import BaseListLayoutForCadetUpdate from "@/components/layouts/BaseListLayoutForCadetUpdate.vue"

export default {
  name: "RewardCadetComponent",
  components: { BaseListLayoutForCadetUpdate },
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
      rewardList: {
        count: "",
        results: [],
        previous: null,
        next: null,
      },
      rewardHistoryList: {
        count: "",
        results: [],
        previous: null,
        next: null,
      },
      rewardHistoryAPIInstance: getRewardHistoryAPIInstance(),
      rewardAPIInstance: getRewardAPIInstance(),
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
        const [rewards, rewardHistories] = await Promise.all([
          listFunction("reward")(),
          listFunction("rewardHistory")(this.cadetId),
        ])
        this.rewardList = rewards
        this.rewardHistoryList = rewardHistories
      } catch (e) {
        this.isError = true
      } finally {
        this.isLoading = false
      }
    },
    showAddNewRewardModal() {
      let addModal = this.$refs.rewardAddModal
      let myModal = new bootstrap.Modal(addModal, {
        keyboard: false,
      })
      myModal.show()
    },
    async updatePaginator(url) {},
  },
  computed: {
    orderedMainList() {
      return this.rewardHistoryList.results
    },
    orderedRewardList() {
      return this.rewardList.results
    },
  },
  watch: {},
}
</script>

<style scoped></style>
