<template>
  <base-list-layout
    :is-loading="isLoading"
    :main-list-length="employeeList.count"
    title="Сотрудники и гражданский персонал"
    :load-more-data="null"
  >
    <template v-slot:thead>
      <tr>
        <th scope="col"></th>
        <th scope="col">Фамилия, имя, отчество</th>
        <th scope="col">Дата рождения</th>
        <th scope="col">Звание</th>
        <th scope="col">Должность</th>
      </tr>
    </template>
    <template v-slot:tbody>
      <tr
        class="align-middle"
        v-for="employee in orderedEmployees"
        :key="employee.id"
        @dblclick="
          $router.push({ name: 'employee-update', params: { id: employee.id } })
        "
      >
        <td>
          <img
            v-if="employee.photo"
            :src="employee.photo"
            class="img-thumbnail"
            alt="..."
            style="width: 50px"
          />
          <img
            v-else
            src="../../assets/without_photo.jpg"
            class="img-thumbnail"
            alt="..."
            style="width: 50px"
          />
        </td>
        <td>
          <router-link
            :to="{
              name: 'employee-view',
              params: { id: employee.id },
            }"
          >
            {{ employee.last_name_rus }}<br />
            {{ employee.first_name_rus }}<br />{{ employee.patronymic_rus }}
          </router-link>
        </td>
        <td>{{ employee.date_of_birth }}</td>
        <td>{{ employee.current_rank }}</td>
        <td>{{ employee.current_position }}</td>
      </tr>
    </template>

    <template v-slot:search-form>
      <div class="mb-3">
        <label for="last_name_rus" class="form-label">Фамилия</label>
        <input
          type="text"
          id="last_name_rus"
          class="form-control"
          v-model="searchForm.last_name_rus__icontains"
        />
      </div>

      <div class="mb-3">
        <label for="subdivision" class="form-label">Подразделение</label>
        <v-select
          v-model="searchForm.subdivision__in"
          :options="orderedEmployeeSubdivisions"
          label="subdivision_short_name"
          :reduce="(subdivision) => subdivision.id"
          multiple
        />
      </div>

      <button type="button" class="btn btn-primary" @click="clearFilter">
        Сбросить фильтр
      </button>
    </template>
  </base-list-layout>
</template>

<script>
import { globalEmployeeAPIInstance } from "@/api/employee/employeeAPI"
import BaseListLayout from "@/components/layouts/BaseListLayout.vue"

import { mapGetters } from "vuex"
import BaseListLayoutForCadetUpdate from "@/components/layouts/BaseListLayoutForCadetUpdate.vue"
import { PaginatorView } from "@/components/common"
import { getLoadListFunction } from "../../../utils"
import { debounce } from "lodash/function"

export default {
  name: "EmployeeList",
  components: {
    BaseListLayoutForCadetUpdate,
    BaseListLayout,
    PaginatorView,
  },
  data() {
    return {
      employeeList: { count: "", results: [], previous: null, next: null },
      isLoading: true,
      isError: false,
      BACKEND_PROTOCOL: process.env.VUE_APP_BACKEND_PROTOCOL,
      BACKEND_HOST: process.env.VUE_APP_BACKEND_HOST,
      BACKEND_PORT: process.env.VUE_APP_BACKEND_PORT,
      employeeAPIInstance: globalEmployeeAPIInstance,
      searchForm: Object.assign({}, globalEmployeeAPIInstance.searchObj),
      employeeNewForm: {
        last_name_rus: "",
        first_name_rus: "",
        date_of_birth: null,
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
        const [employees] = await Promise.all([
          listFunction("employee")(),
        ]).catch(() => (this.isError = true))
        this.employeeList = employees
      } catch (e) {
        this.isError = true
      } finally {
        this.isLoading = false
      }
    },
    debouncedSearch: debounce(async function () {
      this.isLoading = true
      this.employeeAPIInstance.searchObj = this.searchForm
      try {
        const employeeResponse =
          await this.employeeAPIInstance.getItemsList("token is here!!!")
        this.employeeList = await employeeResponse.data
      } catch (e) {
        this.isError = true
      } finally {
        this.isLoading = false
      }
    }, 500),

    clearFilter() {
      this.searchForm = Object.assign(
        {},
        this.employeeAPIInstance.searchObjDefault,
      )
    },
  },
  computed: {
    orderedEmployees() {
      return this.employeeList.results
    },
    orderedEmployeeSubdivisions() {
      return this.employeeSubdivisions.results
    },
    ...mapGetters({
      employeeSubdivisions: "common/getEmployeeSubdivisions",
    }),
  },
  watch: {
    searchForm: {
      handler(newValue, oldValue) {
        this.debouncedSearch()
      },
      deep: true,
    },
  },
}
</script>
