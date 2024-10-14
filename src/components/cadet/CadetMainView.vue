<template>
  <div>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="/">
          <img src="../../assets/logo.png" alt="KIS" width="30" height="30" />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/">Home</a>
            </li>

            <li class="nav-item">
              <router-link class="nav-link" :to="{ name: 'cadet' }">
                Курсанты
              </router-link>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Кадры
              </a>
              <ul class="dropdown-menu">
                <li class="nav-item">
                  <router-link class="nav-link" :to="{ name: 'encouragement' }">
                    Поощрения
                  </router-link>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link" :to="{ name: 'punishment' }">
                    Взыскания
                  </router-link>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link" :to="{ name: 'positions' }">
                    Назначения на должности
                  </router-link>
                </li>
                <li class="nav-item">
                  <router-link
                    class="nav-link"
                    :to="{ name: 'rank-histories' }"
                  >
                    Присвоение званий
                  </router-link>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link" :to="{ name: 'specialities' }">
                    Перевод на специальности
                  </router-link>
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="{ name: 'entrance' }">
                Вступительная кампания
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "CadetMainView",
  components: {},
  data() {
    return {}
  },
  async created() {},
  methods: {
    showAddNewEncouragementModal() {
      let addModal = this.$refs.myModal
      let myModal = new bootstrap.Modal(addModal, {
        keyboard: false,
      })
      myModal.show()
    },
  },
  computed: {},
}
</script>

<style scoped></style>
