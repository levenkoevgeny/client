<template>
  <div>

<navigation-layout>
  <template v-slot:menu>
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
          <a class="nav-link active" aria-current="page" href="/"
          >Раздел навигации</a
          >
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="{ name: 'cadet' }">
            Главная
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
            Подразделы
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
      </ul>
    </div>
  </template>
</navigation-layout>
    <router-view></router-view>
  </div>
</template>

<script>
import NavigationLayout from "@/components/layouts/NavigationLayout.vue"
export default {
  name: "CadetMainView",
  components: {NavigationLayout},
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
