<template>
  <base-list-layout :is-loading="isLoading">
    <template v-slot:modals>
      <!--      add modals-->
      <div
        class="modal fade"
        id="punishmentAddModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
        ref="punishmentAddModal"
      >
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">
                Добавление записи
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <form @submit.prevent="addNewPunishment">
              <div class="modal-body">
                <punishment-form-view
                  :order-owners="orderedOrderOwners"
                  :punishment-kinds="orderedPunishmentKinds"
                  :cadets="orderedCadets"
                  :punish-data="newPunishmentObjForm"
                />
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                  ref="punishmentAddModalCloseButton"
                >
                  Закрыть без сохранения
                </button>
                <button type="submit" class="btn btn-primary">Сохранить</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <!--      add modals-->

      <!--      update modals-->
      <!--      <div-->
      <!--        class="modal fade"-->
      <!--        id="encouragementAddModal"-->
      <!--        tabindex="-1"-->
      <!--        aria-labelledby="exampleModalLabel"-->
      <!--        aria-hidden="true"-->
      <!--        ref="encouragementUpdateModal"-->
      <!--      >-->
      <!--        <div class="modal-dialog">-->
      <!--          <div class="modal-content">-->
      <!--            <div class="modal-header">-->
      <!--              <h1 class="modal-title fs-5" id="exampleModalLabel">-->
      <!--                Редактирование записи-->
      <!--              </h1>-->
      <!--              <button-->
      <!--                type="button"-->
      <!--                class="btn-close"-->
      <!--                data-bs-dismiss="modal"-->
      <!--                aria-label="Close"-->
      <!--              ></button>-->
      <!--            </div>-->

      <!--            <form @submit.prevent="updateEncouragement">-->
      <!--              <div class="modal-body">-->
      <!--                <encouragement-form-view-->
      <!--                  :order-owners="orderedOrderOwners"-->
      <!--                  :encouragement-kinds="orderedEncouragementKinds"-->
      <!--                  :cadets="orderedCadets"-->
      <!--                  :enc-data="updateEncouragementObjForm"-->
      <!--                />-->
      <!--              </div>-->
      <!--              <div class="modal-footer">-->
      <!--                <button-->
      <!--                  type="button"-->
      <!--                  class="btn btn-secondary"-->
      <!--                  data-bs-dismiss="modal"-->
      <!--                  ref="encouragementUpdateModalCloseButton"-->
      <!--                >-->
      <!--                  Закрыть без сохранения-->
      <!--                </button>-->
      <!--                <button type="submit" class="btn btn-primary">Сохранить</button>-->
      <!--              </div>-->
      <!--            </form>-->
      <!--          </div>-->
      <!--        </div>-->
      <!--      </div>-->
      <!--      update modals-->
    </template>
    <template v-slot:extra>
      <ul class="nav nav-links my-3 mb-lg-2 mx-n3">
        <li class="nav-item">
          <button class="nav-link active">
            <span>Всего записей</span
            ><span class="text-body-tertiary fw-semibold"
              >({{ punishmentList.count }})</span
            >
          </button>
        </li>
      </ul>
    </template>
    <template v-slot:add-button>
      <button
        class="btn btn-warning"
        :disabled="isLoading"
        @click="showAddNewPunishmentModal"
      >
        <span class="fas fa-plus me-2"></span>Добавить запись
      </button>
    </template>
    <template v-slot:thead>
      <tr>
        <th scope="col">
          <div class="form-check">
            <input
              type="checkbox"
              class="form-check-input"
              id="exampleCheck1"
            />
          </div>
        </th>
        <th scope="col" class="text-nowrap">Фамилия, имя, отчество</th>
        <th scope="col" class="text-nowrap">Вид взыскания</th>
        <th scope="col" class="text-nowrap">Дата начала действия взыскания</th>
        <th scope="col" class="text-nowrap">Дата приказа о наложении</th>
        <th scope="col" class="text-nowrap">Номер приказа о наложении</th>
        <th scope="col" class="text-nowrap">Чей приказ</th>
        <th scope="col" class="text-nowrap">Фабула о наложении</th>
        <th scope="col" class="text-nowrap">
          Дата окончания действия взыскания
        </th>
        <th scope="col" class="text-nowrap">Дата приказа об окончании</th>
        <th scope="col" class="text-nowrap">Номер приказа об окончании</th>
        <th scope="col" class="text-nowrap">Чей приказ</th>
        <th scope="col" class="text-nowrap">Фабула о снятии</th>
      </tr>
    </template>
    <template v-slot:tbody>
      <tr
        class="align-middle"
        v-for="punishment in orderedPunishments"
        :key="punishment.id"
        @dblclick.prevent="showUpdatePunishmentModal(punishment.id)"
      >
        <th scope="row" class="text-center align-middle">
          <div class="form-check">
            <input
              type="checkbox"
              class="form-check-input"
              id="exampleCheck1"
            />
          </div>
        </th>
        <td class="text-nowrap">{{ punishment.get_cadet_str }}</td>
        <td class="text-nowrap">{{ punishment.get_punishment_kind_str }}</td>
        <td class="text-nowrap">{{ punishment.punishment_start_date }}</td>
        <td class="text-nowrap">
          {{ punishment.punishment_start_order_date }}
        </td>
        <td class="text-nowrap">
          {{ punishment.punishment_start_order_number }}
        </td>
        <td class="text-nowrap">
          {{ punishment.get_punishment_start_order_owner }}
        </td>
        <td>{{ punishment.punishment_start_extra_data }}</td>
        <td class="text-nowrap">{{ punishment.punishment_expiration_date }}</td>
        <td class="text-nowrap">
          {{ punishment.punishment_expiration_order_date }}
        </td>
        <td class="text-nowrap">
          {{ punishment.punishment_expiration_order_number }}
        </td>
        <td class="text-nowrap">
          {{ punishment.get_punishment_expiration_order_owner }}
        </td>
        <td>{{ punishment.punishment_expiration_extra_data }}</td>
      </tr>
    </template>
    <template v-slot:paginator>
      <PaginatorView
        :update-paginator="updatePaginator"
        :list-next="punishmentList.next"
        :list-previous="punishmentList.previous"
        v-if="punishmentList.previous || punishmentList.next"
      />
    </template>
    <template v-slot:search-form>
      <div class="mb-3">
        <label class="form-label">Курсант</label>
        <select
          class="form-select"
          aria-label="Default select example"
          v-model="searchForm.cadet"
        >
          <option selected value="">--------</option>
          <option
            v-for="cadet in orderedCadets"
            :key="cadet.id"
            :value="cadet.id"
          >
            {{ cadet.get_full_name }}
          </option>
        </select>
      </div>
      <div class="mb-3">
        <label class="form-label">Вид взыскания</label>
        <select
          class="form-select"
          aria-label="Default select example"
          v-model="searchForm.punishment_kind"
        >
          <option selected value="">--------</option>
          <option
            v-for="punishment in orderedPunishmentKinds"
            :key="punishment.id"
            :value="punishment.id"
          >
            {{ punishment.punishment_kind }}
          </option>
        </select>
      </div>
      <div class="mb-3">
        <label class="form-label">Дата начала действия (с)</label>
        <input
          type="date"
          class="form-control"
          v-model="searchForm.punishment_start_date__gte"
        />
      </div>
      <div class="mb-3">
        <label class="form-label">Дата начала действия (по)</label>
        <input
          type="date"
          class="form-control"
          v-model="searchForm.punishment_start_date__lte"
        />
      </div>
      <div class="mb-3">
        <label class="form-label">Дата приказа о наложении (с)</label>
        <input
          type="date"
          class="form-control"
          v-model="searchForm.punishment_start_order_date__gte"
        />
      </div>
      <div class="mb-3">
        <label class="form-label">Дата приказа о наложении (по)</label>
        <input
          type="date"
          class="form-control"
          v-model="searchForm.punishment_start_order_date__gte"
        />
      </div>
      <div class="mb-3">
        <label class="form-label">Номер приказа о наложении (содержит)</label>
        <input
          type="text"
          class="form-control"
          v-model="searchForm.punishment_start_order_number__icontains"
        />
      </div>
      <div class="mb-3">
        <label class="form-label">Чей приказ о наложении</label>
        <select
          class="form-select"
          aria-label="Default select example"
          v-model="searchForm.punishment_start_order_owner"
        >
          <option selected value="">--------</option>
          <option
            v-for="orderOwner in orderedOrderOwners"
            :key="orderOwner.id"
            :value="orderOwner.id"
          >
            {{ orderOwner.order_owner }}
          </option>
        </select>
      </div>
      <div class="mb-3">
        <label class="form-label">Фабула о наложении (содержит)</label>
        <input
          type="text"
          class="form-control"
          v-model="searchForm.punishment_start_extra_data__icontains"
        />
      </div>

      <div class="mb-3">
        <label class="form-label">Дата окончания действия (с)</label>
        <input
          type="date"
          class="form-control"
          v-model="searchForm.punishment_expiration_date__gte"
        />
      </div>
      <div class="mb-3">
        <label class="form-label">Дата окончания действия (по)</label>
        <input
          type="date"
          class="form-control"
          v-model="searchForm.punishment_expiration_date__lte"
        />
      </div>
      <div class="mb-3">
        <label class="form-label">Дата приказа о снятии (с)</label>
        <input
          type="date"
          class="form-control"
          v-model="searchForm.punishment_expiration_order_date__gte"
        />
      </div>
      <div class="mb-3">
        <label class="form-label">Дата приказа о снятии (по)</label>
        <input
          type="date"
          class="form-control"
          v-model="searchForm.punishment_expiration_order_date__gte"
        />
      </div>
      <div class="mb-3">
        <label class="form-label">Номер приказа о наложении (содержит)</label>
        <input
          type="text"
          class="form-control"
          v-model="searchForm.punishment_expiration_order_number__icontains"
        />
      </div>
      <div class="mb-3">
        <label class="form-label">Чей приказ о наложении</label>
        <select
          class="form-select"
          aria-label="Default select example"
          v-model="searchForm.punishment_expiration_order_owner"
        >
          <option selected value="">--------</option>
          <option
            v-for="orderOwner in orderedOrderOwners"
            :key="orderOwner.id"
            :value="orderOwner.id"
          >
            {{ orderOwner.order_owner }}
          </option>
        </select>
      </div>
      <div class="mb-3">
        <label class="form-label">Фабула о наложении (содержит)</label>
        <input
          type="text"
          class="form-control"
          v-model="searchForm.punishment_expiration_extra_data__icontains"
        />
      </div>

      <button type="button" class="btn btn-primary" @click="clearFilter">
        Сбросить фильтр
      </button>
    </template>
  </base-list-layout>
