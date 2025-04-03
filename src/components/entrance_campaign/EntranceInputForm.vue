<template>
  <div class="container-fluid">
    <h1 class="mb-5 fw-lighter">
      Личное дело абитуриента
      <span class="fw-normal text-decoration-underline"
        >{{ currentCadetData.last_name_rus }}
        {{ currentCadetData.first_name_rus }}</span
      >
    </h1>

    <div class="card shadow mb-2 rounded">
      <div class="card-body">
        <h5 class="card-title">Персональные данные</h5>
        <div class="row mt-3">
          <div class="col-xl-3">
            <div class="form-floating mb-3">
              <input
                type="text"
                class="form-control form-control-sm"
                placeholder="Фамилия"
                v-model="currentCadetData.last_name_rus"
              />
              <label>Фамилия (рус)</label>
            </div>
            <div class="form-floating mb-3">
              <input
                type="text"
                class="form-control"
                placeholder="Имя"
                v-model="currentCadetData.first_name_rus"
              />
              <label>Имя (рус)</label>
            </div>
            <div class="form-floating mb-3">
              <input
                type="text"
                class="form-control"
                placeholder="Отчество"
                v-model="currentCadetData.patronymic_rus"
              />
              <label>Отчество (рус)</label>
            </div>
          </div>
          <div class="col-xl-3">
            <div class="form-floating mb-3">
              <input
                type="text"
                class="form-control form-control-sm"
                placeholder="Фамилия"
                v-model="currentCadetData.last_name_bel"
              />
              <label>Фамилия (бел)</label>
            </div>
            <div class="form-floating mb-3">
              <input
                type="text"
                class="form-control"
                placeholder="Имя"
                v-model="currentCadetData.first_name_bel"
              />
              <label>Имя (бел)</label>
            </div>
            <div class="form-floating mb-3">
              <input
                type="text"
                class="form-control"
                placeholder="Отчество"
                v-model="currentCadetData.patronymic_bel"
              />
              <label>Отчество (бел)</label>
            </div>
          </div>
          <div class="col-xl-3">
            <div class="form-floating mb-3">
              <input
                type="date"
                class="form-control"
                placeholder="Отчество"
                v-model="currentCadetData.date_of_birth"
              />
              <label>Дата рождения</label>
            </div>

            <div class="form-floating mb-3">
              <select
                class="form-select"
                aria-label="Floating label select example"
                v-model="currentCadetData.gender"
              >
                <option value="">---------</option>
                <option value="1">Мужской</option>
                <option value="0">Женский</option>
              </select>
              <label for="floatingSelect">Пол</label>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="card shadow mb-2 rounded">
      <div class="card-body">
        <h5 class="card-title">Блок по Академии</h5>
        <div class="row mt-3">
          <div class="col-xl-3">
            <div class="form-floating mb-3">
              <select
                class="form-select"
                v-model="currentCadetData.subdivision"
              >
                <option value="">---------</option>
                <option
                  :value="subdivision.id"
                  v-for="subdivision in orderedSubdivisions"
                >
                  {{ subdivision.subdivision_short_name }}
                </option>
              </select>
              <label for="floatingSelect">Факультет</label>
            </div>
          </div>
          <div class="col-xl-3">
            <div class="form-floating mb-3">
              <select
                class="form-select"
                v-model="currentCadetData.educational_institution"
              >
                <option value="">---------</option>
                <option
                  :value="educationalInstitution.id"
                  v-for="educationalInstitution in orderedEducationalInstitutions"
                >
                  {{ educationalInstitution.educational_institution }}
                </option>
              </select>
              <label for="floatingSelect">Учреждение образования</label>
            </div>
          </div>
          <div class="col-xl-3">
            <div class="form-floating mb-3">
              <select
                class="form-select"
                v-model="currentCadetData.document_type"
              >
                <option value="">---------</option>
                <option
                  :value="document_type.id"
                  v-for="document_type in orderedDocumentTypes"
                >
                  {{ document_type.document_type }}
                </option>
              </select>
              <label for="floatingSelect">Документ</label>
            </div>
          </div>
          <div class="col-xl-3">
            <div class="form-floating mb-3">
              <select class="form-select" v-model="currentCadetData.privilege">
                <option value="">---------</option>
                <option
                  :value="privilege.id"
                  v-for="privilege in orderedPrivileges"
                >
                  {{ privilege.privilege }}
                </option>
              </select>
              <label for="floatingSelect">Льгота</label>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="my-4">
      <nav>
        <div class="nav nav-tabs" id="nav-tab" role="tablist">
          <button
            class="nav-link active"
            id="nav-assembly-organ-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-assembly-organ"
            type="button"
            role="tab"
            aria-controls="nav-assembly-organ"
            aria-selected="true"
          >
            Комплектующий орган
          </button>
          <button
            class="nav-link"
            id="nav-education-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-education"
            type="button"
            role="tab"
            aria-controls="nav-education"
            aria-selected="false"
          >
            Образование
          </button>
          <button
            class="nav-link"
            id="nav-contact-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-contact"
            type="button"
            role="tab"
            aria-controls="nav-contact"
            aria-selected="false"
          >
            Личная информация
          </button>
          <button
            class="nav-link"
            id="nav-representatives-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-representatives"
            type="button"
            role="tab"
            aria-controls="nav-representatives"
            aria-selected="false"
          >
            Представители
          </button>
          <button
            class="nav-link"
            id="nav-contact-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-questionary"
            type="button"
            role="tab"
            aria-controls="nav-questionary"
            aria-selected="false"
          >
            Анкета
          </button>
        </div>
      </nav>
      <div class="tab-content" id="nav-tabContent">
        <div
          class="tab-pane fade show active"
          id="nav-assembly-organ"
          role="tabpanel"
          aria-labelledby="nav-assembly-organ-tab"
          tabindex="0"
        >
          <div>
            <div class="my-3">
              <div class="row">
                <div class="col-lg-3">
                  <div class="form-floating mb-3">
                    <select
                      class="form-select"
                      v-model="currentCadetData.component_organ"
                    >
                      <option value="">---------</option>
                      <option
                        :value="componentOrg.id"
                        v-for="componentOrg in orderedComponentOrgans"
                      >
                        {{ componentOrg.component_name }}
                      </option>
                    </select>
                    <label for="floatingSelect">Комплектующий орган</label>
                  </div>
                </div>
                <div class="col-lg-3">
                  <div class="form-floating mb-3">
                    <select
                      class="form-select"
                      v-model="currentCadetData.entrance_category"
                    >
                      <option value="">---------</option>
                      <option
                        :value="entranceCategory.id"
                        v-for="entranceCategory in orderedEntranceCategories"
                      >
                        {{ entranceCategory.entrance_category_name }}
                      </option>
                    </select>
                    <label for="floatingSelect">Категория</label>
                  </div>
                </div>
                <div class="col-lg-3">
                  <div class="form-floating mb-3">
                    <select
                      class="form-select"
                      v-model="currentCadetData.social_status"
                    >
                      <option value="">---------</option>
                      <option
                        :value="socialStatus.id"
                        v-for="socialStatus in orderedSocialStatuses"
                      >
                        {{ socialStatus.social_status }}
                      </option>
                    </select>
                    <label for="floatingSelect">Социальный статус</label>
                  </div>
                </div>
                <div class="col-lg-3">
                  <div class="form-floating mb-3">
                    <select
                      class="form-select"
                      v-model="currentCadetData.region_for_medical_examination"
                    >
                      <option value="">---------</option>
                      <option
                        :value="countryRegion.id"
                        v-for="countryRegion in orderedCountryRegions"
                      >
                        {{ countryRegion.country_region }}
                      </option>
                    </select>
                    <label for="floatingSelect">Обл. для мед. ком.</label>
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-lg-3">
                  <div class="form-floating mb-3">
                    <select
                      class="form-select"
                      v-model="currentCadetData.arrived_from_go_rovd"
                    >
                      <option value="">---------</option>
                      <option
                        :value="go_rovd.id"
                        v-for="go_rovd in orderedGorovds"
                      >
                        {{ go_rovd.go_rovd_name }}
                      </option>
                    </select>
                    <label for="floatingSelect">Прибыл из ГО-РОВД</label>
                  </div>
                </div>
                <div class="col-lg-3">
                  <div class="form-floating mb-3">
                    <select
                      class="form-select"
                      v-model="currentCadetData.military_office"
                    >
                      <option value="">---------</option>
                      <option
                        :value="militaryOffice.id"
                        v-for="militaryOffice in orderedMilitaryOffices"
                      >
                        {{ militaryOffice.military_office }}
                      </option>
                    </select>
                    <label for="floatingSelect">Военкомат</label>
                  </div>
                </div>

                <div class="col-lg-6">
                  <div class="form-floating mb-3">
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      placeholder="Фамилия"
                      v-model="currentCadetData.military_office_extra_data"
                    />
                    <label>Военкомат (доп. информация)</label>
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-12">
                  <div class="form-floating mb-3">
                    <textarea
                      class="form-control"
                      placeholder="Leave a comment here"
                      rows="2"
                      v-model="currentCadetData.extra_data"
                    ></textarea>
                    <label>Примечание для отдела кадров</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="tab-pane fade"
          id="nav-education"
          role="tabpanel"
          aria-labelledby="nav-education-tab"
          tabindex="0"
        >
          <div>
            <div class="my-3"></div>
          </div>
        </div>
        <div
          class="tab-pane fade"
          id="nav-contact"
          role="tabpanel"
          aria-labelledby="nav-contact-tab"
          tabindex="0"
        >
          <div>
            <div class="my-3">
              <div class="row">
                <div class="col-6">
                  <div class="form-floating mb-3">
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      placeholder="Фамилия"
                      v-model="currentCadetData.place_of_birth"
                    />
                    <label>Место рождения</label>
                  </div>
                </div>
                <div class="col-6">
                  <div class="form-floating mb-3">
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      placeholder="Фамилия"
                      v-model="currentCadetData.phone_number"
                    />
                    <label>Номер телефона</label>
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-6">
                  <div class="form-floating mb-3">
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      placeholder="Фамилия"
                      v-model="currentCadetData.address_registration"
                    />
                    <label>Место жительства (регистрация)</label>
                  </div>
                </div>
                <div class="col-6">
                  <div class="form-floating mb-3">
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      placeholder="Фамилия"
                      v-model="currentCadetData.address_residence"
                    />
                    <label>Место жительства (проживание)</label>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-6">
                  <div class="form-floating mb-3">
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      placeholder="Фамилия"
                      v-model="currentCadetData.address_registration"
                    />
                    <label>Место жительства (регистрация)</label>
                  </div>
                </div>
                <div class="col-6">
                  <div class="form-floating mb-3">
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      placeholder="Фамилия"
                      v-model="currentCadetData.address_residence"
                    />
                    <label>Место жительства (проживание)</label>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-6">
                  <div class="form-floating mb-3">
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      placeholder="Документ удостоверяющий личность "
                    />
                    <label>Документ удостоверяющий личность ???????</label>
                  </div>
                </div>
                <div class="col-6">
                  <div class="form-floating mb-3">
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      placeholder="Номер паспорта"
                      v-model="currentCadetData.passport_number"
                    />
                    <label>Номер паспорта</label>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-6">
                  <div class="form-floating mb-3">
                    <select
                      class="form-select"
                      v-model="currentCadetData.passport_issue_authority"
                    >
                      <option value="">---------</option>
                      <option
                        :value="passportAuthority.id"
                        v-for="passportAuthority in orderedPassportAuthorities"
                      >
                        {{ passportAuthority.passport_issue_authority }}
                      </option>
                    </select>
                    <label for="floatingSelect">Орган выдачи</label>
                  </div>
                </div>
                <div class="col-6">
                  <div class="form-floating mb-3">
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      placeholder="Номер паспорта"
                      v-model="currentCadetData.passport_number"
                    />
                    <label>Номер паспорта</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="tab-pane fade"
          id="nav-representatives"
          role="tabpanel"
          aria-labelledby="nav-representatives-tab"
          tabindex="0"
        >
          <div>Представители</div>
        </div>
        <div
          class="tab-pane fade"
          id="nav-questionary"
          role="tabpanel"
          aria-labelledby="nav-questionary-tab"
          tabindex="0"
        >
          <div>Анкета</div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-4">
        <h3>Выбор специальностей</h3>
        <div class="form-floating mb-3">
          <select
            class="form-select"
            id="floatingSelect"
            aria-label="Floating label select example"
          >
            <option selected>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
          <label for="floatingSelect">Works with selects</label>
        </div>
        <div class="form-floating mb-3">
          <select
            class="form-select"
            id="floatingSelect"
            aria-label="Floating label select example"
          >
            <option selected>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
          <label for="floatingSelect">Works with selects</label>
        </div>
        <div class="form-floating mb-3">
          <select
            class="form-select"
            id="floatingSelect"
            aria-label="Floating label select example"
          >
            <option selected>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
          <label for="floatingSelect">Works with selects</label>
        </div>
        <div class="form-floating mb-3">
          <select
            class="form-select"
            id="floatingSelect"
            aria-label="Floating label select example"
          >
            <option selected>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
          <label for="floatingSelect">Works with selects</label>
        </div>
        <div class="form-floating">
          <select
            class="form-select"
            id="floatingSelect"
            aria-label="Floating label select example"
          >
            <option selected>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
          <label for="floatingSelect">Works with selects</label>
        </div>
      </div>
      <div class="col-lg-8">
        <h3>Набранные баллы</h3>
        <div class="row">
          <div class="col-lg-4">
            <div class="form-floating mb-3">
              <input
                type="number"
                class="form-control"
                id="floatingInput"
                placeholder="Русский язык ЦТ"
              />
              <label for="floatingInput">Русский язык ЦТ</label>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="form-floating mb-3">
              <input
                type="number"
                class="form-control"
                id="floatingInput"
                placeholder="Русский язык ЦТ"
              />
              <label for="floatingInput">Русский язык ЦТ</label>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="form-floating mb-3">
              <input
                type="number"
                class="form-control"
                id="floatingInput"
                placeholder="Русский язык ЦТ"
              />
              <label for="floatingInput">Русский язык ЦТ</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavigationLayout from "@/components/layouts/NavigationLayout.vue"
