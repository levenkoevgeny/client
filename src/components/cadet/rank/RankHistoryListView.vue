<template>
  <base-list-layout :is-loading="isLoading">
    <template v-slot:extra>
      <ul class="nav nav-links my-3 mb-lg-2 mx-n3">
        <li class="nav-item">
          <button class="nav-link active">
            <span>Всего записей</span
            ><span class="text-body-tertiary fw-semibold"
              >({{ rankHistoryList.count }})</span
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
        <th scope="col">Присвоенное звание</th>
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
        v-for="rankHistory in orderedRankHistories"
        :key="rankHistory.id"
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
        <td>{{ rankHistory.get_cadet_str }}</td>
        <td>{{ rankHistory.get_rank_str }}</td>
        <td>{{ rankHistory.rank_date }}</td>
        <td>{{ rankHistory.rank_order_date }}</td>
        <td>{{ rankHistory.rank_order_number }}</td>
        <td>{{ rankHistory.get_rank_order_owner_str }}</td>
        <td>{{ rankHistory.rank_extra_data }}</td>
      </tr>
    </template>
    <template v-slot:paginator>
      <PaginatorView
        :update-paginator="updatePaginator"
        :list-next="rankHistoryList.next"
        :list-previous="rankHistoryList.previous"
        v-if="rankHistoryList.previous || rankHistoryList.next"
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
        <label class="form-label">Звание</label>
        <select
          class="form-select"
          aria-label="Default select example"
          v-model="searchForm.rank"
        >
          <option selected value="">--------</option>
          <option v-for="rank in orderedRanks" :key="rank.id" :value="rank.id">
            {{ rank.rank }}
          </option>
        </select>
      </div>
      <div class="row">
        <div class="col-6">
          <div class="mb-3">
            <label for="rank_date__gte" class="form-label"
              >Дата присвоения звания (с)</label
            >
            <input
              type="date"
              class="form-control"
              id="rank_date__gte"
              v-model="searchForm.rank_date__gte"
            />
          </div>
        </div>
        <div class="col-6">
          <div class="mb-3">
            <label for="rank_date__lte" class="form-label"
              >Дата присвоения звания (по)</label
            >
            <input
              type="date"
              class="form-control"
              id="rank_date__lte"
              v-model="searchForm.rank_date__lte"
            />
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-6">
          <div class="mb-3">
            <label for="rank_order_date__gte" class="form-label"
              >Дата приказа (с)</label
            >
            <input
              type="date"
              class="form-control"
              id="rank_order_date__gte"
              v-model="searchForm.rank_order_date__gte"
            />
          </div>
        </div>
        <div class="col-6">
          <div class="mb-3">
            <label for="rank_order_date__lte" class="form-label"
              >Дата приказа (по)</label
            >
            <input
              type="date"
              class="form-control"
              id="rank_order_date__lte"
              v-model="searchForm.rank_order_date__lte"
            />
          </div>
        </div>
      </div>
      <div class="mb-3">
        <label for="rank_order_number__icontains" class="form-label"
          >Номер приказа (содержит)</label
        >
        <input
          type="text"
          class="form-control"
          id="rank_order_number__icontains"
          v-model="searchForm.rank_order_number__icontains"
        />
      </div>
      <div class="mb-3">
        <label for="rank_order_owner" class="form-label">Чей приказ</label>
        <select
          class="form-select"
          aria-label="Default select example"
          id="rank_order_owner"
          v-model="searchForm.rank_order_owner"
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
import getRankAPIInstance from "@/api/cadet/rankAPI"
import getRankHistoryAPIInstance from "@/api/cadet/rankHistoryAPI"
import BaseListLayout from "@/components/layouts/BaseListLayout.vue"
import { PaginatorView } from "@/components/common"
import { debounce } from "lodash/function"

export default {
  name: "RankHistoryListView",
  components: { BaseListLayout, PaginatorView },
  data() {
    return {
      rankHistoryList: { count: "", results: [], previous: null, next: null },
      rankList: { count: "", results: [], previous: null, next: null },
      cadetList: { count: "", results: [], previous: null, next: null },
      orderOwnerList: { count: "", results: [], previous: null, next: null },
      isLoading: true,
      isError: false,
      BACKEND_PROTOCOL: process.env.VUE_APP_BACKEND_PROTOCOL,
      BACKEND_HOST: process.env.VUE_APP_BACKEND_HOST,
      BACKEND_PORT: process.env.VUE_APP_BACKEND_PORT,
      rankHistoryAPIInstance: getRankHistoryAPIInstance(),
      rankAPIInstance: getRankAPIInstance(),
      cadetAPIInstance: getCadetAPIInstance(),
      orderOwnerAPIInstance: getOrderOwnerAPIInstance(),
      searchForm: Object.assign({}, getRankHistoryAPIInstance().searchObj),
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
        const [rankHistories, ranks, cadets, orderOwners] = await Promise.all([
          this.getRankHistories(),
          this.getRanks(),
          this.getCadets(),
          this.getOrderOwners(),
        ]).catch(() => (this.isError = true))

        this.rankHistoryList = rankHistories
        this.rankList = ranks
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
        const response = await this.rankHistoryAPIInstance.updateList(
          url,
          "this.userToken",
        )
        this.rankHistoryList = await response.data
      } catch (error) {
        this.isError = true
      } finally {
        this.isLoading = false
      }
    },
    debouncedSearch: debounce(async function () {
      this.isLoading = true
      this.rankHistoryAPIInstance.searchObj = Object.assign({}, this.searchForm)
      try {
        const rankHistoryResponse =
          await this.rankHistoryAPIInstance.getItemsList("token is here!!!")
        this.rankHistoryList = await rankHistoryResponse.data
      } catch (e) {
        this.isError = true
      } finally {
        this.isLoading = false
      }
    }, 500),
    clearFilter() {
      this.searchForm = Object.assign(
        {},
        this.rankHistoryAPIInstance.searchObjDefault,
      )
    },

    async getRankHistories() {
      const res =
        await this.rankHistoryAPIInstance.getItemsList("token is here!!!")
      return res.data
    },
    async getRanks() {
      const res = await this.rankAPIInstance.getItemsList("token is here!!!")
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
    orderedRankHistories() {
      return this.rankHistoryList.results
    },
    orderedRanks() {
      return this.rankList.results
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
