<template>
  <div class="container-fluid">
    <!--    <v-select :options="options" @search="fetchOptions"></v-select>-->
    <br />
    <div>
      <h1 class="my-2 text-decoration-underline">
        Личное дело ({{ currentCadetData.last_name_rus }}
        {{ currentCadetData.first_name_rus }})
      </h1>

      <div class="mb-3"></div>
      <div class="row">
        <div class="col-10">
          <div
            data-bs-spy="scroll"
            data-bs-target="#simple-list-example"
            data-bs-offset="0"
            data-bs-smooth-scroll="true"
            class="scrollspy-example"
            tabindex="0"
            style="height: 85vh; max-height: 85vh; overflow-y: scroll"
          >
            <div
              class="shadow p-3 mb-3 bg-body-tertiary rounded"
              id="simple-list-personal-data"
            >
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Личные данные</h5>
                  <div class="row">
                    <div class="col-lg-4">
                      <div class="text-center m-3">
                        <img
                          v-if="currentCadetData.photo"
                          :src="currentCadetData.photo"
                          class="rounded-2"
                          alt="..."
                          style="width: 100%"
                        />
                        <img
                          v-else
                          src="../../assets/without_photo.jpg"
                          class="rounded-2"
                          alt="..."
                          style="width: 100%"
                        />
                      </div>
                    </div>
                    <div class="col-lg-8">
                      <div class="row">
                        <div class="col-lg-4">
                          <div class="mb-3">
                            <label class="form-label" for="id_category"
                              >Категория:</label
                            >
                            <select
                              class="form-select"
                              name="category"
                              id="id_category"
                              v-model="currentCadetData.category"
                            >
                              <option value="null" selected>---------</option>
                              <option
                                v-for="category in orderedCadetCategories"
                                :value="category.id"
                                :key="category.id"
                              >
                                {{ category.category }}
                              </option>
                            </select>
                          </div>
                        </div>
                        <div class="col-lg-8">
                          <div class="mb-3">
                            <label
                              class="form-label"
                              for="id_personal_number_mvd"
                              >Личный номер</label
                            >
                            <input
                              type="text"
                              class="form-control"
                              name="personal_number_mvd"
                              id="id_personal_number_mvd"
                              v-model="currentCadetData.personal_number_mvd"
                            />
                          </div>
                        </div>
                      </div>

                      <div class="row">
                        <div class="col-lg-4">
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
                              v-model="currentCadetData.last_name_rus"
                            />
                          </div>
                        </div>
                        <div class="col-lg-4">
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
                              v-model="currentCadetData.first_name_rus"
                            />
                          </div>
                        </div>
                        <div class="col-lg-4">
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
                              v-model="currentCadetData.patronymic_rus"
                            />
                          </div>
                        </div>
                      </div>

                      <div class="row">
                        <div class="col-lg-4">
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
                              v-model="currentCadetData.last_name_bel"
                            />
                          </div>
                        </div>
                        <div class="col-lg-4">
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
                              v-model="currentCadetData.first_name_bel"
                            />
                          </div>
                        </div>
                        <div class="col-lg-4">
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
                              v-model="currentCadetData.patronymic_bel"
                            />
                          </div>
                        </div>
                      </div>

                      <div class="row">
                        <div class="col-lg-4">
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
                              v-model="currentCadetData.last_name_en"
                            />
                          </div>
                        </div>
                        <div class="col-lg-4">
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
                              v-model="currentCadetData.first_name_en"
                            />
                          </div>
                        </div>
                        <div class="col-lg-4">
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
                              v-model="currentCadetData.patronymic_en"
                            />
                          </div>
                        </div>
                      </div>

                      <div class="row">
                        <div class="col-lg-4">
                          <div class="mb-3">
                            <label class="form-label" for="id_date_of_birth"
                              >Дата рождения:</label
                            >
                            <input
                              type="date"
                              class="form-control"
                              name="date_of_birth"
                              id="id_date_of_birth"
                              v-model="currentCadetData.date_of_birth"
                            />
                          </div>
                        </div>
                        <div class="col-lg-8">
                          <div class="mb-3">
                            <label class="form-label" for="id_place_of_birth"
                              >Место рождения</label
                            >
                            <input
                              type="text"
                              class="form-control"
                              name="place_of_birth"
                              id="id_place_of_birth"
                              v-model="currentCadetData.place_of_birth"
                            />
                          </div>
                        </div>
                      </div>

                      <div class="row">
                        <div class="col-lg-4">
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
                              v-model="currentCadetData.phone_number"
                            />
                          </div>
                        </div>
                        <div class="col-lg-8">
                          <div class="mb-3">
                            <label class="form-label" for="id_address_residence"
                              >Адрес места жительства</label
                            >
                            <input
                              type="text"
                              class="form-control"
                              name="address_residence"
                              id="id_address_residence"
                              v-model="currentCadetData.address_residence"
                            />
                          </div>
                        </div>
                      </div>

                      <div class="row">
                        <div class="col-lg-12">
                          <div class="mb-3">
                            <label
                              class="form-label"
                              for="id_address_registration"
                              >Адрес регистрации</label
                            >
                            <input
                              type="text"
                              class="form-control"
                              name="address_registration"
                              id="id_address_registration"
                              v-model="currentCadetData.address_registration"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              class="shadow p-3 mb-3 bg-body-tertiary rounded"
              id="simple-list-passport-data"
            >
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Паспортные данные</h5>
                  <div class="row">
                    <div class="col-3">
                      <div class="mb-3">
                        <label class="form-label" for="id_passport_number"
                          >Номер паспорта</label
                        >
                        <input
                          type="text"
                          class="form-control"
                          name="passport_number"
                          maxlength="100"
                          id="id_passport_number"
                          v-model="currentCadetData.passport_number"
                        />
                      </div>
                    </div>
                    <div class="col-3">
                      <div class="mb-3">
                        <label class="form-label" for="id_passport_issue_date"
                          >Дата выдачи паспорта:</label
                        >
                        <input
                          type="date"
                          class="form-control"
                          name="passport_issue_date"
                          id="id_passport_issue_date"
                          v-model="currentCadetData.passport_issue_date"
                        />
                      </div>
                    </div>
                    <div class="col-3">
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
                          v-model="currentCadetData.passport_validity_period"
                        />
                      </div>
                    </div>
                    <div class="col-3">
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
                          v-model="currentCadetData.passport_issue_authority"
                        >
                          <option value="" selected>---------</option>

                          <option
                            v-for="passportIssueAuthority in orderedPassportIssueAuthorities"
                            :value="passportIssueAuthority.id"
                          >
                            {{
                              passportIssueAuthority.passport_issue_authority
                            }}
                          </option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              class="shadow p-3 mb-3 bg-body-tertiary rounded"
              id="simple-list-academy-data"
            >
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Обучение в Академии МВД</h5>
                  <div class="row">
                    <div class="col-lg-3">
                      <div class="mb-3">
                        <label class="form-label" for="id_subdivision"
                          >Дата начала обучения</label
                        >
                        <input
                          type="date"
                          class="form-control"
                          v-model="currentCadetData.academy_start_date"
                          id="id_subdivision"
                        />
                      </div>
                    </div>
                    <div class="col-lg-3">
                      <div class="mb-3">
                        <label class="form-label" for="id_subdivision"
                          >Дата окончания обучения</label
                        >
                        <input
                          type="date"
                          class="form-control"
                          v-model="currentCadetData.academy_end_date"
                          id="id_subdivision"
                        />
                      </div>
                    </div>
                    <div class="col-lg-3">
                      <div class="mb-3">
                        <label class="form-label" for="id_category"
                          >Факультет</label
                        >
                        <select
                          class="form-select"
                          name="subdivision"
                          id="id_subdivision"
                          v-model="currentCadetData.subdivision"
                        >
                          <option value="null" selected>---------</option>
                          <option
                            v-for="subdivision in orderedSubdivisions"
                            :value="subdivision.id"
                            :key="subdivision.id"
                          >
                            {{ subdivision.subdivision_name }}
                          </option>
                        </select>
                      </div>
                    </div>
                    <div class="col-lg-3">
                      <div class="mb-3">
                        <label class="form-label" for="id_category"
                          >Группа</label
                        >
                        <select
                          class="form-select"
                          name="subdivision"
                          id="id_subdivision"
                          v-model="currentCadetData.group"
                        >
                          <option value="" selected>---------</option>
                          <option
                            v-for="group in orderedGroups"
                            :value="group.id"
                            :key="group.id"
                          >
                            {{ group.group_name }}
                          </option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-lg-3">
                      <div class="mb-3">
                        <label class="form-label" for="id_category"
                          >Специализация</label
                        >
                        <select
                          class="form-select"
                          name="subdivision"
                          id="id_subdivision"
                          v-model="currentCadetData.specialization"
                        >
                          <option value="" selected>---------</option>
                          <option
                            v-for="specialization in orderedSpecializations"
                            :value="specialization.id"
                            :key="specialization.id"
                          >
                            {{ specialization.specialization_name }}
                          </option>
                        </select>
                      </div>
                    </div>
                    <div class="col-lg-3">
                      <div class="mb-3">
                        <label class="form-label" for="id_category"
                          >Направление ОРД</label
                        >
                        <select
                          class="form-select"
                          name="subdivision"
                          id="id_subdivision"
                          v-model="currentCadetData.direction_ord"
                        >
                          <option value="" selected>---------</option>
                          <option
                            v-for="directionOrd in orderedDirectionsOrd"
                            :value="directionOrd.id"
                            :key="directionOrd.id"
                          >
                            {{ directionOrd.direction_name }}
                          </option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="shadow p-3 mb-3 bg-body-tertiary rounded"
              id="simple-list-military-office-data"
            >
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Воинский учет</h5>
                  <div class="row">
                    <div class="col-4">
                      <div class="mb-3">
                        <label class="form-label" for="id_category"
                          >С воинского учета снят</label
                        >
                        <input
                          type="date"
                          class="form-control"
                          v-model="
                            currentCadetData.removed_from_military_registration
                          "
                        />
                      </div>
                    </div>
                    <div class="col-8">
                      <div class="mb-3">
                        <label class="form-label" for="id_category"
                          >Отношение военного комиссариата</label
                        >
                        <textarea
                          class="form-control"
                          v-model="
                            currentCadetData.military_commissariat_attitude
                          "
                          rows="1"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="shadow p-3 mb-3 bg-body-tertiary rounded"
              id="simple-list-parents-data"
            >
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title mb-3">Данные о родителях</h5>
                  <div class="row">
                    <div class="col-lg-6">
                      <div>
                        <h5>Отец</h5>
                        <div class="row">
                          <div class="col-4">
                            <div class="mb-3">
                              <label
                                class="form-label"
                                for="id_father_last_name"
                                >Фамилия:</label
                              >
                              <input
                                type="text"
                                class="form-control"
                                name="father_last_name"
                                v-model="currentCadetData.father_last_name"
                                id="id_father_last_name"
                              />
                            </div>
                          </div>
                          <div class="col-4">
                            <div class="mb-3">
                              <label
                                class="form-label"
                                for="id_father_first_name"
                                >Имя</label
                              >
                              <input
                                type="text"
                                class="form-control"
                                name="father_first_name"
                                maxlength="30"
                                id="id_father_first_name"
                                v-model="currentCadetData.father_first_name"
                              />
                            </div>
                          </div>
                          <div class="col-4">
                            <div class="mb-3">
                              <label
                                class="form-label"
                                for="id_father_patronymic"
                                >Отчество</label
                              >
                              <input
                                type="text"
                                class="form-control"
                                name="father_patronymic"
                                maxlength="30"
                                id="id_father_patronymic"
                                v-model="currentCadetData.father_patronymic"
                              />
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-4">
                            <div class="mb-3">
                              <label
                                class="form-label"
                                for="id_father_date_of_birth"
                                >Дата рождения</label
                              >
                              <input
                                type="date"
                                class="form-control"
                                name="father_date_of_birth"
                                id="id_father_date_of_birth"
                                v-model="currentCadetData.father_date_of_birth"
                              />
                            </div>
                          </div>
                          <div class="col-8">
                            <div class="mb-3">
                              <label
                                class="form-label"
                                for="id_father_phone_number"
                                >Номер телефона</label
                              >
                              <input
                                type="text"
                                class="form-control"
                                name="father_phone_number"
                                maxlength="30"
                                id="id_father_phone_number"
                                v-model="currentCadetData.father_phone_number"
                              />
                            </div>
                          </div>
                          <div class="col-4"></div>
                        </div>
                        <div class="row">
                          <div class="col-12">
                            <div class="mb-3">
                              <label
                                class="form-label"
                                for="id_father_place_of_work"
                                >Место работы</label
                              >
                              <textarea
                                class="form-control"
                                name="father_place_of_work"
                                cols="40"
                                rows="2"
                                id="id_father_place_of_work"
                                v-model="currentCadetData.father_place_of_work"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div>
                        <h5>Мать</h5>
                        <div class="row">
                          <div class="col-4">
                            <div class="mb-3">
                              <label
                                class="form-label"
                                for="id_mother_last_name"
                                >Фамилия:</label
                              >
                              <input
                                type="text"
                                class="form-control"
                                name="mother_last_name"
                                maxlength="30"
                                id="id_mother_last_name"
                                v-model="currentCadetData.mother_last_name"
                              />
                            </div>
                          </div>
                          <div class="col-4">
                            <div class="mb-3">
                              <label
                                class="form-label"
                                for="id_mother_first_name"
                                >Имя</label
                              >
                              <input
                                type="text"
                                class="form-control"
                                name="mother_first_name"
                                maxlength="30"
                                id="id_mother_first_name"
                                v-model="currentCadetData.mother_first_name"
                              />
                            </div>
                          </div>
                          <div class="col-4">
                            <div class="mb-3">
                              <label
                                class="form-label"
                                for="id_mother_patronymic"
                                >Отчество</label
                              >
                              <input
                                type="text"
                                class="form-control"
                                name="mother_patronymic"
                                maxlength="30"
                                id="id_mother_patronymic"
                                v-model="currentCadetData.mother_patronymic"
                              />
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-4">
                            <div class="mb-3">
                              <label
                                class="form-label"
                                for="id_mother_date_of_birth"
                                >Дата рождения</label
                              >
                              <input
                                type="date"
                                class="form-control"
                                name="mother_date_of_birth"
                                id="id_mother_date_of_birth"
                                v-model="currentCadetData.mother_date_of_birth"
                              />
                            </div>
                          </div>
                          <div class="col-8">
                            <div class="mb-3">
                              <label
                                class="form-label"
                                for="id_mother_phone_number"
                                >Номер телефона</label
                              >
                              <input
                                type="text"
                                class="form-control"
                                name="mother_phone_number"
                                maxlength="30"
                                id="id_mother_phone_number"
                                v-model="currentCadetData.mother_phone_number"
                              />
                            </div>
                          </div>
                          <div class="col-4"></div>
                        </div>
                        <div class="row">
                          <div class="col-12">
                            <div class="mb-3">
                              <label
                                class="form-label"
                                for="id_father_place_of_work"
                                >Место работы</label
                              >
                              <textarea
                                class="form-control"
                                name="father_place_of_work"
                                cols="40"
                                rows="2"
                                id="id_father_place_of_work"
                                v-model="currentCadetData.mother_place_of_work"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <RankHistoryCadetComponent :cadet-id="$route.params.id" />
            <EducationHistoryCadetComponent :cadet-id="$route.params.id" />
            <ForeignLanguagesCadetComponent :cadet-id="$route.params.id" />
            <ScientificWorksCadetComponent :cadet-id="$route.params.id" />
            <JobCadetComponent :cadet-id="$route.params.id" />
            <ArmyServiceCadetComponent
              :cadet-id="$route.params.id"
              :order-owners-list="orderOwnerList"
            />
            <MVDServiceCadetComponent
              :cadet-id="$route.params.id"
              :order-owners-list="orderOwnerList"
            />
            <RewardCadetComponent
              :cadet-id="$route.params.id"
              :order-owners-list="orderOwnerList"
            />
            <EncouragementCadetComponent
              :cadet-id="$route.params.id"
              :order-owners-list="orderOwnerList"
            />
            <PunishmentCadetComponent
              :cadet-id="$route.params.id"
              :order-owners-list="orderOwnerList"
            />
            <PositionCadetComponent
              :cadet-id="$route.params.id"
              :order-owners-list="orderOwnerList"
            />
            <SpecialityCadetComponent
              :cadet-id="$route.params.id"
              :order-owners-list="orderOwnerList"
            />

            <RelativesCadetComponent :cadet-id="$route.params.id" />
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
                  <a class="p-1 rounded" href="#simple-list-personal-data"
                    >Личные данные</a
                  >
                  <a class="p-1 rounded" href="#simple-list-passport-data"
                    >Пасспортные данные</a
                  >
                  <a class="p-1 rounded" href="#simple-list-academy-data"
                    >Обучение в Академии МВД</a
                  >
                  <a
                    class="p-1 rounded"
                    href="#simple-list-military-office-data"
                    >Воинский учет</a
                  >
                  <a class="p-1 rounded" href="#simple-list-parents-data"
                    >Данные о родителях</a
                  >
                  <a class="p-1 rounded" href="#simple-list-rank-data"
                    >Присвоение званий</a
                  >

                  <a class="p-1 rounded" href="#simple-list-education-data"
                    >Образование</a
                  >
                  <a
                    class="p-1 rounded"
                    href="#simple-list-foreign-language-data"
                    >Иностранные языки</a
                  >
                  <a
                    class="p-1 rounded"
                    href="#simple-list-scientific-works-data"
                    >Научные труды и изобретения</a
                  >
                  <a class="p-1 rounded" href="#simple-list-job-data"
                    >Трудовая деятельность</a
                  >
                  <a class="p-1 rounded" href="#simple-list-army-service-data"
                    >Прохождение службы в ВС РБ</a
                  >
                  <a class="p-1 rounded" href="#simple-list-mvd-service-data"
                    >Прохождение службы в МВД РБ</a
                  >
                  <a class="p-1 rounded" href="#simple-list-rewards-data"
                    >Награды</a
                  >
                  <a class="p-1 rounded" href="#simple-list-encouragements-data"
                    >Поощрения</a
                  >
                  <a class="p-1 rounded" href="#simple-list-punishments-data"
                    >Дисциплинарные взыскания</a
                  >
                  <a class="p-1 rounded" href="#simple-list-positions-data"
                    >Должности</a
                  >
                  <a class="p-1 rounded" href="#simple-list-specialities-data"
                    >Специальности</a
                  >
                  <a class="p-1 rounded" href="#simple-list-marital-status-data"
                    >Семейное положение</a
                  >
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
import getCadetAPIInstance from "@/api/cadet/cadetAPI"
import getEncouragementAPIInstance from "@/api/cadet/encouragementAPI"
import getPunishmentAPIInstance from "@/api/cadet/punishmentAPI"
import getRankHistoryAPIInstance from "@/api/cadet/rankHistoryAPI"
import getRankAPIInstance from "@/api/cadet/rankAPI"
import getPositionHistoryAPIInstance from "@/api/cadet/positionHistoryAPI"
import getSpecialityHistoryAPIInstance from "@/api/cadet/specialityHistoryAPI"
import getJobHistoryAPIInstance from "@/api/cadet/jobHistoryAPI"
import getRewardHistoryAPIInstance from "@/api/cadet/rewardHistoryAPI"
import getArmyHistoryAPIInstance from "@/api/cadet/armyHistoryAPI"
import getMVDHistoryAPIInstance from "@/api/cadet/mvdHistoryAPI"
import getCadetCategoryAPIAPIInstance from "@/api/cadet/cadetCategoryAPI"
import getOrderOwnerAPIInstance from "@/api/cadet/orderOwnerAPI"
import getSubdivisionAPIInstance from "@/api/cadet/subdivisionAPI"
import getGroupAPIInstance from "@/api/cadet/groupAPI"
import getPassportIssueAuthorityAPIInstance from "@/api/cadet/passportIssueAuthorityAPI"
import getSpecializationAPIInstance from "@/api/cadet/specializationAPI"
import getDirectionOrdAPIInstance from "@/api/cadet/directionOrdAPI"
import { debounce } from "lodash/function"
import { RankHistoryCadetComponent } from "@/components/cadet/rank"
import { EncouragementCadetComponent } from "@/components/cadet/encouragement"
import { EducationHistoryCadetComponent } from "@/components/cadet/education"
import { ForeignLanguagesCadetComponent } from "@/components/cadet/languages"
import { ScientificWorksCadetComponent } from "@/components/cadet/scientific_works"
import { JobCadetComponent } from "@/components/cadet/job"
import {
  ArmyServiceCadetComponent,
  MVDServiceCadetComponent,
} from "@/components/cadet/service"
import { RewardCadetComponent } from "@/components/cadet/reward"
import { PunishmentCadetComponent } from "@/components/cadet/punishment"
import { PositionCadetComponent } from "@/components/cadet/position"
import { SpecialityCadetComponent } from "@/components/cadet/speciality"
import RelativesCadetComponent from "@/components/cadet/relatives/RelativesCadetComponent.vue"
import "vue-select/dist/vue-select.css"

