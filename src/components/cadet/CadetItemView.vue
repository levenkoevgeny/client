<template>
  <div v-if="isLoading">Loading...</div>
  <div v-else>
    <div class="container">
      <div class="mb-4"></div>
      <div class="row">
        <div class="col-md-4">
          <div>
            <img
              v-if="currentCadet.photo"
              :src="currentCadet.photo"
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
        <div class="col-md-8">
          <div>
            <div class="card-body">
              <h1 class="card-title">
                {{ currentCadet.last_name_rus || "Нет данных" }}
                {{ currentCadet.first_name_rus || "Нет данных" }}
                {{ currentCadet.patronymic_rus || "Нет данных" }}
              </h1>
              <h5 class="my-0">
                Дата рождения - {{ currentCadet.date_of_birth || "Нет данных" }}
              </h5>
              <br />
              <h5 class="my-0">
                Адрес - {{ currentCadet.address || "Нет данных" }}
              </h5>
              <br />
              <h5 class="my-0">
                Пасспорт - {{ currentCadet.passport_number || "Нет данных" }},
                выдан -
                <span v-if="currentCadet.passport_issue_authority">
                  {{
                    currentCadet.passport_issue_authority
                      .passport_issue_authority
                  }}
                </span>
                <span v-else>Нет данных</span>
              </h5>
              <br />
              <h5 class="my-0">
                Срок действия -
                {{ currentCadet.passport_validity_period || "Нет данных" }}
              </h5>
              <br />
            </div>
          </div>
        </div>
      </div>
      <div class="my-3"></div>
      <div class="row">
        <div class="col-12">
          <div class="card shadow-sm p-3 mb-3 bg-body-tertiary rounded">
            <div class="card-body">
              <h5 class="card-title">
                <font-awesome-icon :icon="['fas', 'user-graduate']" />
                Сведения об образовании
              </h5>
              УСО - {{ currentCadet.school_graduated || "Нет данных" }}<br />
              Окончил -
              {{ currentCadet.school_graduating_date || "Нет данных" }}<br />
              Средний балл аттестата -
              {{ currentCadet.school_average_score || "Нет данных" }}<br />
              Специальность на которой обучается -
              {{ currentCadet.speciality || "Нет данных" }}<br />
              Группа - {{ currentCadet.group || "Нет данных" }}<br />
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-12">
          <div class="card shadow-sm p-3 mb-3 bg-body-tertiary rounded">
            <div class="card-body">
              <h5 class="card-title">
                <font-awesome-icon :icon="['fas', 'person-breastfeeding']" />
                Сведения о родителях
              </h5>
              <div class="row">
                <div class="col-lg-6">
                  Мать - {{ currentCadet.get_mother_full_name || "Нет данных" }}
                  <br />
                  Дата рождения -
                  {{ currentCadet.mother_date_of_birth || "Нет данных" }} <br />
                  Место работы, должность -
                  {{ currentCadet.mother_place_of_work || "Нет данных" }} <br />
                  Номер телефона -
                  {{ currentCadet.mother_phone_number || "Нет данных" }} <br />
                  <hr class="divider d-lg-none" />
                </div>
                <div class="col-lg-6">
                  Отец - {{ currentCadet.get_father_full_name || "Нет данных" }}
                  <br />
                  Дата рождения -
                  {{ currentCadet.father_date_of_birth || "Нет данных" }} <br />
                  Место работы, должность -
                  {{ currentCadet.father_place_of_work || "Нет данных" }} <br />
                  Номер телефона -
                  {{ currentCadet.father_phone_number || "Нет данных" }} <br />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--      Кадры-->
      <div class="mb-2">
        <h3>Кадровый блок</h3>
        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <button
              class="nav-link active"
              id="education-tab"
              data-bs-toggle="tab"
              data-bs-target="#education-tab-pane"
              type="button"
              role="tab"
              aria-controls="education-tab-pane"
              aria-selected="true"
            >
              <font-awesome-icon :icon="['fas', 'hand-holding-dollar']" />&nbsp;
              Образование
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link"
              id="punishment-tab"
              data-bs-toggle="tab"
              data-bs-target="#punishment-tab-pane"
              type="button"
              role="tab"
              aria-controls="punishment-tab-pane"
              aria-selected="true"
            >
              <font-awesome-icon :icon="['fas', 'hand-holding-dollar']" />&nbsp;
              Взыскания
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link"
              id="encouragement-tab"
              data-bs-toggle="tab"
              data-bs-target="#encouragement-tab-pane"
              type="button"
              role="tab"
              aria-controls="encouragement-tab-pane"
              aria-selected="false"
            >
              <font-awesome-icon
                :icon="['fas', 'credit-card']"
              />&nbsp;Поощрения
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link"
              id="rank-tab"
              data-bs-toggle="tab"
              data-bs-target="#rank-tab-pane"
              type="button"
              role="tab"
              aria-controls="rank-tab-pane"
              aria-selected="false"
            >
              <font-awesome-icon :icon="['far', 'star']" />&nbsp;Звания
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link"
              id="rank-tab"
              data-bs-toggle="tab"
              data-bs-target="#position-tab-pane"
              type="button"
              role="tab"
              aria-controls="position-tab-pane"
              aria-selected="false"
            >
              <font-awesome-icon :icon="['far', 'star']" />&nbsp;Должности
            </button>
          </li>
        </ul>
        <div class="tab-content" id="myTabContent">
          <div
            class="tab-pane fade show active"
            id="education-tab-pane"
            role="tabpanel"
            aria-labelledby="education-tab"
            tabindex="0"
          >
            <div class="card shadow-sm p-3 mb-3 bg-body-tertiary rounded">
              <div class="card-body">
                <div
                  style="max-height: 200px; overflow: auto"
                  v-if="orderedEducationHistory.length > 0"
                >
                  <table class="table table-hover">
                    <thead style="position: sticky; top: 0">
                      <tr>
                        <th>Уровень</th>
                        <th>Наименование учебного учреждения</th>
                        <th>Начало обучения</th>
                        <th>Окончание обучекния</th>
                        <th>Средний бал</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr
                        v-for="education in orderedEducationHistory"
                        :key="education.id"
                        class="align-baseline"
                      >
                        <td>
                          {{
                            education.get_education_level_str || "Нет данных"
                          }}
                        </td>
                        <td>
                          {{ education.education_graduated || "Нет данных" }}
                        </td>
                        <td>
                          {{
                            education.education_graduating_start_year ||
                            "Нет данных"
                          }}
                        </td>
                        <td>
                          {{ education.education_graduating_start_year }}
                        </td>
                        <td>
                          {{ education.education_average_score }}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <PaginatorView
                    :update-paginator="getPaginatorUpdateFunction('punishment')"
                    :list-next="punishmentList.next"
                    :list-previous="punishmentList.previous"
                    v-if="punishmentList.previous || punishmentList.next"
                  />
                </div>
                <div class="fs-5" v-else>Записей нет</div>
              </div>
            </div>
          </div>
          <div
            class="tab-pane fade show"
            id="punishment-tab-pane"
            role="tabpanel"
            aria-labelledby="punishment-tab"
            tabindex="0"
          >
            <div class="card shadow-sm p-3 mb-3 bg-body-tertiary rounded">
              <div class="card-body">
                <div
                  style="max-height: 200px; overflow: auto"
                  v-if="orderedPunishments.length > 0"
                >
                  <table class="table table-hover">
                    <thead style="position: sticky; top: 0">
                      <tr>
                        <th>Вид взыскания</th>
                        <th>Дата наложения</th>
                        <th>Дата истечения</th>
                        <th>Доп. информация</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr
                        v-for="punishment in orderedPunishments"
                        :key="punishment.id"
                        class="align-baseline"
                      >
                        <td>
                          {{
                            punishment.get_punishment_kind_str || "Нет данных"
                          }}
                        </td>
                        <td>
                          {{ punishment.punishment_start_date || "Нет данных" }}
                        </td>
                        <td>
                          {{
                            punishment.punishment_expiration_date ||
                            "Нет данных"
                          }}
                        </td>
                        <td>
                          {{ punishment.punishment_extra_data }}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <PaginatorView
                    :update-paginator="getPaginatorUpdateFunction('punishment')"
                    :list-next="punishmentList.next"
                    :list-previous="punishmentList.previous"
                    v-if="punishmentList.previous || punishmentList.next"
                  />
                </div>
                <div class="fs-5" v-else>Записей нет</div>
              </div>
            </div>
          </div>
          <div
            class="tab-pane fade"
            id="encouragement-tab-pane"
            role="tabpanel"
            aria-labelledby="encouragement-tab"
            tabindex="0"
          >
            <div class="card shadow-sm p-3 mb-3 bg-body-tertiary rounded">
              <div class="card-body">
                <div
                  style="max-height: 200px; overflow: auto"
                  v-if="orderedEncouragements.length > 0"
                >
                  <table class="table table-hover">
                    <thead style="position: sticky; top: 0">
                      <tr>
                        <th>Вид поощрения</th>
                        <th>Дата</th>
                        <th>Доп. информация</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr
                        v-for="encouragement in orderedEncouragements"
                        :key="encouragement.id"
                        style="cursor: pointer"
                        class="align-baseline"
                      >
                        <td>
                          {{
                            encouragement.get_encouragement_kind_str ||
                            "Нет данных"
                          }}
                        </td>
                        <td>
                          {{ encouragement.encouragement_date || "Нет данных" }}
                        </td>
                        <td>
                          {{ encouragement.encouragement_extra_data }}
                        </td>
                        <td class="text-end"></td>
                      </tr>
                    </tbody>
                  </table>
                  <PaginatorView
                    :update-paginator="
                      getPaginatorUpdateFunction('encouragement')
                    "
                    :list-next="encouragementList.next"
                    :list-previous="encouragementList.previous"
                    v-if="encouragementList.previous || encouragementList.next"
                  />
                </div>
                <div class="fs-5" v-else>Записей нет</div>
              </div>
            </div>
          </div>
          <div
            class="tab-pane fade"
            id="rank-tab-pane"
            role="tabpanel"
            aria-labelledby="rank-tab"
            tabindex="0"
          >
            <div class="card shadow-sm p-3 mb-3 bg-body-tertiary rounded">
              <div class="card-body">
                <div
                  style="max-height: 200px; overflow: auto"
                  v-if="orderedRankHistory.length > 0"
                >
                  <table class="table table-hover">
                    <thead>
                      <tr>
                        <th>Звание</th>
                        <th>Дата присвоения</th>
                        <th>Доп. информация</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr
                        v-for="rank in orderedRankHistory"
                        :key="rank.id"
                        class="align-baseline"
                      >
                        <td>{{ rank.get_rank_str || "Нет данных" }}</td>
                        <td>{{ rank.rank_date || "Нет данных" }}</td>
                        <td>{{ rank.extra_data || "Нет данных" }}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div class="fs-5" v-else>Записей нет</div>
                <PaginatorView
                  :update-paginator="getPaginatorUpdateFunction('rankHistory')"
                  :list-next="rankHistoryList.next"
                  :list-previous="rankHistoryList.previous"
                  v-if="rankHistoryList.previous || rankHistoryList.next"
                />
              </div>
            </div>
          </div>
          <div
            class="tab-pane fade"
            id="position-tab-pane"
            role="tabpanel"
            aria-labelledby="position-tab"
            tabindex="0"
          >
            <div class="card shadow-sm p-3 mb-3 bg-body-tertiary rounded">
              <div class="card-body">
                <div
                  style="max-height: 200px; overflow: auto"
                  v-if="orderedPositionHistory.length > 0"
                >
                  <table class="table table-hover">
                    <thead>
                      <tr>
                        <th>Должность</th>
                        <th>Дата назначения</th>
                        <th>Дата приказа</th>
                        <th>Номер приказа</th>
                        <th>Чей приказ</th>
                        <th>Фабула</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr
                        v-for="position in orderedPositionHistory"
                        :key="position.id"
                        class="align-baseline"
                      >
                        <td>{{ position.get_position_str || "Нет данных" }}</td>
                        <td>{{ position.position_date || "Нет данных" }}</td>
                        <td>
                          {{ position.position_order_date || "Нет данных" }}
                        </td>
                        <td>
                          {{ position.position_order_number || "Нет данных" }}
                        </td>
                        <td>
                          {{
                            position.get_position_order_owner_str ||
                            "Нет данных"
                          }}
                        </td>
                        <td>
                          {{ position.position_extra_data || "Нет данных" }}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div class="fs-5" v-else>Записей нет</div>
                <PaginatorView
                  :update-paginator="
                    getPaginatorUpdateFunction('positionHistory')
                  "
                  :list-next="positionHistoryList.next"
                  :list-previous="positionHistoryList.previous"
                  v-if="
                    positionHistoryList.previous || positionHistoryList.next
                  "
                />
              </div>
            </div>
          </div>
        </div>

        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <button
              class="nav-link active"
              id="speciality-tab"
              data-bs-toggle="tab"
              data-bs-target="#speciality-tab-pane"
              type="button"
              role="tab"
              aria-controls="speciality-tab-pane"
              aria-selected="false"
            >
              <font-awesome-icon
                :icon="['fas', 'user-graduate']"
              />&nbsp;Специальности
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link"
              id="job-tab"
              data-bs-toggle="tab"
              data-bs-target="#job-tab-pane"
              type="button"
              role="tab"
              aria-controls="job-tab-pane"
              aria-selected="false"
            >
              <font-awesome-icon :icon="['fas', 'user-graduate']" />&nbsp;Работа
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link"
              id="army-tab"
              data-bs-toggle="tab"
              data-bs-target="#army-tab-pane"
              type="button"
              role="tab"
              aria-controls="army-tab-pane"
              aria-selected="false"
            >
              <font-awesome-icon :icon="['fas', 'user-graduate']" />&nbsp;Служба
              в армии
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link"
              id="mvd-tab"
              data-bs-toggle="tab"
              data-bs-target="#mvd-tab-pane"
              type="button"
              role="tab"
              aria-controls="mvd-tab-pane"
              aria-selected="false"
            >
              <font-awesome-icon :icon="['fas', 'user-graduate']" />&nbsp;Служба
              в МВД
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link"
              id="rewards-tab"
              data-bs-toggle="tab"
              data-bs-target="#rewards-tab-pane"
              type="button"
              role="tab"
              aria-controls="rewards-tab-pane"
              aria-selected="false"
            >
              <font-awesome-icon
                :icon="['fas', 'user-graduate']"
              />&nbsp;Награды
            </button>
          </li>
        </ul>
        <div class="tab-content" id="myTabContent">
          <div
            class="tab-pane fade show active"
            id="speciality-tab-pane"
            role="tabpanel"
            aria-labelledby="speciality-tab"
            tabindex="0"
          >
            <div class="card shadow-sm p-3 mb-3 bg-body-tertiary rounded">
              <div class="card-body">
                <div
                  style="max-height: 200px; overflow: auto"
                  v-if="orderedSpecialityHistory.length > 0"
                >
                  <table class="table table-hover">
                    <thead>
                      <tr>
                        <th scope="col">Специальность</th>
                        <th scope="col">Дата приказа</th>
                        <th scope="col">Номер приказа</th>
                        <th scope="col">Чей приказ</th>
                        <th scope="col">Фабула</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr
                        v-for="specialityHistory in orderedSpecialityHistory"
                        :key="specialityHistory.id"
                        class="align-baseline"
                      >
                        <td>
                          {{
                            specialityHistory.get_speciality_str || "Нет данных"
                          }}
                        </td>
                        <td>
                          {{
                            specialityHistory.speciality_order_date ||
                            "Нет данных"
                          }}
                        </td>
                        <td>
                          {{
                            specialityHistory.speciality_order_number ||
                            "Нет данных"
                          }}
                        </td>
                        <td>
                          {{
                            specialityHistory.get_position_order_owner_str ||
                            "Нет данных"
                          }}
                        </td>
                        <td>
                          {{
                            specialityHistory.encouragement_extra_data ||
                            "Нет данных"
                          }}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div class="fs-5" v-else>Записей нет</div>
                <PaginatorView
                  :update-paginator="
                    getPaginatorUpdateFunction('specialityHistory')
                  "
                  :list-next="specialityHistoryList.next"
                  :list-previous="specialityHistoryList.previous"
                  v-if="
                    specialityHistoryList.previous || specialityHistoryList.next
                  "
                />
              </div>
            </div>
          </div>
          <div
            class="tab-pane fade"
            id="job-tab-pane"
            role="tabpanel"
            aria-labelledby="job-tab"
            tabindex="0"
          >
            <div class="card shadow-sm p-3 mb-3 bg-body-tertiary rounded">
              <div class="card-body">
                <div
                  style="max-height: 200px; overflow: auto"
                  v-if="orderedJobHistory.length > 0"
                >
                  <table class="table table-hover">
                    <thead>
                      <tr>
                        <th scope="col">Должность</th>
                        <th scope="col">Начало работы</th>
                        <th scope="col">Окончание работы</th>
                        <th scope="col">Организация</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr
                        v-for="jobHistory in orderedJobHistory"
                        :key="jobHistory.id"
                        class="align-baseline"
                      >
                        <td>
                          {{ jobHistory.job_position || "Нет данных" }}
                        </td>
                        <td>
                          {{ jobHistory.job_start_year || "Нет данных" }}
                        </td>
                        <td>
                          {{ jobHistory.job_end_year || "Нет данных" }}
                        </td>
                        <td>
                          {{ jobHistory.organisation_name || "Нет данных" }}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div class="fs-5" v-else>Записей нет</div>
                <PaginatorView
                  :update-paginator="getPaginatorUpdateFunction('jobHistory')"
                  :list-next="jobHistoryList.next"
                  :list-previous="jobHistoryList.previous"
                  v-if="jobHistoryList.previous || jobHistoryList.next"
                />
              </div>
            </div>
          </div>
          <div
            class="tab-pane fade"
            id="army-tab-pane"
            role="tabpanel"
            aria-labelledby="army-tab"
            tabindex="0"
          >
            <div class="card shadow-sm p-3 mb-3 bg-body-tertiary rounded">
              <div class="card-body">
                <div
                  style="max-height: 200px; overflow: auto"
                  v-if="orderedArmyHistory.length > 0"
                >
                  <table class="table table-hover">
                    <thead>
                      <tr>
                        <th scope="col">Место прохождения службы</th>
                        <th scope="col">Начало</th>
                        <th scope="col">Окончание</th>
                        <th scope="col">Должность</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr
                        v-for="armyHistory in orderedArmyHistory"
                        :key="armyHistory.id"
                        class="align-baseline"
                      >
                        <td>
                          {{
                            armyHistory.military_organization || "Нет данных"
                          }}
                        </td>
                        <td>
                          {{
                            armyHistory.military_service_start || "Нет данных"
                          }}
                        </td>
                        <td>
                          {{ armyHistory.military_service_end || "Нет данных" }}
                        </td>
                        <td>
                          {{ armyHistory.position || "Нет данных" }}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div class="fs-5" v-else>Записей нет</div>
                <PaginatorView
                  :update-paginator="getPaginatorUpdateFunction('armyHistory')"
                  :list-next="armyHistoryList.next"
                  :list-previous="armyHistoryList.previous"
                  v-if="armyHistoryList.previous || armyHistoryList.next"
                />
              </div>
            </div>
          </div>
          <div
            class="tab-pane fade"
            id="mvd-tab-pane"
            role="tabpanel"
            aria-labelledby="mvd-tab"
            tabindex="0"
          >
            <div class="card shadow-sm p-3 mb-3 bg-body-tertiary rounded">
              <div class="card-body">
                <div
                  style="max-height: 200px; overflow: auto"
                  v-if="orderedMVDHistory.length > 0"
                >
                  <table class="table table-hover">
                    <thead>
                      <tr>
                        <th scope="col">Место прохождения службы</th>
                        <th scope="col">Начало</th>
                        <th scope="col">Окончание</th>
                        <th scope="col">Должность</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr
                        v-for="mvdHistory in orderedMVDHistory"
                        :key="mvdHistory.id"
                        class="align-baseline"
                      >
                        <td>
                          {{ mvdHistory.mvd_organization || "Нет данных" }}
                        </td>
                        <td>
                          {{ mvdHistory.mvd_service_start || "Нет данных" }}
                        </td>
                        <td>
                          {{ mvdHistory.mvd_service_end || "Нет данных" }}
                        </td>
                        <td>
                          {{ mvdHistory.position || "Нет данных" }}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div class="fs-5" v-else>Записей нет</div>
                <PaginatorView
                  :update-paginator="
                    getPaginatorUpdateFunction('jobHistoryList')
                  "
                  :list-next="jobHistoryList.next"
                  :list-previous="jobHistoryList.previous"
                  v-if="jobHistoryList.previous || jobHistoryList.next"
                />
              </div>
            </div>
          </div>
          <div
            class="tab-pane fade"
            id="rewards-tab-pane"
            role="tabpanel"
            aria-labelledby="rewards-tab"
            tabindex="0"
          >
            <div class="card shadow-sm p-3 mb-3 bg-body-tertiary rounded">
              <div class="card-body">
                <div
                  style="max-height: 200px; overflow: auto"
                  v-if="orderedRewardHistory.length > 0"
                >
                  <table class="table table-hover">
                    <thead>
                      <tr>
                        <th scope="col">Награда</th>
                        <th scope="col">Дата присвоения</th>
                        <th scope="col">За что награжден</th>
                        <th scope="col">Основание</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr
                        v-for="reward in orderedRewardHistory"
                        :key="reward.id"
                        class="align-baseline"
                      >
                        <td>
                          {{ reward.get_reward_str || "Нет данных" }}
                        </td>
                        <td>
                          {{ reward.reward_date || "Нет данных" }}
                        </td>
                        <td>
                          {{ reward.reason || "Нет данных" }}
                        </td>
                        <td>
                          {{ reward.order_number || "Нет данных" }}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div class="fs-5" v-else>Записей нет</div>
                <PaginatorView
                  :update-paginator="
                    getPaginatorUpdateFunction('jobHistoryList')
                  "
                  :list-next="jobHistoryList.next"
                  :list-previous="jobHistoryList.previous"
                  v-if="jobHistoryList.previous || jobHistoryList.next"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--     Идеология -->
      <div class="mb-2">
        <h3>Идеология</h3>
        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <button
              class="nav-link active"
              id="punishment-tab"
              data-bs-toggle="tab"
              data-bs-target="#"
              type="button"
              role="tab"
              aria-controls="punishment-tab-pane"
              aria-selected="true"
            >
              <font-awesome-icon :icon="['fas', 'hand-holding-dollar']" />&nbsp;
              Вкладка 1
            </button>
          </li>
        </ul>
        <div class="tab-content" id="myTabContent">
          <div
            class="tab-pane fade show active"
            id="punishment-tab-pane"
            role="tabpanel"
            aria-labelledby="punishment-tab"
            tabindex="0"
          ></div>
        </div>
      </div>
      <!--     УМУ -->
      <div class="mb-2">
        <h3>УМУ</h3>
        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <button
              class="nav-link active"
              id="punishment-tab"
              data-bs-toggle="tab"
              data-bs-target="#punishment-tab-pane"
              type="button"
              role="tab"
              aria-controls="punishment-tab-pane"
              aria-selected="true"
            >
              <font-awesome-icon :icon="['fas', 'hand-holding-dollar']" />&nbsp;
              Вкладка 1
            </button>
          </li>
        </ul>
        <div class="tab-content" id="myTabContent">
          <div
            class="tab-pane fade show active"
            id="punishment-tab-pane"
            role="tabpanel"
            aria-labelledby="punishment-tab"
            tabindex="0"
          ></div>
        </div>
      </div>
      <!--     Научная работа -->
      <div class="mb-2">
        <h3>Научная работа</h3>
        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <button
              class="nav-link active"
              id="punishment-tab"
              data-bs-toggle="tab"
              data-bs-target="#punishment-tab-pane"
              type="button"
              role="tab"
              aria-controls="punishment-tab-pane"
              aria-selected="true"
            >
              <font-awesome-icon :icon="['fas', 'hand-holding-dollar']" />&nbsp;
              Вкладка 1
            </button>
          </li>
        </ul>
        <div class="tab-content" id="myTabContent">
          <div
            class="tab-pane fade show active"
            id="punishment-tab-pane"
            role="tabpanel"
            aria-labelledby="punishment-tab"
            tabindex="0"
          ></div>
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
import getPositionHistoryAPIInstance from "@/api/cadet/positionHistoryAPI"
import getSpecialityHistoryAPIInstance from "@/api/cadet/specialityHistoryAPI"
import getEducationHistoryAPIInstance from "@/api/cadet/educationHistoryAPI"
import getJobHistoryAPIInstance from "@/api/cadet/jobHistoryAPI"
import getRewardHistoryAPIInstance from "@/api/cadet/rewardHistoryAPI"
import getArmyHistoryAPIInstance from "@/api/cadet/armyHistoryAPI"
import getMVDHistoryAPIInstance from "@/api/cadet/mvdHistoryAPI"

