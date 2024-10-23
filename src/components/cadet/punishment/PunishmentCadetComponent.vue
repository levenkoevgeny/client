<template>
  <div
    class="modal fade"
    id="punishmentAddModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
    ref="punishmentAddModal"
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
    id="simple-list-punishments-data"
  >
    <base-list-layout-for-cadet-update
      :is-loading="isLoading"
      :main-list-length="orderedMainList.length"
    >
      <template v-slot:title>Дисциплинарные взыскания</template>
      <template v-slot:add-button>
        <button
          class="btn btn-warning"
          :disabled="isLoading"
          type="button"
          @click="showAddNewPunishmentModal"
        >
          <span class="fas fa-plus me-2"></span>Добавить запись
        </button>
      </template>
      <template v-slot:thead>
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
      </template>
      <template v-slot:tbody>
        <tr v-for="punishment in orderedMainList" :key="punishment.id">
          <td>{{ punishment.get_punishment_kind_str || "Нет данных" }}</td>
          <td>{{ punishment.punishment_start_date || "Нет данных" }}</td>
          <td>
            {{ punishment.punishment_start_order_number || "Нет данных" }}
          </td>
          <td>
            {{ punishment.get_punishment_start_order_owner || "Нет данных" }}
          </td>
          <td>{{ punishment.punishment_start_extra_data || "Нет данных" }}</td>
          <td>{{ punishment.punishment_expiration_date || "Нет данных" }}</td>
          <td>
            {{ punishment.punishment_expiration_order_number || "Нет данных" }}
          </td>
          <td>
            {{
              punishment.get_punishment_expiration_order_owner || "Нет данных"
            }}
          </td>
          <td>
            {{ punishment.punishment_expiration_extra_data || "Нет данных" }}
          </td>
        </tr>
      </template>
      <template v-slot:paginator></template>
    </base-list-layout-for-cadet-update>
  </div>
</template>

<script>
import getPunishmentKindAPIInstance from "@/api/cadet/punishmentKindAPI"
import getPunishmentAPIInstance from "@/api/cadet/punishmentAPI"

import BaseListLayoutForCadetUpdate from "@/components/layouts/BaseListLayoutForCadetUpdate.vue"
import { getLoadListFunction } from "../../../../utils"

export default {
  name: "PunishmentCadetComponent",
  components: { BaseListLayoutForCadetUpdate },
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
      punishmentKindList: {
        count: "",
        results: [],
        previous: null,
        next: null,
      },
      punishmentList: {
        count: "",
        results: [],
        previous: null,
        next: null,
      },
      punishmentKindAPIInstance: getPunishmentKindAPIInstance(),
      punishmentAPIInstance: getPunishmentAPIInstance(),
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
        const [punishmentKinds, punishments] = await Promise.all([
          listFunction("punishmentKind")(),
          listFunction("punishment")(this.cadetId),
        ])
        this.punishmentKindList = punishmentKinds
        this.punishmentList = punishments
      } catch (e) {
        this.isError = true
      } finally {
        this.isLoading = false
      }
    },
    showAddNewJobHistoryModal() {
      let addModal = this.$refs.jobHistoryAddModal
      let myModal = new bootstrap.Modal(addModal, {
        keyboard: false,
      })
      myModal.show()
    },
    async updatePaginator(url) {},
  },
  computed: {
    orderedMainList() {
      return this.punishmentList.results
    },
    orderedPunishmentKindList() {
      return this.punishmentKindList.results
    },
  },
  watch: {},
}
</script>

<style scoped></style>
