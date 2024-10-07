<template>
  <!--  Modal for add encouragement-->
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
    ref="encouragementModal"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Поощрение</h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <form @submit.prevent="addNewEncouragement">
          <div class="modal-body">
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label"
                >Вид поощрения</label
              >
              <select
                class="form-select"
                v-model="newEncouragement.encouragement_kind"
                required
              >
                <option selected value="">-------</option>
                <option
                  :value="encouragement.id"
                  v-for="encouragement in encouragementKindList.results"
                  :key="encouragement.id"
                >
                  {{ encouragement.encouragement_kind }}
                </option>
              </select>
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label"
                >Дата поощрения</label
              >
              <input
                type="date"
                class="form-control"
                v-model="newEncouragement.encouragement_date"
                required
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label"
                >Доп. информация</label
              >
              <textarea
                class="form-control"
                v-model="newEncouragement.encouragement_extra_data"
              />
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
              ref="addEncouragementModalCloseButton"
            >
              Закрыть
            </button>
            <button type="submit" class="btn btn-primary">Сохранить</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!--  Modal for add encouragement-->

  <!--  Modal for add punishment-->
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
    ref="punishmentModal"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Взыскание</h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <form @submit.prevent="addNewPunishment">
          <div class="modal-body">
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label"
                >Вид взыскания</label
              >
              <select
                class="form-select"
                v-model="newPunishment.punishment_kind"
                required
              >
                <option selected value="">-------</option>
                <option
                  :value="punishment.id"
                  v-for="punishment in punishmentKindList.results"
                  :key="punishment.id"
                >
                  {{ punishment.punishment_kind }}
                </option>
              </select>
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label"
                >Дата наложения взыскания</label
              >
              <input
                type="date"
                class="form-control"
                v-model="newPunishment.punishment_start_date"
                required
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label"
                >Дата окончания действия взыскания</label
              >
              <input
                type="date"
                class="form-control"
                v-model="newPunishment.punishment_expiration_date"
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label"
                >Доп. информация</label
              >
              <textarea
                class="form-control"
                v-model="newPunishment.punishment_extra_data"
              />
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
              ref="addPunishmentModalCloseButton"
            >
              Закрыть
            </button>
            <button type="submit" class="btn btn-primary">Сохранить</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!--  Modal for add punishment-->

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
              Дата рождения - {{ currentCadet.date_of_birth }}
            </h5>
            <br />
            <h5 class="my-0">Адрес - {{ currentCadet.address }}</h5>
            <br />
            <h5 class="my-0">
              Пасспорт - {{ currentCadet.passport_number || "Нет данных" }},
              выдан -
              {{ currentCadet.passport_issue_authority || "Нет данных" }}
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
                Мать - {{ currentCadet.mother_last_name || "Нет данных" }}
                {{ currentCadet.mother_first_name || "Нет данных" }}
                {{ currentCadet.mother_patronymic || "Нет данных" }}
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
                Отец - {{ currentCadet.father_last_name || "Нет данных" }}
                {{ currentCadet.father_first_name || "Нет данных" }}
                {{ currentCadet.father_patronymic || "Нет данных" }}
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

    <div class="row">
      <div class="col-12">
        <div class="card shadow-sm p-3 mb-3 bg-body-tertiary rounded">
          <div class="card-body">
            <div class="d-flex align-items-center justify-content-end">
              <button
                type="button"
                class="btn btn-warning"
                @click="showAddNewPunishmentModal"
              >
                <font-awesome-icon :icon="['fas', 'plus']" />
                Добавить
              </button>
            </div>

            <h5 class="card-title">
              <font-awesome-icon :icon="['fas', 'hand-holding-dollar']" />
              Взыскания
            </h5>
            <div style="max-height: 200px; overflow: auto">
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
                      {{ punishment.get_punishment_kind_str || "Нет данных" }}
                    </td>
                    <td>
                      {{ punishment.punishment_start_date || "Нет данных" }}
                    </td>
                    <td>
                      {{
                        punishment.punishment_expiration_date || "Нет данных"
                      }}
                    </td>
                    <td>
                      {{ punishment.punishment_extra_data }}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-12">
        <div class="card shadow-sm p-3 mb-3 bg-body-tertiary rounded">
          <div class="card-body">
            <div class="d-flex align-items-center justify-content-end">
              <button
                type="button"
                class="btn btn-warning"
                @click="showAddNewEncouragementModal"
              >
                <font-awesome-icon :icon="['fas', 'plus']" />
                Добавить
              </button>
            </div>
            <h5 class="card-title">
              <font-awesome-icon :icon="['fas', 'credit-card']" />
              Поощрения
            </h5>
            <div style="max-height: 200px; overflow: auto">
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
                        encouragement.get_encouragement_kind_str || "Нет данных"
                      }}
                    </td>
                    <td>
                      {{ encouragement.encouragement_date || "Нет данных" }}
                    </td>
                    <td>
                      {{ encouragement.encouragement_extra_data }}
                    </td>
                    <td class="text-end">
                      <!--                      <div class="btn-group dropstart">-->
                      <!--                        <button-->
                      <!--                          type="button"-->
                      <!--                          class="btn"-->
                      <!--                          data-bs-toggle="dropdown"-->
                      <!--                          aria-expanded="false"-->
                      <!--                        >-->
                      <!--                          ...-->
                      <!--                        </button>-->
                      <!--                        <ul class="dropdown-menu">-->
                      <!--                          <li>-->
                      <!--                            <a class="dropdown-item" href="#">Удалить</a>-->
                      <!--                          </li>-->
                      <!--                        </ul>-->
                      <!--                      </div>-->
                      <font-awesome-icon
                        :icon="['fas', 'trash']"
                        class="me-3 text-danger"
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-12">
        <div class="card shadow-sm p-3 mb-3 bg-body-tertiary rounded">
          <div class="card-body">
            <div class="d-flex align-items-center justify-content-end">
              <button type="button" class="btn btn-warning">
                <font-awesome-icon :icon="['fas', 'plus']" />
                Добавить
              </button>
            </div>
            <h5 class="card-title">
              <font-awesome-icon :icon="['far', 'star']" />
              Звания
            </h5>
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
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import cadetAPIInstance from "@/api/cadet/cadetAPI"
import encouragementAPIInstance from "@/api/cadet/encouragementAPI"
import encouragementKindAPIInstance from "@/api/cadet/encouragementKindAPI"
import punishmentAPIInstance from "@/api/cadet/punishmentAPI"
import punishmentKindAPIInstance from "@/api/cadet/punishmentKindAPI"
import rankAPIInstance from "@/api/cadet/rankAPI"
import rankHistoryAPIInstance from "@/api/cadet/rankHistoryAPI"


