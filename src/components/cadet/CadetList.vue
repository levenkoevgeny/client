<template>
  <base-list-layout :is-loading="isLoading">
    <template v-slot:extra>
      <ul class="nav nav-links my-3 mb-lg-2 mx-n3">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#"
            ><span>Всего </span
            ><span class="text-body-tertiary fw-semibold"
              >({{ cadetList.count }})</span
            ></a
          >
        </li>
        <!--            <li class="nav-item">-->
        <!--              <a class="nav-link" href="#"-->
        <!--                ><span>Абитуриенты </span-->
        <!--                ><span class="text-body-tertiary fw-semibold">(70348)</span></a-->
        <!--              >-->
        <!--            </li>-->
        <!--            <li class="nav-item">-->
        <!--              <a class="nav-link" href="#"-->
        <!--                ><span>Обучаются </span-->
        <!--                ><span class="text-body-tertiary fw-semibold">(17)</span></a-->
        <!--              >-->
        <!--            </li>-->
        <!--            <li class="nav-item">-->
        <!--              <a class="nav-link" href="#"-->
        <!--                ><span>Выпустились </span-->
        <!--                ><span class="text-body-tertiary fw-semibold">(810)</span></a-->
        <!--              >-->
        <!--            </li>-->
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
        <th scope="col"></th>
        <th scope="col">Фамилия, имя, отчество</th>
        <th scope="col">Адрес</th>
        <th scope="col">Специальность</th>
        <th scope="col">Начало обучения</th>
        <th scope="col">Окончание обучения</th>
      </tr>
    </template>
    <template v-slot:tbody>
      <tr class="align-middle" v-for="cadet in orderedCadets" :key="cadet.id">
        <th scope="row" class="text-center align-middle">
          <div class="form-check">
            <input
              type="checkbox"
              class="form-check-input"
              id="exampleCheck1"
            />
          </div>
        </th>
        <td>
          <img
            v-if="cadet.photo"
            :src="cadet.photo"
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
              name: 'cadet-view',
              params: { id: cadet.id },
            }"
          >
            {{ cadet.last_name_rus }}<br />
            {{ cadet.first_name_rus }}<br />{{ cadet.patronymic_rus }}
          </router-link>
        </td>
        <td>{{ cadet.address }}</td>
        <td>{{ cadet.speciality }}</td>
        <td>{{ cadet.academy_start_year }}</td>
        <td>{{ cadet.academy_end_year }}</td>
      </tr>
    </template>
    <template v-slot:paginator>
      <PaginatorView
        :update-paginator="updatePaginator"
        :list-next="cadetList.next"
        :list-previous="cadetList.previous"
        v-if="cadetList.previous || cadetList.next"
      />
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
        <label for="subdivision" class="form-label">Факультет</label>
        <select
          class="form-select"
          aria-label="Default select example"
          v-model="searchForm.subdivision"
        >
          <option selected value="">--------</option>
          <option
            v-for="subdivision in orderedSubdivisions"
            :key="subdivision.id"
            :value="subdivision.id"
          >
            {{ subdivision.subdivision_short_name }}
          </option>
        </select>
      </div>
      <div class="row">
        <div class="col-6">
          <div class="mb-3">
            <label for="date_of_birth__gte" class="form-label"
              >Дата рождения (с)</label
            >
            <input
              type="date"
              class="form-control"
              id="date_of_birth__gte"
              v-model="searchForm.date_of_birth__gte"
            />
          </div>
        </div>
        <div class="col-6">
          <div class="mb-3">
            <label for="date_of_birth__lte" class="form-label"
              >Дата рождения (по)</label
            >
            <input
              type="date"
              class="form-control"
              id="date_of_birth__lte"
              v-model="searchForm.date_of_birth__lte"
            />
          </div>
        </div>
      </div>

      <div class="mb-3">
        <label for="address__icontains" class="form-label"
          >Адрес (содержит)</label
        >
        <input
          type="text"
          class="form-control"
          id="address__icontains"
          v-model="searchForm.address__icontains"
        />
      </div>
      <div class="mb-3">
        <label for="passport_number" class="form-label">Номер паспорта</label>
        <input
          type="text"
          class="form-control"
          id="passport_number"
          v-model="searchForm.passport_number"
        />
      </div>
      <div class="row">
        <div class="col-6">
          <div class="mb-3">
            <label for="passport_issue_date__gte" class="form-label"
              >Дата выдачи паспорта (с)</label
            >
            <input
              type="date"
              class="form-control"
              id="passport_issue_date__gte"
              v-model="searchForm.passport_issue_date__gte"
            />
          </div>
        </div>
        <div class="col-6">
          <div class="mb-3">
            <label for="passport_issue_date__lte" class="form-label"
              >Дата выдачи паспорта (по)</label
            >
            <input
              type="date"
              class="form-control"
              id="passport_issue_date__lte"
              v-model="searchForm.passport_issue_date__lte"
            />
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-6">
          <div class="mb-3">
            <label for="passport_validity_period__gte" class="form-label"
            >Окончание действия паспорта (с)</label
            >
            <input
              type="date"
              class="form-control"
              id="passport_validity_period__gte"
              v-model="searchForm.passport_validity_period__gte"
            />
          </div>
        </div>
        <div class="col-6">
          <div class="mb-3">
            <label for="passport_validity_period__lte" class="form-label"
            >Окончание действия паспорта (по)</label
            >
            <input
              type="date"
              class="form-control"
              id="passport_validity_period__lte"
              v-model="searchForm.passport_validity_period__lte"
            />
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-6">
          <div class="mb-3">
            <label for="academy_start_year__gte" class="form-label"
            >Год поступления (с)</label
            >
            <input
              type="number"
              min="1970"
              max="2100"
              class="form-control"
              id="academy_start_year__gte"
              v-model="searchForm.academy_start_year__gte"
            />
          </div>
        </div>
        <div class="col-6">
          <div class="mb-3">
            <label for="passport_validity_period__lte" class="form-label"
            >Год поступления (по)</label
            >
            <input
              type="number"
              min="1970"
              max="2100"
              class="form-control"
              id="passport_validity_period__lte"
              v-model="searchForm.passport_validity_period__lte"
            />
          </div>
        </div>
      </div>

      <button type="button" class="btn btn-primary" @click="clearFilter">
        Сбросить фильтр
      </button>
    </template>
  </base-list-layout>
