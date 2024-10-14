<template>
  <base-list-layout :is-loading="isLoading">
    <template v-slot:modals></template>
    <template v-slot:extra>
      <ul class="nav nav-links my-3 mb-lg-2 mx-n3">
        <li class="nav-item">
          <button class="nav-link active">
            <span>Всего записей</span
            ><span class="text-body-tertiary fw-semibold"
              >({{ specialityHistoryList.count }})</span
            >
          </button>
        </li>
      </ul>
    </template>
    <template v-slot:add-button></template>
    <template v-slot:thead>
      <tr>
        <th scope="col">
          <div class="form-check">
            <input
              type="checkbox"
              class="form-check-input"
              id="exampleCheck1"
            />
          </div>
        </th>
        <th scope="col">Фамилия, имя, отчество</th>
        <th scope="col">Специальность</th>
        <th scope="col">Дата приказа</th>
        <th scope="col">Номер приказа</th>
        <th scope="col">Чей приказ</th>
        <th scope="col">Фабула</th>
      </tr>
    </template>
    <template v-slot:tbody>
      <tr
        class="align-middle"
        v-for="specialityHistory in orderedSpecialityHistories"
        :key="specialityHistory.id"
      >
        <th scope="row" class="text-center align-middle">
          <div class="form-check">
            <input
              type="checkbox"
              class="form-check-input"
              id="exampleCheck1"
            />
          </div>
        </th>
        <td>{{ specialityHistory.get_cadet_str }}</td>
        <td>{{ specialityHistory.get_speciality_str }}</td>
        <td>{{ specialityHistory.speciality_order_date }}</td>
        <td>{{ specialityHistory.speciality_order_number }}</td>
        <td>{{ specialityHistory.get_position_order_owner_str }}</td>
        <td>{{ specialityHistory.encouragement_extra_data }}</td>
      </tr>
    </template>
    <template v-slot:paginator>
      <PaginatorView
        :update-paginator="updatePaginator"
        :list-next="specialityHistoryList.next"
        :list-previous="specialityHistoryList.previous"
        v-if="specialityHistoryList.previous || specialityHistoryList.next"
      />
    </template>
    <template v-slot:search-form>
      <div class="mb-3">
        <label class="form-label">Курсант</label>
        <select
          class="form-select"
          aria-label="Default select example"
          v-model="searchForm.cadet"
        >
          <option selected value="">--------</option>
          <option
            v-for="cadet in orderedCadets"
            :key="cadet.id"
            :value="cadet.id"
          >
            {{ cadet.get_full_name }}
          </option>
        </select>
      </div>
      <div class="mb-3">
        <label class="form-label">Специальность</label>
        <select
          class="form-select"
          aria-label="Default select example"
          v-model="searchForm.speciality"
        >
          <option selected value="">--------</option>
          <option
            v-for="speciality in orderedSpecialities"
            :key="speciality.id"
            :value="speciality.id"
          >
            {{ speciality.speciality_name }}
          </option>
        </select>
      </div>
      <div class="row">
        <div class="col-6">
          <div class="mb-3">
            <label class="form-label">Дата приказа (с)</label>
            <input
              type="date"
              class="form-control"
              v-model="searchForm.speciality_order_date__gte"
            />
          </div>
        </div>
        <div class="col-6">
          <div class="mb-3">
            <label class="form-label">Дата приказа (по)</label>
            <input
              type="date"
              class="form-control"
              v-model="searchForm.speciality_order_date__lte"
            />
          </div>
        </div>
      </div>

      <div class="mb-3">
        <label class="form-label">Номер приказа (содержит)</label>
        <input
          type="text"
          class="form-control"
          v-model="searchForm.speciality_order_number__icontains"
        />
      </div>

      <div class="mb-3">
        <label class="form-label">Чей приказ</label>
        <select
          class="form-select"
          aria-label="Default select example"
          v-model="searchForm.speciality_order_owner"
        >
          <option selected value="">--------</option>
          <option
            v-for="orderOwner in orderedOrderOwners"
            :key="orderOwner.id"
            :value="orderOwner.id"
          >
            {{ orderOwner.order_owner }}
          </option>
        </select>
      </div>

      <div class="mb-3">
        <label class="form-label">Фабула (содержит)</label>
        <input
          type="text"
          class="form-control"
          v-model="searchForm.speciality_extra_data__icontains"
        />
      </div>
      <button type="button" class="btn btn-primary" @click="clearFilter">
        Сбросить фильтр
      </button>
    </template>
  </base-list-layout>
</template>