export default {
  name: "CadetUpdateView",
  components: {
    RankHistoryCadetComponent,
    EncouragementCadetComponent,
    EducationHistoryCadetComponent,
    ForeignLanguagesCadetComponent,
    ScientificWorksCadetComponent,
    JobCadetComponent,
    ArmyServiceCadetComponent,
    MVDServiceCadetComponent,
    RewardCadetComponent,
    PunishmentCadetComponent,
    PositionCadetComponent,
    SpecialityCadetComponent,
    RelativesCadetComponent,
  },
  data() {
    return {
      options: [],
      selected: "",
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
        specialization: "",
        direction_ord: "",
        component_organ: "",
        entrance_category: "",
        arrived_from_go_rovd: "",
        social_status: "",
        region_for_medical_examination: "",
        military_office: "",
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
      cadetCategoryList: { count: "", results: [], previous: null, next: null },
      subdivisionList: { count: "", results: [], previous: null, next: null },
      groupList: { count: "", results: [], previous: null, next: null },
      encouragementList: { count: "", results: [], previous: null, next: null },
      orderOwnerList: { count: "", results: [], previous: null, next: null },
      encouragementKindList: {
        count: "",
        results: [],
        previous: null,
        next: null,
      },
      punishmentList: { count: "", results: [], previous: null, next: null },
      rankHistoryList: { count: "", results: [], previous: null, next: null },
      rankList: { count: "", results: [], previous: null, next: null },
      positionHistoryList: {
        count: "",
        results: [],
        previous: null,
        next: null,
      },
      specialityHistoryList: {
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
      jobHistoryList: {
        count: "",
        results: [],
        previous: null,
        next: null,
      },
      rewardHistoryList: {
        count: "",
        results: [],
        previous: null,
        next: null,
      },
      armyHistoryList: {
        count: "",
        results: [],
        previous: null,
        next: null,
      },
      mvdHistoryList: {
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
      cadetAPIInstance: getCadetAPIInstance(),
      cadetCategoryAPIInstance: getCadetCategoryAPIAPIInstance(),
      encouragementAPIInstance: getEncouragementAPIInstance(),
      punishmentAPIInstance: getPunishmentAPIInstance(),
      rankHistoryAPIInstance: getRankHistoryAPIInstance(),
      rankAPIInstance: getRankAPIInstance(),
      positionHistoryAPIInstance: getPositionHistoryAPIInstance(),
      specialityHistoryAPIInstance: getSpecialityHistoryAPIInstance(),
      specializationAPIInstance: getSpecializationAPIInstance(),
      directionOrdAPIInstance: getDirectionOrdAPIInstance(),
      jobHistoryAPIInstance: getJobHistoryAPIInstance(),
      rewardHistoryAPIInstance: getRewardHistoryAPIInstance(),
      armyHistoryAPIInstance: getArmyHistoryAPIInstance(),
      mvdHistoryAPIInstance: getMVDHistoryAPIInstance(),
      orderOwnerAPIInstance: getOrderOwnerAPIInstance(),
      subdivisionAPIInstance: getSubdivisionAPIInstance(),
      groupAPIInstance: getGroupAPIInstance(),
      passportIssueAuthorityAPIInstance: getPassportIssueAuthorityAPIInstance(),
    }
  },
  async created() {
    await this.loadData(this.$route.params.id)
  },
  methods: {
    async loadData(cadetId) {
      const [
        cadet,
        cadetCategories,
        orderOwners,
        subdivisions,
        groups,
        passportIssueAuthorities,
        specializations,
        directionsOrd,
      ] = await Promise.all([
        this.getCadetData(cadetId),
        this.getLoadListFunction("cadetCategory")(cadetId),
        this.getLoadListFunction("orderOwner")(),
        this.getLoadListFunction("subdivision")(),
        this.getLoadListFunction("group")(),
        this.getLoadListFunction("passportIssueAuthority")(),
        this.getLoadListFunction("specialization")(),
        this.getLoadListFunction("directionOrd")(),
      ]).catch(() => (this.isError = true))
      this.currentCadetData = cadet
      this.cadetCategoryList = cadetCategories
      this.orderOwnerList = orderOwners
      this.subdivisionList = subdivisions
      this.groupList = groups
      this.passportIssueAuthorityList = passportIssueAuthorities
      this.specializationList = specializations
      this.directionOrdList = directionsOrd
    },
    async fetchOptions(search, loading) {
      if (search.length) {
        loading(true)
        this.cadetAPIInstance.searchObj.last_name_rus__icontains = search
        const res = await this.cadetAPIInstance.getItemsList("token is here!!!")
        const data = await res.data.results
        let data_str = []
        data.map((item) => data_str.push(item.last_name_rus))
        console.log("data", data_str)
        this.options = data_str
        loading(false)
      }
    },
    async getCadetData(cadetId) {
      const res = await this.cadetAPIInstance.getItemData(
        "token is here!!!",
        cadetId,
      )
      return res.data
    },
    getLoadListFunction(modelName) {
      return async (cadetId) => {
        if (cadetId) {
          this[`${modelName}APIInstance`].searchObj.cadet = cadetId
        }
        const res =
          await this[`${modelName}APIInstance`].getItemsList("token is here!!!")
        return res.data
      }
    },
    getPaginatorUpdateFunction(modelName) {
      return async (url) => {
        try {
          const response = await this[`${modelName}APIInstance`].updateList(
            url,
            "this.userToken",
          )
          this[`${modelName}List`] = await response.data
        } catch (error) {
          this.isError = true
        }
      }
    },
    debouncedUpdate: debounce(async function () {
      this.isLoading = true
      try {
        await this.cadetAPIInstance.updateItem(
          "token is here!!!",
          this.currentCadetData,
        )
      } catch (e) {
        this.isError = true
      } finally {
        this.isLoading = false
      }
    }, 500),
  },
  computed: {
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
    orderedOrderOwners() {
      return this.orderOwnerList.results
    },
    orderedSpecializations() {
      return this.specializationList.results
    },
    orderedDirectionsOrd() {
      return this.directionOrdList.results
    },
    orderedPassportIssueAuthorities() {
      return this.passportIssueAuthorityList.results
    },
  },
  watch: {
    currentCadetData: {
      handler(newValue, oldValue) {
        this.debouncedUpdate()
      },
      deep: true,
    },
  },
}
</script>

<style scoped></style>
