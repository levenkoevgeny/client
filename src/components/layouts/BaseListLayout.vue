<template>
  <slot name="modals"></slot>
  <div class="container-fluid">
    <div class="row flex-nowrap">
      <div class="col">
        <div class="d-flex justify-content-end">
          <a
            href="#"
            data-bs-target="#sidebar"
            data-bs-toggle="collapse"
            class="rounded-3 p-1 text-decoration-none fs-3 link-light"
            ><font-awesome-icon :icon="['fas', 'filter']"
          /></a>
        </div>

        <h2>
          {{ title }}
        </h2>
        <slot name="search-form-horizontal"></slot>
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

      <div class="col-auto">
        <div class="navbar navbar-expand-lg">
          <div
            id="sidebar"
            class="collapse collapse-horizontal border-start px-3"
          >
            <div
              id="sidebar-nav"
              class="list-group border-0 rounded-0 text-sm-start"
              style="width: 500px"
            >
              <h3 class="my-3">Поиск по критериям</h3>
              <div style="">
                <slot name="search-form"></slot>
              </div>
            </div>
          </div>
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
