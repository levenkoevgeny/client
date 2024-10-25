<template>
  <div class="container-fluid">
    <div class="my-3"></div>

    <table class="table">
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
          <th scope="col">id</th>
          <th scope="col"></th>
          <th
            scope="col"
            class="d-flex align-items-center justify-content-center border"
          >
            <select class="form-select" aria-label="Default select example">
              <option selected>-------</option>
              <option
                v-for="category in orderedCadetCategories"
                :value="category.id"
                :key="category.id"
              >
                {{ category.category }}
              </option>
            </select>
          </th>
          <th scope="col">
            <div class="mb-3">
              <select class="form-select" aria-label="Default select example">
                <option selected>-------</option>
                <option value="0">Мужской</option>
                <option value="1">Женский</option>
              </select>
            </div>
          </th>
          <th scope="col">
            <div class="mb-3">
              <input type="text" class="form-control" />
            </div>
          </th>
          <th scope="col">
            <div class="mb-3">
              <input type="text" class="form-control" />
            </div>
          </th>
          <th scope="col">
            <div class="mb-3">
              <input type="text" class="form-control" />
            </div>
          </th>
          <th scope="col">
            <div class="mb-3">
              <input type="text" class="form-control" />
            </div>
          </th>
          <th scope="col">
            <div class="mb-3">
              <input type="text" class="form-control" />
            </div>
          </th>
          <th scope="col">
            <div class="mb-3">
              <input type="text" class="form-control" />
            </div>
          </th>
          <th scope="col">
            <div class="mb-3">
              <input type="text" class="form-control" />
            </div>
          </th>
          <th scope="col">
            <div class="mb-3">
              <input type="text" class="form-control" />
            </div>
          </th>
          <th scope="col">
            <div class="mb-3">
              <input type="text" class="form-control" />
            </div>
          </th>
          <th scope="col">Факультет</th>
          <th scope="col">Группа</th>
          <th scope="col">Дата рождения</th>
          <th scope="col">
            <div class="mb-3">
              <input type="text" class="form-control" />
            </div>
          </th>
          <th scope="col">
            <div class="mb-3">
              <input type="text" class="form-control" />
            </div>
          </th>
          <th scope="col">
            <div class="mb-3">
              <input type="text" class="form-control" />
            </div>
          </th>
          <th scope="col">
            <div class="mb-3">
              <input type="text" class="form-control" />
            </div>
          </th>
          <th scope="col">
            <div class="mb-3">
              <input type="text" class="form-control" />
            </div>
          </th>
          <th scope="col">Семейное положение</th>
          <th scope="col">
            <div class="mb-3">
              <input type="text" class="form-control" />
            </div>
          </th>
          <th scope="col">Паспорт (дата выдачи)</th>
          <th scope="col">Паспорт (срок действия)</th>
          <th scope="col">Паспорт (орган выдачи)</th>
          <th scope="col">
            <div class="mb-3">
              <input type="text" class="form-control" />
            </div>
          </th>
          <th scope="col">
            <div class="mb-3">
              <input type="text" class="form-control" />
            </div>
          </th>
          <th scope="col">
            <div class="mb-3">
              <input type="text" class="form-control" />
            </div>
          </th>
          <th scope="col">
            <div class="mb-3">
              <input type="text" class="form-control" />
            </div>
          </th>
          <th scope="col">Отец (дата рождения)</th>
          <th scope="col">
            <div class="mb-3">
              <input type="text" class="form-control" />
            </div>
          </th>
          <th scope="col">
            <div class="mb-3">
              <input type="text" class="form-control" />
            </div>
          </th>
          <th scope="col">
            <div class="mb-3">
              <input type="text" class="form-control" />
            </div>
          </th>
          <th scope="col">
            <div class="mb-3">
              <input type="text" class="form-control" />
            </div>
          </th>
          <th scope="col">
            <div class="mb-3">
              <input type="text" class="form-control" />
            </div>
          </th>
          <th scope="col">Мать (дата рождения)</th>
          <th scope="col">
            <div class="mb-3">
              <input type="text" class="form-control" />
            </div>
          </th>
          <th scope="col">
            <div class="mb-3">
              <input type="text" class="form-control" />
            </div>
          </th>
          <th scope="col">Иностранный язык (изучал в школе)</th>
          <th scope="col">Иностранный язык (изучает сейчас)</th>
          <th scope="col">Начало обучения</th>
          <th scope="col">Окончание обучения</th>
          <th scope="col">Специализация</th>
          <th scope="col">Направление ОРД</th>
          <th scope="col">Звание</th>
          <th scope="col">Должность</th>
          <th scope="col">Специальность</th>
          <th scope="col">Комплектующий орган</th>
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
          <td>{{ cadet.subdivision }}</td>
          <td>{{ cadet.group }}</td>
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

export default {
  name: "CadetListOkView",
  components: {},
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
      searchForm: {
        category: "",
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
        ])
        this.cadetList = cadets
        this.cadetCategoryList = categories
        this.subdivisionList = subdivisions
        this.subdivisionList = groups
        this.rankList = ranks
        this.specialityList = specialities
        this.positionList = positions
        this.maritalStatusList = maritalStatuses
        this.specializationList = specializations
        this.directionOrdList = directions
        this.componentOrganList = components
      } catch (e) {
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
  },
}
</script>

<style scoped></style>
