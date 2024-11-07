<template>
<navigation-layout></navigation-layout>
  <div class="container">
    <h1 class="my-4">Навигация по разделам</h1>
    <div class="d-flex flex-row flex-wrap">
      <div class="card me-4 mb-4" style="width: 24rem">
        <div class="card-body">
          <h5 class="card-title">КИС Курсант</h5>
          <p class="card-text">Комплексная информационная система "Курсант"</p>
          <router-link class="btn btn-primary" :to="{ name: 'cadet' }">
            Перейти
          </router-link>
        </div>
      </div>
      <div class="card me-4 mb-4" style="width: 24rem">
        <div class="card-body">
          <h5 class="card-title">КИС Сотрудники</h5>
          <p class="card-text">
            Комплексная информационная система "Сотрудники и гражданский
            персонал"
          </p>
          <router-link class="btn btn-primary" :to="{ name: 'navigation' }">
            Перейти
          </router-link>
        </div>
      </div>
      <div class="card me-4 mb-4" style="width: 24rem">
        <div class="card-body">
          <h5 class="card-title">КИС Студент</h5>
          <p class="card-text">Комплексная информационная система "Студент"</p>
          <router-link class="btn btn-primary" :to="{ name: 'navigation' }">
            Перейти
          </router-link>
        </div>
      </div>
      <div class="card me-4 mb-4" style="width: 24rem">
        <div class="card-body">
          <h5 class="card-title">КИС Идеология</h5>
          <p class="card-text">
            Комплексная информационная система "Идеология"
          </p>
          <router-link class="btn btn-primary" :to="{ name: 'navigation' }">
            Перейти
          </router-link>
        </div>
      </div>
      <div class="card me-4 mb-4" style="width: 24rem">
        <div class="card-body">
          <h5 class="card-title">КИС Научная деятельность</h5>
          <p class="card-text">
            Комплексная информационная система "Научная деятельность"
          </p>
          <router-link class="btn btn-primary" :to="{ name: 'navigation' }">
            Перейти
          </router-link>
        </div>
      </div>
      <div class="card me-4 mb-4" style="width: 24rem">
        <div class="card-body">
          <h5 class="card-title">КИС Вступительная кампания</h5>
          <p class="card-text">
            Комплексная информационная система "Вступительная кампания"
          </p>
          <router-link class="btn btn-primary" :to="{ name: 'entrance' }">
            Перейти
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavigationLayout from "@/components/layouts/NavigationLayout.vue"
export default {
  name: "NavigationPage",
  components: {NavigationLayout},
  data() {
    return {}
  },
  async created() {},
  methods: {},
  computed: {},
}
</script>

<style scoped>
.card:hover {
  transform: scale(1.05);
}

.card {
  transition: transform 0.5s;
}
</style>
