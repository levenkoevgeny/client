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
          <li class="nav-item" role="presentation">
            <button
              class="nav-link"
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
        </ul>
        <div class="tab-content" id="myTabContent">
          <div
            class="tab-pane fade show active"
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
                    :update-paginator="updatePunishmentsPaginator"
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
                    :update-paginator="updateEncouragementsPaginator"
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
                  :update-paginator="updateRanksPaginator"
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
                  :update-paginator="updatePositionsPaginator"
                  :list-next="orderedPositionHistory.next"
                  :list-previous="orderedPositionHistory.previous"
                  v-if="
                    orderedPositionHistory.previous ||
                    orderedPositionHistory.next
                  "
                />
              </div>
            </div>
          </div>
          <div
            class="tab-pane fade"
            id="speciality-tab-pane"
            role="tabpanel"
            aria-labelledby="position-tab"
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
                        <th scope="col">Фамилия, имя, отчество</th>
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
                          {{ specialityHistory.get_cadet_str || "Нет данных" }}
                        </td>
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
                  :update-paginator="updatePositionsPaginator"
                  :list-next="orderedPositionHistory.next"
                  :list-previous="orderedPositionHistory.previous"
                  v-if="
                    orderedPositionHistory.previous ||
                    orderedPositionHistory.next
                  "
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
        ] = await Promise.all([
          this.getCadetData(cadetId),
          this.getEncouragements(cadetId),
          this.getPunishments(cadetId),
          this.getRanks(cadetId),
          this.getPositions(cadetId),
          this.getSpecialities(cadetId),
        ]).catch(() => (this.isError = true))
        this.currentCadet = cadet
        this.encouragementList = encouragements
        this.punishmentList = punishments
        this.rankHistoryList = ranks
        this.positionHistoryList = positions
        this.specialityHistoryList = specialities
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
    async getEncouragements(cadetId) {
      this.encouragementAPIInstance.searchObj.encouragement_cadet = cadetId
      const res =
        await this.encouragementAPIInstance.getItemsList("token is here!!!")
      return res.data
    },
    async getPunishments(cadetId) {
      this.punishmentAPIInstance.searchObj.punishment_cadet = cadetId
      const res =
        await this.punishmentAPIInstance.getItemsList("token is here!!!")
      return res.data
    },
    async getRanks(cadetId) {
      this.rankHistoryAPIInstance.searchObj.cadet = cadetId
      const res =
        await this.rankHistoryAPIInstance.getItemsList("token is here!!!")
      return res.data
    },
    async getPositions(cadetId) {
      this.positionHistoryAPIInstance.searchObj.cadet = cadetId
      const res =
        await this.positionHistoryAPIInstance.getItemsList("token is here!!!")
      return res.data
    },

    async getSpecialities(cadetId) {
      this.specialityHistoryAPIInstance.searchObj.cadet = cadetId
      const res =
        await this.specialityHistoryAPIInstance.getItemsList("token is here!!!")
      return res.data
    },

    async updateEncouragementsPaginator(url) {
      try {
        const response = await this.encouragementAPIInstance.updateList(
          url,
          "this.userToken",
        )
        this.encouragementList = await response.data
      } catch (error) {
        this.isError = true
      }
    },
    async updatePunishmentsPaginator(url) {
      try {
        const response = await this.punishmentAPIInstance.updateList(
          url,
          "this.userToken",
        )
        this.punishmentList = await response.data
      } catch (error) {
        this.isError = true
      }
    },
    async updateRanksPaginator(url) {
      try {
        const response = await this.rankHistoryAPIInstance.updateList(
          url,
          "this.userToken",
        )
        this.rankHistoryList = await response.data
      } catch (error) {
        this.isError = true
      }
    },
    async updatePositionsPaginator(url) {
      try {
        const response = await this.positionHistoryAPIInstance.updateList(
          url,
          "this.userToken",
        )
        this.positionHistoryList = await response.data
      } catch (error) {
        this.isError = true
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
  },
}
</script>

<style scoped></style>
