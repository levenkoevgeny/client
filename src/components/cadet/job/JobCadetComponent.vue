<template>
  <div
    class="modal fade"
    id="jobHistoryAddModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
    ref="jobHistoryAddModal"
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
    id="simple-list-job-data"
  >
    <base-list-layout-for-cadet-update
      :is-loading="isLoading"
      :main-list-length="orderedMainList.length"
    >
      <template v-slot:title>Трудовая деятельность</template>
      <template v-slot:add-button>
        <button
          class="btn btn-warning"
          :disabled="isLoading"
          type="button"
          @click="showAddNewJobHistoryModal"
        >
          <span class="fas fa-plus me-2"></span>Добавить запись
        </button>
      </template>
      <template v-slot:thead>
        <tr>
          <th>Должность</th>
          <th>Год начала работы</th>
          <th>Год окончания работы</th>
          <th>Организация</th>
        </tr>
      </template>
      <template v-slot:tbody>
        <tr v-for="job in orderedMainList" :key="job.id">
          <td>
            {{ job.job_position || "Нет данных" }}
          </td>
          <td>
            {{ job.job_start_year || "Нет данных" }}
          </td>
          <td>
            {{ job.job_end_year || "Нет данных" }}
          </td>
          <td>
            {{ job.organisation_name || "Нет данных" }}
          </td>
        </tr>
      </template>
      <template v-slot:paginator></template>
    </base-list-layout-for-cadet-update>
  </div>
</template>

<script>
import getJobHistoryAPIInstance from "@/api/cadet/jobHistoryAPI"
import BaseListLayoutForCadetUpdate from "@/components/layouts/BaseListLayoutForCadetUpdate.vue"
import { getLoadListFunction } from "../../../../utils"

export default {
  name: "JobCadetComponent",
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
      jobHistoryList: {
        count: "",
        results: [],
        previous: null,
        next: null,
      },
      jobHistoryAPIInstance: getJobHistoryAPIInstance(),
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
        const [jobs] = await Promise.all([
          listFunction("jobHistory")(this.cadetId),
        ])
        this.jobHistoryList = jobs
      } catch (e) {
        this.isError = true
      } finally {
        this.isLoading = false
      }
    },
    showAddNewJobHistoryModal() {
      let addModal = this.$refs.jobHistoryAddModal
      let myModal = new bootstrap.Modal(addModal, {
        keyboard: false,
      })
      myModal.show()
    },
    async updatePaginator(url) {},
  },
  computed: {
    orderedMainList() {
      return this.jobHistoryList.results
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
