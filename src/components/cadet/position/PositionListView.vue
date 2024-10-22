<template>
  <base-list-layout :is-loading="isLoading">
    <template v-slot:extra>
      <ul class="nav nav-links my-3 mb-lg-2 mx-n3">
        <li class="nav-item">
          <button class="nav-link active">
            <span>Всего записей</span
            ><span class="text-body-tertiary fw-semibold"
              >({{ positionHistoryList.count }})</span
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
        <th scope="col">Назначен на должность</th>
        <th scope="col">С даты</th>
        <th scope="col">Дата приказа</th>
        <th scope="col">Номер приказа</th>
        <th scope="col">Чей приказ</th>
        <th scope="col">Фабула</th>
      </tr>
    </template>
    <template v-slot:tbody>
      <tr
        class="align-middle"
        v-for="positionHistory in orderedPositionHistories"
        :key="positionHistory.id"
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
        <td>{{ positionHistory.get_cadet_str }}</td>
        <td>{{ positionHistory.get_position_str }}</td>
        <td>{{ positionHistory.position_date }}</td>
        <td>{{ positionHistory.position_order_date }}</td>
        <td>{{ positionHistory.position_order_number }}</td>
        <td>{{ positionHistory.get_position_order_owner_str }}</td>
        <td>{{ positionHistory.position_extra_data }}</td>
      </tr>
    </template>
    <template v-slot:paginator>
      <PaginatorView
        :update-paginator="updatePaginator"
        :list-next="positionHistoryList.next"
        :list-previous="positionHistoryList.previous"
        v-if="positionHistoryList.previous || positionHistoryList.next"
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
        <label class="form-label">Должность</label>
        <select
          class="form-select"
          aria-label="Default select example"
          v-model="searchForm.position"
        >
          <option selected value="">--------</option>
          <option
            v-for="position in orderedPositions"
            :key="position.id"
            :value="position.id"
          >
            {{ position.position }}
          </option>
        </select>
      </div>
      <div class="row">
        <div class="col-6">
          <div class="mb-3">
            <label for="position_date__gte" class="form-label"
              >Дата назначения (с)</label
            >
            <input
              type="date"
              class="form-control"
              id="position_date__gte"
              v-model="searchForm.position_date__gte"
            />
          </div>
        </div>
        <div class="col-6">
          <div class="mb-3">
            <label for="position_date__lte" class="form-label"
              >Дата назначения (по)</label
            >
            <input
              type="date"
              class="form-control"
              id="position_date__lte"
              v-model="searchForm.position_date__lte"
            />
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-6">
          <div class="mb-3">
            <label for="position_order_date__gte" class="form-label"
              >Дата приказа (с)</label
            >
            <input
              type="date"
              class="form-control"
              id="position_order_date__gte"
              v-model="searchForm.position_order_date__gte"
            />
          </div>
        </div>
        <div class="col-6">
          <div class="mb-3">
            <label for="position_order_date__lte" class="form-label"
              >Дата приказа (по)</label
            >
            <input
              type="date"
              class="form-control"
              id="position_order_date__lte"
              v-model="searchForm.position_order_date__lte"
            />
          </div>
        </div>
      </div>
      <div class="mb-3">
        <label for="position_order_number__icontains" class="form-label"
          >Номер приказа (содержит)</label
        >
        <input
          type="text"
          class="form-control"
          id="position_order_number__icontains"
          v-model="searchForm.position_order_number__icontains"
        />
      </div>
      <div class="mb-3">
        <label for="position_order_owner" class="form-label">Чей приказ</label>
        <select
          class="form-select"
          aria-label="Default select example"
          id="position_order_owner"
          v-model="searchForm.position_order_owner"
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

      <button type="button" class="btn btn-primary" @click="clearFilter">
        Сбросить фильтр
      </button>
    </template>
  </base-list-layout>
</template>

<script>
import getCadetAPIInstance from "@/api/cadet/cadetAPI"
import getOrderOwnerAPIInstance from "@/api/cadet/orderOwnerAPI"
import getPositionAPIInstance from "@/api/cadet/positionAPI"
import getPositionHistoryAPIInstance from "@/api/cadet/positionHistoryAPI"
import { PaginatorView } from "@/components/common"
import { debounce } from "lodash/function"

import BaseListLayout from "@/components/layouts/BaseListLayout.vue"

export default {
  name: "PositionListView",
  components: { BaseListLayout, PaginatorView },
  data() {
    return {
      positionHistoryList: {
        count: "",
        results: [],
        previous: null,
        next: null,
      },
      positionList: { count: "", results: [], previous: null, next: null },
      cadetList: { count: "", results: [], previous: null, next: null },
      orderOwnerList: { count: "", results: [], previous: null, next: null },
      isLoading: true,
      isError: false,
      BACKEND_PROTOCOL: process.env.VUE_APP_BACKEND_PROTOCOL,
      BACKEND_HOST: process.env.VUE_APP_BACKEND_HOST,
      BACKEND_PORT: process.env.VUE_APP_BACKEND_PORT,
      positionHistoryAPIInstance: getPositionHistoryAPIInstance(),
      positionAPIInstance: getPositionAPIInstance(),
      cadetAPIInstance: getCadetAPIInstance(),
      orderOwnerAPIInstance: getOrderOwnerAPIInstance(),
      searchForm: Object.assign({}, getPositionHistoryAPIInstance().searchObj),
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
        const [positionHistories, positions, cadets, orderOwners] =
          await Promise.all([
            this.getPositionHistories(),
            this.getPositions(),
            this.getCadets(),
            this.getOrderOwners(),
          ]).catch(() => (this.isError = true))

        this.positionHistoryList = positionHistories
        this.positionList = positions
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
        const response = await this.positionHistoryAPIInstance.updateList(
          url,
          "this.userToken",
        )
        this.positionHistoryList = await response.data
      } catch (error) {
        this.isError = true
      } finally {
        this.isLoading = false
      }
    },
    debouncedSearch: debounce(async function () {
      this.isLoading = true
      this.positionHistoryAPIInstance.searchObj = Object.assign(
        {},
        this.searchForm,
      )
      try {
        const positionHistoryResponse =
          await this.positionHistoryAPIInstance.getItemsList("token is here!!!")
        this.positionHistoryList = await positionHistoryResponse.data
      } catch (e) {
        this.isError = true
      } finally {
        this.isLoading = false
      }
    }, 500),
    clearFilter() {
      this.searchForm = Object.assign(
        {},
        this.positionHistoryAPIInstance.searchObjDefault,
      )
    },

    async getPositionHistories() {
      const res =
        await this.positionHistoryAPIInstance.getItemsList("token is here!!!")
      return res.data
    },
    async getPositions() {
      const res =
        await this.positionAPIInstance.getItemsList("token is here!!!")
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
    orderedPositionHistories() {
      return this.positionHistoryList.results
    },
    orderedPositions() {
      return this.positionList.results
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
