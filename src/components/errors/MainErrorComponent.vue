<template>
  <div
    class="alert alert-danger"
    role="alert"
    style="position: fixed; z-index: 99999999; top: 0; left: 0; width: 100%"
    v-if="errorList.length"
  >
    Что-то пошло не так!
    <div>
      <p class="d-inline-flex gap-1">
        <a
          class="btn btn-link"
          data-bs-toggle="collapse"
          href="#collapseExample"
          role="button"
          aria-expanded="false"
          aria-controls="collapseExample"
        >
          Показать ошибки
        </a>
      </p>
      <div class="collapse" id="collapseExample">
        <div class="card card-body">
          <p v-for="error in errorList">{{ error }}</p>
        </div>
      </div>
    </div>
  </div>

  <div style="position: fixed; z-index: 9999; top: 0; left: 0">Main error</div>
</template>

<script>
import { mapGetters } from "vuex"
import errors from "@/store/modules/errors"

export default {
  name: "MainErrorComponent",
  computed: {
    ...mapGetters({
      errorList: "errors/getErrorsList",
    }),
  },
}
</script>

<style scoped></style>
