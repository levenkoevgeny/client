<template>
  <div
    class="modal fade"
    id="exportDataModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
    ref="exportDataModal"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5">Экспорт данных</h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div>
            <div style="font-size: 1.7rem">
              <button
                class="btn btn-link text-primary"
                style="font-size: inherit"
                title="Экспорт в Word"
                @click="exportData('word')"
              >
                <font-awesome-icon :icon="['far', 'file-word']" />
              </button>
              <!--              <button-->
              <!--                class="btn btn-link text-success"-->
              <!--                style="font-size: inherit; color: inherit"-->
              <!--                title="Экспорт в Excel"-->
              <!--                @click="exportData('excel')"-->
              <!--              >-->
              <!--                <font-awesome-icon :icon="['far', 'file-excel']" />-->
              <!--              </button>-->
            </div>
            <div>
              <div
                class="d-flex flex-row align-items-center justify-content-start my-2"
              >
                <button
                  class="btn text-primary me-2 p-0"
                  @click="checkAllFieldsForExport"
                >
                  <font-awesome-icon :icon="['fas', 'list-check']" />
                  Выбрать все поля
                </button>
                <button
                  class="btn text-primary m-0 p-0"
                  @click="clearAllFieldsForExport"
                >
                  Очистить
                  <font-awesome-icon :icon="['far', 'circle-xmark']" />
                </button>
              </div>
              <label class="form-label">Выбор полей для экспорта</label>

              <v-select
                v-model="selectedFieldsForDataExport"
                :options="fieldsForDataExport"
                label="fieldName"
                :reduce="(field) => field.fieldValue"
                multiple
                style="min-width: 400px"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="container-fluid">
    <div class="my-3"></div>
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
    <div
      class="d-flex flex-row align-items-center justify-content-between mb-4"
    >
      <div class="m-0 p-0">
        <!--        <PaginatorView-->
        <!--          :update-paginator="updatePaginator"-->
        <!--          :list-next="cadetList.next"-->
        <!--          :list-previous="cadetList.previous"-->
        <!--          v-if="cadetList.previous || cadetList.next"-->
        <!--        />-->
      </div>
      <div>
        <button class="btn btn-secondary me-3" @click="showExportDataModal">
          Экспорт&nbsp;&nbsp;<font-awesome-icon
            :icon="['fas', 'file-export']"
          />
        </button>
        <button class="btn btn-primary" @click="clearFilter">
          Сбросить фильтр
        </button>
      </div>
    </div>

    <div
      style="max-height: 75vh; overflow: auto"
      @scroll="loadMoreData"
      ref="infinite_list"
    >
      <table class="table table-hover table-responsive" style="overflow: auto">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">Фото</th>
            <th scope="col">
              <nobr>Категория</nobr>
            </th>
            <th scope="col">
              <nobr>Пол</nobr>
            </th>
            <th scope="col">
              <div class="d-flex flex-row align-items-center">
                <nobr>Фамилия</nobr>
                <div class="dropdown">
                  <button
                    class="btn dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  ></button>
                  <ul class="dropdown-menu">
                    <li>
                      <button
                        class="dropdown-item"
                        @click="setOrdering('last_name_rus')"
                      >
                        А -> Я
                      </button>
                    </li>
                    <li>
                      <button
                        class="dropdown-item"
                        @click="setOrdering('-last_name_rus')"
                      >
                        Я -> А
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </th>
            <th scope="col">
              <nobr>Имя</nobr>
              <button class="btn" @click="setOrdering('first_name_rus')">
                <font-awesome-icon :icon="['fas', 'caret-up']" />
              </button>
              <button class="btn" @click="setOrdering('-first_name_rus')">
                <font-awesome-icon :icon="['fas', 'caret-down']" />
              </button>
            </th>
            <th scope="col">
              <nobr>Отчество</nobr>
            </th>
            <th scope="col">
              <nobr>Факультет</nobr>
            </th>
            <th scope="col">
              <nobr>Группа</nobr>
            </th>
            <th scope="col">
              <nobr>Дата рождения</nobr>
            </th>
            <th scope="col">
              <nobr>Место рождения</nobr>
            </th>
            <th scope="col">
              <nobr>Адрес регистрации</nobr>
            </th>
            <th scope="col">
              <nobr>Адрес места жительства</nobr>
            </th>
            <th scope="col">
              <nobr>Номер телефона</nobr>
            </th>
            <th scope="col">
              <nobr>Личный номер</nobr>
            </th>
            <th scope="col">
              <nobr>Семейное положение</nobr>
            </th>
            <th scope="col">
              <nobr>Номер паспорта</nobr>
            </th>
            <th scope="col">
              <nobr>Паспорт (дата выдачи)</nobr>
            </th>
            <th scope="col">
              <nobr>Паспорт (срок действия)</nobr>
            </th>
            <th scope="col">
              <nobr>Паспорт (орган выдачи)</nobr>
            </th>
            <th scope="col">
              <nobr>Идентификационный номер</nobr>
            </th>
            <th scope="col">
              <nobr>Отец (фамилия)</nobr>
            </th>
            <th scope="col">
              <nobr>Отец (имя)</nobr>
            </th>
            <th scope="col">
              <nobr>Отец (отчество)</nobr>
            </th>
            <th scope="col">
              <nobr>Отец (дата рождекния)</nobr>
            </th>
            <th scope="col">
              <nobr>Отец (место работы)</nobr>
            </th>
            <th scope="col">
              <nobr>Отец (номер телефона)</nobr>
            </th>
            <th scope="col">
              <nobr>Мать (фамилия)</nobr>
            </th>
            <th scope="col">
              <nobr>Мать (имя)</nobr>
            </th>
            <th scope="col">
              <nobr>Мать (отчество)</nobr>
            </th>
            <th scope="col">
              <nobr>Мать (дата рождекния)</nobr>
            </th>
            <th scope="col">
              <nobr>Мать (место работы)</nobr>
            </th>
            <th scope="col">
              <nobr>Мать (номер телефона)</nobr>
            </th>
            <th scope="col">
              <nobr>Иностранный язык (изучал в школе)</nobr>
            </th>
            <th scope="col">
              <nobr>Иностранный язык (изучает сейчас)</nobr>
            </th>
            <th scope="col">
              <nobr>Начало обучения</nobr>
            </th>
            <th scope="col">
              <nobr>Окончание обучения</nobr>
            </th>
            <th scope="col">
              <nobr>Причина окончания обучения</nobr>
            </th>
            <th scope="col">
              <nobr>Статья окончания обучения</nobr>
            </th>
            <th scope="col">
              <nobr>Специализация</nobr>
            </th>
            <th scope="col">
              <nobr>Направление ОРД</nobr>
            </th>
            <th scope="col">
              <nobr>Звание</nobr>
            </th>
            <th scope="col">
              <nobr>Должность</nobr>
            </th>
            <th scope="col">
              <nobr>Специальность</nobr>
            </th>
            <th scope="col">
              <nobr>Комплектующий орган</nobr>
            </th>
            <th scope="col">
              <nobr>Снятие с воинского учета</nobr>
            </th>
            <th scope="col">
              <nobr>Военкомат</nobr>
            </th>
            <th></th>
          </tr>
          <tr>
            <th></th>
            <th scope="col"></th>
            <th style="min-width: 200px; z-index: 10000">
              <v-select
                v-model="searchForm.category__in"
                :options="orderedCadetCategories"
                label="category"
                :reduce="(category) => category.id"
                multiple
              />
            </th>
            <th>
              <select class="form-select" v-model="searchForm.gender">
                <option selected value="">-------</option>
                <option value="0" key="0">Мужской</option>
                <option value="1" key="1">Женский</option>
              </select>
            </th>
            <th>
              <input
                type="text"
                class="form-control"
                v-model="searchForm.last_name_rus__icontains"
              />
            </th>
            <th>
              <input
                type="text"
                class="form-control"
                v-model="searchForm.first_name_rus__icontains"
              />
            </th>
            <th>
              <input
                type="text"
                class="form-control"
                v-model="searchForm.patronymic_rus__icontains"
              />
            </th>
            <th style="min-width: 200px">
              <v-select
                v-model="searchForm.subdivision__in"
                :options="orderedSubdivisions"
                label="subdivision_short_name"
                :reduce="(subdivision) => subdivision.id"
                multiple
              />
            </th>
            <th style="min-width: 200px">
              <v-select
                v-model="searchForm.group__in"
                :options="orderedGroups"
                label="group_name"
                :reduce="(group) => group.id"
                multiple
              />
            </th>
            <th>
              <div class="d-flex justify-content-center align-items-center">
                <input
                  type="date"
                  class="form-control me-2"
                  v-model="searchForm.date_of_birth__gte"
                />
                <input
                  type="date"
                  class="form-control"
                  v-model="searchForm.date_of_birth__lte"
                />
              </div>
            </th>
            <th>
              <input
                type="text"
                class="form-control me-2"
                v-model="searchForm.place_of_birth__icontains"
              />
            </th>
            <th>
              <input
                type="text"
                class="form-control me-2"
                v-model="searchForm.address_registration__icontains"
              />
            </th>
            <th>
              <input
                type="text"
                class="form-control me-2"
                v-model="searchForm.address_residence__icontains"
              />
            </th>
            <th>
              <input
                type="text"
                class="form-control me-2"
                v-model="searchForm.phone_number__icontains"
              />
            </th>
            <th>
              <input
                type="text"
                class="form-control me-2"
                v-model="searchForm.personal_number_mvd__icontains"
              />
            </th>
            <th>
              <select class="form-select" v-model="searchForm.marital_status">
                <option selected value="">-------</option>
                <option
                  v-for="maritalStatus in orderedMaritalStatuses"
                  :value="maritalStatus.id"
                  :key="maritalStatus.id"
                >
                  {{ maritalStatus.marital_status }}
                </option>
              </select>
            </th>
            <th>
              <input
                type="text"
                class="form-control me-2"
                v-model="searchForm.passport_number__icontains"
              />
            </th>
            <th>
              <div class="d-flex justify-content-center align-items-center">
                <input
                  type="date"
                  class="form-control me-2"
                  v-model="searchForm.passport_issue_date__gte"
                />
                <input
                  type="date"
                  class="form-control"
                  v-model="searchForm.passport_issue_date__lte"
                />
              </div>
            </th>
            <th>
              <div class="d-flex justify-content-center align-items-center">
                <input
                  type="date"
                  class="form-control me-2"
                  v-model="searchForm.passport_validity_period__gte"
                />
                <input
                  type="date"
                  class="form-control"
                  v-model="searchForm.passport_validity_period__lte"
                />
              </div>
            </th>
            <th>
              <v-select
                v-model="searchForm.passport_issue_authority__in"
                :options="orderedPassportIssueAuthorities"
                label="passport_issue_authority"
                :reduce="
                  (passport_issue_authority) => passport_issue_authority.id
                "
                multiple
              />
            </th>
            <th>
              <input
                type="text"
                class="form-control me-2"
                v-model="searchForm.identification_number__icontains"
              />
            </th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th>
              <select
                class="form-select"
                v-model="searchForm.foreign_language_was"
              >
                <option selected value="">-------</option>
                <option
                  v-for="foreignLanguage in orderedForeignLanguages"
                  :value="foreignLanguage.id"
                  :key="foreignLanguage.id"
                >
                  {{ foreignLanguage.foreign_language }}
                </option>
              </select>
            </th>
            <th>
              <select
                class="form-select"
                v-model="searchForm.foreign_language_will_be"
              >
                <option selected value="">-------</option>
                <option
                  v-for="foreignLanguage in orderedForeignLanguages"
                  :value="foreignLanguage.id"
                  :key="foreignLanguage.id"
                >
                  {{ foreignLanguage.foreign_language }}
                </option>
              </select>
            </th>

            <th>
              <div class="d-flex justify-content-center align-items-center">
                <input
                  type="date"
                  class="form-control me-2"
                  v-model="searchForm.academy_start_date__gte"
                />
                <input
                  type="date"
                  class="form-control"
                  v-model="searchForm.academy_start_date__lte"
                />
              </div>
            </th>
            <th>
              <div class="d-flex justify-content-center align-items-center">
                <input
                  type="date"
                  class="form-control me-2"
                  v-model="searchForm.academy_end_date__gte"
                />
                <input
                  type="date"
                  class="form-control"
                  v-model="searchForm.academy_end_date__lte"
                />
              </div>
            </th>
            <th scope="col">
              <v-select
                v-model="searchForm.graduation_reason__in"
                :options="orderedGraduationReasons"
                label="graduation_reason"
                :reduce="(graduation_reason) => graduation_reason.id"
                multiple
              />
            </th>
            <th scope="col">
              <input
                type="text"
                class="form-control"
                v-model="searchForm.graduation_reason_article__icontains"
              />
            </th>
            <th>
              <v-select
                v-model="searchForm.specialization__in"
                :options="orderedSpecializations"
                label="specialization_name"
                :reduce="(specialization) => specialization.id"
                multiple
              />
            </th>
            <th>
              <v-select
                v-model="searchForm.direction_ord__in"
                :options="orderedDirectionOrds"
                label="direction_name"
                :reduce="(direction_ord) => direction_ord.id"
                multiple
              />
            </th>
            <th>
              <v-select
                v-model="searchForm.current_rank__in"
                :options="orderedRanks"
                label="rank"
                :reduce="(rank) => rank.id"
                multiple
              />
            </th>
            <th>
              <v-select
                v-model="searchForm.current_position__in"
                :options="orderedPositions"
                label="position"
                :reduce="(current_position) => current_position.id"
                multiple
              />
            </th>
            <th>
              <v-select
                v-model="searchForm.current_speciality__in"
                :options="orderedSpecialities"
                label="speciality_name"
                :reduce="(current_speciality) => current_speciality.id"
                multiple
              />
            </th>
            <th>
              <v-select
                v-model="searchForm.component_organ__in"
                :options="orderedComponentOrgans"
                label="component_name"
                :reduce="(component_organ) => component_organ.id"
                multiple
              />
            </th>

            <th>
              <div class="d-flex justify-content-center align-items-center">
                <input
                  type="date"
                  class="form-control me-2"
                  v-model="searchForm.removed_from_military_registration__gte"
                />
                <input
                  type="date"
                  class="form-control"
                  v-model="searchForm.removed_from_military_registration__lte"
                />
              </div>
            </th>
            <th style="min-width: 300px">
              <v-select
                v-model="searchForm.military_office__in"
                :options="orderedMilitaryOffices"
                label="military_office"
                :reduce="(military_office) => military_office.id"
                multiple
              />
            </th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="cadet in orderedMainList" :key="cadet.id">
            <td>{{ cadet.id }}</td>
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
            <td>{{ cadet.category }}</td>
            <td>{{ cadet.gender }}</td>
            <td>{{ cadet.last_name_rus }}</td>
            <td>{{ cadet.first_name_rus }}</td>
            <td>{{ cadet.patronymic_rus }}</td>
            <td>{{ cadet.get_subdivision }}</td>
            <td>{{ cadet.get_group }}</td>
            <td>{{ cadet.date_of_birth }}</td>
            <td>{{ cadet.place_of_birth }}</td>
            <td>{{ cadet.address_registration }}</td>
            <td>{{ cadet.address_residence }}</td>
            <td>{{ cadet.phone_number }}</td>
            <td>{{ cadet.personal_number_mvd }}</td>
            <td>{{ cadet.marital_status }}</td>
            <td>{{ cadet.passport_number }}</td>
            <td>{{ cadet.passport_issue_date }}</td>
            <td>{{ cadet.passport_validity_period }}</td>
            <td>{{ cadet.passport_issue_authority }}</td>
            <td>{{ cadet.identification_number }}</td>
            <td>{{ cadet.father_last_name }}</td>
            <td>{{ cadet.father_first_name }}</td>
            <td>{{ cadet.father_patronymic }}</td>
            <td>{{ cadet.father_date_of_birth }}</td>
            <td>{{ cadet.father_place_of_work }}</td>
            <td>{{ cadet.father_phone_number }}</td>
            <td>{{ cadet.mother_last_name }}</td>
            <td>{{ cadet.mother_first_name }}</td>
            <td>{{ cadet.mother_patronymic }}</td>
            <td>{{ cadet.mother_date_of_birth }}</td>
            <td>{{ cadet.mother_place_of_work }}</td>
            <td>{{ cadet.mother_phone_number }}</td>
            <td>{{ cadet.foreign_language_was }}</td>
            <td>{{ cadet.foreign_language_will_be }}</td>
            <td>{{ cadet.academy_start_date }}</td>
            <td>{{ cadet.academy_end_date }}</td>
            <td>{{ cadet.get_graduation_reason }}</td>
            <td>{{ cadet.graduation_reason_article }}</td>
            <td>{{ cadet.specialization }}</td>
            <td>{{ cadet.direction_ord }}</td>
            <td>{{ cadet.get_rank?.rank || "" }}</td>
            <td>{{ cadet.get_position?.position || "" }}</td>
            <td>{{ cadet.get_speciality?.speciality_name || "" }}</td>
            <td>{{ cadet.component_organ }}</td>
            <td>{{ cadet.removed_from_military_registration }}</td>
            <td>
              <nobr>{{ cadet.get_military_office }}</nobr>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!--    <div class="my-3">-->
    <!--      <label class="form-label">Количество записей на странице</label>-->
    <!--      <input-->
    <!--        type="number"-->
    <!--        class="form-control"-->
    <!--        v-model="searchForm.limit"-->
    <!--        min="1"-->
    <!--        max="500"-->
    <!--      />-->
    <!--    </div>-->

    <div class="my-3"></div>
  </div>
