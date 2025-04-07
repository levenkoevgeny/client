<template>
  <div class="container-fluid">
    <h1 class="mb-5 fw-lighter">
      Личное дело абитуриента
      <span class="fw-normal text-decoration-underline"
        >{{ currentCadetData.last_name_rus }}
        {{ currentCadetData.first_name_rus }}</span
      >
    </h1>

    <div class="card shadow mb-2 rounded bg-body border-0">
      <div class="card-body">
        <h5 class="card-title">Персональные данные</h5>
        <div class="row mt-3">
          <div class="col-xl-3">
            <div class="form-floating mb-3">
              <input
                type="text"
                class="form-control form-control-sm bg-body"
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

    <div class="card shadow mb-2 rounded bg-body border-0">
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

          <div class="row mt-3">
            <div class="col-xl-3">
              <div class="form-floating mb-3">
                <select
                  class="form-select"
                  v-model="currentCadetData.foreign_language_was"
                >
                  <option value="">---------</option>
                  <option
                    :value="foreign_language.id"
                    v-for="foreign_language in orderedForeignLanguages"
                  >
                    {{ foreign_language }}
                  </option>
                </select>
                <label for="floatingSelect">Иностранный язык (был)</label>
              </div>
            </div>
            <div class="col-xl-3">
              <div class="form-floating mb-3">
                <select
                  class="form-select"
                  v-model="currentCadetData.foreign_language_will_be"
                >
                  <option value="">---------</option>
                  <option
                    :value="foreign_language.id"
                    v-for="foreign_language in orderedForeignLanguages"
                  >
                    {{ foreign_language }}
                  </option>
                </select>
                <label>Иностранный язык (будет)</label>
              </div>
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
            id="nav-questionary-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-questionary"
            type="button"
            role="tab"
            aria-controls="nav-questionary"
            aria-selected="false"
          >
            Анкета
          </button>
          <button
            class="nav-link"
            id="nav-med-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-med"
            type="button"
            role="tab"
            aria-controls="nav-med"
            aria-selected="false"
          >
            Данные мед. осв-я
          </button>
          <button
            class="nav-link"
            id="nav-attached_documents-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-attached_documents"
            type="button"
            role="tab"
            aria-controls="nav-attached_documents"
            aria-selected="false"
          >
            Отсканированные документы
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
                <div class="col-xl-3">
                  <div class="form-floating mb-3">
                    <input
                      type="date"
                      class="form-control form-control-sm"
                      placeholder="Номер паспорта"
                      v-model="currentCadetData.passport_issue_date"
                    />
                    <label>Дата выдачи</label>
                  </div>
                </div>
                <div class="col-xl-3">
                  <div class="form-floating mb-3">
                    <input
                      type="date"
                      class="form-control form-control-sm"
                      placeholder="Номер паспорта"
                      v-model="currentCadetData.passport_validity_period"
                    />
                    <label>Срок действия</label>
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
          <div>
            <div class="my-3">
              <p class="fs-6 fw-bold my-2">Мать</p>
              <div class="row">
                <div class="col-xl-3">
                  <div class="form-floating mb-3">
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      placeholder="Мать (фамилия)"
                      v-model="currentCadetData.mother_last_name"
                    />
                    <label>Фамилия</label>
                  </div>
                </div>
                <div class="col-xl-3">
                  <div class="form-floating mb-3">
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      placeholder="Мать (имя)"
                      v-model="currentCadetData.mother_first_name"
                    />
                    <label>Имя</label>
                  </div>
                </div>
                <div class="col-xl-3">
                  <div class="form-floating mb-3">
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      placeholder="Мать (имя)"
                      v-model="currentCadetData.mother_patronymic"
                    />
                    <label>Отчество</label>
                  </div>
                </div>
                <div class="col-xl-3">
                  <div class="form-floating mb-3">
                    <input
                      type="date"
                      class="form-control form-control-sm"
                      placeholder="Мать (имя)"
                      v-model="currentCadetData.mother_date_of_birth"
                    />
                    <label>Дата рождения</label>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-4">
                  <div class="form-floating mb-3">
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      placeholder="Проживает"
                      v-model="currentCadetData.mother_address_residence"
                    />
                    <label>Проживает</label>
                  </div>
                </div>
                <div class="col-4">
                  <div class="form-floating mb-3">
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      placeholder="Место работы и должность"
                      v-model="currentCadetData.mother_place_of_work"
                    />
                    <label>Место работы и должность</label>
                  </div>
                </div>
                <div class="col-4">
                  <div class="form-floating mb-3">
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      placeholder="Номер телефона"
                      v-model="currentCadetData.mother_phone_number"
                    />
                    <label>Номер телефона</label>
                  </div>
                </div>
              </div>
              <p class="fs-6 fw-bold my-2">Отец</p>
              <div class="row">
                <div class="col-xl-3">
                  <div class="form-floating mb-3">
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      placeholder="Мать (фамилия)"
                      v-model="currentCadetData.father_last_name"
                    />
                    <label>Фамилия</label>
                  </div>
                </div>
                <div class="col-xl-3">
                  <div class="form-floating mb-3">
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      placeholder="Мать (имя)"
                      v-model="currentCadetData.father_first_name"
                    />
                    <label>Имя</label>
                  </div>
                </div>
                <div class="col-xl-3">
                  <div class="form-floating mb-3">
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      placeholder="Мать (имя)"
                      v-model="currentCadetData.father_patronymic"
                    />
                    <label>Отчество</label>
                  </div>
                </div>
                <div class="col-xl-3">
                  <div class="form-floating mb-3">
                    <input
                      type="date"
                      class="form-control form-control-sm"
                      placeholder="Мать (имя)"
                      v-model="currentCadetData.father_date_of_birth"
                    />
                    <label>Дата рождения</label>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-4">
                  <div class="form-floating mb-3">
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      placeholder="Проживает"
                      v-model="currentCadetData.father_address_residence"
                    />
                    <label>Проживает</label>
                  </div>
                </div>
                <div class="col-4">
                  <div class="form-floating mb-3">
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      placeholder="Место работы и должность"
                      v-model="currentCadetData.father_place_of_work"
                    />
                    <label>Место работы и должность</label>
                  </div>
                </div>
                <div class="col-4">
                  <div class="form-floating mb-3">
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      placeholder="Номер телефона"
                      v-model="currentCadetData.father_phone_number"
                    />
                    <label>Номер телефона</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="tab-pane fade"
          id="nav-questionary"
          role="tabpanel"
          aria-labelledby="nav-questionary-tab"
          tabindex="0"
        >
          <div>
            <div class="my-3">
              <div class="row">
                <div class="col-xl-6">
                  <div class="form-floating mb-3">
                    <select class="form-select" v-model="currentCadetData.vpk">
                      <option value="">---------</option>
                      <option
                        :value="vpk.id"
                        v-for="vpk in orderedVpkCategories"
                      >
                        {{ vpk.category }}
                      </option>
                    </select>
                    <label for="floatingSelect"
                      >Военно-патриотический клуб</label
                    >
                  </div>
                </div>
                <div class="col-xl-6">
                  <div class="form-floating mb-3">
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      placeholder="Данные по ВПК"
                      v-model="currentCadetData.vpk_data"
                    />
                    <label>Данные по ВПК</label>
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-xl-3">
                  <div class="form-check mb-3">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      v-model="currentCadetData.aims_to_graduate_with_honors"
                    />
                    <label class="form-check-label" for="checkDefault">
                      Претендует на аттестат с отличием
                    </label>
                  </div>
                </div>
                <div class="col-xl-3">
                  <div class="form-check mb-3">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      v-model="currentCadetData.is_olympiad_winner"
                    />
                    <label class="form-check-label" for="checkDefault">
                      Победитель ресбуликанских или региональных олимпиад
                    </label>
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-xl-3">
                  <div class="form-check mb-3">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      v-model="currentCadetData.is_class_vpn"
                    />
                    <label class="form-check-label" for="checkDefault">
                      Класс военно-патриотической направленности
                    </label>
                  </div>
                </div>
                <div class="col-xl-3">
                  <div class="form-check mb-3">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      v-model="currentCadetData.is_class_pn"
                    />
                    <label class="form-check-label" for="checkDefault">
                      Класс правовой направленности
                    </label>
                  </div>
                </div>
                <div class="col-xl-3">
                  <div class="form-check mb-3">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      v-model="currentCadetData.is_class_other"
                    />
                    <label class="form-check-label" for="checkDefault">
                      Профильный класс иной направленности
                    </label>
                  </div>
                </div>
                <div class="col-xl-3">
                  <div class="form-check mb-3">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      v-model="currentCadetData.has_achievements_in_sports"
                    />
                    <label class="form-check-label" for="checkDefault">
                      Достижения в спорте
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="tab-pane fade"
          id="nav-med"
          role="tabpanel"
          aria-labelledby="nav-med-tab"
          tabindex="0"
        >
          <div>
            <div class="my-3">
              <div class="row">
                <div class="col-xl-4">
                  <div class="form-floating mb-3">
                    <select
                      class="form-select"
                      aria-label="Floating label select example"
                      v-model="currentCadetData.health_group"
                    >
                      <option value="">---------</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                    </select>
                    <label for="floatingSelect">Группа здоровья</label>
                  </div>
                </div>
                <div class="col-xl-4">
                  <div class="form-floating mb-3">
                    <select
                      class="form-select"
                      v-model="currentCadetData.ppfl_test"
                    >
                      <option value="">---------</option>
                      <option
                        :value="ppfl.id"
                        v-for="ppfl in orderedPpflCategories"
                      >
                        {{ ppfl.category }}
                      </option>
                    </select>
                    <label for="floatingSelect">Тест ПФЛ</label>
                  </div>
                </div>
                <div class="col-xl-4">
                  <div class="form-floating mb-3">
                    <select
                      class="form-select"
                      aria-label="Floating label select example"
                      v-model="currentCadetData.medical_age_group"
                    >
                      <option value="">---------</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                    </select>
                    <label for="floatingSelect">Медико-возрастная группа</label>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-xl-4">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      v-model="currentCadetData.passed_medical_examination"
                    />
                    <label class="form-check-label" for="checkDefault">
                      Мед. комиссию прошел
                    </label>
                  </div>
                </div>
                <div class="col-xl-8">
                  <div class="form-floating mb-3">
                    <textarea
                      class="form-control"
                      placeholder="Примечание по медицинской комиссии"
                      rows="2"
                      v-model="
                        currentCadetData.passed_medical_examination_extra_data
                      "
                    ></textarea>
                    <label>Примечание по медицинской комиссии</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="tab-pane fade"
          id="nav-attached_documents"
          role="tabpanel"
          aria-labelledby="nav-attached_documents-tab"
          tabindex="0"
        >
          <div class="m-3">
            <div v-if="currentCadetData.attached_documents">
              <div class="d-flex flex-row my-2">
                <div class="mx-3">
                  <input
                    class="form-control"
                    ref="uploadedDocument"
                    type="file"
                    accept=".pdf"
                    v-on:change="uploadDocument"
                    style="width: 600px"
                  />
                </div>
                <div class="d-flex align-items-end">
                  <button
                    type="button"
                    class="btn btn-link"
                    @click="deleteDocument"
                  >
                    Удалить скан документа
                  </button>
                </div>
              </div>

              <object
                :data="currentCadetData.attached_documents"
                type="application/pdf"
                ref="objectWithDocument"
                width="100%"
                height="700"
              >
                <p>
                  <b>Ошибка загрузки pdf документа.</b> Попробуйте скачать его
                  <a :href="currentCadetData.attached_documents">отсюда</a>.
                </p>
              </object>
            </div>

            <div v-else>
              <div class="mb-3">
                <label for="formFile" class="form-label"
                  >Выберите pdf файл для загрузки</label
                >
                <input
                  class="form-control"
                  ref="uploadedDocument"
                  type="file"
                  accept=".pdf"
                  v-on:change="uploadDocument"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="card shadow mb-2 rounded bg-body border-0">
        <div class="card-body">
          <div class="mb-3">
            <label class="form-label">Замечания по личному делу</label>
            <textarea
              class="form-control"
              rows="3"
              v-model="currentCadetData.comments_on_personal_file"
            ></textarea>
          </div>
        </div>
      </div>

      <div class="card shadow mb-2 rounded bg-body border-0">
        <div class="card-body">
          <div class="row">
            <div class="col-xl-4">
              <div class="form-check mb-3">
                <input
                  class="form-check-input"
                  type="checkbox"
                  v-model="currentCadetData.needs_increased_attention"
                />
                <label class="form-check-label">
                  Требует повышенного внимания
                </label>
              </div>
              <div class="form-check mb-3">
                <input
                  class="form-check-input"
                  type="checkbox"
                  v-model="currentCadetData.needs_psychological_support"
                />
                <label class="form-check-label">
                  Требует психологического сопровождения
                </label>
              </div>
              <div class="form-check mb-3">
                <input
                  class="form-check-input"
                  type="checkbox"
                  v-model="currentCadetData.is_risk_group"
                />
                <label class="form-check-label">Группа риска</label>
              </div>
              <div class="form-check mb-3">
                <input
                  class="form-check-input"
                  type="checkbox"
                  v-model="currentCadetData.has_conviction"
                />
                <label class="form-check-label">Судимость</label>
              </div>
              <div class="form-check mb-3">
                <input
                  class="form-check-input"
                  type="checkbox"
                  v-model="currentCadetData.has_dactocard"
                />
                <label class="form-check-label">Дактокарта</label>
              </div>
              <div class="form-check mb-3">
                <input
                  class="form-check-input"
                  type="checkbox"
                  v-model="currentCadetData.has_gusb_check"
                />
                <label class="form-check-label">Проверка ГУСБ</label>
              </div>
              <div class="form-check mb-3">
                <input
                  class="form-check-input"
                  type="checkbox"
                  v-model="currentCadetData.has_employee_in_family"
                />
                <label class="form-check-label">Сотрудники в семье</label>
              </div>
              <div class="form-check mb-3">
                <input
                  class="form-check-input"
                  type="checkbox"
                  v-model="currentCadetData.is_orphan"
                />
                <label class="form-check-label">Сирота</label>
              </div>
              <div class="form-check mb-3">
                <input
                  class="form-check-input"
                  type="checkbox"
                  v-model="currentCadetData.is_employee"
                />
                <label class="form-check-label">Сотрудник</label>
              </div>
            </div>
            <div class="col-xl-4">
              <p1>Сертификаты</p1>
              <div class="form-check mb-3">
                <input
                  class="form-check-input"
                  type="checkbox"
                  v-model="currentCadetData.has_certificate_ideas_for_Belarus"
                />
                <label class="form-check-label">100 идей для Беларуси</label>
              </div>
              <div class="form-check mb-3">
                <input
                  class="form-check-input"
                  type="checkbox"
                  v-model="currentCadetData.has_certificate_kind_heart"
                />
                <label class="form-check-label">Доброе сердце</label>
              </div>
            </div>
            <div class="col-xl-4">
              <div class="form-check mb-3">
                <input
                  class="form-check-input"
                  type="checkbox"
                  v-model="currentCadetData.is_law_class"
                />
                <label class="form-check-label">Правовой класс</label>
              </div>
              <div class="form-check mb-3">
                <input
                  class="form-check-input"
                  type="checkbox"
                  v-model="currentCadetData.is_law_enforcement"
                />
                <label class="form-check-label">Охрана правопорядка</label>
              </div>
              <div class="form-check mb-3">
                <input
                  class="form-check-input"
                  type="checkbox"
                  v-model="currentCadetData.is_reserve"
                />
                <label class="form-check-label">Резерв</label>
              </div>
              <div class="form-check mb-3">
                <input
                  class="form-check-input"
                  type="checkbox"
                  v-model="currentCadetData.is_fired"
                />
                <label class="form-check-label">Уволен</label>
              </div>
              <div class="form-check mb-3">
                <input
                  class="form-check-input"
                  type="checkbox"
                  v-model="currentCadetData.took_documents"
                />
                <label class="form-check-label">Забрал документы</label>
              </div>

              <div class="form-check mb-3">
                <input
                  class="form-check-input"
                  type="checkbox"
                  v-model="currentCadetData.is_vv"
                />
                <label class="form-check-label">ВВ</label>
              </div>
              <div class="form-check mb-3">
                <input
                  class="form-check-input"
                  type="checkbox"
                  v-model="currentCadetData.is_fp"
                />
                <label class="form-check-label">ФП</label>
              </div>
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
        comments_on_personal_file: "",
        removed_from_military_registration: "",
        military_commissariat_attitude: "",
        father_last_name: "",
        father_first_name: "",
        father_patronymic: "",
        father_date_of_birth: "",
        father_place_of_work: "",
        father_phone_number: "",
        father_address_residence: "",
        mother_last_name: "",
        mother_first_name: "",
        mother_patronymic: "",
        mother_date_of_birth: "",
        mother_place_of_work: "",
        mother_phone_number: "",
        mother_address_residence: "",
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
        passed_medical_examination: "",
        passed_medical_examination_extra_data: "",
        is_medical_examination_passed: false,
        needs_increased_attention: "",
        needs_psychological_support: "",
        is_risk_group: "",
        has_conviction: "",
        has_dactocard: "",
        has_gusb_check: "",
        has_employee_in_family: "",
        is_orphan: "",
        has_certificate_ideas_for_Belarus: "",
        has_certificate_kind_heart: "",
        is_employee: "",
        attached_documents: "",
        is_law_class: "",
        is_law_enforcement: "",
        is_reserve: "",
        is_fired: "",
        took_documents: "",
        is_vv: "",
        is_fp: "",
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
    async uploadDocument() {
      let formData = new FormData()
      formData.append(
        "attached_documents",
        this.$refs.uploadedDocument.files[0],
      )

      const response = await this.cadetAPIInstance.updatePhotoOrAnyFile(
        this.currentCadetData.id,
        formData,
      )

      this.currentCadetData = {
        ...this.currentCadetData,
        attached_documents: response.data.attached_documents,
      }
    },
    async deleteDocument() {
      const response = await this.cadetAPIInstance.updatePhotoOrAnyFile(
        this.currentCadetData.id,
        { attached_documents: null },
      )

      this.currentCadetData = {
        ...this.currentCadetData,
        attached_documents: response.data.attached_documents,
      }
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
    orderedForeignLanguages() {
      return this.foreignLanguages.results
    },
    orderedPpflCategories() {
      return this.ppflCategories.results
    },

    orderedVpkCategories() {
      return this.vpkCategories.results
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
      foreignLanguages: "foreignLanguages/getList",
      ppflCategories: "ppflCategories/getList",
      vpkCategories: "vpkCategories/getList",
      token: "auth/getToken",
    }),
  },
}
</script>
