<template>
  <base-list-layout :is-loading="isLoading">
    <template v-slot:modals>
      <!--      add modals-->
      <div
        class="modal fade"
        id="encouragementAddModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
        ref="encouragementAddModal"
      >
        <div class="modal-dialog">
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

            <form @submit.prevent="addNewEncouragement">
              <div class="modal-body">
                <encouragement-form-view
                  :order-owners="orderedOrderOwners"
                  :encouragement-kinds="orderedEncouragementKinds"
                  :cadets="orderedCadets"
                  :enc-data="newEncouragementObjForm"
                />
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                  ref="encouragementAddModalCloseButton"
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
      <div
        class="modal fade"
        id="encouragementAddModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
        ref="encouragementUpdateModal"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">
                Редактирование записи
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <form @submit.prevent="updateEncouragement">
              <div class="modal-body">
                <encouragement-form-view
                  :order-owners="orderedOrderOwners"
                  :encouragement-kinds="orderedEncouragementKinds"
                  :cadets="orderedCadets"
                  :enc-data="updateEncouragementObjForm"
                />
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                  ref="encouragementUpdateModalCloseButton"
                >
                  Закрыть без сохранения
                </button>
                <button type="submit" class="btn btn-primary">Сохранить</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <!--      update modals-->
    </template>
    <template v-slot:extra>
      <ul class="nav nav-links my-3 mb-lg-2 mx-n3">
        <li class="nav-item">
          <button class="nav-link active">
            <span>Всего записей</span
            ><span class="text-body-tertiary fw-semibold"
              >({{ encouragementList.count }})</span
            >
          </button>
        </li>
      </ul>
    </template>
    <template v-slot:add-button>
      <button
        class="btn btn-warning"
        :disabled="isLoading"
        @click="showAddNewEncouragementModal"
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
        <th scope="col">Фамилия, имя, отчество</th>
        <th scope="col">Вид поощрения</th>
        <th scope="col">Дата поощрения</th>
        <th scope="col">Фабула</th>
      </tr>
    </template>
    <template v-slot:tbody>
      <tr
        class="align-middle"
        v-for="encouragement in orderedEncouragements"
        :key="encouragement.id"
        @dblclick.prevent="showUpdateEncouragementModal(encouragement.id)"
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
        <td>{{ encouragement.get_cadet_str }}</td>
        <td>{{ encouragement.get_encouragement_kind_str }}</td>
        <td>{{ encouragement.encouragement_date }}</td>
        <td>{{ encouragement.encouragement_extra_data }}</td>
      </tr>
    </template>
    <template v-slot:paginator>
      <PaginatorView
        :update-paginator="updatePaginator"
        :list-next="encouragementList.next"
        :list-previous="encouragementList.previous"
        v-if="encouragementList.previous || encouragementList.next"
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
        <label class="form-label">Вид поощрения</label>
        <select
          class="form-select"
          aria-label="Default select example"
          v-model="searchForm.encouragement_kind"
        >
          <option selected value="">--------</option>
          <option
            v-for="encouragement in orderedEncouragementKinds"
            :key="encouragement.id"
            :value="encouragement.id"
          >
            {{ encouragement.encouragement_kind }}
          </option>
        </select>
      </div>
      <div class="mb-3">
        <label class="form-label">Дата поощрения (с)</label>
        <input
          type="date"
          class="form-control"
          v-model="searchForm.encouragement_date__gte"
        />
      </div>
      <div class="mb-3">
        <label class="form-label">Дата поощрения (по)</label>
        <input
          type="date"
          class="form-control"
          v-model="searchForm.encouragement_date__lte"
        />
      </div>
      <div class="mb-3">
        <label class="form-label">Дата приказа (с)</label>
        <input
          type="date"
          class="form-control"
          v-model="searchForm.encouragement_order_date__gte"
        />
      </div>
      <div class="mb-3">
        <label class="form-label">Дата приказа (по)</label>
        <input
          type="date"
          class="form-control"
          v-model="searchForm.encouragement_order_date__lte"
        />
      </div>

      <div class="mb-3">
        <label class="form-label">Номер приказа (содержит)</label>
        <input
          type="text"
          class="form-control"
          v-model="searchForm.encouragement_order_number__icontains"
        />
      </div>

      <div class="mb-3">
        <label class="form-label">Чей приказ</label>
        <select
          class="form-select"
          aria-label="Default select example"
          v-model="searchForm.encouragement_order_owner"
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
        <label class="form-label">Фабула (содержит)</label>
        <input
          type="text"
          class="form-control"
          v-model="searchForm.encouragement_extra_data__icontains"
        />
      </div>
      <button type="button" class="btn btn-primary" @click="clearFilter">
        Сбросить фильтр
      </button>
    </template>
  </base-list-layout>
</template>

<script>
import getEncouragementAPIInstance from "@/api/cadet/encouragementAPI"
import getEncouragementKindAPIInstance from "@/api/cadet/encouragementKindAPI"
import getCadetAPIInstance from "@/api/cadet/cadetAPI"
import getOrderOwnerAPIInstance from "@/api/cadet/orderOwnerAPI"

import BaseListLayout from "@/components/cadet/BaseListLayout.vue"
import { PaginatorView } from "@/components/common"
import EncouragementFormView from "@/components/cadet/encouragement/modals/FormView.vue"
import { debounce } from "lodash/function"