</template>

<script>
import getCadetAPIInstance from "@/api/cadet/cadetAPI"
import getSubdivisionAPIInstance from "@/api/cadet/subdivisionAPI"
import BaseListLayout from "@/components/cadet/BaseListLayout.vue"
import { PaginatorView } from "@/components/common"
import { debounce } from "lodash/function"

export default {
  name: "CadetList",
  components: { BaseListLayout, PaginatorView },
  data() {
    return {
      cadetList: { count: "", results: [], previous: null, next: null },
      subdivisionList: { count: "", results: [], previous: null, next: null },
      isLoading: true,
      isError: false,
      BACKEND_PROTOCOL: process.env.VUE_APP_BACKEND_PROTOCOL,
      BACKEND_HOST: process.env.VUE_APP_BACKEND_HOST,
      BACKEND_PORT: process.env.VUE_APP_BACKEND_PORT,
      cadetAPIInstance: getCadetAPIInstance(),
      subdivisionAPIInstance: getSubdivisionAPIInstance(),
      searchForm: Object.assign({}, getCadetAPIInstance().searchObj),
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
        const [cadets, subdivisions] = await Promise.all([this.getCadets(), this.getSubdivisions()]).catch(
          () => (this.isError = true),
        )
        this.cadetList = cadets
        this.subdivisionList = subdivisions
      } catch (e) {
        this.isError = true
      } finally {
        this.isLoading = false
      }
    },
    async updatePaginator(url) {
      this.isLoading = true
      try {
        const response = await this.cadetAPIInstance.updateList(
          url,
          "this.userToken",
        )
        this.cadetList = await response.data
      } catch (error) {
        this.isError = true
      } finally {
        this.isLoading = false
      }
    },
    debouncedSearch: debounce(async function () {
      this.isLoading = true
      this.cadetAPIInstance.searchObj = Object.assign({}, this.searchForm)
      try {
        const cadetAResponse =
          await this.cadetAPIInstance.getItemsList("token is here!!!")
        this.cadetList = await cadetAResponse.data
      } catch (e) {
        this.isError = true
      } finally {
        this.isLoading = false
      }
    }, 500),
    clearFilter() {
      this.searchForm = Object.assign(
        {},
        this.cadetAPIInstance.searchObjDefault,
      )
    },

    async getCadets() {
      const res = await this.cadetAPIInstance.getItemsList("token is here!!!")
      return res.data
    },

    async getSubdivisions() {
      const res = await this.subdivisionAPIInstance.getItemsList("token is here!!!")
      return res.data
    },
  },

  computed: {
    orderedCadets() {
      return this.cadetList.results
    },
    orderedSubdivisions() {
      return this.subdivisionList.results
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