<script>
import getSpecialityAPIInstance from "@/api/cadet/specialityAPI"
import getSpecialityHistoryAPIInstance from "@/api/cadet/specialityHistoryAPI"
import getCadetAPIInstance from "@/api/cadet/cadetAPI"
import getOrderOwnerAPIInstance from "@/api/cadet/orderOwnerAPI"

import BaseListLayout from "@/components/cadet/BaseListLayout.vue"
import { PaginatorView } from "@/components/common"
import { debounce } from "lodash/function"
import getEncouragementAPIInstance from "@/api/cadet/encouragementAPI"

export default {
  name: "EncouragementListView",
  components: { BaseListLayout, PaginatorView },
  data() {
    return {
      specialityList: { count: "", results: [], previous: null, next: null },
      specialityHistoryList: {
        count: "",
        results: [],
        previous: null,
        next: null,
      },
      cadetList: { count: "", results: [], previous: null, next: null },
      orderOwnerList: { count: "", results: [], previous: null, next: null },
      isLoading: true,
      isError: false,
      BACKEND_PROTOCOL: process.env.VUE_APP_BACKEND_PROTOCOL,
      BACKEND_HOST: process.env.VUE_APP_BACKEND_HOST,
      BACKEND_PORT: process.env.VUE_APP_BACKEND_PORT,
      specialityAPIInstance: getSpecialityAPIInstance(),
      specialityHistoryAPIInstance: getSpecialityHistoryAPIInstance(),
      cadetAPIInstance: getCadetAPIInstance(),
      orderOwnerAPIInstance: getOrderOwnerAPIInstance(),
      searchForm: Object.assign(
        {},
        getSpecialityHistoryAPIInstance().searchObj,
      ),
      newSpecialityHistoryObjForm: {
        cadet: null,
        speciality: null,
        speciality_order_date: null,
        speciality_order_number: "",
        speciality_order_owner: null,
        speciality_extra_data: "",
      },
      updateSpecialityHistoryObjForm: {
        cadet: null,
        speciality: null,
        speciality_order_date: null,
        speciality_order_number: "",
        speciality_order_owner: null,
        speciality_extra_data: "",
      },
    }
  },
  async created() {
    await this.loadData()
  },
  methods: {
    async loadData() {
      this.isLoading = true
      this.isError = false
      try {
        const [specialities, specialityHistories, cadets, orderOwners] =
          await Promise.all([
            this.getSpecialities(),
            this.getSpecialityHistories(),
            this.getCadets(),
            this.getOrderOwners(),
          ]).catch(() => (this.isError = true))

        this.specialityList = specialities
        this.specialityHistoryList = specialityHistories
        this.cadetList = cadets
        this.orderOwnerList = orderOwners
      } catch (e) {
        this.isError = true
      } finally {
        this.isLoading = false
      }
    },
    async updatePaginator(url) {
      this.isLoading = true
      try {
        const response = await this.specialityHistoryAPIInstance.updateList(
          url,
          "this.userToken",
        )
        this.specialityHistoryList = await response.data
      } catch (error) {
        this.isError = true
      } finally {
        this.isLoading = false
      }
    },
    debouncedSearch: debounce(async function () {
      this.isLoading = true
      this.specialityHistoryAPIInstance.searchObj = Object.assign(
        {},
        this.searchForm,
      )
      try {
        const specialityHistoryResponse =
          await this.specialityHistoryAPIInstance.getItemsList(
            "token is here!!!",
          )
        this.specialityHistoryList = await specialityHistoryResponse.data
      } catch (e) {
        this.isError = true
      } finally {
        this.isLoading = false
      }
    }, 500),
    clearFilter() {
      this.searchForm = Object.assign(
        {},
        this.specialityHistoryAPIInstance.searchObjDefault,
      )
    },

    async getSpecialities() {
      const res =
        await this.specialityAPIInstance.getItemsList("token is here!!!")
      return res.data
    },
    async getSpecialityHistories() {
      const res =
        await this.specialityHistoryAPIInstance.getItemsList("token is here!!!")
      return res.data
    },
    async getCadets() {
      const res = await this.cadetAPIInstance.getItemsList("token is here!!!")
      return res.data
    },
    async getOrderOwners() {
      const res =
        await this.orderOwnerAPIInstance.getItemsList("token is here!!!")
      return res.data
    },
  },
  computed: {
    orderedSpecialities() {
      return this.specialityList.results
    },
    orderedSpecialityHistories() {
      return this.specialityHistoryList.results
    },
    orderedCadets() {
      return this.cadetList.results
    },
    orderedOrderOwners() {
      return this.orderOwnerList.results
    },
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

<style scoped></style>