import { globalCadetAPIForEntranceInstance } from "@/api/cadet/cadetAPI"
import { debounce } from "lodash/function"
import { mapGetters } from "vuex"

export default {
  name: "EntranceInputForm",
  components: { NavigationLayout },
  data() {
    return {
      currentTime: new Date(),
      isLoading: true,
      isError: false,
      currentCadetData: {
        category: null,
        last_name_rus: "",
        first_name_rus: "",
        patronymic_rus: "",
        last_name_bel: "",
        first_name_bel: "",
        patronymic_bel: "",
        last_name_en: "",
        first_name_en: "",
        patronymic_en: "",
        date_of_birth: "",
        gender: "",
        place_of_birth: "",
        photo: "",
        address_residence: "",
        address_registration: "",
        phone_number: "",
        personal_number_mvd: "",
        marital_status: "",
        passport_number: "",
        passport_issue_date: "",
        passport_validity_period: "",
        passport_issue_authority: "",
        identification_number: "",
        removed_from_military_registration: "",
        military_commissariat_attitude: "",
        father_last_name: "",
        father_first_name: "",
        father_patronymic: "",
        father_date_of_birth: "",
        father_place_of_work: "",
        father_phone_number: "",
        mother_last_name: "",
        mother_first_name: "",
        mother_patronymic: "",
        mother_date_of_birth: "",
        mother_place_of_work: "",
        mother_phone_number: "",
        foreign_language_was: "",
        foreign_language_will_be: "",
        subdivision: "",
        group: "",
        academy_start_date: "",
        academy_end_date: "",
        graduation_reason: "",
        graduation_reason_article: "",
        graduation_extra_data: "",
        specialization: "",
        direction_ord: "",
        component_organ: "",
        entrance_category: "",
        educational_institution: "",
        document_type: "",
        privilege: "",
        arrived_from_go_rovd: "",
        social_status: "",
        region_for_medical_examination: "",
        military_office: "",
        military_office_extra_data: "",
        extra_data: "",
        vpk: "",
        vpk_data: "",
        aims_to_graduate_with_honors: "",
        is_class_vpn: "",
        is_class_pn: "",
        is_class_other: "",
        has_achievements_in_sports: "",
        is_olympiad_winner: "",
        health_group: "",
        ppfl_test: "",
        medical_age_group: "",
        needs_increased_attention: "",
        needs_psychological_support: "",
        is_risk_group: "",
        has_conviction: "",
        has_dactocard: "",
        has_gusb_check: "",
        has_employee_in_family: "",
        is_orphan: "",
        passed_medical_examination: "",
        passed_medical_examination_extra_data: "",
        has_certificate_ideas_for_Belarus: "",
        has_certificate_kind_heart: "",
        is_employee: "",
      },
      cadetAPIInstance: globalCadetAPIForEntranceInstance,
      BACKEND_PROTOCOL: process.env.VUE_APP_BACKEND_PROTOCOL,
      BACKEND_HOST: process.env.VUE_APP_BACKEND_HOST,
      BACKEND_PORT: process.env.VUE_APP_BACKEND_PORT,
    }
  },
  async created() {
    await this.loadData(this.$route.params.id)
  },
  methods: {
    async loadData(applicantId) {
      const response = await this.cadetAPIInstance.getItemData(applicantId)
      this.currentCadetData = await response.data
    },
  },
  computed: {
    orderedCadetCategories() {
      return this.categories.results
    },
    orderedCadets() {
      return this.cadetList.results
    },
    orderedSubdivisions() {
      return this.subdivisions.results.filter(
        (subdivision) => subdivision.subdivision_category == "1",
      )
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
      return this.positions.results.filter(
        (position) => position.position_category == "1",
      )
    },
    orderedComponentOrgans() {
      return this.componentOrgans.results
    },
    orderedEntranceCategories() {
      return this.entranceCategories.results
    },
    orderedSocialStatuses() {
      return this.socialStatuses.results
    },
    orderedCountryRegions() {
      return this.countryRegions.results
    },
    orderedGorovds() {
      return this.gorovds.results
    },
    orderedMilitaryOffices() {
      return this.militaryOffices.results
    },
    orderedEducationalInstitutions() {
      return this.educationalInstitutions.results
    },
    orderedDocumentTypes() {
      return this.documentTypes.results
    },
    orderedPrivileges() {
      return this.privileges.results
    },
    orderedPassportAuthorities() {
      return this.passportAuthorities.results
    },

    ...mapGetters({
      groups: "groups/getList",
      ranks: "ranks/getList",
      subdivisions: "subdivisions/getList",
      specialities: "specialities/getList",
      positions: "positions/getList",
      categories: "personCategories/getList",
      componentOrgans: "componentOrgans/getList",
      entranceCategories: "entranceCategory/getList",
      socialStatuses: "socialStatus/getList",
      countryRegions: "countryRegion/getList",
      gorovds: "gorovds/getList",
      militaryOffices: "militaryOffices/getList",
      educationalInstitutions: "educationalInstitutions/getList",
      documentTypes: "documentType/getList",
      privileges: "privileges/getList",
      passportAuthorities: "passportAuthorities/getList",
      token: "auth/getToken",
    }),
  },
}
</script>
