<template>
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
    ref="encouragementModal"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Поощрение</h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <form @submit.prevent="addNewEncouragement">
          <div class="modal-body">
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label"
                >Вид поощрения</label
              >
              <select
                class="form-select"
                v-model="newEncouragement.encouragement_kind"
                required
              >
                <option selected value="">-------</option>
                <option
                  :value="encouragement.id"
                  v-for="encouragement in encouragementKindList.results"
                  :key="encouragement.id"
                >
                  {{ encouragement.encouragement_kind }}
                </option>
              </select>
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label"
                >Дата поощрения</label
              >
              <input
                type="date"
                class="form-control"
                v-model="newEncouragement.encouragement_date"
                required
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label"
                >Доп. информация</label
              >
              <textarea
                class="form-control"
                v-model="newEncouragement.encouragement_extra_data"
              />
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
              ref="addEncouragementModalCloseButton"
            >
              Закрыть
            </button>
            <button type="submit" class="btn btn-primary">Сохранить</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "EncouragementModal",
  components: {},
  data() {
    return {}
  },
  async created() {},
  methods: {},
  computed: {},
}
</script>
