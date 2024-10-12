<template>
  <div>
    <div class="mb-3">
      <label for="cadet" class="form-label">Курсант</label>
      <select
        class="form-select"
        id="cadet"
        v-model="encData.encouragement_cadet"
        required
      >
        <option selected value="">-----</option>
        <option v-for="cadet in cadets" :value="cadet.id" :key="cadet.id">
          {{ cadet.get_full_name }}
        </option>
      </select>
    </div>
    <div class="mb-3">
      <label for="encouragementKind" class="form-label">Вид поощрения</label>
      <select
        class="form-select"
        id="encouragementKind"
        v-model="encData.encouragement_kind"
        required
      >
        <option selected value="">-----</option>
        <option
          v-for="encouragementKind in encouragementKinds"
          :value="encouragementKind.id"
          :key="encouragementKind.id"
        >
          {{ encouragementKind.encouragement_kind }}
        </option>
      </select>
    </div>
    <div class="mb-3">
      <label for="encouragementDate" class="form-label">Дата поощрения</label>
      <input
        type="date"
        class="form-control"
        id="encouragementDate"
        v-model="encData.encouragement_date"
        required
      />
    </div>
    <div class="mb-3">
      <label for="encouragementOrderDate" class="form-label"
        >Дата приказа</label
      >
      <input
        type="date"
        class="form-control"
        id="encouragementOrderDate"
        v-model="encData.encouragement_order_date"
        required
      />
    </div>
    <div class="mb-3">
      <label for="encouragementOrderNumber" class="form-label"
        >Номер приказа</label
      >
      <input
        type="text"
        class="form-control"
        id="encouragementOrderNumber"
        v-model="encData.encouragement_order_number"
        required
      />
    </div>
    <div class="mb-3">
      <label for="encouragementOrderOwner" class="form-label">Чей приказ</label>
      <select
        class="form-select"
        id="encouragementOrderOwner"
        v-model="encData.encouragement_order_owner"
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
    <div class="mb-3">
      <label for="encouragementExtraData" class="form-label">Фабула</label>
      <textarea
        class="form-control"
        id="encouragementExtraData"
        v-model="encData.encouragement_extra_data"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "EncouragementFormView",
  props: {
    encData: { type: Object, required: true },
    cadets: { type: Array, required: true },
    encouragementKinds: { type: Array, required: true },
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
