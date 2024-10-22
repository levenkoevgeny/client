<template>
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">
        <slot name="title">Заголовок</slot>
      </h5>

      <div class="d-flex align-items-center justify-content-end mb-4">
        <slot name="add-button">
          <button class="btn btn-warning" :disabled="isLoading" type="button">
            <span class="fas fa-plus me-2"></span>Добавить запись
          </button>
        </slot>
      </div>
      <div v-if="isLoading">Loading</div>
      <div v-else>
        <div v-if="mainListLength">
          <div class="table-responsive">
            <div class="mb-3">
              <span>Всего записей - </span>
              <span class="text-body-tertiary fw-semibold">
                {{ mainListLength }}</span
              >
            </div>
            <table class="table table-hover">
              <slot name="thead"></slot>
              <tbody class="table-borderless">
                <slot name="tbody"></slot>
              </tbody>
            </table>
          </div>
        </div>
        <div v-else>Записей нет</div>
        <slot name="paginator"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "base-list-layout-for-cadet-update",
  props: {
    isLoading: {
      type: Boolean,
      required: true,
    },
    mainListLength: {
      type: Number,
      required: true,
      default: 0,
    },
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
