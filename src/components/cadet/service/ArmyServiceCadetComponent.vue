<template>
  <div
    class="modal fade"
    id="armyHistoryAddModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
    ref="armyHistoryAddModal"
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
    id="simple-list-army-service-data"
  >
    <base-list-layout-for-cadet-update
      :is-loading="isLoading"
      :main-list-length="orderedMainList.length"
    >
      <template v-slot:title>Прохождение службы в ВС РБ</template>
      <template v-slot:add-button>
        <button
          class="btn btn-warning"
          :disabled="isLoading"
          type="button"
          @click="showAddNewArmyHistoryModal"
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
        <tr v-for="armyService in orderedMainList" :key="armyService.id">
          <td>
            {{ armyService.military_service_start || "Нет данных" }}
          </td>
          <td>
            {{ armyService.military_service_end || "Нет данных" }}
          </td>
          <td>
            {{ armyService.position || "Нет данных" }}
          </td>
          <td>
            {{ armyService.military_organization || "Нет данных" }}
          </td>
        </tr>
      </template>
      <template v-slot:paginator></template>
    </base-list-layout-for-cadet-update>
  </div>
</template>
<script>
import getArmyHistoryAPIInstance from "@/api/cadet/armyHistoryAPI"
import BaseListLayoutForCadetUpdate from "@/components/layouts/BaseListLayoutForCadetUpdate.vue"
import { getLoadListFunction } from "../../../../utils"

export default {
  name: "ArmyServiceCadetComponent",
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
      armyHistoryList: {
        count: "",
        results: [],
        previous: null,
        next: null,
      },
      armyHistoryAPIInstance: getArmyHistoryAPIInstance(),
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
        const [armyHistories] = await Promise.all([
          listFunction("armyHistory")(this.cadetId),
        ])
        this.armyHistoryList = armyHistories
      } catch (e) {
        this.isError = true
      } finally {
        this.isLoading = false
      }
    },
    showAddNewArmyHistoryModal() {
      let addModal = this.$refs.armyHistoryAddModal
      let myModal = new bootstrap.Modal(addModal, {
        keyboard: false,
      })
      myModal.show()
    },
    async updatePaginator(url) {},
  },
  computed: {
    orderedMainList() {
      return this.armyHistoryList.results
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
