<template>
  <base-list-layout :is-loading="isLoading">
    <template v-slot:modals>
      <div
        class="modal fade"
        id="cadetAddModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
        ref="cadetAddModal"
      >
        <div class="modal-dialog">
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

            <form @submit.prevent="addNewCadet">
              <div class="modal-body">
                <div class="mb-3">
                  <label for="last_name_rus" class="form-label">Фамилия</label>
                  <input
                    type="text"
                    class="form-control"
                    id="last_name_rus"
                    v-model="cadetNewForm.last_name_rus"
                    required
                  />
                </div>
                <div class="mb-3">
                  <label for="first_name_rus" class="form-label">Имя</label>
                  <input
                    type="text"
                    class="form-control"
                    id="first_name_rus"
                    v-model="cadetNewForm.first_name_rus"
                    required
                  />
                </div>
                <div class="mb-3">
                  <label for="date_of_birth" class="form-label"
                    >Дата рождения</label
                  >
                  <input
                    type="date"
                    class="form-control"
                    id="date_of_birth"
                    v-model="cadetNewForm.date_of_birth"
                    required
                  />
                </div>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                  ref="cadetAddModalCloseButton"
                >
                  Закрыть без сохранения
                </button>
                <button type="submit" class="btn btn-primary">Сохранить</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </template>

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
      </ul>
    </template>
    <template v-slot:add-button>
      <button class="btn btn-warning" @click="showCadetAddModal">
        Добавить запись
      </button>
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
        <th scope="col"></th>
        <th scope="col">Фамилия, имя, отчество</th>
        <th scope="col">Адрес</th>
        <th scope="col">Специальность</th>
        <th scope="col">Начало обучения</th>
        <th scope="col">Окончание обучения</th>
      </tr>
    </template>
    <template v-slot:tbody>
      <tr
        class="align-middle"
        v-for="cadet in orderedCadets"
        :key="cadet.id"
        @dblclick="
          $router.push({ name: 'cadet-update', params: { id: cadet.id } })
        "
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
        <label for="category" class="form-label">Категория</label>
        <select
          class="form-select"
          aria-label="Default select example"
          v-model="searchForm.category"
        >
          <option selected value="">--------</option>
          <option
            v-for="category in orderedCadetCategories"
            :key="category.id"
            :value="category.id"
          >
            {{ category.category }}
          </option>
        </select>
      </div>
      <div class="mb-3">
        <label for="category" class="form-label">Пол</label>
        <select
          class="form-select"
          aria-label="Default select example"
          v-model="searchForm.gender"
        >
          <option selected value="">--------</option>
          <option value="0">Мужской</option>
          <option value="1">Женский</option>
        </select>
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
      <div class="mb-3">
        <label for="subdivision" class="form-label">Группа</label>
        <select
          class="form-select"
          aria-label="Default select example"
          v-model="searchForm.group"
        >
          <option selected value="">--------</option>
          <option
            v-for="group in orderedGroups"
            :key="group.id"
            :value="group.id"
          >
            {{ group.group_name }}
          </option>
        </select>
      </div>
      <div class="mb-3">
        <label for="subdivision" class="form-label">Звание</label>
        <select
          class="form-select"
          aria-label="Default select example"
          v-model="searchForm.current_rank"
        >
          <option selected value="">--------</option>
          <option v-for="rank in orderedRanks" :key="rank.id" :value="rank.id">
            {{ rank.rank }}
          </option>
        </select>
      </div>
      <div class="mb-3">
        <label for="subdivision" class="form-label">Специальность</label>
        <select
          class="form-select"
          aria-label="Default select example"
          v-model="searchForm.current_speciality"
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
      <div class="mb-3">
        <label for="subdivision" class="form-label">Должность</label>
        <select
          class="form-select"
          aria-label="Default select example"
          v-model="searchForm.current_position"
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

      <div class="mb-3">
        <label for="last_name_rus" class="form-label">Фамилия</label>
        <input
          type="text"
          id="last_name_rus"
          class="form-control"
          v-model="searchForm.last_name_rus__icontains"
        />
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
            <label for="academy_start_date__gte" class="form-label"
              >Дата поступления (с)</label
            >
            <input
              type="date"
              max="2100"
              class="form-control"
              id="academy_start_date__gte"
              v-model="searchForm.academy_start_date__gte"
            />
          </div>
        </div>
        <div class="col-6">
          <div class="mb-3">
            <label for="academy_start_date__lte" class="form-label"
              >Дата поступления (по)</label
            >
            <input
              type="date"
              class="form-control"
              id="academy_start_date__lte"
              v-model="searchForm.academy_start_date__lte"
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
import getCadetCategoryAPIAPIInstance from "@/api/cadet/cadetCategoryAPI"
import getSubdivisionAPIInstance from "@/api/cadet/subdivisionAPI"
import getGroupAPIInstance from "@/api/cadet/groupAPI"
import getRankAPIInstance from "@/api/cadet/rankAPI"
import getSpecialityAPIInstance from "@/api/cadet/specialityAPI"
import getPositionAPIInstance from "@/api/cadet/positionAPI"
import BaseListLayout from "@/components/layouts/BaseListLayout.vue"
import { PaginatorView } from "@/components/common"
import { debounce } from "lodash/function"
import EncouragementFormView from "@/components/cadet/encouragement/modals/FormView.vue"
import { getLoadListFunction } from "../../../utils"

