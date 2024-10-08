<template>
  <slot name="modals"></slot>
  <div class="container-fluid">
    <slot name="title"></slot>
    <div class="row">
      <div class="col-8">
        <slot name="extra"></slot>
        <div class="my-4 d-flex">
          <slot name="add-button">
            <button class="btn btn-primary">
              <span class="fas fa-plus me-2"></span>Добавить запись
            </button>
          </slot>
        </div>

        <div class="table-responsive">
          <table class="table table-hover fw-light">
            <thead>
              <slot name="thead"></slot>
            </thead>
            <tbody class="table-borderless">
              <slot name="tbody"></slot>
            </tbody>
          </table>
        </div>
        <slot name="paginator"></slot>
      </div>
      <div class="col-4" style="max-height: 90vh; overflow: auto">
        <h5 class="my-3">Поиск по критериям</h5>
        <slot name="search-form"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "base-list-layout",
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
