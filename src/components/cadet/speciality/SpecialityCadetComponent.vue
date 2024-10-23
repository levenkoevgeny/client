<template>
  <div
    class="modal fade"
    id="specialityAddModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
    ref="specialityAddModal"
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
    id="simple-list-punishments-data"
  >
    <base-list-layout-for-cadet-update
      :is-loading="isLoading"
      :main-list-length="orderedMainList.length"
    >
      <template v-slot:title>Специальности</template>
      <template v-slot:add-button>
        <button
          class="btn btn-warning"
          :disabled="isLoading"
          type="button"
          @click="showAddNewSpecialityModal"
        >
          <span class="fas fa-plus me-2"></span>Добавить запись
        </button>
      </template>
      <template v-slot:thead>
        <tr>
          <th>Специальность</th>
          <th>Приказ о назначении</th>
          <th>Дата приказа</th>
          <th>Чей приказ</th>
          <th>Фабула</th>
        </tr>
      </template>
      <template v-slot:tbody>
        <tr v-for="speciality in orderedMainList" :key="speciality.id">
          <td>{{ speciality.get_speciality_str || "Нет данных" }}</td>
          <td>{{ speciality.speciality_order_number || "Нет данных" }}</td>
          <td>{{ speciality.speciality_order_date || "Нет данных" }}</td>
          <td>
            {{ speciality.get_speciality_order_owner_str || "Нет данных" }}
          </td>
          <td>{{ speciality.speciality_extra_data || "Нет данных" }}</td>
        </tr>
      </template>
      <template v-slot:paginator></template>
    </base-list-layout-for-cadet-update>
  </div>
</template>

<script>
import getSpecialityAPIInstance from "@/api/cadet/specialityAPI"
import getSpecialityHistoryAPIInstance from "@/api/cadet/specialityHistoryAPI"

import BaseListLayoutForCadetUpdate from "@/components/layouts/BaseListLayoutForCadetUpdate.vue"
import { getLoadListFunction } from "../../../../utils"

export default {
  name: "SpecialityCadetComponent",
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
      specialityList: {
        count: "",
        results: [],
        previous: null,
        next: null,
      },
      specialityHistoryList: {
        count: "",
        results: [],
        previous: null,
        next: null,
      },
      specialityAPIInstance: getSpecialityAPIInstance(),
      specialityHistoryAPIInstance: getSpecialityHistoryAPIInstance(),
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
        const [specialities, specialityHistories] = await Promise.all([
          listFunction("speciality")(),
          listFunction("specialityHistory")(this.cadetId),
        ])
        this.specialityList = specialities
        this.specialityHistoryList = specialityHistories
      } catch (e) {
        this.isError = true
      } finally {
        this.isLoading = false
      }
    },
    showAddNewSpecialityModal() {
      let addModal = this.$refs.specialityAddModal
      let myModal = new bootstrap.Modal(addModal, {
        keyboard: false,
      })
      myModal.show()
    },
    async updatePaginator(url) {},
  },
  computed: {
    orderedMainList() {
      return this.specialityHistoryList.results
    },
    orderedSpecialityList() {
      return this.specialityList.results
    },
  },
  watch: {},
}
</script>

<style scoped></style>