import { PaginatorView } from "@/components/common"

export default {
  name: "CadetItemView",
  components: { PaginatorView },
  data() {
    return {
      currentCadet: {
        passport_issue_authority: {
          passport_issue_authority: "",
        },
      },
      encouragementList: { count: "", results: [], previous: null, next: null },
      encouragementKindList: {
        count: "",
        results: [],
        previous: null,
        next: null,
      },
      punishmentList: { count: "", results: [], previous: null, next: null },
      rankHistoryList: { count: "", results: [], previous: null, next: null },
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
      educationHistoryList: {
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

      isLoading: true,
      isError: false,
      BACKEND_PROTOCOL: process.env.VUE_APP_BACKEND_PROTOCOL,
      BACKEND_HOST: process.env.VUE_APP_BACKEND_HOST,
      BACKEND_PORT: process.env.VUE_APP_BACKEND_PORT,
      cadetAPIInstance: getCadetAPIInstance(),
      encouragementAPIInstance: getEncouragementAPIInstance(),
      punishmentAPIInstance: getPunishmentAPIInstance(),
      rankHistoryAPIInstance: getRankHistoryAPIInstance(),
      positionHistoryAPIInstance: getPositionHistoryAPIInstance(),
      specialityHistoryAPIInstance: getSpecialityHistoryAPIInstance(),
      educationHistoryAPIInstance: getEducationHistoryAPIInstance(),
      jobHistoryAPIInstance: getJobHistoryAPIInstance(),
      rewardHistoryAPIInstance: getRewardHistoryAPIInstance(),
      armyHistoryAPIInstance: getArmyHistoryAPIInstance(),
      mvdHistoryAPIInstance: getMVDHistoryAPIInstance(),
    }
  },
  async created() {
    await this.loadData(this.$route.params.id)
  },
  methods: {
    async loadData(cadetId) {
      this.isLoading = true
      this.isError = false
      try {
        const [
          cadet,
          encouragements,
          punishments,
          ranks,
          positions,
          specialities,
          educations,
          jobs,
          rewards,
          armyServices,
          mvdServices,
        ] = await Promise.all([
          this.getCadetData(cadetId),
          this.getLoadListFunction("encouragement")(cadetId),
          this.getLoadListFunction("punishment")(cadetId),
          this.getLoadListFunction("rankHistory")(cadetId),
          this.getLoadListFunction("positionHistory")(cadetId),
          this.getLoadListFunction("specialityHistory")(cadetId),
          this.getLoadListFunction("educationHistory")(cadetId),
          this.getLoadListFunction("jobHistory")(cadetId),
          this.getLoadListFunction("rewardHistory")(cadetId),
          this.getLoadListFunction("armyHistory")(cadetId),
          this.getLoadListFunction("mvdHistory")(cadetId),
        ]).catch(() => (this.isError = true))
        this.currentCadet = cadet
        this.encouragementList = encouragements
        this.punishmentList = punishments
        this.rankHistoryList = ranks
        this.positionHistoryList = positions
        this.specialityHistoryList = specialities
        this.educationHistoryList = educations
        this.jobHistoryList = jobs
        this.rewardHistoryList = rewards
        this.armyHistoryList = armyServices
        this.mvdHistoryList = mvdServices
      } catch (e) {
        this.isError = true
      } finally {
        this.isLoading = false
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
        this[`${modelName}APIInstance`].searchObj.cadet = cadetId
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
  },
  computed: {
    orderedEncouragements() {
      return this.encouragementList.results
    },
    orderedPunishments() {
      return this.punishmentList.results
    },
    orderedRankHistory() {
      return this.rankHistoryList.results
    },
    orderedPositionHistory() {
      return this.positionHistoryList.results
    },
    orderedSpecialityHistory() {
      return this.specialityHistoryList.results
    },
    orderedEducationHistory() {
      return this.educationHistoryList.results
    },
    orderedJobHistory() {
      return this.jobHistoryList.results
    },
    orderedRewardHistory() {
      return this.rewardHistoryList.results
    },
    orderedArmyHistory() {
      return this.armyHistoryList.results
    },
    orderedMVDHistory() {
      return this.mvdHistoryList.results
    },
  },
}
</script>

<style scoped></style>
