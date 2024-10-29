<template>
  <div
    class="modal fade"
    id="mainItemAddModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
    ref="mainItemAddModal"
  >
    <div class="modal-dialog modal-dialog-centered">
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
      </div>
    </div>
  </div>

  <div
    class="shadow p-3 mb-3 bg-body-tertiary rounded"
    id="simple-list-encouragements-data"
  >
    <base-list-layout-for-cadet-update
      :is-loading="isLoading"
      :main-list-length="orderedMainList.length"
      title="Поощрения"
    >
      <template v-slot:add-button>
        <button
          class="btn btn-warning"
          :disabled="isLoading"
          @click="showAddNewMainItemModal"
          type="button"
        >
          <span class="fas fa-plus me-2"></span>Добавить запись
        </button>
      </template>
      <template v-slot:thead>
        <tr>
          <th>
            <div
              class="form-check d-flex align-items-center justify-content-center"
            >
              <input
                type="checkbox"
                class="form-check-input my-0"
                @change="checkAllHandler($event)"
              />
            </div>
          </th>
          <th>Поощрение</th>
          <th>Дата</th>
          <th>Приказ</th>
          <th>Чей приказ</th>
          <th>Фабула</th>
          <th></th>
        </tr>
      </template>
      <template v-slot:tbody>
        <tr
          v-for="encouragement in orderedMainList"
          :key="encouragement.id"
          @dblclick.stop="showUpdateMainItemModal(encouragement.id)"
        >
          <td>
            <div
              class="form-check d-flex align-items-center justify-content-center"
            >
              <input
                type="checkbox"
                class="form-check-input my-0"
                v-model="encouragement.isSelected"
              />
            </div>
          </td>
          <td>
            {{ encouragement.get_encouragement_kind_str || "Нет данных" }}
          </td>
          <td>{{ encouragement.encouragement_date }}</td>
          <td>{{ encouragement.encouragement_order_number }}</td>
          <td>{{ encouragement.get_encouragement_order_owner }}</td>
          <td>{{ encouragement.extra_data || "Нет данных" }}</td>
          <td>
            <button
              type="button"
              class="btn btn-outline-danger"
              @click="deleteItem(encouragement.id)"
            >
              <font-awesome-icon :icon="['fas', 'trash']" />
            </button>
          </td>
        </tr>
      </template>
      <template v-slot:paginator>
        <PaginatorView
          :update-paginator="updatePaginator"
          :list-next="mainItemList.next"
          :list-previous="mainItemList.previous"
          v-if="mainItemList.previous || mainItemList.next"
        />
      </template>
    </base-list-layout-for-cadet-update>
  </div>
</template>

<script>
import getEncouragementAPIInstance from "@/api/cadet/encouragementAPI"
import getEncouragementKindAPIInstance from "@/api/cadet/encouragementKindAPI"
import {
  getLoadListFunction,
  showAddNewMainItemModal,
  showUpdateMainItemModal,
  addNewMainItem,
  updateMainItem,
  updatePaginator,
  deleteItem,
  checkAllHandler,
  clearFormData,
} from "../../../../utils"
import getOrderOwnerAPIInstance from "@/api/cadet/orderOwnerAPI"
import BaseListLayoutForCadetUpdate from "@/components/layouts/BaseListLayoutForCadetUpdate.vue"
import { PaginatorView } from "@/components/common"

export default {
  name: "EncouragementCadetComponent",
  components: { PaginatorView, BaseListLayoutForCadetUpdate },
  props: {
    cadetId: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      isLoading: true,
      isError: false,
      mainItemList: { count: "", results: [], previous: null, next: null },
      encouragementKindList: {
        count: "",
        results: [],
        previous: null,
        next: null,
      },
      orderOwnerList: { count: "", results: [], previous: null, next: null },
      mainItemAPIInstance: getEncouragementAPIInstance(),
      encouragementKindAPIInstance: getEncouragementKindAPIInstance(),
      orderOwnerAPIInstance: getOrderOwnerAPIInstance(),
      itemForm: Object.assign({}, getEncouragementAPIInstance().formData),
    }
  },
  async created() {
    await this.loadData()
  },
  methods: {
    async loadData() {
      const listFunction = getLoadListFunction.bind(this)
      this.isLoading = true
      this.isError = false
      try {
        const [encouragements, encouragementKinds, orderOwners] =
          await Promise.all([
            listFunction("mainItem")(this.cadetId),
            listFunction("encouragementKind")(),
            listFunction("orderOwner")(),
          ])
        this.mainItemList = encouragements
        this.encouragementKindList = encouragementKinds
        this.orderOwnerList = orderOwners
      } catch (e) {
        this.isError = true
      } finally {
        this.isLoading = false
      }
    },
    showAddNewMainItemModal,
    showUpdateMainItemModal,
    addNewMainItem,
    updateMainItem,
    updatePaginator,
    deleteItem,
    checkAllHandler,
    clearFormData,
  },
  computed: {
    orderedMainList() {
      return this.mainItemList.results
    },
    orderedEncouragementKinds() {
      return this.encouragementKindList.results
    },
  },
  watch: {},
}
</script>

<style scoped></style>
