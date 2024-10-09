<template>
  <base-list-layout :is-loading="isLoading">
    <template v-slot:extra>
      <ul class="nav nav-links my-3 mb-lg-2 mx-n3">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#"
            ><span>Всего </span
            ><span class="text-body-tertiary fw-semibold">(68817)</span></a
          >
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"
            ><span>Абитуриенты </span
            ><span class="text-body-tertiary fw-semibold">(70348)</span></a
          >
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"
            ><span>Обучаются </span
            ><span class="text-body-tertiary fw-semibold">(17)</span></a
          >
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"
            ><span>Выпустились </span
            ><span class="text-body-tertiary fw-semibold">(810)</span></a
          >
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
        <th scope="col">Вид взыскания</th>
        <th scope="col">Дата наложения</th>
        <th scope="col">Дата окончания</th>
        <th scope="col">Дополнительная информация</th>
      </tr>
    </template>
    <template v-slot:tbody>
      <tr
        class="align-middle"
        v-for="punishment in orderedPunishments"
        :key="punishment.id"
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
        <td>{{ punishment.get_punishment_cadet_str }}</td>
        <td>{{ punishment.get_punishment_kind_str }}</td>
        <td>{{ punishment.punishment_start_date }}</td>
        <td>{{ punishment.punishment_expiration_date }}</td>
        <td>{{ punishment.punishment_extra_data }}</td>
      </tr>
    </template>
    <template v-slot:paginator>
      <PaginatorView
        :update-paginator="updatePaginator"
        :list-next="punishmentList.next"
        :list-previous="punishmentList.previous"
        v-if="punishmentList.previous || punishmentList.next"
      />
    </template>
    <template v-slot:search-form>
      <form method="get" action="">
        <div class="mb-3">
          <label class="form-label">Курсант</label>
          <select
            class="form-select"
            aria-label="Default select example"
            v-model="searchForm.punishment_cadet"
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
          <label class="form-label">Вид взыскания</label>
          <select
            class="form-select"
            aria-label="Default select example"
            v-model="searchForm.punishment_kind"
          >
            <option selected value="">--------</option>
            <option
              v-for="punishment in orderedPunishmentKinds"
              :key="punishment.id"
              :value="punishment.id"
            >
              {{ punishment.punishment_kind }}
            </option>
          </select>
        </div>
        <div class="mb-3">
          <label class="form-label">Дата наложения (с)</label>
          <input
            type="date"
            class="form-control"
            v-model="searchForm.punishment_start_date__gte"
          />
        </div>
        <div class="mb-3">
          <label class="form-label">Дата наложения (по)</label>
          <input
            type="date"
            class="form-control"
            v-model="searchForm.punishment_start_date__lte"
          />
        </div>
        <div class="mb-3">
          <label class="form-label">Дата окончания (с)</label>
          <input
            type="date"
            class="form-control"
            v-model="searchForm.punishment_expiration_date__gte"
          />
        </div>
        <div class="mb-3">
          <label class="form-label">Дата наложения (по)</label>
          <input
            type="date"
            class="form-control"
            v-model="searchForm.punishment_expiration_date__lte"
          />
        </div>
        <div class="mb-3">
          <label class="form-label">Доп. информация содержит</label>
          <input
            type="text"
            class="form-control"
            v-model="searchForm.punishment_extra_data__icontains"
          />
        </div>

        <!--            <button type="submit" class="btn btn-primary me-2">Поиск</button>-->
        <button type="button" class="btn btn-primary" @click="clearFilter">
          Сбросить фильтр
        </button>
      </form>
    </template>
  </base-list-layout>
</template>

<script>
import BaseListLayout from "@/components/cadet/BaseListLayout.vue"
import { PaginatorView } from "@/components/common"
import punishmentAPIInstance from "@/api/cadet/punishmentAPI"
import punishmentKindAPIInstance from "@/api/cadet/punishmentKindAPI"
import cadetAPIInstance from "@/api/cadet/cadetAPI"
import { debounce } from "lodash/function"

export default {
  name: "PunishmentListView",
  components: { BaseListLayout, PaginatorView },
  data() {
    return {
      punishmentList: { results: [], previous: null, next: null },
      punishmentKindList: { results: [], previous: null, next: null },
      cadetList: { results: [], previous: null, next: null },
      isLoading: true,
      isError: false,
      BACKEND_PROTOCOL: process.env.VUE_APP_BACKEND_PROTOCOL,
      BACKEND_HOST: process.env.VUE_APP_BACKEND_HOST,
      BACKEND_PORT: process.env.VUE_APP_BACKEND_PORT,
      searchForm: punishmentAPIInstance.searchObj,
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
        const punishmentResponse =
          await punishmentAPIInstance.getItemsList("token is here!!!")
        this.punishmentList = await punishmentResponse.data

        const punishmentKindResponse =
          await punishmentKindAPIInstance.getItemsList("token is here!!!")
        this.punishmentKindList = await punishmentKindResponse.data

        const cadetResponse =
          await cadetAPIInstance.getItemsList("token is here!!!")
        this.cadetList = await cadetResponse.data
      } catch (e) {
        this.isError = true
      } finally {
        this.isLoading = false
      }
    },
    async updatePaginator(url) {
      this.isLoading = true
      try {
        const response = await punishmentAPIInstance.updateList(
          url,
          "this.userToken",
        )
        this.punishmentList = await response.data
      } catch (error) {
        this.isError = true
      } finally {
        this.isLoading = false
      }
    },
    debouncedSearch: debounce(async function () {
      this.isLoading = true

      punishmentAPIInstance.searchObj = this.searchForm
      try {
        const punishmentResponse =
          await punishmentAPIInstance.getItemsList("token is here!!!")
        this.punishmentList = await punishmentResponse.data
      } catch (e) {
        this.isError = true
      } finally {
        this.isLoading = false
      }
    }, 500),
    clearFilter() {
      this.searchForm = punishmentAPIInstance.searchObjDefault
    },
  },
  computed: {
    orderedPunishments() {
      return this.punishmentList.results
    },
    orderedPunishmentKinds() {
      return this.punishmentKindList.results
    },
    orderedCadets() {
      return this.cadetList.results
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