</template>

<script>
import getPunishmentAPIInstance from "@/api/cadet/punishmentAPI"
import getPunishmentKindAPIInstance from "@/api/cadet/punishmentKindAPI"
import getCadetAPIInstance from "@/api/cadet/cadetAPI"
import getOrderOwnerAPIInstance from "@/api/cadet/orderOwnerAPI"

import BaseListLayout from "@/components/layouts/BaseListLayout.vue"
import { PaginatorView } from "@/components/common"
import { debounce } from "lodash/function"
import PunishmentFormView from "@/components/cadet/punishment/modals/FormView.vue"

export default {
  name: "PunishmentListView",
  components: {
    PunishmentFormView,
    BaseListLayout,
    PaginatorView,
  },
  data() {
    return {
      punishmentList: { count: "", results: [], previous: null, next: null },
      punishmentKindList: { results: [], previous: null, next: null },
      cadetList: { results: [], previous: null, next: null },
      orderOwnerList: { results: [], previous: null, next: null },
      isLoading: true,
      isError: false,
      BACKEND_PROTOCOL: process.env.VUE_APP_BACKEND_PROTOCOL,
      BACKEND_HOST: process.env.VUE_APP_BACKEND_HOST,
      BACKEND_PORT: process.env.VUE_APP_BACKEND_PORT,
      punishmentAPIInstance: getPunishmentAPIInstance(),
      punishmentKindAPIInstance: getPunishmentKindAPIInstance(),
      cadetAPIInstance: getCadetAPIInstance(),
      orderOwnerAPIInstance: getOrderOwnerAPIInstance(),
      searchForm: Object.assign({}, getPunishmentAPIInstance().searchObj),
      newPunishmentObjForm: {
        punishment_cadet: null,
        punishment_kind: null,
        punishment_start_date: null,
        punishment_start_order_date: null,
        punishment_start_order_number: "",
        punishment_start_order_owner: null,
        punishment_start_extra_data: "",
        punishment_expiration_date: null,
        punishment_expiration_order_date: null,
        punishment_expiration_order_number: "",
        punishment_expiration_order_owner: null,
        punishment_expiration_extra_data: "",
      },
      updatePunishmentObjForm: {
        punishment_cadet: null,
        punishment_kind: null,
        punishment_start_date: null,
        punishment_start_order_date: null,
        punishment_start_order_number: "",
        punishment_start_order_owner: null,
        punishment_start_extra_data: "",
        punishment_expiration_date: null,
        punishment_expiration_order_date: null,
        punishment_expiration_order_number: "",
        punishment_expiration_order_owner: null,
        punishment_expiration_extra_data: "",
      },
    }
  },
  async created() {
    await this.loadData()
  },
  methods: {
    async loadData() {
      this.isLoading = true
      this.isError = false
      try {
        const [punishments, punishmentKinds, cadets, orderOwners] =
          await Promise.all([
            this.getPunishments(),
            this.getPunishmentKinds(),
            this.getCadets(),
            this.getOrderOwners(),
          ]).catch(() => (this.isError = true))

        this.punishmentList = punishments
        this.punishmentKindList = punishmentKinds
        this.cadetList = cadets
        this.orderOwnerList = orderOwners
      } catch (e) {
        this.isError = true
      } finally {
        this.isLoading = false
      }
    },
    async updatePaginator(url) {
      this.isLoading = true
      try {
        const response = await this.punishmentAPIInstance.updateList(
          url,
          "this.userToken",
        )
        this.punishmentList = await response.data
      } catch (error) {
        this.isError = true
      } finally {
        this.isLoading = false
      }
    },
    debouncedSearch: debounce(async function () {
      this.isLoading = true
      this.punishmentAPIInstance.searchObj = Object.assign({}, this.searchForm)
      try {
        const punishmentResponse =
          await this.punishmentAPIInstance.getItemsList("token is here!!!")
        this.punishmentList = await punishmentResponse.data
      } catch (e) {
        this.isError = true
      } finally {
        this.isLoading = false
      }
    }, 500),
    clearFilter() {
      this.searchForm = Object.assign(
        {},
        this.punishmentAPIInstance.searchObjDefault,
      )
    },
    showAddNewPunishmentModal() {
      let addModal = this.$refs.punishmentAddModal
      let myModal = new bootstrap.Modal(addModal, {
        keyboard: false,
      })
      myModal.show()
    },
    async showUpdatePunishmentModal(id) {
      try {
        const currentPunishResponse =
          await this.punishmentAPIInstance.getItemData("token", id)
        this.updatePunishmentObjForm = await currentPunishResponse.data
      } catch (e) {
        this.isError = true
      } finally {
        this.isLoading = false
      }
      let updateModal = this.$refs.punishmentUpdateModal
      let myModal = new bootstrap.Modal(updateModal, {
        keyboard: false,
      })
      myModal.show()
    },

    async addNewPunishment() {
      try {
        const response = await this.punishmentAPIInstance.addItem(
          "this.token",
          this.newPunishmentObjForm,
        )
        const newItem = await response.data
        this.punishmentList.results.push(newItem)
        this.$refs.punishmentAddModalCloseButton.click()
        this.newPunishmentObjForm = {
          punishment_cadet: null,
          punishment_kind: null,
          punishment_start_date: null,
          punishment_start_order_date: null,
          punishment_start_order_number: "",
          punishment_start_order_owner: null,
          punishment_start_extra_data: "",
          punishment_expiration_date: null,
          punishment_expiration_order_date: null,
          punishment_expiration_order_number: "",
          punishment_expiration_order_owner: null,
          punishment_expiration_extra_data: "",
        }
      } catch (e) {
        this.isError = true
      } finally {
        this.isLoading = false
      }
    },
    async updatePunishment() {
      try {
        const response = await this.punishmentAPIInstance.updateItem(
          "this.token",
          this.updatePunishmentObjForm,
        )
        const updatedItem = await response.data

        this.punishmentList.results = this.punishmentList.results.map(
          (item) => {
            if (item.id === updatedItem.id) {
              return { ...item, ...updatedItem }
            } else return item
          },
        )
        this.$refs.punishmentUpdateModalCloseButton.click()
        this.updatePunishmentObjForm = {
          punishment_cadet: null,
          punishment_kind: null,
          punishment_start_date: null,
          punishment_start_order_date: null,
          punishment_start_order_number: "",
          punishment_start_order_owner: null,
          punishment_start_extra_data: "",
          punishment_expiration_date: null,
          punishment_expiration_order_date: null,
          punishment_expiration_order_number: "",
          punishment_expiration_order_owner: null,
          punishment_expiration_extra_data: "",
        }
      } catch (e) {
        this.isError = true
      } finally {
        this.isLoading = false
      }
    },

    async getPunishments() {
      const res =
        await this.punishmentAPIInstance.getItemsList("token is here!!!")
      return res.data
    },
    async getPunishmentKinds() {
      const res =
        await this.punishmentKindAPIInstance.getItemsList("token is here!!!")
      return res.data
    },
    async getCadets() {
      const res = await this.cadetAPIInstance.getItemsList("token is here!!!")
      return res.data
    },
    async getOrderOwners() {
      const res =
        await this.orderOwnerAPIInstance.getItemsList("token is here!!!")
      return res.data
    },
  },
  computed: {
    orderedPunishments() {
      return this.punishmentList.results
    },
    orderedPunishmentKinds() {
      return this.punishmentKindList.results
    },
    orderedCadets() {
      return this.cadetList.results
    },
    orderedOrderOwners() {
      return this.orderOwnerList.results
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

<style scoped></style>
