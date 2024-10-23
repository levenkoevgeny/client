<template>
  <div
    class="modal fade"
    id="educationAddModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
    ref="educationAddModal"
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
    id="simple-list-education-data"
  >
    <base-list-layout-for-cadet-update
      :is-loading="isLoading"
      :main-list-length="orderedMainList.length"
    >
      <template v-slot:title>Образование</template>
      <template v-slot:add-button>
        <button
          class="btn btn-warning"
          :disabled="isLoading"
          @click="showAddNewEducationModal"
          type="button"
        >
          <span class="fas fa-plus me-2"></span>Добавить запись
        </button>
      </template>
      <template v-slot:thead>
        <tr>
          <th>Уровень</th>
          <th>Вид учреждения образования</th>
          <th>Уровень образования</th>
          <th>Наименование учебного учреждения</th>
          <th>Начало обучения</th>
          <th>Окончание обучекния</th>
          <th>Средний бал</th>
        </tr>
      </template>
      <template v-slot:tbody>
        <tr
          v-for="educationHistory in orderedMainList"
          :key="educationHistory.id"
        >
          <td>
            {{ educationHistory.get_education_level_str || "Нет данных" }}
          </td>
          <td>
            {{ educationHistory.get_education_kind_str || "Нет данных" }}
          </td>
          <td>
            {{ educationHistory.get_education_level_str || "Нет данных" }}
          </td>
          <td>
            {{ educationHistory.education_graduated || "Нет данных" }}
          </td>
          <td>
            {{
              educationHistory.education_graduating_start_year || "Нет данных"
            }}
          </td>
          <td>
            {{ educationHistory.education_graduating_end_year || "Нет данных" }}
          </td>
          <td>
            {{ educationHistory.education_average_score || "Нет данных" }}
          </td>
        </tr>
      </template>
      <template v-slot:paginator></template>
    </base-list-layout-for-cadet-update>
  </div>
</template>

<script>
import getEducationHistoryAPIInstance from "@/api/cadet/educationHistoryAPI"
import { getLoadListFunction } from "../../../../utils"
import BaseListLayoutForCadetUpdate from "@/components/layouts/BaseListLayoutForCadetUpdate.vue"

export default {
  name: "EducationHistoryCadetComponent",
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
      educationHistoryList: {
        count: "",
        results: [],
        previous: null,
        next: null,
      },
      educationHistoryAPIInstance: getEducationHistoryAPIInstance(),
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
        const [educations] = await Promise.all([
          listFunction("education")(this.cadetId),
        ])
        this.educationHistoryList = educations
      } catch (e) {
        this.isError = true
      } finally {
        this.isLoading = false
      }
    },
    showAddNewEducationModal() {
      let addModal = this.$refs.educationAddModal
      let myModal = new bootstrap.Modal(addModal, {
        keyboard: false,
      })
      myModal.show()
    },
    async updatePaginator(url) {},
  },
  computed: {
    orderedMainList() {
      return this.educationHistoryList.results
    },
  },
  watch: {},
}
</script>

<style scoped></style>
