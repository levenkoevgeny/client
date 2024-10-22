<template>
  <div
    class="modal fade"
    id="encouragementAddModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
    ref="encouragementAddModal"
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
    id="simple-list-encouragements-data"
  >
    <base-list-layout-for-cadet-update
      :is-loading="isLoading"
      :main-list-length="orderedMainList.length"
    >
      <template v-slot:title>Поощрения</template>
      <template v-slot:add-button>
        <button
          class="btn btn-warning"
          :disabled="isLoading"
          @click="showAddNewEncouragementModal"
          type="button"
        >
          <span class="fas fa-plus me-2"></span>Добавить запись
        </button>
      </template>
      <template v-slot:thead>
        <tr>
          <th>Поощрение</th>
          <th>Дата</th>
          <th>Приказ</th>
          <th>Чей приказ</th>
          <th>Фабула</th>
        </tr>
      </template>
      <template v-slot:tbody>
        <tr v-for="encouragement in orderedMainList" :key="encouragement.id">
          <td>
            {{ encouragement.get_encouragement_kind_str || "Нет данных" }}
          </td>
          <td>{{ encouragement.encouragement_date }}</td>
          <td>{{ encouragement.encouragement_order_number }}</td>
          <td>{{ encouragement.get_encouragement_order_owner }}</td>
          <td>{{ encouragement.extra_data || "Нет данных" }}</td>
        </tr>
      </template>
      <template v-slot:paginator></template>
    </base-list-layout-for-cadet-update>
  </div>
</template>

<script>
import getEncouragementAPIInstance from "@/api/cadet/encouragementAPI"
import getEncouragementKindAPIInstance from "@/api/cadet/encouragementKindAPI"
import { getLoadListFunction } from "../../../../utils"
import getOrderOwnerAPIInstance from "@/api/cadet/orderOwnerAPI"
import BaseListLayoutForCadetUpdate from "@/components/layouts/BaseListLayoutForCadetUpdate.vue"

export default {
  name: "EncouragementCadetComponent",
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
      encouragementList: { count: "", results: [], previous: null, next: null },
      encouragementKindList: {
        count: "",
        results: [],
        previous: null,
        next: null,
      },
      orderOwnerList: { count: "", results: [], previous: null, next: null },
      encouragementAPIInstance: getEncouragementAPIInstance(),
      encouragementKindAPIInstance: getEncouragementKindAPIInstance(),
      orderOwnerAPIInstance: getOrderOwnerAPIInstance(),
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
        const [encouragements, encouragementKinds, orderOwners] =
          await Promise.all([
            listFunction("encouragement")(this.cadetId),
            listFunction("encouragementKind")(),
            listFunction("orderOwner")(),
          ])
        this.encouragementList = encouragements
        this.encouragementKindList = encouragementKinds
        this.orderOwnerList = orderOwners
      } catch (e) {
        this.isError = true
      } finally {
        this.isLoading = false
      }
    },
    showAddNewEncouragementModal() {
      let addModal = this.$refs.encouragementAddModal
      let myModal = new bootstrap.Modal(addModal, {
        keyboard: false,
      })
      myModal.show()
    },
    async updatePaginator(url) {},
  },
  computed: {
    orderedMainList() {
      return this.encouragementList.results
    },
    orderedEncouragementKinds() {
      return this.encouragementKindList.results
    },
  },
  watch: {},
}
</script>

<style scoped></style>
