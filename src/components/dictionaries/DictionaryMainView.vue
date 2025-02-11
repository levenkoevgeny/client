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
              <router-link class="nav-link active" :to="{ name: 'navigation' }">
                Раздел навигации
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="{ name: 'dictionaries-main' }">
                Главная
              </router-link>
            </li>
          </ul>
        </div>
      </template>
    </navigation-layout>
    <div class="container-fluid">
      <h2 class="mt-3">Словари</h2>

      <div class="row">
        <div class="col-2">
          <router-link
            class=""
            :to="{ name: 'dictionaries-person-categories' }"
          >
            Категории сотрудников, курсантов, студентов
          </router-link>
          <br />
          <router-link class="" :to="{ name: 'dictionaries-ranks' }">
            Звания
          </router-link>
          <br />
          <router-link class="" :to="{ name: 'dictionaries-rank-groups' }">
            Категории званий
          </router-link>
          <br />
          <router-link class="" :to="{ name: 'dictionaries-groups' }">
            Группы
          </router-link>
          <br />
          <router-link class="" :to="{ name: 'dictionaries-encouragements' }">
            Поощрения
          </router-link>
          <br />
          <router-link class="" :to="{ name: 'dictionaries-punishments' }">
            Взыскания
          </router-link>
          <br />
          <router-link class="" :to="{ name: 'dictionaries-subdivisions' }">
            Подразделения
          </router-link>
          <br />
          <router-link class="" :to="{ name: 'dictionaries-positions' }">
            Должности
          </router-link>
          <br />
          <router-link class="" :to="{ name: 'order-owners' }">
            Чей приказ
          </router-link>
          <br />
          <router-link class="" :to="{ name: 'dictionaries-militaryoffices' }">
            Военкоматы
          </router-link>
          <br />
          <router-link class="" :to="{ name: 'dictionaries-go-rovd' }">
            ГО-РОВД
          </router-link>
          <br />
          <router-link class="" :to="{ name: 'dictionaries-component-organ' }">
            Комплектующие органы
          </router-link>
          <br />
          <router-link class="" :to="{ name: 'dictionaries-rewards' }">
            Награды
          </router-link>
          <br />
          <router-link class="" :to="{ name: 'dictionaries-speciality' }">
            Специальности
          </router-link>
          <br />
          <router-link class="" :to="{ name: 'dictionaries-specializations' }">
            Специализации
          </router-link>
          <br />
          <router-link class="" :to="{ name: 'dictionaries-ord-directions' }">
            Направления ОРД
          </router-link>
          <br />
          <router-link class="" :to="{ name: 'dictionaries-marital-statuses' }">
            Семейные положения
          </router-link>
          <br />
          <router-link
            class=""
            :to="{ name: 'dictionaries-passport-authorities' }"
          >
            Органы выдачи паспорта
          </router-link>
          <br />
          <router-link
            class=""
            :to="{ name: 'dictionaries-foreign-languages' }"
          >
            Иностранные языки
          </router-link>
          <br />
          <router-link
            class=""
            :to="{ name: 'dictionaries-foreign-language-levels' }"
          >
            Уровни владения и.я.
          </router-link>
          <br />
          <router-link
            class=""
            :to="{ name: 'dictionaries-graduation-reasons' }"
          >
            Причины отчисления
          </router-link>
          <br />
          <router-link class="" :to="{ name: 'dictionaries-education-forms' }">
            Формы обучения
          </router-link>
          <br />
        </div>
        <div class="col-10">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavigationLayout from "@/components/layouts/NavigationLayout.vue"

export default {
  name: "DictionaryMainView",
  components: { NavigationLayout },
}
</script>

<style scoped></style>
