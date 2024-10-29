<template>
  <!-- add modal-->
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

        <form @submit.prevent="addNewMainItem">
          <div class="modal-body">
            <RankHistoryModalForCadetUpdate
              :main-data="itemForm"
              :order-owners="orderedOrderOwners"
              :ranks="orderedRanks"
            />
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
              ref="mainItemAddModalCloseButton"
            >
              Закрыть
            </button>
            <button type="submit" class="btn btn-primary">
              Добавить запись
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>

  <!-- update modal-->
  <div
    class="modal fade"
    id="mainItemUpdateModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
    ref="mainItemUpdateModal"
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

        <form @submit.prevent="updateMainItem">
          <div class="modal-body">
            <RankHistoryModalForCadetUpdate
              :main-data="itemForm"
              :order-owners="orderedOrderOwners"
              :ranks="orderedRanks"
            />
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
              ref="mainItemUpdateModalCloseButton"
            >
              Закрыть
            </button>
            <button type="submit" class="btn btn-primary">Сохранить</button>
          </div>
        </form>
      </div>
    </div>
  </div>

  <div
    class="shadow p-3 mb-3 bg-body-tertiary rounded"
    id="simple-list-rank-data"
  >
    <base-list-layout-for-cadet-update
      :is-loading="isLoading"
      :main-list-length="orderedMainList.length"
      title="Присвоение званий"
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
      <template v-slot:delete-selected-button
        ><button
          @click="deleteCheckedSubdivisionsHandler"
          class="btn btn-danger"
          v-if="checkedForDeleteCount"
        >
          Удалить ({{ checkedForDeleteCount }})
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
          <th>Звание</th>
          <th>С какого числа присвоено звание</th>
          <th>Дата приказа</th>
          <th>Номер приказа</th>
          <th>Чей приказ</th>
          <th>Доп. информация</th>
          <th></th>
        </tr>
      </template>
      <template v-slot:tbody>
        <tr
          v-for="rankHistory in orderedMainList"
          :key="rankHistory.id"
          @dblclick.stop="showUpdateMainItemModal(rankHistory.id)"
        >
          <td>
            <div
              class="form-check d-flex align-items-center justify-content-center"
            >
              <input
                type="checkbox"
                class="form-check-input my-0"
                v-model="rankHistory.isSelected"
              />
            </div>
          </td>
          <td>
            {{ rankHistory.get_rank_str || "Нет данных" }}
          </td>
          <td>{{ rankHistory.rank_date }}</td>
          <td>
            {{ rankHistory.rank_order_date || "Нет данных" }}
          </td>
          <td>{{ rankHistory.rank_order_number }}</td>
          <td>{{ rankHistory.get_rank_order_owner_str }}</td>
          <td>{{ rankHistory.rank_extra_data || "Нет данных" }}</td>
          <td>
            <button
              type="button"
              class="btn btn-outline-danger"
              @click="deleteItem(rankHistory.id)"
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
import getRankHistoryAPIInstance from "@/api/cadet/rankHistoryAPI"
import getRankAPIInstance from "@/api/cadet/rankAPI"
import getOrderOwnerAPIInstance from "@/api/cadet/orderOwnerAPI"
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
  checkedForDeleteCount,
  deleteCheckedSubdivisionsHandler,
} from "../../../../utils"
import RankHistoryModalForCadetUpdate from "@/components/cadet/rank/modals/RankHistoryModalForCadetUpdate.vue"
import BaseListLayoutForCadetUpdate from "@/components/layouts/BaseListLayoutForCadetUpdate.vue"
import { PaginatorView } from "@/components/common"

export default {
  name: "RankHistoryCadetComponent",
  components: {
    BaseListLayoutForCadetUpdate,
    RankHistoryModalForCadetUpdate,
    PaginatorView,
  },
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
      rankList: { count: "", results: [], previous: null, next: null },
      orderOwnerList: { count: "", results: [], previous: null, next: null },
      mainItemAPIInstance: getRankHistoryAPIInstance(),
      rankAPIInstance: getRankAPIInstance(),
      orderOwnerAPIInstance: getOrderOwnerAPIInstance(),
      itemForm: Object.assign({}, getRankHistoryAPIInstance().formData),
      selectedItems: [],
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
        const [rankHistories, ranks, orderOwners] = await Promise.all([
          listFunction("mainItem")(this.cadetId),
          listFunction("rank")(),
          listFunction("orderOwner")(),
        ]).catch((e) => (this.isError = true))

        this.mainItemList = rankHistories
        this.rankList = ranks
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
    deleteCheckedSubdivisionsHandler,
  },
  computed: {
    checkedForDeleteCount,
    orderedMainList() {
      return this.mainItemList.results
    },
    orderedRanks() {
      return this.rankList.results
    },
    orderedOrderOwners() {
      return this.orderOwnerList.results
    },
  },
  watch: {},
}
</script>

<style scoped></style>
