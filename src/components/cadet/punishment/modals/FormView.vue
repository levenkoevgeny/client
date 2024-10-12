<template>
  <div>
    <div class="shadow-sm p-3 mb-2 bg-body-tertiary rounded">
      <div class="row">
        <div class="col-lg-6">
          <div class="mb-3">
            <label for="cadet" class="form-label">Курсант</label>
            <select
              class="form-select"
              id="cadet"
              v-model="punishData.punishment_cadet"
              required
            >
              <option selected value="">-----</option>
              <option v-for="cadet in cadets" :value="cadet.id" :key="cadet.id">
                {{ cadet.get_full_name }}
              </option>
            </select>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="mb-3">
            <label for="punishmentKind" class="form-label">Вид взыскания</label>
            <select
              class="form-select"
              id="punishmentKind"
              v-model="punishData.punishment_kind"
              required
            >
              <option selected value="">-----</option>
              <option
                v-for="punishmentKind in punishmentKinds"
                :value="punishmentKind.id"
                :key="punishmentKind.id"
              >
                {{ punishmentKind.punishment_kind }}
              </option>
            </select>
          </div>
        </div>
      </div>
    </div>

    <!--наложение-->
    <div class="shadow-sm p-3 mb-2 bg-body-tertiary rounded">
      <div class="row">
        <div class="col-lg-6">
          <div class="mb-3">
            <label for="punishmentStartDate" class="form-label"
              >Дата начала действия взыскания</label
            >
            <input
              type="date"
              class="form-control"
              id="punishmentStartDate"
              v-model="punishData.punishment_start_date"
              required
            />
          </div>
        </div>
        <div class="col-lg-6">
          <div class="mb-3">
            <label for="punishmentStartOrderDate" class="form-label"
              >Дата приказа о наложении взыскания</label
            >
            <input
              type="date"
              class="form-control"
              id="punishmentStartOrderDate"
              v-model="punishData.punishment_start_order_date"
              required
            />
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-6">
          <div class="mb-3">
            <label for="punishmentStartOrderNumber" class="form-label"
              >Номер приказа о наложении взыскания</label
            >
            <input
              type="text"
              class="form-control"
              id="punishmentStartOrderNumber"
              v-model="punishData.punishment_start_order_number"
              required
            />
          </div>
        </div>
        <div class="col-lg-6">
          <div class="mb-3">
            <label for="punishmentStartOrderOwner" class="form-label"
              >Чей приказ (о наложении)</label
            >
            <select
              class="form-select"
              id="punishmentStartOrderOwner"
              v-model="punishData.punishment_start_order_owner"
              required
            >
              <option selected value="">-----</option>
              <option
                v-for="orderOwner in orderOwners"
                :value="orderOwner.id"
                :key="orderOwner.id"
              >
                {{ orderOwner.order_owner }}
              </option>
            </select>
          </div>
        </div>
      </div>
      <div class="mb-3">
        <label for="punishmentStartExtraData" class="form-label">Фабула</label>
        <textarea
          type="text"
          class="form-control"
          id="punishmentStartExtraData"
          v-model="punishData.punishment_start_extra_data"
          required
        />
      </div>
    </div>

    <!--снятие-->

    <div class="shadow-sm p-3 mb-2 bg-body-tertiary rounded">
      <div class="row">
        <div class="col-lg-6">
          <div class="mb-3">
            <label for="punishmentExpirationDate" class="form-label"
              >Дата окончания действия взыскания</label
            >
            <input
              type="date"
              class="form-control"
              id="punishmentExpirationDate"
              v-model="punishData.punishment_expiration_date"
            />
          </div>
        </div>
        <div class="col-lg-6">
          <div class="mb-3">
            <label for="punishmentExpirationOrderDate" class="form-label"
              >Дата приказа о снятии взыскания</label
            >
            <input
              type="date"
              class="form-control"
              id="punishmentExpirationOrderDate"
              v-model="punishData.punishment_expiration_order_date"
            />
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-6">
          <div class="mb-3">
            <label for="punishmentExpirationOrderNumber" class="form-label"
              >Номер приказа о снятии взыскания</label
            >
            <input
              type="text"
              class="form-control"
              id="punishmentExpirationOrderNumber"
              v-model="punishData.punishment_expiration_order_number"
            />
          </div>
        </div>
        <div class="col-lg-6">
          <div class="mb-3">
            <label for="punishmentExpirationOrderOwner" class="form-label"
              >Чей приказ (о снятии)</label
            >
            <select
              class="form-select"
              id="punishmentExpirationOrderOwner"
              v-model="punishData.punishment_expiration_order_owner"
            >
              <option selected value="">-----</option>
              <option
                v-for="orderOwner in orderOwners"
                :value="orderOwner.id"
                :key="orderOwner.id"
              >
                {{ orderOwner.order_owner }}
              </option>
            </select>
          </div>
        </div>
      </div>
      <div class="mb-3">
        <label for="punishmentExpirationExtraData" class="form-label">Фабула</label>
        <textarea
          type="text"
          class="form-control"
          id="punishmentExpirationExtraData"
          v-model="punishData.punishment_expiration_extra_data"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PunishmentFormView",
  props: {
    punishData: { type: Object, required: true },
    cadets: { type: Array, required: true },
    punishmentKinds: { type: Array, required: true },
    orderOwners: { type: Array, required: true },
  },
  components: {},
  data() {
    return {}
  },
  async created() {},
  methods: {},
  computed: {},
}
</script>

<style scoped></style>
