<template>
  <base-list-layout>
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
        <th scope="col">Вид поощрения</th>
        <th scope="col">Дата поощрения</th>
        <th scope="col">Дополнительная информация</th>
      </tr>
    </template>
    <template v-slot:tbody>
      <tr
        class="align-middle"
        v-for="encouragement in orderedEncouragements"
        :key="encouragement.id"
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
        <td>{{ encouragement.get_encouragement_cadet_str }}</td>
        <td>{{ encouragement.get_encouragement_kind_str }}</td>
        <td>{{ encouragement.encouragement_date }}</td>
        <td>{{ encouragement.encouragement_extra_data }}</td>
      </tr>
    </template>
    <template v-slot:paginator>
      <PaginatorView
        :update-paginator="updatePaginator"
        :list-next="encouragementList.next"
        :list-previous="encouragementList.previous"
        v-if="encouragementList.previous || encouragementList.next"
      />
    </template>
    <template v-slot:search-form>
      <form method="get" action="">
        <div class="mb-3">
          <label class="form-label">Курсант</label>
          <select
            class="form-select"
            aria-label="Default select example"
            v-model="searchForm.encouragement_cadet"
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
          <label class="form-label">Вид поощрения</label>
          <select
            class="form-select"
            aria-label="Default select example"
            v-model="searchForm.encouragement_kind"
          >
            <option selected value="">--------</option>
            <option
              v-for="encouragement in orderedEncouragementKinds"
              :key="encouragement.id"
              :value="encouragement.id"
            >
              {{ encouragement.encouragement_kind }}
            </option>
          </select>
        </div>
        <div class="mb-3">
          <label class="form-label">Дата поощрения (с)</label>
          <input
            type="date"
            class="form-control"
            v-model="searchForm.encouragement_date__gte"
          />
        </div>
        <div class="mb-3">
          <label class="form-label">Дата поощрения (по)</label>
          <input
            type="date"
            class="form-control"
            v-model="searchForm.encouragement_date__lte"
          />
        </div>
        <div class="mb-3">
          <label class="form-label">Доп. информация содержит</label>
          <input
            type="text"
            class="form-control"
            v-model="searchForm.encouragement_extra_data__icontains"
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
import encouragementAPIInstance from "@/api/cadet/encouragementAPI"
import cadetAPIInstance from "@/api/cadet/cadetAPI"
import encouragementKindAPIInstance from "@/api/cadet/encouragementKindAPI"
import { PaginatorView } from "@/components/common"
import BaseListLayout from "@/components/cadet/BaseListLayout.vue"
import { debounce } from "lodash/function"

export default {
  name: "EncouragementListView",
  components: { BaseListLayout, PaginatorView },
  data() {
    return {
      encouragementList: { results: [], previous: null, next: null },
      encouragementKindList: { results: [], previous: null, next: null },
      cadetList: { results: [], previous: null, next: null },
      isLoading: true,
      isError: false,
      BACKEND_PROTOCOL: process.env.VUE_APP_BACKEND_PROTOCOL,
      BACKEND_HOST: process.env.VUE_APP_BACKEND_HOST,
      BACKEND_PORT: process.env.VUE_APP_BACKEND_PORT,
      searchForm: {
        encouragement_cadet: "",
        encouragement_kind: "",
        encouragement_date__gte: "",
        encouragement_date__lte: "",
        encouragement_extra_data__icontains: "",
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
        const encouragementResponse =
          await encouragementAPIInstance.getItemsList("token is here!!!")
        this.encouragementList = await encouragementResponse.data

        const encouragementKindResponse =
          await encouragementKindAPIInstance.getItemsList("token is here!!!")
        this.encouragementKindList = await encouragementKindResponse.data

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
        const response = await encouragementAPIInstance.updateList(
          url,
          "this.userToken",
        )
        this.encouragementList = await response.data
      } catch (error) {
        this.isError = true
      } finally {
        this.isLoading = false
      }
    },
    debouncedSearch: debounce(async function () {
      encouragementAPIInstance.searchObj = this.searchForm
      const encouragementResponse =
        await encouragementAPIInstance.getItemsList("token is here!!!")
      this.encouragementList = await encouragementResponse.data
    }, 500),
    clearFilter() {
      this.searchForm = {
        encouragement_cadet: "",
        encouragement_kind: "",
        encouragement_date__gte: "",
        encouragement_date__lte: "",
        encouragement_extra_data__icontains: "",
      }
    },
  },
  computed: {
    orderedEncouragements() {
      return this.encouragementList.results
    },
    orderedEncouragementKinds() {
      return this.encouragementKindList.results
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
