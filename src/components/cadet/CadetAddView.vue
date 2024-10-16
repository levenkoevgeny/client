<template>
  <div class="container-fluid">
    <div>
      <h1 class="my-2 text-decoration-underline">Личное дело</h1>
      <div class="mb-3"></div>
      <div class="row">
        <div class="col-10">
          <form action="">
            <div class="shadow p-3 mb-5 bg-body-tertiary rounded">
              <div class="card">
                <div class="card-body">
                  <div class="row">
                    <div class="col-lg-6">
                      <div class="mb-3">
                        <label class="form-label" for="id_category"
                          >Категория:</label
                        >
                        <select
                          class="form-select"
                          name="category"
                          id="id_category"
                        >
                          <option value="" selected>---------</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-lg-2">
                      <div class="mb-3">
                        <label class="form-label" for="id_last_name_rus"
                          >Фамилия (рус):</label
                        >
                        <input
                          type="text"
                          class="form-control"
                          name="last_name_rus"
                          maxlength="30"
                          required
                          id="id_last_name_rus"
                        />
                      </div>
                      <div class="mb-3">
                        <label class="form-label" for="id_first_name_rus"
                          >Имя (рус):</label
                        >
                        <input
                          type="text"
                          class="form-control"
                          name="first_name_rus"
                          maxlength="30"
                          required
                          id="id_first_name_rus"
                        />
                      </div>
                      <div class="mb-3">
                        <label class="form-label" for="id_patronymic_rus"
                          >Отчество (рус):</label
                        >
                        <input
                          type="text"
                          class="form-control"
                          name="patronymic_rus"
                          maxlength="30"
                          id="id_patronymic_rus"
                        />
                      </div>
                    </div>
                    <div class="col-lg-2">
                      <div class="mb-3">
                        <label class="form-label" for="id_last_name_bel"
                          >Фамилия (бел):</label
                        >
                        <input
                          type="text"
                          class="form-control"
                          name="last_name_bel"
                          maxlength="30"
                          id="id_last_name_bel"
                        />
                      </div>

                      <div class="mb-3">
                        <label class="form-label" for="id_first_name_bel"
                          >Имя (бел):</label
                        >
                        <input
                          type="text"
                          class="form-control"
                          name="first_name_bel"
                          maxlength="30"
                          id="id_first_name_bel"
                        />
                      </div>

                      <div class="mb-3">
                        <label class="form-label" for="id_patronymic_bel"
                          >Отчество (бел):</label
                        >
                        <input
                          type="text"
                          class="form-control"
                          name="patronymic_bel"
                          maxlength="30"
                          id="id_patronymic_bel"
                        />
                      </div>
                    </div>
                    <div class="col-lg-2">
                      <div class="mb-3">
                        <label class="form-label" for="id_last_name_en"
                          >Фамилия (англ):</label
                        >
                        <input
                          type="text"
                          class="form-control"
                          name="last_name_en"
                          maxlength="30"
                          id="id_last_name_en"
                        />
                      </div>
                      <div class="mb-3">
                        <label class="form-label" for="id_first_name_en"
                          >Имя (англ):</label
                        >
                        <input
                          type="text"
                          class="form-control"
                          name="first_name_en"
                          maxlength="30"
                          id="id_first_name_en"
                        />
                      </div>
                      <div class="mb-3">
                        <label class="form-label" for="id_patronymic_en"
                          >Отчество (англ):</label
                        >
                        <input
                          type="text"
                          class="form-control"
                          name="patronymic_en"
                          maxlength="30"
                          id="id_patronymic_en"
                        />
                      </div>
                    </div>
                    <div class="col-lg-2">
                      <div class="mb-3">
                        <label class="form-label" for="id_date_of_birth"
                          >Дата рождения:</label
                        >
                        <input
                          type="date"
                          class="form-control"
                          name="date_of_birth"
                          id="id_date_of_birth"
                        />
                      </div>
                      <div class="mb-3">
                        <label class="form-label" for="id_phone_number"
                          >Номер телефона:</label
                        >
                        <input
                          type="text"
                          class="form-control"
                          name="phone_number"
                          maxlength="30"
                          id="id_phone_number"
                        />
                      </div>
                      <div class="mb-3">
                        <label class="form-label" for="id_passport_number"
                          >Номер паспорта:</label
                        >
                        <input
                          type="text"
                          class="form-control"
                          name="passport_number"
                          maxlength="100"
                          id="id_passport_number"
                        />
                      </div>
                    </div>

                    <div class="col-lg-2">
                      <div class="mb-3">
                        <label class="form-label" for="id_passport_issue_date"
                          >Дата выдачи паспорта:</label
                        >
                        <input
                          type="text"
                          class="form-control"
                          name="passport_issue_date"
                          id="id_passport_issue_date"
                        />
                      </div>
                      <div class="mb-3">
                        <label
                          class="form-label"
                          for="id_passport_validity_period"
                          >Срок оконч. паспорта:</label
                        >
                        <input
                          type="date"
                          class="form-control"
                          name="passport_validity_period"
                          id="id_passport_validity_period"
                        />
                      </div>
                      <div class="mb-3">
                        <label
                          class="form-label"
                          for="id_passport_issue_authority"
                          >Орган выдачи паспорта:</label
                        >
                        <select
                          class="form-select"
                          name="passport_issue_authority"
                          id="id_passport_issue_authority"
                        >
                          <option value="" selected>---------</option>
                          <option value="25">Ленинский РУВД г.Минска</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="shadow p-3 mb-5 bg-body-tertiary rounded">
              <div class="card">
                <div class="card-body">
                  <ul class="nav nav-tabs" id="myTab" role="tablist">
                    <li class="nav-item" role="presentation">
                      <button
                        class="nav-link active"
                        id="home-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#home-tab-pane"
                        type="button"
                        role="tab"
                        aria-controls="home-tab-pane"
                        aria-selected="true"
                      >
                        Home
                      </button>
                    </li>
                    <li class="nav-item" role="presentation">
                      <button
                        class="nav-link"
                        id="profile-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#profile-tab-pane"
                        type="button"
                        role="tab"
                        aria-controls="profile-tab-pane"
                        aria-selected="false"
                      >
                        Profile
                      </button>
                    </li>
                    <li class="nav-item" role="presentation">
                      <button
                        class="nav-link"
                        id="contact-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#contact-tab-pane"
                        type="button"
                        role="tab"
                        aria-controls="contact-tab-pane"
                        aria-selected="false"
                      >
                        Contact
                      </button>
                    </li>
                    <li class="nav-item" role="presentation">
                      <button
                        class="nav-link"
                        id="disabled-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#disabled-tab-pane"
                        type="button"
                        role="tab"
                        aria-controls="disabled-tab-pane"
                        aria-selected="false"
                        disabled
                      >
                        Disabled
                      </button>
                    </li>
                  </ul>
                  <div class="tab-content" id="myTabContent">
                    <div
                      class="tab-pane fade show active"
                      id="home-tab-pane"
                      role="tabpanel"
                      aria-labelledby="home-tab"
                      tabindex="0"
                    >
                      ...
                    </div>
                    <div
                      class="tab-pane fade"
                      id="profile-tab-pane"
                      role="tabpanel"
                      aria-labelledby="profile-tab"
                      tabindex="0"
                    >
                      <input type="text" required />
                    </div>
                    <div
                      class="tab-pane fade"
                      id="contact-tab-pane"
                      role="tabpanel"
                      aria-labelledby="contact-tab"
                      tabindex="0"
                    >
                      ...
                    </div>
                    <div
                      class="tab-pane fade"
                      id="disabled-tab-pane"
                      role="tabpanel"
                      aria-labelledby="disabled-tab"
                      tabindex="0"
                    >
                      ...
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <button type="submit">Save</button>
          </form>
          <div>
            <label class="form-label" for="id_photo">Фото:</label>
            <input
              type="file"
              class="form-control"
              name="photo"
              accept="image/*"
              id="id_photo"
            />
          </div>

          <div>
            <label class="form-label" for="id_address">Адрес:</label>
            <input
              type="text"
              class="form-control"
              name="address"
              maxlength="255"
              id="id_address"
            />
          </div>

          <div class="row">
            <div class="col-lg-4">
              <div class="mb-3">
                <label class="form-label" for="id_father_last_name"
                  >Отец - фамилия:</label
                >
                <input
                  type="text"
                  class="form-control"
                  name="father_last_name"
                  maxlength="30"
                  id="id_father_last_name"
                />
              </div>

              <div class="mb-3">
                <label class="form-label" for="id_father_first_name"
                  >Отец - имя:</label
                >
                <input
                  type="text"
                  class="form-control"
                  name="father_first_name"
                  maxlength="30"
                  id="id_father_first_name"
                />
              </div>

              <div class="mb-3">
                <label class="form-label" for="id_father_patronymic"
                  >Отец - отчество:</label
                >
                <input
                  type="text"
                  class="form-control"
                  name="father_patronymic"
                  maxlength="30"
                  id="id_father_patronymic"
                />
              </div>

              <div class="mb-3">
                <label class="form-label" for="id_father_date_of_birth"
                  >Отец - дата рождения:</label
                >
                <input
                  type="text"
                  class="form-control"
                  name="father_date_of_birth"
                  id="id_father_date_of_birth"
                />
              </div>
              <div class="mb-3">
                <label class="form-label" for="id_father_place_of_work"
                  >Отец - место работы:</label
                >
                <textarea
                  class="form-control"
                  name="father_place_of_work"
                  cols="40"
                  rows="3"
                  id="id_father_place_of_work"
                ></textarea>
              </div>
              <div class="mb-3">
                <label class="form-label" for="id_father_phone_number"
                  >Отец - номер телефона:</label
                >
                <input
                  type="text"
                  class="form-control"
                  name="father_phone_number"
                  maxlength="30"
                  id="id_father_phone_number"
                />
              </div>
            </div>
            <div class="col-lg-4">
              <div class="mb-3">
                <label class="form-label" for="id_mother_last_name"
                  >Мать - фамилия:</label
                >
                <input
                  type="text"
                  class="form-control"
                  name="mother_last_name"
                  maxlength="30"
                  id="id_mother_last_name"
                />
              </div>

              <div class="mb-3">
                <label class="form-label" for="id_mother_first_name"
                  >Мать - имя:</label
                >
                <input
                  type="text"
                  class="form-control"
                  name="mother_first_name"
                  maxlength="30"
                  id="id_mother_first_name"
                />
              </div>

              <div class="mb-3">
                <label class="form-label" for="id_mother_patronymic"
                  >Мать - отчество:</label
                >
                <input
                  type="text"
                  class="form-control"
                  name="mother_patronymic"
                  maxlength="30"
                  id="id_mother_patronymic"
                />
              </div>

              <div class="mb-3">
                <label class="form-label" for="id_mother_date_of_birth"
                  >Мать - дата рождения:</label
                >
                <input
                  type="text"
                  class="form-control"
                  name="mother_date_of_birth"
                  id="id_mother_date_of_birth"
                />
              </div>

              <div class="mb-3">
                <label class="form-label" for="id_mother_place_of_work"
                  >Мать - место работы:</label
                >
                <textarea
                  class="form-control"
                  name="mother_place_of_work"
                  cols="40"
                  rows="3"
                  id="id_mother_place_of_work"
                ></textarea>
              </div>

              <div class="mb-3">
                <label class="form-label" for="id_mother_phone_number"
                  >Мать - номер телефона:</label
                >
                <input
                  type="text"
                  class="form-control"
                  name="mother_phone_number"
                  maxlength="30"
                  id="id_mother_phone_number"
                />
              </div>
            </div>
          </div>

          <div>
            <label class="form-label" for="id_education_level"
              >Среднее образования (уровень образования):</label
            >
            <select
              class="form-select"
              name="education_level"
              id="id_education_level"
            >
              <option value="" selected>---------</option>
              <option value="1">среднее</option>
            </select>
          </div>

          <div>
            <label class="form-label" for="id_education_graduated"
              >Среднее образования (наименование):</label
            >
            <textarea
              class="form-control"
              name="education_graduated"
              cols="40"
              rows="3"
              id="id_education_graduated"
            ></textarea>
          </div>

          <div>
            <label class="form-label" for="id_education_graduating_year"
              >Среднее образования (год):</label
            >
            <input
              type="number"
              name="education_graduating_year"
              id="id_education_graduating_year"
            />
          </div>

          <div>
            <label class="form-label" for="id_education_average_score"
              >Среднее образования (средний бал):</label
            >
            <input
              type="number"
              name="education_average_score"
              step="any"
              id="id_education_average_score"
            />
          </div>

          <div>
            <label class="form-label" for="id_education_kind"
              >Среднее образования (вид учреждения образования):</label
            >
            <select
              class="form-select"
              name="education_kind"
              id="id_education_kind"
            >
              <option value="" selected>---------</option>
              <option value="1">СШ</option>
            </select>
          </div>

          <div>
            <label class="form-label" for="id_education_location_kind"
              >Среднее образования (вид населенного пункта):</label
            >
            <select
              class="form-select"
              name="education_location_kind"
              id="id_education_location_kind"
            >
              <option value="" selected>---------</option>
              <option value="1">город</option>
            </select>
          </div>

          <div>
            <label class="form-label" for="id_subdivision"
              >Подразделение:</label
            >
            <select class="form-select" name="subdivision" id="id_subdivision">
              <option value="" selected>---------</option>
              <option value="25">ФМОБ</option>
            </select>
          </div>

          <div>
            <label class="form-label" for="id_academy_start_year"
              >Год поступления:</label
            >
            <input
              type="number"
              name="academy_start_year"
              id="id_academy_start_year"
            />
          </div>

          <div>
            <label class="form-label" for="id_academy_end_year"
              >Год окончания:</label
            >
            <input
              type="number"
              name="academy_end_year"
              id="id_academy_end_year"
            />
          </div>

          <div>
            <label class="form-label" for="id_component_organ"
              >Комплектующий орган:</label
            >
            <select
              class="form-select"
              name="component_organ"
              id="id_component_organ"
            >
              <option value="" selected>---------</option>
              <option value="1">Министерство внутренних дел РБ</option>
            </select>
          </div>
          <div>
            <label class="form-label" for="id_entrance_category"
              >Категория поступающего:</label
            >
            <select
              class="form-select"
              name="entrance_category"
              id="id_entrance_category"
            >
              <option value="" selected>---------</option>
              <option value="1">категория 1</option>
            </select>
          </div>
          <div>
            <label class="form-label" for="id_arrived_from_go_rovd"
              >Прибыл из ГО-РОВД:</label
            >
            <select
              class="form-select"
              name="arrived_from_go_rovd"
              id="id_arrived_from_go_rovd"
            >
              <option value="" selected>---------</option>
              <option value="1">Ленинское РУВД г. Минска</option>
            </select>
          </div>
          <div>
            <label class="form-label" for="id_social_status"
              >Социальный статус:</label
            >
            <select
              class="form-select"
              name="social_status"
              id="id_social_status"
            >
              <option value="" selected>---------</option>
              <option value="1">статус 1</option>
            </select>
          </div>
          <div>
            <label class="form-label" for="id_region_for_medical_examination"
              >Область (для прохождения мед. комиссии):</label
            >
            <select
              class="form-select"
              name="region_for_medical_examination"
              id="id_region_for_medical_examination"
            >
              <option value="" selected>---------</option>
              <option value="1">Минская обл.</option>
            </select>
          </div>
          <div>
            <label class="form-label" for="id_military_office"
              >Военкомат:</label
            >
            <select
              class="form-select"
              name="military_office"
              id="id_military_office"
            >
              <option value="" selected>---------</option>
              <option value="1">Военкомат Ленинского района г. Минска</option>
            </select>
          </div>
          <div>
            <label class="form-label" for="id_extra_data"
              >Дополнительные данные:</label
            >
            <textarea
              class="form-control"
              name="extra_data"
              cols="40"
              rows="3"
              id="id_extra_data"
            ></textarea>
          </div>
        </div>
        <div class="col-2">
          <div class="shadow p-3 mb-5 bg-body-tertiary rounded">
            <div class="card">
              <div class="card-body">
                <div
                  id="simple-list-example"
                  class="d-flex flex-column gap-2 simple-list-example-scrollspy text-start"
                >
                  <a class="" href="#simple-list-item-1">Раздел 1</a>
                  <a class="" href="#simple-list-item-2">Раздел 1</a>
                  <a class="" href="#simple-list-item-3">Раздел 3</a>
                  <a class="" href="#simple-list-item-4">Раздел 4</a>
                  <a class="" href="#simple-list-item-5">Раздел 5</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CadetAddView",
  components: {},
  data() {
    return {}
  },
  async created() {},
  methods: {
    // onSubmit(e) {
    //   const form = e.target.form
    // const tab =
    //   form.find(".tab-pane.active:has(:invalid)")[0] ||
    //   form.find(".tab-pane:has(:invalid)")[0]
    // if (tab) {
    //   const nav = $(`.nav-tabs li a[href="#${tab.id}"]`)
    //   nav.tab("show")
    //     // }
    //   },
  },
  computed: {},
}
</script>

<style scoped></style>