export default {
  name: "CadetList",
  components: { EncouragementFormView, BaseListLayout, PaginatorView },
  data() {
    return {
      cadetList: { count: "", results: [], previous: null, next: null },
      cadetCategoryList: { count: "", results: [], previous: null, next: null },
      subdivisionList: { count: "", results: [], previous: null, next: null },
      groupList: { count: "", results: [], previous: null, next: null },
      rankList: { count: "", results: [], previous: null, next: null },
      specialityList: { count: "", results: [], previous: null, next: null },
      positionList: { count: "", results: [], previous: null, next: null },
      isLoading: true,
      isError: false,
      BACKEND_PROTOCOL: process.env.VUE_APP_BACKEND_PROTOCOL,
      BACKEND_HOST: process.env.VUE_APP_BACKEND_HOST,
      BACKEND_PORT: process.env.VUE_APP_BACKEND_PORT,
      cadetAPIInstance: getCadetAPIInstance(),
      cadetCategoryAPIInstance: getCadetCategoryAPIAPIInstance(),
      subdivisionAPIInstance: getSubdivisionAPIInstance(),
      groupAPIInstance: getGroupAPIInstance(),
      rankAPIInstance: getRankAPIInstance(),
      specialityAPIInstance: getSpecialityAPIInstance(),
      positionAPIInstance: getPositionAPIInstance(),
      searchForm: Object.assign({}, getCadetAPIInstance().searchObj),
      cadetNewForm: {
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
        const [
          cadetCategories,
          cadets,
          subdivisions,
          groups,
          ranks,
          specialities,
          positions,
        ] = await Promise.all([
          listFunction("cadetCategory")(),
          listFunction("cadet")(),
          listFunction("subdivision")(),
          listFunction("group")(),
          listFunction("rank")(),
          listFunction("speciality")(),
          listFunction("position")(),
        ]).catch(() => (this.isError = true))
        this.cadetCategoryList = cadetCategories
        this.cadetList = cadets
        this.subdivisionList = subdivisions
        this.groupList = groups
        this.rankList = ranks
        this.specialityList = specialities
        this.positionList = positions
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
    showCadetAddModal() {
      let addModal = this.$refs.cadetAddModal
      let myModal = new bootstrap.Modal(addModal, {
        keyboard: false,
      })
      myModal.show()
    },
    async addNewCadet() {
      try {
        const response = await this.cadetAPIInstance.addItem(
          "this.token",
          this.cadetNewForm,
        )
        const newItem = await response.data
        this.cadetList.results.unshift(newItem)
        this.$refs.cadetAddModalCloseButton.click()
        this.cadetNewForm = {
          last_name_rus: "",
          first_name_rus: "",
          date_of_birth: null,
        }
      } catch (e) {
        console.log(e)
        this.isError = true
      } finally {
        this.isLoading = false
      }
    },
    updateCadetView(cadetId) {},
  },

  computed: {
    orderedCadetCategories() {
      return this.cadetCategoryList.results
    },
    orderedCadets() {
      return this.cadetList.results
    },
    orderedSubdivisions() {
      return this.subdivisionList.results
    },
    orderedGroups() {
      return this.groupList.results
    },
    orderedRanks() {
      return this.rankList.results
    },
    orderedSpecialities() {
      return this.specialityList.results
    },
    orderedPositions() {
      return this.positionList.results
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
