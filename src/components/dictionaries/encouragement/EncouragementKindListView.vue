<template>
  <base-list-layout
    :is-loading="isLoading"
    :main-list-length="mainItemList.count"
    title="Поощрения"
  >
    <template v-slot:modals>
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
            <form @submit.prevent="">
              <div class="modal-body">
                <div class="mb-3">
                  <label for="id_encouragement_kind" class="form-label"
                    >Вид поощрения</label
                  >
                </div>
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
      <!--      <div-->
      <!--        class="modal fade"-->
      <!--        id="mainItemUpdateModal"-->
      <!--        tabindex="-1"-->
      <!--        aria-labelledby="exampleModalLabel"-->
      <!--        aria-hidden="true"-->
      <!--        ref="mainItemUpdateModal"-->
      <!--      >-->
      <!--        <div class="modal-dialog modal-dialog-centered">-->
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

      <!--            <form @submit.prevent="updateMainItemInList">-->
      <!--              <div class="modal-body">-->
      <!--                <div class="mb-3">-->
      <!--                  <label for="id_encouragement_kind" class="form-label"-->
      <!--                    >Курсант</label-->
      <!--                  >-->
      <!--                  <v-select-->
      <!--                    v-model="selectedCadet"-->
      <!--                    :options="orderedCadets"-->
      <!--                    label="get_full_name"-->
      <!--                    :filterable="false"-->
      <!--                    @search="onSearch"-->
      <!--                  >-->
      <!--                    <template slot="no-options"> Поиск по фамилии...</template>-->
      <!--                    <template slot="option" slot-scope="option">-->
      <!--                      <div class="d-center">-->
      <!--                        {{ option }}-->
      <!--                      </div>-->
      <!--                    </template>-->
      <!--                    <template slot="selected-option" slot-scope="option">-->
      <!--                      <div class="selected d-center">-->
      <!--                        {{ option }}-->
      <!--                      </div>-->
      <!--                    </template>-->
      <!--                  </v-select>-->
      <!--                </div>-->

      <!--                <EncouragementModalForCadetUpdate-->
      <!--                  :main-data="itemForm"-->
      <!--                  :encouragement-kind-list="orderedEncouragementKinds"-->
      <!--                  :order-owners="orderedOrderOwners"-->
      <!--                />-->
      <!--              </div>-->
      <!--              <div class="modal-footer">-->
      <!--                <button-->
      <!--                  type="button"-->
      <!--                  class="btn btn-secondary"-->
      <!--                  data-bs-dismiss="modal"-->
      <!--                  ref="mainItemUpdateModalCloseButton"-->
      <!--                >-->
      <!--                  Закрыть-->
      <!--                </button>-->
      <!--                <button type="submit" class="btn btn-primary">Сохранить</button>-->
      <!--              </div>-->
      <!--            </form>-->
      <!--          </div>-->
      <!--        </div>-->
      <!--      </div>-->

      <!-- delete approve modal-->

      <div
        class="modal fade"
        id="deleteApproveModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
        ref="deleteApproveModal"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header border-0">
              <h1 class="modal-title fs-5" id="exampleModalLabel">
                Подтверждение удаления
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              Вы действительно хотите удалить запись?
            </div>
            <div class="modal-footer border-0">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
                ref="deleteApproveModalCloseButton"
              >
                Отмена
              </button>
              <button
                type="button"
                class="btn btn-danger"
                @click="deleteItemHandler"
              >
                Удалить
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- delete approve multiple modal-->

      <div
        class="modal fade"
        id="deleteApproveMultipleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
        ref="deleteApproveMultipleModal"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header border-0">
              <h1 class="modal-title fs-5" id="exampleModalLabel">
                Подтверждение удаления
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              Вы действительно хотите удалить данные записи -
              {{ checkedForDeleteCount }} ?
            </div>
            <div class="modal-footer border-0">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
                ref="deleteApproveModalMultipleCloseButton"
              >
                Отмена
              </button>
              <button
                type="button"
                class="btn btn-danger"
                @click="deleteCheckedItemsHandler"
              >
                Удалить
              </button>
            </div>
          </div>
        </div>
      </div>
    </template>

    <template v-slot:add-button>
      <button
        class="btn btn-warning"
        :disabled="isLoading"
        @click="showAddNewMainItemModal"
      >
        Добавить запись
      </button>
    </template>

    <template v-slot:delete-selected-button>
      <button
        @click="deleteMultipleClick"
        class="btn btn-outline-danger"
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
        <th>Заголовок</th>
        <th>Дата добавления записи</th>
        <th>Дата последнего редактирования записи</th>
        <th></th>
      </tr>
    </template>
    <template v-slot:tbody>
      <tr
        v-for="encouragementKing in orderedMainList"
        :key="encouragementKing.id"
        @dblclick.stop="showUpdateMainItemModalInList(encouragementKing.id)"
      >
        <td>
          <div
            class="form-check d-flex align-items-center justify-content-center"
          >
            <input
              type="checkbox"
              class="form-check-input my-0"
              v-model="encouragementKing.isSelected"
            />
          </div>
        </td>
        <td>{{ encouragementKing.encouragement_kind }}</td>
        <td>
          {{
            new Date(encouragementKing.date_time_created).toLocaleString(
              "ru-RU",
              {
                day: "numeric",
                month: "long",
                year: "numeric",
                hour: "numeric",
                minute: "numeric",
                second: "numeric",
              },
            )
          }}
        </td>
        <td>
          {{
            new Date(encouragementKing.date_time_updated).toLocaleString(
              "ru-RU",
              {
                day: "numeric",
                month: "long",
                year: "numeric",
                hour: "numeric",
                minute: "numeric",
                second: "numeric",
              },
            )
          }}
        </td>
        <td>
          <div class="d-flex align-items-end justify-content-end">
            <button
              type="button"
              class="btn btn-outline-danger"
              @click="trashButtonClick(encouragementKing.id)"
              style="padding: 0.25rem 0.5rem"
            >
              <font-awesome-icon :icon="['fas', 'trash']" />
            </button>
          </div>
        </td>
      </tr>
    </template>

    <template v-slot:search-form>
      <div class="row">
        <div class="col-6">
          <div class="mb-3">
            <label for="encouragement_date__gte" class="form-label"
              >Вид поощрения</label
            >
            <input
              type="text"
              class="form-control"
              id="encouragement_date__gte"
              v-model="searchForm.encouragement_kind__icontains"
            />
          </div>
        </div>
      </div>
      <button type="button" class="btn btn-primary" @click="clearFilter">
        Сбросить фильтр
      </button>
    </template>
  </base-list-layout>
