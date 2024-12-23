<template>
  <slot name="modals"></slot>
  <div class="container-fluid">
    <div class="row">
      <div class="col-8">
        <h5 class="card-title my-4">
          {{ title }}
        </h5>
        <div class="d-flex align-items-center justify-content-end m-4">
          <slot name="add-button">
            <button class="btn btn-warning" :disabled="isLoading" type="button">
              <span class="fas fa-plus me-2"></span>Добавить запись
            </button>
          </slot>
        </div>
        <div></div>
        <div v-if="isLoading">Загрузка данных ...</div>
        <div v-else>
          <div v-if="mainListLength">
            <div class="mb-3 d-flex align-items-center justify-content-between">
              <div>
                <span>Всего записей - </span>
                <span class="text-body-tertiary fw-semibold">
                  {{ mainListLength }}</span
                >
              </div>
              <slot name="delete-selected-button"></slot>
            </div>
            <slot name="table-mode-button"></slot>
            <div
              class="table-responsive"
              style="max-height: 68vh; overflow-y: auto"
              @scroll="loadMoreData"
              id="infinite_list"
            >
              <table class="table table-hover">
                <thead style="position: sticky; top: 0">
                  <slot name="thead"></slot>
                </thead>
                <tbody class="table-borderless">
                  <slot name="tbody"></slot>
                </tbody>
              </table>
            </div>
          </div>
          <div v-else>Записей нет</div>
          <div class="my-3"></div>
          <slot name="paginator"></slot>
        </div>
      </div>
      <div class="col-4">
        <h3 class="my-3">Поиск по критериям</h3>
        <div style="">
          <slot name="search-form"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "base-list-layout",
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
    title: { type: String, required: false, default: "Заголовок" },
    loadMoreData: { type: Function, required: false, default: () => {} },
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

<style scoped>
thead {
  position: sticky;
  top: 0;
}
th,
td {
  min-width: 100px;
  text-align: start;
  vertical-align: middle;
}
td {
  cursor: pointer;
}
</style>
