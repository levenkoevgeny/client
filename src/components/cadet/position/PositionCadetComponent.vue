<template>
  <div
    class="modal fade"
    id="positionAddModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
    ref="positionAddModal"
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
    id="simple-list-positions-data"
  >
    <base-list-layout-for-cadet-update
      :is-loading="isLoading"
      :main-list-length="orderedMainList.length"
    >
      <template v-slot:title>Назначения на должности</template>
      <template v-slot:add-button>
        <button
          class="btn btn-warning"
          :disabled="isLoading"
          type="button"
          @click="showAddNewPositionModal"
        >
          <span class="fas fa-plus me-2"></span>Добавить запись
        </button>
      </template>
      <template v-slot:thead>
        <tr>
          <th>Должность</th>
          <th>Дата назначения</th>
          <th>Приказ о назначении</th>
          <th>Дата приказа</th>
          <th>Чей приказ</th>
          <th>Фабула</th>
        </tr>
      </template>
      <template v-slot:tbody>
        <tr v-for="position in orderedMainList" :key="position.id">
          <td>{{ position.get_position_str || "Нет данных" }}</td>
          <td>{{ position.position_date || "Нет данных" }}</td>
          <td>{{ position.position_order_number || "Нет данных" }}</td>
          <td>{{ position.position_order_date || "Нет данных" }}</td>
          <td>{{ position.get_position_order_owner_str || "Нет данных" }}</td>
          <td>{{ position.position_extra_data || "Нет данных" }}</td>
        </tr>
      </template>
      <template v-slot:paginator></template>
    </base-list-layout-for-cadet-update>
  </div>
</template>

<script>
import getPositionAPIInstance from "@/api/cadet/positionAPI"
import getPositionHistoryAPIInstance from "@/api/cadet/positionHistoryAPI"
import BaseListLayoutForCadetUpdate from "@/components/layouts/BaseListLayoutForCadetUpdate.vue"
import { getLoadListFunction } from "../../../../utils"

export default {
  name: "PositionCadetComponent",
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
      positionList: {
        count: "",
        results: [],
        previous: null,
        next: null,
      },
      positionHistoryList: {
        count: "",
        results: [],
        previous: null,
        next: null,
      },
      positionAPIInstance: getPositionAPIInstance(),
      positionHistoryAPIInstance: getPositionHistoryAPIInstance(),
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
        const [positions, positionHistories] = await Promise.all([
          listFunction("position")(),
          listFunction("positionHistory")(this.cadetId),
        ])
        this.positionList = positions
        this.positionHistoryList = positionHistories
      } catch (e) {
        this.isError = true
      } finally {
        this.isLoading = false
      }
    },
    showAddNewPositionModal() {
      let addModal = this.$refs.positionAddModal
      let myModal = new bootstrap.Modal(addModal, {
        keyboard: false,
      })
      myModal.show()
    },
    async updatePaginator(url) {},
  },
  computed: {
    orderedMainList() {
      return this.positionHistoryList.results
    },
    orderedPositionList() {
      return this.positionList.results
    },
  },
  watch: {},
}
</script>

<style scoped></style>