</template>

<script>
import getEncouragementKindAPIInstance from "@/api/cadet/encouragementKindAPI"
import { mapGetters } from "vuex"
import BaseListLayout from "@/components/layouts/BaseListLayout.vue"
import {
  getLoadListFunction,
  showAddNewMainItemModal,
  showUpdateMainItemModalInList,
  showDeleteApproveModal,
  showDeleteApproveMultipleModal,
  updatePaginator,
  checkAllHandler,
  checkedForDeleteCount,
  deleteItemHandler,
  deleteCheckedItemsHandler,
  clearFormData,
  addNewMainItemInList,
  updateMainItemInList,
} from "../../../../utils"
import { debounce } from "lodash/function"

export default {
  name: "EncouragementKindListView",
  components: {
    BaseListLayout,
  },
  data() {
    return {
      isLoading: false,
      isError: false,
      mainItemAPIInstance: getEncouragementKindAPIInstance(),
      itemForm: Object.assign({}, getEncouragementKindAPIInstance().formData),
      searchForm: Object.assign(
        {},
        getEncouragementKindAPIInstance().searchObj,
      ),
    }
  },
  methods: {
    trashButtonClick(id) {
      this.deleteItemId = id
      this.showDeleteApproveModal()
    },
    deleteMultipleClick() {
      this.showDeleteApproveMultipleModal()
    },
    checkAllHandler,
    showAddNewMainItemModal,
    clearFormData,
    debouncedSearch: debounce(async function () {
      this.isLoading = true
      this.mainItemAPIInstance.searchObj = Object.assign({}, this.searchForm)
      try {
        const encouragementResponse =
          await this.mainItemAPIInstance.getItemsList("token is here!!!")
        this.mainItemList = await encouragementResponse.data
      } catch (e) {
        this.isError = true
      } finally {
        this.isLoading = false
      }
    }, 500),
    clearFilter() {
      this.searchForm = Object.assign(
        {},
        this.mainItemAPIInstance.searchObjDefault,
      )
    },
  },
  computed: {
    checkedForDeleteCount,
    orderedMainList() {
      return this.mainItemList.results
    },
    ...mapGetters({
      mainItemList: "common/getEncouragementKinds",
    }),
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