export default {
  name: "EncouragementListView",
  components: { EncouragementFormView, BaseListLayout, PaginatorView },
  data() {
    return {
      encouragementList: { count: "", results: [], previous: null, next: null },
      encouragementKindList: { results: [], previous: null, next: null },
      cadetList: { results: [], previous: null, next: null },
      orderOwnerList: { results: [], previous: null, next: null },
      isLoading: true,
      isError: false,
      BACKEND_PROTOCOL: process.env.VUE_APP_BACKEND_PROTOCOL,
      BACKEND_HOST: process.env.VUE_APP_BACKEND_HOST,
      BACKEND_PORT: process.env.VUE_APP_BACKEND_PORT,
      encouragementAPIInstance: getEncouragementAPIInstance(),
      encouragementKindAPIInstance: getEncouragementKindAPIInstance(),
      cadetAPIInstance: getCadetAPIInstance(),
      orderOwnerAPIInstance: getOrderOwnerAPIInstance(),
      searchForm: Object.assign({}, getEncouragementAPIInstance().searchObj),
      newEncouragementObjForm: {
        encouragement_cadet: null,
        encouragement_kind: null,
        encouragement_date: null,
        encouragement_order_date: null,
        encouragement_order_number: "",
        encouragement_order_owner: null,
        encouragement_extra_data: "",
      },
      updateEncouragementObjForm: {
        encouragement_cadet: null,
        encouragement_kind: null,
        encouragement_date: null,
        encouragement_order_date: null,
        encouragement_order_number: "",
        encouragement_order_owner: null,
        encouragement_extra_data: "",
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
        const [encouragements, encouragementKinds, cadets, orderOwners] =
          await Promise.all([
            this.getEncouragements(),
            this.getEncouragementKinds(),
            this.getCadets(),
            this.getOrderOwners(),
          ]).catch(() => (this.isError = true))

        this.encouragementList = encouragements
        this.encouragementKindList = encouragementKinds
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
        const response = await this.encouragementAPIInstance.updateList(
          url,
          "this.userToken",
        )
        this.encouragementList = await response.data
      } catch (error) {
        this.isError = true
      } finally {
        this.isLoading = false
      }
    },
    debouncedSearch: debounce(async function () {
      this.isLoading = true
      this.encouragementAPIInstance.searchObj = Object.assign(
        {},
        this.searchForm,
      )
      try {
        const encouragementResponse =
          await this.encouragementAPIInstance.getItemsList("token is here!!!")
        this.encouragementList = await encouragementResponse.data
      } catch (e) {
        this.isError = true
      } finally {
        this.isLoading = false
      }
    }, 500),
    clearFilter() {
      this.searchForm = Object.assign(
        {},
        this.encouragementAPIInstance.searchObjDefault,
      )
    },
    showAddNewEncouragementModal() {
      let addModal = this.$refs.encouragementAddModal
      let myModal = new bootstrap.Modal(addModal, {
        keyboard: false,
      })
      myModal.show()
    },
    async showUpdateEncouragementModal(id) {
      try {
        const currentEncResponse =
          await this.encouragementAPIInstance.getItemData("token", id)
        this.updateEncouragementObjForm = await currentEncResponse.data
      } catch (e) {
        this.isError = true
      } finally {
        this.isLoading = false
      }
      let updateModal = this.$refs.encouragementUpdateModal
      let myModal = new bootstrap.Modal(updateModal, {
        keyboard: false,
      })
      myModal.show()
    },

    async addNewEncouragement() {
      try {
        const response = await this.encouragementAPIInstance.addItem(
          "this.token",
          this.newEncouragementObjForm,
        )
        const newItem = await response.data
        this.encouragementList.results.push(newItem)
        this.$refs.encouragementAddModalCloseButton.click()
        this.newEncouragementObjForm = {
          encouragement_cadet: null,
          encouragement_kind: null,
          encouragement_date: null,
          encouragement_order_date: null,
          encouragement_order_number: "",
          encouragement_order_owner: null,
          encouragement_extra_data: "",
        }
      } catch (e) {
        this.isError = true
      } finally {
        this.isLoading = false
      }
    },
    async updateEncouragement() {
      try {
        const response = await this.encouragementAPIInstance.updateItem(
          "this.token",
          this.updateEncouragementObjForm,
        )
        const updatedItem = await response.data
        this.encouragementList.results = this.encouragementList.results.map(
          (item) => {
            if (item.id === updatedItem.id) {
              return { ...item, ...updatedItem }
            } else return item
          },
        )
        this.$refs.encouragementUpdateModalCloseButton.click()
        this.updateEncouragementObjForm = {
          encouragement_cadet: null,
          encouragement_kind: null,
          encouragement_date: null,
          encouragement_order_date: null,
          encouragement_order_number: "",
          encouragement_order_owner: null,
          encouragement_extra_data: "",
        }
      } catch (e) {
        this.isError = true
      } finally {
        this.isLoading = false
      }
    },

    async getEncouragements() {
      const res =
        await this.encouragementAPIInstance.getItemsList("token is here!!!")
      return res.data
    },
    async getEncouragementKinds() {
      const res =
        await this.encouragementKindAPIInstance.getItemsList("token is here!!!")
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
    orderedEncouragements() {
      return this.encouragementList.results
    },
    orderedEncouragementKinds() {
      return this.encouragementKindList.results
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