</template>

<script>
import getCadetAPIInstance from "@/api/cadet/cadetAPI"
import { getLoadListFunction } from "../../../utils"
import { debounce } from "lodash/function"
import { PaginatorView } from "@/components/common"
import { mapGetters } from "vuex"

export default {
  name: "CadetListOkView",
  components: { PaginatorView },
  data() {
    return {
      isLoading: true,
      isError: false,
      fieldsForDataExport: [
        { fieldName: "Фамилия", fieldValue: "last_name_rus" },
        { fieldName: "Имя", fieldValue: "first_name_rus" },
        { fieldName: "Дата рождения", fieldValue: "date_of_birth" },
        { fieldName: "Место рождения", fieldValue: "place_of_birth" },
        {
          fieldName: "Место жительства (проживания)",
          fieldValue: "address_residence",
        },
        {
          fieldName: "Место жительства (регистрация)",
          fieldValue: "address_registration",
        },
        {
          fieldName: "Номер телефона",
          fieldValue: "phone_number",
        },
        {
          fieldName: "Личный номер (жетон)",
          fieldValue: "personal_number_mvd",
        },
        {
          fieldName: "Семейное положение",
          fieldValue: "marital_status",
        },
        {
          fieldName: "Номер паспорта",
          fieldValue: "passport_number",
        },
        {
          fieldName: "Дата выдачи паспорта",
          fieldValue: "passport_issue_date",
        },
        {
          fieldName: "Срок действия паспорта",
          fieldValue: "passport_validity_period",
        },
        {
          fieldName: "Орган выдачи паспорта",
          fieldValue: "get_passport_issue_authority",
        },
        {
          fieldName: "Идентификационный номер",
          fieldValue: "identification_number",
        },
        {
          fieldName: "Снят с воинского учета",
          fieldValue: "removed_from_military_registration",
        },
        {
          fieldName: "Отношение военного комиссариата",
          fieldValue: "military_commissariat_attitude",
        },
        {
          fieldName: "Факультет",
          fieldValue: "get_subdivision",
        },
        {
          fieldName: "Группа",
          fieldValue: "get_group",
        },
        {
          fieldName: "Дата поступления",
          fieldValue: "academy_start_date",
        },
        {
          fieldName: "Дата окончания",
          fieldValue: "academy_end_date",
        },
        {
          fieldName: "Причина окончания",
          fieldValue: "get_graduation_reason",
        },
        {
          fieldName: "Причина окончания (Статья)",
          fieldValue: "graduation_reason_article",
        },
        {
          fieldName: "Причина окончания (доп. данные)",
          fieldValue: "graduation_extra_data",
        },
        {
          fieldName: "Специализация",
          fieldValue: "get_specialization",
        },
        {
          fieldName: "Направление ОРД",
          fieldValue: "get_direction_ord",
        },
        {
          fieldName: "Звание",
          fieldValue: "get_rank",
        },
        {
          fieldName: "Должность",
          fieldValue: "get_position",
        },
        {
          fieldName: "Специальность",
          fieldValue: "get_speciality",
        },
        {
          fieldName: "Комплектующий орган",
          fieldValue: "get_component_organ",
        },
        {
          fieldName: "Прибыл из ГО-РОВД",
          fieldValue: "get_arrived_from_go_rovd",
        },
        {
          fieldName: "Военкомат",
          fieldValue: "get_military_office",
        },
      ],
      selectedFieldsForDataExport: ["last_name_rus", "first_name_rus"],
      cadetList: {
        count: "",
        results: [],
        previous: null,
        next: null,
      },
      searchForm: Object.assign({}, getCadetAPIInstance().searchObj),
      cadetAPIInstance: getCadetAPIInstance(),
      BACKEND_PROTOCOL: process.env.VUE_APP_BACKEND_PROTOCOL,
      BACKEND_HOST: process.env.VUE_APP_BACKEND_HOST,
      BACKEND_PORT: process.env.VUE_APP_BACKEND_PORT,
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
        const [cadets] = await Promise.all([listFunction("cadet")()])
        this.cadetList = cadets
      } catch (e) {
        this.isError = true
      } finally {
        this.isLoading = false
      }
    },
    showExportDataModal() {
      let addModal = this.$refs.exportDataModal
      let myModal = new bootstrap.Modal(addModal, {
        keyboard: false,
      })
      myModal.show()
    },
    checkAllFieldsForExport() {
      this.selectedFieldsForDataExport = []
      this.fieldsForDataExport.map((item) => {
        this.selectedFieldsForDataExport.push(item.fieldValue)
      })
    },
    clearAllFieldsForExport() {
      this.selectedFieldsForDataExport = []
    },
    exportData(destination) {
      let queryString = "?"
      for (let key in this.searchForm) {
        queryString = queryString + `${key}=${this.searchForm[key]}&`
      }
      queryString =
        queryString + `fields_for_export=${this.selectedFieldsForDataExport}`
      window.open(
        `${this.BACKEND_PROTOCOL}://${this.BACKEND_HOST}:${this.BACKEND_PORT}/api/list-export/${queryString}`,
        "_blank",
      )
    },
    clearFilter() {
      this.searchForm = Object.assign(
        {},
        this.cadetAPIInstance.searchObjDefault,
      )
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
    setOrdering(fieldName) {
      this.searchForm.ordering = fieldName

      // let orderingArray = []
      // if (this.searchForm.ordering) {
      //   orderingArray = this.searchForm.ordering.split(",")
      // }
      // console.log("orderingArray", orderingArray)
      // let orderingArrayWithoutFieldName = orderingArray.filter(
      //   (item) => !item.includes(fieldName.replace("-", "")),
      // )
      // console.log(
      //   "orderingArrayWithoutFieldName",
      //   orderingArrayWithoutFieldName,
      // )
      // orderingArrayWithoutFieldName.unshift(fieldName)
      // this.searchForm.ordering = orderingArrayWithoutFieldName.toString()
      // console.log("searchForm.ordering", this.searchForm.ordering)
    },
    async loadMoreData() {
      const listElem = this.$refs["infinite_list"]

      console.log(
        listElem.scrollTop + listElem.clientHeight,
        listElem.scrollHeight,
      )

      if (
        listElem.scrollTop + listElem.clientHeight >=
        listElem.scrollHeight - 1
      ) {
        if (this.cadetList.next) {
          this.isLoading = true
          try {
            const response = await this.cadetAPIInstance.updateList(
              this.cadetList.next,
              "this.userToken",
            )

            const newData = await response.data
            console.log("newData", newData)
            this.cadetList.results = [
              ...this.cadetList.results,
              ...newData.results,
            ]
            this.cadetList.next = newData.next
            this.cadetList.previous = newData.previous
          } catch (error) {
            this.isError = true
          } finally {
            this.isLoading = false
          }
        }
      }
    },
  },
  computed: {
    orderedMainList() {
      return this.cadetList.results
    },
    orderedCadetCategories() {
      return this.categories.results
    },
    orderedSubdivisions() {
      return this.subdivisions.results
    },
    orderedGroups() {
      return this.groups.results
    },
    orderedRanks() {
      return this.ranks.results
    },
    orderedSpecialities() {
      return this.specialities.results
    },
    orderedPositions() {
      return this.positions.results
    },
    orderedMaritalStatuses() {
      return this.maritalStatuses.results
    },
    orderedSpecializations() {
      return this.specializations.results
    },
    orderedDirectionOrds() {
      return this.directionsOrd.results
    },
    orderedComponentOrgans() {
      return this.componentOrgans.results
    },
    orderedPassportIssueAuthorities() {
      return this.passportIssueAuthorities.results
    },
    orderedForeignLanguages() {
      return this.foreignLanguages.results
    },
    orderedMilitaryOffices() {
      return this.militaryOffices.results
    },
    orderedGraduationReasons() {
      return this.graduationReasons.results
    },
    ...mapGetters({
      groups: "common/getGroups",
      ranks: "common/getRanks",
      subdivisions: "common/getSubdivisions",
      specialities: "common/getSpecialities",
      positions: "common/getPositions",
      categories: "common/getCadetCategories",
      maritalStatuses: "common/getMaritalStatuses",
      specializations: "common/getSpecializations",
      directionsOrd: "common/getDirectionsOrd",
      componentOrgans: "common/getComponentOrgans",
      passportIssueAuthorities: "common/getPassportIssueAuthorities",
      foreignLanguages: "common/getForeignLanguages",
      militaryOffices: "common/getMilitaryOffices",
      graduationReasons: "common/getGraduationReasons",
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

<style scoped>
th,
td {
  min-width: 200px;
  text-align: start;
  vertical-align: middle;
}

thead {
  position: sticky;
  top: 0;
}

input,
select {
  min-width: 200px;
}
</style>
