<template>
  <div
    class="modal fade"
    id="mvdHistoryAddModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
    ref="mvdHistoryAddModal"
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
    id="simple-list-mvd-service-data"
  >
    <base-list-layout-for-cadet-update
      :is-loading="isLoading"
      :main-list-length="orderedMainList.length"
    >
      <template v-slot:title>Прохождение службы в МВД РБ</template>
      <template v-slot:add-button>
        <button
          class="btn btn-warning"
          :disabled="isLoading"
          type="button"
          @click="showAddNewMVDHistoryModal"
        >
          <span class="fas fa-plus me-2"></span>Добавить запись
        </button>
      </template>
      <template v-slot:thead>
        <tr>
          <th>С какого времени</th>
          <th>По какое время</th>
          <th>Должность</th>
          <th>Место прохождения службы</th>
        </tr>
      </template>
      <template v-slot:tbody>
        <tr v-for="mvdService in orderedMainList" :key="mvdService.id">
          <td>
            {{ mvdService.mvd_service_start || "Нет данных" }}
          </td>
          <td>
            {{ mvdService.mvd_service_end || "Нет данных" }}
          </td>
          <td>
            {{ mvdService.position || "Нет данных" }}
          </td>
          <td>
            {{ mvdService.mvd_organization || "Нет данных" }}
          </td>
        </tr>
      </template>
      <template v-slot:paginator></template>
    </base-list-layout-for-cadet-update>
  </div>
</template>

<script>
import getMVDHistoryAPIInstance from "@/api/cadet/mvdHistoryAPI"
import BaseListLayoutForCadetUpdate from "@/components/layouts/BaseListLayoutForCadetUpdate.vue"
import { getLoadListFunction } from "../../../../utils"

export default {
  name: "MVDServiceCadetComponent",
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
      mvdHistoryList: {
        count: "",
        results: [],
        previous: null,
        next: null,
      },
      mvdHistoryAPIInstance: getMVDHistoryAPIInstance(),
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
        const [mvdHistories] = await Promise.all([
          listFunction("mvdHistory")(this.cadetId),
        ])
        this.mvdHistoryList = mvdHistories
      } catch (e) {
        this.isError = true
      } finally {
        this.isLoading = false
      }
    },
    showAddNewMVDHistoryModal() {
      let addModal = this.$refs.mvdHistoryAddModal
      let myModal = new bootstrap.Modal(addModal, {
        keyboard: false,
      })
      myModal.show()
    },
    async updatePaginator(url) {},
  },
  computed: {
    orderedMainList() {
      return this.mvdHistoryList.results
    },
    // orderedForeignLanguageList() {
    //   return this.foreignLanguageList.results
    // },
    // orderedForeignLanguageLevelList() {
    //   return this.foreignLanguageLevelList.results
    // },
  },
  watch: {},
}
</script>

<style scoped></style>
