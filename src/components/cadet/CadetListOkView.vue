<template>
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

    <div style="max-height: 78vh; overflow: auto">
      <table class="table table-hover">
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
              <nobr>Фамилия (рус)</nobr>
            </th>
            <th scope="col">
              <nobr>Имя (рус)</nobr>
            </th>
            <th scope="col">
              <nobr>Отчество (рус)</nobr>
            </th>
            <th scope="col">
              <nobr>Фамилия (бел)</nobr>
            </th>
            <th scope="col">
              <nobr>Имя (бел)</nobr>
            </th>
            <th scope="col">
              <nobr>Отчество (бел)</nobr>
            </th>
            <th scope="col">
              <nobr>Фамилия (анг)</nobr>
            </th>
            <th scope="col">
              <nobr>Имя (анг)</nobr>
            </th>
            <th scope="col">
              <nobr>Отчество (анг)</nobr>
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
          </tr>
          <tr>
            <th>
              <input type="text" class="form-control" />
            </th>
            <th scope="col"></th>
            <th>
              <select class="form-select" v-model="searchForm.category">
                <option selected value="">-------</option>
                <option
                  v-for="category in orderedCadetCategories"
                  :value="category.id"
                  :key="category.id"
                >
                  {{ category.category }}
                </option>
              </select>
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
            <th></th>
            <th>
              <input
                type="text"
                class="form-control"
                v-model="searchForm.last_name_bel__icontains"
              />
            </th>
            <th>
              <input
                type="text"
                class="form-control"
                v-model="searchForm.first_name_bel__icontains"
              />
            </th>
            <th></th>
            <th>
              <input
                type="text"
                class="form-control"
                v-model="searchForm.last_name_en__icontains"
              />
            </th>
            <th>
              <input
                type="text"
                class="form-control"
                v-model="searchForm.first_name_en__icontains"
              />
            </th>
            <th></th>
            <th>
              <select class="form-select" v-model="searchForm.subdivision">
                <option selected value="">-------</option>
                <option
                  v-for="subdivision in orderedSubdivisions"
                  :value="subdivision.id"
                  :key="subdivision.id"
                >
                  {{ subdivision.subdivision_short_name }}
                </option>
              </select>
            </th>
            <th>
              <select class="form-select" v-model="searchForm.group">
                <option selected value="">-------</option>
                <option
                  v-for="group in orderedGroups"
                  :value="group.id"
                  :key="group.id"
                >
                  {{ group.group_name }}
                </option>
              </select>
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
              <select
                class="form-select"
                v-model="searchForm.passport_issue_authority"
              >
                <option selected value="">-------</option>
                <option
                  v-for="passportIssueAuthority in orderedPassportIssueAuthorities"
                  :value="passportIssueAuthority.id"
                  :key="passportIssueAuthority.id"
                >
                  {{ passportIssueAuthority.passport_issue_authority }}
                </option>
              </select>
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
            <th>
              <select class="form-select" v-model="searchForm.specialization">
                <option selected value="">-------</option>
                <option
                  v-for="specialization in orderedSpecializations"
                  :value="specialization.id"
                  :key="specialization.id"
                >
                  {{ specialization.specialization_name }}
                </option>
              </select>
            </th>
            <th>
              <select class="form-select" v-model="searchForm.direction_ord">
                <option selected value="">-------</option>
                <option
                  v-for="direction_ord in orderedDirectionOrds"
                  :value="direction_ord.id"
                  :key="direction_ord.id"
                >
                  {{ direction_ord.direction_name }}
                </option>
              </select>
            </th>
            <th>
              <select class="form-select" v-model="searchForm.current_rank">
                <option selected value="">-------</option>
                <option
                  v-for="rank in orderedRanks"
                  :value="rank.id"
                  :key="rank.id"
                >
                  {{ rank.rank }}
                </option>
              </select>
            </th>
            <th>
              <select class="form-select" v-model="searchForm.current_position">
                <option selected value="">-------</option>
                <option
                  v-for="position in orderedPositions"
                  :value="position.id"
                  :key="position.id"
                >
                  {{ position.position }}
                </option>
              </select>
            </th>
            <th>
              <select
                class="form-select"
                v-model="searchForm.current_speciality"
              >
                <option selected value="">-------</option>
                <option
                  v-for="speciality in orderedSpecialities"
                  :value="speciality.id"
                  :key="speciality.id"
                >
                  {{ speciality.speciality_name }}
                </option>
              </select>
            </th>
            <th>
              <select class="form-select" v-model="searchForm.component_organ">
                <option selected value="">-------</option>
                <option
                  v-for="component_organ in orderedComponentOrgans"
                  :value="component_organ.id"
                  :key="component_organ.id"
                >
                  {{ component_organ.component_name }}
                </option>
              </select>
            </th>
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
            <td>{{ cadet.last_name_bel }}</td>
            <td>{{ cadet.first_name_bel }}</td>
            <td>{{ cadet.patronymic_bel }}</td>
            <td>{{ cadet.last_name_en }}</td>
            <td>{{ cadet.first_name_en }}</td>
            <td>{{ cadet.patronymic_en }}</td>
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
            <td>{{ cadet.specialization }}</td>
            <td>{{ cadet.direction_ord }}</td>
            <td>{{ cadet.get_rank?.rank || "" }}</td>
            <td>{{ cadet.get_position?.position || "" }}</td>
            <td>{{ cadet.get_speciality?.speciality_name || "" }}</td>
            <td>{{ cadet.component_organ }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="my-3"></div>
    <PaginatorView
      :update-paginator="updatePaginator"
      :list-next="cadetList.next"
      :list-previous="cadetList.previous"
      v-if="cadetList.previous || cadetList.next"
    />
  </div>
</template>

<script>
import getCadetAPIInstance from "@/api/cadet/cadetAPI"
import { getLoadListFunction } from "../../../utils"
import getCadetCategoryAPIAPIInstance from "@/api/cadet/cadetCategoryAPI"
import getSubdivisionAPIInstance from "@/api/cadet/subdivisionAPI"
import getGroupAPIInstance from "@/api/cadet/groupAPI"
import getRankAPIInstance from "@/api/cadet/rankAPI"
import getSpecialityAPIInstance from "@/api/cadet/specialityAPI"
import getPositionAPIInstance from "@/api/cadet/positionAPI"
import getMaritalStatusAPIInstance from "@/api/cadet/maritalStatusAPI"
import getSpecializationAPIInstance from "@/api/cadet/specializationAPI"
import getDirectionOrdAPIInstance from "@/api/cadet/directionOrdAPI"
import getComponentOrganAPIInstance from "@/api/cadet/componentOrganAPI"
import getPassportIssueAuthorityAPIInstance from "@/api/cadet/passportIssueAuthorityAPI"
import getForeignLanguageAPIInstance from "@/api/cadet/foreignLanguageAPI"
import { debounce } from "lodash/function"
import { PaginatorView } from "@/components/common"

export default {
  name: "CadetListOkView",
  components: { PaginatorView },
  data() {
    return {
      isLoading: true,
      isError: false,
      cadetList: {
        count: "",
        results: [],
        previous: null,
        next: null,
      },
      cadetCategoryList: {
        count: "",
        results: [],
        previous: null,
        next: null,
      },
      subdivisionList: {
        count: "",
        results: [],
        previous: null,
        next: null,
      },
      groupList: {
        count: "",
        results: [],
        previous: null,
        next: null,
      },
      rankList: {
        count: "",
        results: [],
        previous: null,
        next: null,
      },
      specialityList: {
        count: "",
        results: [],
        previous: null,
        next: null,
      },
      positionList: {
        count: "",
        results: [],
        previous: null,
        next: null,
      },
      maritalStatusList: {
        count: "",
        results: [],
        previous: null,
        next: null,
      },
      specializationList: {
        count: "",
        results: [],
        previous: null,
        next: null,
      },
      directionOrdList: {
        count: "",
        results: [],
        previous: null,
        next: null,
      },
      componentOrganList: {
        count: "",
        results: [],
        previous: null,
        next: null,
      },
      passportIssueAuthorityList: {
        count: "",
        results: [],
        previous: null,
        next: null,
      },
      foreignLanguageList: {
        count: "",
        results: [],
        previous: null,
        next: null,
      },

      searchForm: Object.assign({}, getCadetAPIInstance().searchObj),

      cadetAPIInstance: getCadetAPIInstance(),
      cadetCategoryAPIInstance: getCadetCategoryAPIAPIInstance(),
      subdivisionAPIInstance: getSubdivisionAPIInstance(),
      groupAPIInstance: getGroupAPIInstance(),
      rankAPIInstance: getRankAPIInstance(),
      specialityAPIInstance: getSpecialityAPIInstance(),
      positionAPIInstance: getPositionAPIInstance(),
      maritalStatusAPIInstance: getMaritalStatusAPIInstance(),
      specializationAPIInstance: getSpecializationAPIInstance(),
      directionOrdAPIInstance: getDirectionOrdAPIInstance(),
      componentOrganAPIInstance: getComponentOrganAPIInstance(),
      passportIssueAuthorityAPIInstance: getPassportIssueAuthorityAPIInstance(),
      foreignLanguageAPIInstance: getForeignLanguageAPIInstance(),
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
          cadets,
          categories,
          subdivisions,
          groups,
          ranks,
          specialities,
          positions,
          maritalStatuses,
          specializations,
          directions,
          components,
          passportIssueAuthorities,
          foreignLanguages,
        ] = await Promise.all([
          listFunction("cadet")(this.cadetId),
          listFunction("cadetCategory")(),
          listFunction("subdivision")(),
          listFunction("group")(),
          listFunction("rank")(),
          listFunction("speciality")(),
          listFunction("position")(),
          listFunction("maritalStatus")(),
          listFunction("specialization")(),
          listFunction("directionOrd")(),
          listFunction("componentOrgan")(),
          listFunction("passportIssueAuthority")(),
          listFunction("foreignLanguage")(),
        ])
        this.cadetList = cadets
        this.cadetCategoryList = categories
        this.subdivisionList = subdivisions
        this.groupList = groups
        this.rankList = ranks
        this.specialityList = specialities
        this.positionList = positions
        this.maritalStatusList = maritalStatuses
        this.specializationList = specializations
        this.directionOrdList = directions
        this.componentOrganList = components
        this.passportIssueAuthorityList = passportIssueAuthorities
        this.foreignLanguageList = foreignLanguages
      } catch (e) {
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
  },
  computed: {
    orderedMainList() {
      return this.cadetList.results
    },
    orderedCadetCategories() {
      return this.cadetCategoryList.results
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
    orderedMaritalStatuses() {
      return this.maritalStatusList.results
    },
    orderedSpecializations() {
      return this.specializationList.results
    },
    orderedDirectionOrds() {
      return this.directionOrdList.results
    },
    orderedComponentOrgans() {
      return this.componentOrganList.results
    },
    orderedPassportIssueAuthorities() {
      return this.passportIssueAuthorityList.results
    },
    orderedForeignLanguages() {
      return this.foreignLanguageList.results
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

<style scoped>
th,
td {
  min-width: 100px;
  text-align: start;
  vertical-align: middle;
}
thead {
  position: sticky;
  top: 0;
}
</style>