export default {
  name: "CadetItemView",
  components: {},
  data() {
    return {
      currentCadet: {},
      newEncouragement: {
        encouragement_kind: "",
        encouragement_date: "",
        encouragement_extra_data: "",
      },
      newPunishment: {
        punishment_kind: "",
        punishment_start_date: "",
        punishment_expiration_date: "",
        punishment_extra_data: "",
      },
      newRankHistory: { rank: "", rank_date: "", extra_data: "" },
      encouragementList: { results: [], previous: null, next: null },
      encouragementKindList: { results: [], previous: null, next: null },
      punishmentList: { results: [], previous: null, next: null },
      punishmentKindList: { results: [], previous: null, next: null },
      rankHistoryList: { results: [], previous: null, next: null },
      rankList: { results: [], previous: null, next: null },
      isLoading: true,
      isError: false,
      BACKEND_PROTOCOL: process.env.VUE_APP_BACKEND_PROTOCOL,
      BACKEND_HOST: process.env.VUE_APP_BACKEND_HOST,
      BACKEND_PORT: process.env.VUE_APP_BACKEND_PORT,
    }
  },
  async created() {
    this.$watch(
      () => this.$route.params.id,
      async () => {
        await this.loadData()
      },
    )
    await this.loadData()
  },
  methods: {
    async loadData() {
      this.isLoading = true
      this.isError = false
      try {
        const currentCadetResponse = await cadetAPIInstance.getItemData(
          "this.userToken",
          this.$route.params.id,
        )
        this.currentCadet = await currentCadetResponse.data

        const currentCadetEncouragementResponse =
          await encouragementAPIInstance.getItemsList("this.userToken", {
            encouragement_cadet: this.$route.params.id,
          })
        this.encouragementList = await currentCadetEncouragementResponse.data

        const currentCadetPunishmentResponse = await punishmentAPIInstance.getItemsList(
          "this.userToken",
          {
            punishment_cadet: this.$route.params.id,
          },
        )
        this.punishmentList = await currentCadetPunishmentResponse.data

        const currentCadetRankHistoryResponse =
          await rankHistoryAPIInstance.getItemsList("this.userToken", {
            cadet: this.$route.params.id,
          })
        this.rankHistoryList = await currentCadetRankHistoryResponse.data

        const encouragementKindResponse =
          await encouragementKindAPIInstance.getItemsList("this.userToken")
        this.encouragementKindList = await encouragementKindResponse.data

        const punishmentKindResponse =
          await punishmentKindAPIInstance.getItemsList("this.userToken")
        this.punishmentKindList = await punishmentKindResponse.data

        const rankResponse = await rankAPIInstance.getItemsList("this.userToken")
        this.rankList = await rankResponse.data
      } catch (e) {
        this.isError = true
      } finally {
        this.isLoading = false
      }
    },
    async showAddNewEncouragementModal() {
      let updateModal = this.$refs.encouragementModal
      let myModal = new bootstrap.Modal(updateModal, {
        keyboard: false,
      })
      myModal.show()
    },
    async showAddNewPunishmentModal() {
      let updateModal = this.$refs.punishmentModal
      let myModal = new bootstrap.Modal(updateModal, {
        keyboard: false,
      })
      myModal.show()
    },
    async addNewEncouragement() {
      try {
        const response = await encouragementAPIInstance.addItem("this.token", {
          ...this.newEncouragement,
          encouragement_cadet: this.currentCadet.id,
        })

        const newItem = await response.data
        this.encouragementList.results.push(newItem)
        this.$refs.addEncouragementModalCloseButton.click()
        this.newEncouragement = {
          encouragement_kind: "",
          encouragement_date: "",
          encouragement_extra_data: "",
        }
      } catch (e) {
        this.isError = true
      } finally {
        this.isLoading = false
      }
    },

    async addNewPunishment() {
      try {
        const response = await punishmentAPIInstance.addItem("this.token", {
          ...this.newPunishment,
          punishment_cadet: this.currentCadet.id,
        })

        const newItem = await response.data
        this.punishmentList.results.push(newItem)
        this.$refs.addPunishmentModalCloseButton.click()
        this.newPunishment = {
          punishment_kind: "",
          punishment_start_date: "",
          punishment_expiration_date: "",
          punishment_extra_data: "",
        }
      } catch (e) {
        this.isError = true
      } finally {
        this.isLoading = false
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
  },
}
</script>

<style scoped></style>
