<template>
  <div class="container-fluid">
    <div>
      <h1 class="my-2 text-decoration-underline">Личное дело</h1>
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
            <form action="">
              <div
                class="shadow p-3 mb-3 bg-body-tertiary rounded"
                id="simple-list-personal-data"
              >
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">Личные данные</h5>
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
                          <label class="form-label" for="id_personal_number_mvd"
                            >Личный номер</label
                          >
                          <input
                            type="text"
                            class="form-control"
                            name="personal_number_mvd"
                            id="id_personal_number_mvd"
                          />
                        </div>
                      </div>
                      <div class="col-lg-4">
                        <div class="mb-3">
                          <label class="form-label" for="id_place_of_birth"
                            >Место рождения</label
                          >
                          <input
                            type="text"
                            class="form-control"
                            name="place_of_birth"
                            id="id_place_of_birth"
                          />
                        </div>
                        <div class="mb-3">
                          <label class="form-label" for="id_address_residence"
                            >Адрес места жительства</label
                          >
                          <input
                            type="text"
                            class="form-control"
                            name="address_residence"
                            id="id_address_residence"
                          />
                        </div>
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
                          />
                        </div>
                      </div>
                    </div>
                    <div class="border-bottom my-2"></div>

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
              <div
                class="shadow p-3 mb-3 bg-body-tertiary rounded"
                id="simple-list-rank-data"
              >
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">Присвоение званий</h5>
                    <div
                      class="d-flex align-items-center justify-content-end mb-4"
                    >
                      <button type="button" class="btn btn-warning">
                        Добавить запись
                      </button>
                    </div>
                    <table class="table table-hover">
                      <thead>
                        <tr>
                          <th>Звание</th>
                          <th>Дата присвоения</th>
                          <th>Номер приказа</th>
                          <th>Доп. информация</th>
                        </tr>
                      </thead>
                      <tbody>
                        <!--                        <tr-->
                        <!--                          v-for="rank in orderedRankHistory"-->
                        <!--                          :key="rank.id"-->
                        <!--                          class="align-baseline"-->
                        <!--                        >-->
                        <!--                          <td>{{ rank.get_rank_str || "Нет данных" }}</td>-->
                        <!--                          <td>{{ rank.rank_date || "Нет данных" }}</td>-->
                        <!--                          <td>{{ rank.extra_data || "Нет данных" }}</td>-->
                        <!--                        </tr>-->
                      </tbody>
                    </table>
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
                          <input type="date" class="form-control" />
                        </div>
                      </div>
                      <div class="col-8">
                        <div class="mb-3">
                          <label class="form-label" for="id_category"
                            >Отношение военного комиссариата</label
                          >
                          <input type="text" class="form-control" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="shadow p-3 mb-3 bg-body-tertiary rounded"
                id="simple-list-education-data"
              >
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">Образование</h5>
                    <div
                      class="d-flex align-items-center justify-content-end mb-4"
                    >
                      <button type="button" class="btn btn-warning">
                        Добавить запись
                      </button>
                    </div>
                    <table class="table table-hover">
                      <thead>
                        <tr>
                          <th>Уровень</th>
                          <th>Наименование учебного учреждения</th>
                          <th>Начало обучения</th>
                          <th>Окончание обучекния</th>
                          <th>Средний бал</th>
                        </tr>
                      </thead>
                      <tbody>
                        <!--                        <tr-->
                        <!--                          v-for="rank in orderedRankHistory"-->
                        <!--                          :key="rank.id"-->
                        <!--                          class="align-baseline"-->
                        <!--                        >-->
                        <!--                          <td>{{ rank.get_rank_str || "Нет данных" }}</td>-->
                        <!--                          <td>{{ rank.rank_date || "Нет данных" }}</td>-->
                        <!--                          <td>{{ rank.extra_data || "Нет данных" }}</td>-->
                        <!--                        </tr>-->
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div
                class="shadow p-3 mb-3 bg-body-tertiary rounded"
                id="simple-list-foreign-language-data"
              >
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">Иностранные языки</h5>
                    <div
                      class="d-flex align-items-center justify-content-end mb-4"
                    >
                      <button type="button" class="btn btn-warning">
                        Добавить запись
                      </button>
                    </div>
                    <table class="table table-hover">
                      <thead>
                        <tr>
                          <th>Язык</th>
                          <th>Уровень владения</th>
                        </tr>
                      </thead>
                      <tbody>
                        <!--                        <tr-->
                        <!--                          v-for="rank in orderedRankHistory"-->
                        <!--                          :key="rank.id"-->
                        <!--                          class="align-baseline"-->
                        <!--                        >-->
                        <!--                          <td>{{ rank.get_rank_str || "Нет данных" }}</td>-->
                        <!--                          <td>{{ rank.rank_date || "Нет данных" }}</td>-->
                        <!--                          <td>{{ rank.extra_data || "Нет данных" }}</td>-->
                        <!--                        </tr>-->
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div
                class="shadow p-3 mb-3 bg-body-tertiary rounded"
                id="simple-list-scientific-works-data"
              >
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">Научные труды и изобретения</h5>
                    <div
                      class="d-flex align-items-center justify-content-end mb-4"
                    >
                      <button type="button" class="btn btn-warning">
                        Добавить запись
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="shadow p-3 mb-3 bg-body-tertiary rounded"
                id="simple-list-job-data"
              >
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">Трудовая деятельность</h5>
                    <div
                      class="d-flex align-items-center justify-content-end mb-4"
                    >
                      <button type="button" class="btn btn-warning">
                        Добавить запись
                      </button>
                    </div>
                    <table class="table table-hover">
                      <thead>
                        <tr>
                          <th>С какого числа</th>
                          <th>По какое время</th>
                          <th>Место работы</th>
                          <th>Должность</th>
                        </tr>
                      </thead>
                      <tbody></tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div
                class="shadow p-3 mb-3 bg-body-tertiary rounded"
                id="simple-list-army-service-data"
              >
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">Прохождение службы в ВС РБ</h5>
                    <div
                      class="d-flex align-items-center justify-content-end mb-4"
                    >
                      <button type="button" class="btn btn-warning">
                        Добавить запись
                      </button>
                    </div>
                    <table class="table table-hover">
                      <thead>
                        <tr>
                          <th>С какого времени</th>
                          <th>По какое время</th>
                          <th>Должность</th>
                          <th>Место прохождения службы</th>
                        </tr>
                      </thead>
                      <tbody></tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div
                class="shadow p-3 mb-3 bg-body-tertiary rounded"
                id="simple-list-mvd-service-data"
              >
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">Прохождение службы в МВД РБ</h5>
                    <div
                      class="d-flex align-items-center justify-content-end mb-4"
                    >
                      <button type="button" class="btn btn-warning">
                        Добавить запись
                      </button>
                    </div>
                    <table class="table table-hover">
                      <thead>
                        <tr>
                          <th>С какого времени</th>
                          <th>По какое время</th>
                          <th>Должность</th>
                          <th>Место прохождения службы</th>
                        </tr>
                      </thead>
                      <tbody></tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div
                class="shadow p-3 mb-3 bg-body-tertiary rounded"
                id="simple-list-rewards-data"
              >
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">Награды</h5>
                    <div
                      class="d-flex align-items-center justify-content-end mb-4"
                    >
                      <button type="button" class="btn btn-warning">
                        Добавить запись
                      </button>
                    </div>
                    <table class="table table-hover">
                      <thead>
                        <tr>
                          <th>Чем награжден</th>
                          <th>За что награжден</th>
                          <th>Основание</th>
                          <th>Номер приказа, дата приказа</th>
                        </tr>
                      </thead>
                      <tbody></tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div
                class="shadow p-3 mb-3 bg-body-tertiary rounded"
                id="simple-list-encouragements-data"
              >
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">Поощрения</h5>
                    <div
                      class="d-flex align-items-center justify-content-end mb-4"
                    >
                      <button type="button" class="btn btn-warning">
                        Добавить запись
                      </button>
                    </div>
                    <table class="table table-hover">
                      <thead>
                        <tr>
                          <th>Поощрение</th>
                          <th>Дата</th>
                          <th>Приказ</th>
                          <th>Чей приказ</th>
                          <th>Фабула</th>
                        </tr>
                      </thead>
                      <tbody></tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div
                class="shadow p-3 mb-3 bg-body-tertiary rounded"
                id="simple-list-punishments-data"
              >
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">Дисциплинарные взыскания</h5>
                    <div
                      class="d-flex align-items-center justify-content-end mb-4"
                    >
                      <button type="button" class="btn btn-warning">
                        Добавить запись
                      </button>
                    </div>
                    <table class="table table-hover">
                      <thead>
                        <tr>
                          <th>Взыскание</th>
                          <th>Дата наложения</th>
                          <th>Приказ о наложении</th>
                          <th>Чей приказ</th>
                          <th>Фабула</th>
                          <th>Дата снятия</th>
                          <th>Приказ о снятии</th>
                          <th>Чей приказ</th>
                          <th>Фабула</th>
                        </tr>
                      </thead>
                      <tbody></tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div
                class="shadow p-3 mb-3 bg-body-tertiary rounded"
                id="simple-list-ranks-data"
              >
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">Должности</h5>
                    <div
                      class="d-flex align-items-center justify-content-end mb-4"
                    >
                      <button type="button" class="btn btn-warning">
                        Добавить запись
                      </button>
                    </div>
                    <table class="table table-hover">
                      <thead>
                        <tr>
                          <th>Должность</th>
                          <th>Дата назначения</th>
                          <th>Приказ о назначении</th>
                          <th>Дата приказа</th>
                          <th>Чей приказ</th>
                          <th>Фабула</th>
                        </tr>
                      </thead>
                      <tbody></tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div
                class="shadow p-3 mb-3 bg-body-tertiary rounded"
                id="simple-list-specialities-data"
              >
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">Специальности</h5>
                    <div
                      class="d-flex align-items-center justify-content-end mb-4"
                    >
                      <button type="button" class="btn btn-warning">
                        Добавить запись
                      </button>
                    </div>
                    <table class="table table-hover">
                      <thead>
                        <tr>
                          <th>Специальность</th>
                          <th>Дата</th>
                          <th>Приказ о назначении</th>
                          <th>Дата приказа</th>
                          <th>Чей приказ</th>
                          <th>Фабула</th>
                        </tr>
                      </thead>
                      <tbody></tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div
                class="shadow p-3 mb-3 bg-body-tertiary rounded"
                id="simple-list-parents-data"
              >
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">Данные о родителях</h5>
                    <div class="row">
                      <div class="col-lg-6">
                        <div class="shadow p-3 bg-body-tertiary rounded">
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
                                  maxlength="30"
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
                                ></textarea>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-6">
                        <div class="shadow p-3 bg-body-tertiary rounded">
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
                                ></textarea>
                              </div>
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
                id="simple-list-marital-status-data"
              >
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">Семейное положение</h5>
                    <div class="row">
                      <div class="col-4">
                        <div class="mb-3">
                          <label class="form-label" for="id_last_name_rus"
                            >Семейное положение</label
                          >
                          <select
                            id="id_last_name_rus"
                            name="last_name_rus"
                            class="form-select"
                          >
                            <option value="">---------</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div
                      class="d-flex align-items-center justify-content-end mb-4"
                    >
                      <button type="button" class="btn btn-warning">
                        Добавить запись
                      </button>
                    </div>
                    <table class="table table-hover">
                      <thead>
                        <tr>
                          <th>
                            Фамилия, имя, отчество жены (мужа), детей и лиц,
                            находящихся на иждивении
                          </th>
                          <th>Степень родства</th>
                          <th>Приказ о назначении</th>
                          <th>Число, месяц, год и место рождения</th>
                          <th>
                            Основание: номер и дата свидетельства о браке, о
                            рождении, кем выдано
                          </th>
                        </tr>
                      </thead>
                      <tbody></tbody>
                    </table>
                  </div>
                </div>
              </div>
            </form>
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

                  <a class="p-1 rounded" href="#simple-list-rank-data"
                    >Присвоение званий</a
                  >
                  <a
                    class="p-1 rounded"
                    href="#simple-list-military-office-data"
                    >Воинский учет</a
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
                  <a class="p-1 rounded" href="#simple-list-ranks-data"
                    >Должности</a
                  >
                  <a class="p-1 rounded" href="#simple-list-specialities-data"
                    >Специальности</a
                  >
                  <a class="p-1 rounded" href="#simple-list-parents-data"
                    >Данные о родителях</a
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
