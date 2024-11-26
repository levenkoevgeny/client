<template>
  <base-list-layout
    :is-loading="isLoading"
    :main-list-length="cadetList.count"
    title="Курсанты"
  >
    <template v-slot:add-button>
      <button class="btn btn-warning" @click="showCadetAddModal">
        Добавить запись
      </button>
    </template>
    <template v-slot:table-mode-button>
      <router-link
        :to="{ name: 'cadet-full' }"
        class="fs-3 fw-light link-secondary"
        title="Табличный режим"
      >
        <font-awesome-icon :icon="['fas', 'table']" />
      </router-link>
    </template>
    <template v-slot:modals>
      <div
        class="modal fade"
        id="cadetAddModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
        ref="cadetAddModal"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">
                Добавление записи
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <form @submit.prevent="addNewCadet">
              <div class="modal-body">
                <div class="mb-3">
                  <label for="last_name_rus" class="form-label">Фамилия</label>
                  <input
                    type="text"
                    class="form-control"
                    id="last_name_rus"
                    v-model="cadetNewForm.last_name_rus"
                    required
                  />
                </div>
                <div class="mb-3">
                  <label for="first_name_rus" class="form-label">Имя</label>
                  <input
                    type="text"
                    class="form-control"
                    id="first_name_rus"
                    v-model="cadetNewForm.first_name_rus"
                    required
                  />
                </div>
                <div class="mb-3">
                  <label for="date_of_birth" class="form-label"
                    >Дата рождения</label
                  >
                  <input
                    type="date"
                    class="form-control"
                    id="date_of_birth"
                    v-model="cadetNewForm.date_of_birth"
                    required
                  />
                </div>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                  ref="cadetAddModalCloseButton"
                >
                  Закрыть без сохранения
                </button>
                <button type="submit" class="btn btn-primary">Сохранить</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </template>
    <template v-slot:thead>
      <tr>
        <th scope="col"></th>
        <th scope="col">Фамилия, имя, отчество</th>
        <th scope="col">Факультет</th>
        <th scope="col">Группа</th>
        <th scope="col">Специальность</th>
        <th scope="col">Период обучения</th>
      </tr>
    </template>
    <template v-slot:tbody>
      <tr
        class="align-middle"
        v-for="cadet in orderedCadets"
        :key="cadet.id"
        @dblclick="
          $router.push({ name: 'cadet-update', params: { id: cadet.id } })
        "
      >
        <td>
          <img
            v-if="cadet.photo"
            :src="cadet.photo"
            class="img-thumbnail"
            alt="..."
            style="width: 50px"
          />
          <img
            v-else
            src="../../assets/without_photo.jpg"
            class="img-thumbnail"
            alt="..."
            style="width: 50px"
          />
        </td>
        <td>
          <router-link
            :to="{
              name: 'cadet-view',
              params: { id: cadet.id },
            }"
          >
            {{ cadet.last_name_rus }}<br />
            {{ cadet.first_name_rus }}<br />{{ cadet.patronymic_rus }}
          </router-link>
        </td>
        <td>{{ cadet.get_subdivision }}</td>
        <td>{{ cadet.get_group }}</td>
        <td>{{ cadet.get_speciality }}</td>
        <td>
          {{ cadet.academy_start_date }} - <br />
          {{ cadet.academy_end_date }}
        </td>
      </tr>
    </template>
    <template v-slot:paginator>
      <PaginatorView
        :update-paginator="updatePaginator"
        :list-next="cadetList.next"
        :list-previous="cadetList.previous"
        v-if="cadetList.previous || cadetList.next"
      />
    </template>
    <template v-slot:search-form>
      <div class="mb-3">
        <label for="last_name_rus" class="form-label">Фамилия</label>
        <input
          type="text"
          id="last_name_rus"
          class="form-control"
          v-model="searchForm.last_name_rus__icontains"
        />
      </div>
      <div class="mb-3">
        <label for="category" class="form-label">Категория</label>
        <select
          class="form-select"
          aria-label="Default select example"
          v-model="searchForm.category"
        >
          <option selected value="">--------</option>
          <option
            v-for="category in orderedCadetCategories"
            :key="category.id"
            :value="category.id"
          >
            {{ category.category }}
          </option>
        </select>
      </div>
      <div class="mb-3">
        <label for="category" class="form-label">Пол</label>
        <select
          class="form-select"
          aria-label="Default select example"
          v-model="searchForm.gender"
        >
          <option selected value="">--------</option>
          <option value="0">Мужской</option>
          <option value="1">Женский</option>
        </select>
      </div>
      <div class="mb-3">
        <label for="subdivision" class="form-label">Факультет</label>
        <v-select
          v-model="searchForm.subdivision__in"
          :options="orderedSubdivisions"
          label="subdivision_short_name"
          :reduce="(subdivision) => subdivision.id"
          multiple
        />
      </div>
      <div class="mb-3">
        <label for="subdivision" class="form-label">Группа</label>
        <v-select
          v-model="searchForm.group__in"
          :options="orderedGroups"
          label="group_name"
          :reduce="(group) => group.id"
          multiple
        />
      </div>
      <div class="mb-3">
        <label for="subdivision" class="form-label">Звание</label>
        <v-select
          v-model="searchForm.current_rank__in"
          :options="orderedRanks"
          label="rank"
          :reduce="(rank) => rank.id"
          multiple
        />
      </div>
      <div class="mb-3">
        <label for="subdivision" class="form-label">Специальность</label>
        <v-select
          v-model="searchForm.current_speciality__in"
          :options="orderedSpecialities"
          label="speciality_name"
          :reduce="(speciality) => speciality.id"
          multiple
        />
      </div>
      <div class="mb-3">
        <label for="subdivision" class="form-label">Должность</label>
        <v-select
          v-model="searchForm.current_position__in"
          :options="orderedPositions"
          label="position"
          :reduce="(position) => position.id"
          multiple
        />
      </div>
      <div class="row">
        <div class="col-6">
          <div class="mb-3">
            <label for="date_of_birth__gte" class="form-label"
              >Дата рождения (с)</label
            >
            <input
              type="date"
              class="form-control"
              id="date_of_birth__gte"
              v-model="searchForm.date_of_birth__gte"
            />
          </div>
        </div>
        <div class="col-6">
          <div class="mb-3">
            <label for="date_of_birth__lte" class="form-label"
              >Дата рождения (по)</label
            >
            <input
              type="date"
              class="form-control"
              id="date_of_birth__lte"
              v-model="searchForm.date_of_birth__lte"
            />
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-6">
          <div class="mb-3">
            <label for="academy_start_date__gte" class="form-label"
              >Дата поступления (с)</label
            >
            <input
              type="date"
              max="2100"
              class="form-control"
              id="academy_start_date__gte"
              v-model="searchForm.academy_start_date__gte"
            />
          </div>
        </div>
        <div class="col-6">
          <div class="mb-3">
            <label for="academy_start_date__lte" class="form-label"
              >Дата поступления (по)</label
            >
            <input
              type="date"
              class="form-control"
              id="academy_start_date__lte"
              v-model="searchForm.academy_start_date__lte"
            />
          </div>
        </div>
      </div>

      <button type="button" class="btn btn-primary" @click="clearFilter">
        Сбросить фильтр
      </button>
    </template>

    <!--    <template v-slot:extra>-->
    <!--      <ul class="nav nav-links my-3 mb-lg-2 mx-n3">-->
    <!--        <li class="nav-item">-->
    <!--          <a class="nav-link active" aria-current="page" href="#"-->
    <!--            ><span>Всего </span-->
    <!--            ><span class="text-body-tertiary fw-semibold"-->
    <!--              >({{ cadetList.count }})</span-->
    <!--            ></a-->
    <!--          >-->
    <!--        </li>-->
    <!--      </ul>-->
    <!--    </template>-->
    <!--        <template v-slot:add-button>-->
    <!--          <div class="d-flex justify-content-between align-items-center">-->
    <!--            <button class="btn btn-warning" @click="showCadetAddModal">-->
    <!--              Добавить запись-->
    <!--            </button>-->
    <!--            <router-link-->
    <!--              :to="{ name: 'cadet-full' }"-->
    <!--              class="fs-3 fw-light link-secondary"-->
    <!--              title="Табличный режим"-->
    <!--            >-->
    <!--              <font-awesome-icon :icon="['fas', 'table']" />-->
    <!--            </router-link>-->
    <!--          </div>-->
    <!--        </template>-->
    <!--    <template v-slot:thead>-->
    <!--      <tr>-->
    <!--        <th scope="col"></th>-->
    <!--        <th scope="col">Фамилия, имя, отчество</th>-->
    <!--        <th scope="col">Факультет</th>-->
    <!--        <th scope="col">Группа</th>-->
    <!--        <th scope="col">Специальность</th>-->
    <!--        <th scope="col">Период обучения</th>-->
    <!--      </tr>-->
    <!--    </template>-->
    <!--    <template v-slot:tbody>-->
    <!--      <tr-->
    <!--        class="align-middle"-->
    <!--        v-for="cadet in orderedCadets"-->
    <!--        :key="cadet.id"-->
    <!--        @dblclick="-->
    <!--          $router.push({ name: 'cadet-update', params: { id: cadet.id } })-->
    <!--        "-->
    <!--      >-->
    <!--        <td>-->
    <!--          <img-->
    <!--            v-if="cadet.photo"-->
    <!--            :src="cadet.photo"-->
    <!--            class="img-thumbnail"-->
    <!--            alt="..."-->
    <!--            style="width: 50px"-->
    <!--          />-->
    <!--          <img-->
    <!--            v-else-->
    <!--            src="../../assets/without_photo.jpg"-->
    <!--            class="img-thumbnail"-->
    <!--            alt="..."-->
    <!--            style="width: 50px"-->
    <!--          />-->
    <!--        </td>-->
    <!--        <td>-->
    <!--          <router-link-->
    <!--            :to="{-->
    <!--              name: 'cadet-view',-->
    <!--              params: { id: cadet.id },-->
    <!--            }"-->
    <!--          >-->
    <!--            {{ cadet.last_name_rus }}<br />-->
    <!--            {{ cadet.first_name_rus }}<br />{{ cadet.patronymic_rus }}-->
    <!--          </router-link>-->
    <!--        </td>-->
    <!--        <td>{{ cadet.get_subdivision }}</td>-->
    <!--        <td>{{ cadet.get_group }}</td>-->
    <!--        <td>{{ cadet.get_speciality }}</td>-->
    <!--        <td>-->
    <!--          {{ cadet.academy_start_date }} - <br />-->
    <!--          {{ cadet.academy_end_date }}-->
    <!--        </td>-->
    <!--      </tr>-->
    <!--    </template>-->
    <!--    <template v-slot:paginator>-->
    <!--      <PaginatorView-->
    <!--        :update-paginator="updatePaginator"-->
    <!--        :list-next="cadetList.next"-->
    <!--        :list-previous="cadetList.previous"-->
    <!--        v-if="cadetList.previous || cadetList.next"-->
    <!--      />-->
    <!--    </template>-->

    <!--    <template v-slot:search-form>-->
    <!--      <div class="mb-3">-->
    <!--        <label for="last_name_rus" class="form-label">Фамилия</label>-->
    <!--        <input-->
    <!--          type="text"-->
    <!--          id="last_name_rus"-->
    <!--          class="form-control"-->
    <!--          v-model="searchForm.last_name_rus__icontains"-->
    <!--        />-->
    <!--      </div>-->
    <!--      <div class="mb-3">-->
    <!--        <label for="category" class="form-label">Категория</label>-->
    <!--        <select-->
    <!--          class="form-select"-->
    <!--          aria-label="Default select example"-->
    <!--          v-model="searchForm.category"-->
    <!--        >-->
    <!--          <option selected value="">&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;</option>-->
    <!--          <option-->
    <!--            v-for="category in orderedCadetCategories"-->
    <!--            :key="category.id"-->
    <!--            :value="category.id"-->
    <!--          >-->
    <!--            {{ category.category }}-->
    <!--          </option>-->
    <!--        </select>-->
    <!--      </div>-->
    <!--      <div class="mb-3">-->
    <!--        <label for="category" class="form-label">Пол</label>-->
    <!--        <select-->
    <!--          class="form-select"-->
    <!--          aria-label="Default select example"-->
    <!--          v-model="searchForm.gender"-->
    <!--        >-->
    <!--          <option selected value="">&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;</option>-->
    <!--          <option value="0">Мужской</option>-->
    <!--          <option value="1">Женский</option>-->
    <!--        </select>-->
    <!--      </div>-->
    <!--      <div class="mb-3">-->
    <!--        <label for="subdivision" class="form-label">Факультет</label>-->
    <!--        <select-->
    <!--          class="form-select"-->
    <!--          aria-label="Default select example"-->
    <!--          v-model="searchForm.subdivision"-->
    <!--        >-->
    <!--          <option selected value="">&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;</option>-->
    <!--          <option-->
    <!--            v-for="subdivision in orderedSubdivisions"-->
    <!--            :key="subdivision.id"-->
    <!--            :value="subdivision.id"-->
    <!--          >-->
    <!--            {{ subdivision.subdivision_short_name }}-->
    <!--          </option>-->
    <!--        </select>-->
    <!--      </div>-->
    <!--      <div class="mb-3">-->
    <!--        <label for="subdivision" class="form-label">Группа</label>-->
    <!--        <select-->
    <!--          class="form-select"-->
    <!--          aria-label="Default select example"-->
    <!--          v-model="searchForm.group"-->
    <!--        >-->
    <!--          <option selected value="">&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;</option>-->
    <!--          <option-->
    <!--            v-for="group in orderedGroups"-->
    <!--            :key="group.id"-->
    <!--            :value="group.id"-->
    <!--          >-->
    <!--            {{ group.group_name }}-->
    <!--          </option>-->
    <!--        </select>-->
    <!--      </div>-->
    <!--      <div class="mb-3">-->
    <!--        <label for="subdivision" class="form-label">Звание</label>-->
    <!--        <select-->
    <!--          class="form-select"-->
    <!--          aria-label="Default select example"-->
    <!--          v-model="searchForm.current_rank"-->
    <!--        >-->
    <!--          <option selected value="">&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;</option>-->
    <!--          <option v-for="rank in orderedRanks" :key="rank.id" :value="rank.id">-->
    <!--            {{ rank.rank }}-->
    <!--          </option>-->
    <!--        </select>-->
    <!--      </div>-->
    <!--      <div class="mb-3">-->
    <!--        <label for="subdivision" class="form-label">Специальность</label>-->
    <!--        <select-->
    <!--          class="form-select"-->
    <!--          aria-label="Default select example"-->
    <!--          v-model="searchForm.current_speciality"-->
    <!--        >-->
    <!--          <option selected value="">&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;</option>-->
    <!--          <option-->
    <!--            v-for="speciality in orderedSpecialities"-->
    <!--            :key="speciality.id"-->
    <!--            :value="speciality.id"-->
    <!--          >-->
    <!--            {{ speciality.speciality_name }}-->
    <!--          </option>-->
    <!--        </select>-->
    <!--      </div>-->
    <!--      <div class="mb-3">-->
    <!--        <label for="subdivision" class="form-label">Должность</label>-->
    <!--        <select-->
    <!--          class="form-select"-->
    <!--          aria-label="Default select example"-->
    <!--          v-model="searchForm.current_position"-->
    <!--        >-->
    <!--          <option selected value="">&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;</option>-->
    <!--          <option-->
    <!--            v-for="position in orderedPositions"-->
    <!--            :key="position.id"-->
    <!--            :value="position.id"-->
    <!--          >-->
    <!--            {{ position.position }}-->
    <!--          </option>-->
    <!--        </select>-->
    <!--      </div>-->
    <!--      <div class="row">-->
    <!--        <div class="col-6">-->
    <!--          <div class="mb-3">-->
    <!--            <label for="date_of_birth__gte" class="form-label"-->
    <!--              >Дата рождения (с)</label-->
    <!--            >-->
    <!--            <input-->
    <!--              type="date"-->
    <!--              class="form-control"-->
    <!--              id="date_of_birth__gte"-->
    <!--              v-model="searchForm.date_of_birth__gte"-->
    <!--            />-->
    <!--          </div>-->
    <!--        </div>-->
    <!--        <div class="col-6">-->
    <!--          <div class="mb-3">-->
    <!--            <label for="date_of_birth__lte" class="form-label"-->
    <!--              >Дата рождения (по)</label-->
    <!--            >-->
    <!--            <input-->
    <!--              type="date"-->
    <!--              class="form-control"-->
    <!--              id="date_of_birth__lte"-->
    <!--              v-model="searchForm.date_of_birth__lte"-->
    <!--            />-->
    <!--          </div>-->
    <!--        </div>-->
    <!--      </div>-->
    <!--      &lt;!&ndash;      <div class="mb-3">&ndash;&gt;-->
    <!--      &lt;!&ndash;        <label for="address__icontains" class="form-label"&ndash;&gt;-->
    <!--      &lt;!&ndash;          >Адрес (содержит)</label&ndash;&gt;-->
    <!--      &lt;!&ndash;        >&ndash;&gt;-->
    <!--      &lt;!&ndash;        <input&ndash;&gt;-->
    <!--      &lt;!&ndash;          type="text"&ndash;&gt;-->
    <!--      &lt;!&ndash;          class="form-control"&ndash;&gt;-->
    <!--      &lt;!&ndash;          id="address__icontains"&ndash;&gt;-->
    <!--      &lt;!&ndash;          v-model="searchForm.address__icontains"&ndash;&gt;-->
    <!--      &lt;!&ndash;        />&ndash;&gt;-->
    <!--      &lt;!&ndash;      </div>&ndash;&gt;-->
    <!--      &lt;!&ndash;      <div class="mb-3">&ndash;&gt;-->
    <!--      &lt;!&ndash;        <label for="passport_number" class="form-label">Номер паспорта</label>&ndash;&gt;-->
    <!--      &lt;!&ndash;        <input&ndash;&gt;-->
    <!--      &lt;!&ndash;          type="text"&ndash;&gt;-->
    <!--      &lt;!&ndash;          class="form-control"&ndash;&gt;-->
    <!--      &lt;!&ndash;          id="passport_number"&ndash;&gt;-->
    <!--      &lt;!&ndash;          v-model="searchForm.passport_number"&ndash;&gt;-->
    <!--      &lt;!&ndash;        />&ndash;&gt;-->
    <!--      &lt;!&ndash;      </div>&ndash;&gt;-->
    <!--      &lt;!&ndash;      <div class="row">&ndash;&gt;-->
    <!--      &lt;!&ndash;        <div class="col-6">&ndash;&gt;-->
    <!--      &lt;!&ndash;          <div class="mb-3">&ndash;&gt;-->
    <!--      &lt;!&ndash;            <label for="passport_issue_date__gte" class="form-label"&ndash;&gt;-->
    <!--      &lt;!&ndash;              >Дата выдачи паспорта (с)</label&ndash;&gt;-->
    <!--      &lt;!&ndash;            >&ndash;&gt;-->
    <!--      &lt;!&ndash;            <input&ndash;&gt;-->
    <!--      &lt;!&ndash;              type="date"&ndash;&gt;-->
    <!--      &lt;!&ndash;              class="form-control"&ndash;&gt;-->
    <!--      &lt;!&ndash;              id="passport_issue_date__gte"&ndash;&gt;-->
    <!--      &lt;!&ndash;              v-model="searchForm.passport_issue_date__gte"&ndash;&gt;-->
    <!--      &lt;!&ndash;            />&ndash;&gt;-->
    <!--      &lt;!&ndash;          </div>&ndash;&gt;-->
    <!--      &lt;!&ndash;        </div>&ndash;&gt;-->
    <!--      &lt;!&ndash;        <div class="col-6">&ndash;&gt;-->
    <!--      &lt;!&ndash;          <div class="mb-3">&ndash;&gt;-->
    <!--      &lt;!&ndash;            <label for="passport_issue_date__lte" class="form-label"&ndash;&gt;-->
    <!--      &lt;!&ndash;              >Дата выдачи паспорта (по)</label&ndash;&gt;-->
    <!--      &lt;!&ndash;            >&ndash;&gt;-->
    <!--      &lt;!&ndash;            <input&ndash;&gt;-->
    <!--      &lt;!&ndash;              type="date"&ndash;&gt;-->
    <!--      &lt;!&ndash;              class="form-control"&ndash;&gt;-->
    <!--      &lt;!&ndash;              id="passport_issue_date__lte"&ndash;&gt;-->
    <!--      &lt;!&ndash;              v-model="searchForm.passport_issue_date__lte"&ndash;&gt;-->
    <!--      &lt;!&ndash;            />&ndash;&gt;-->
    <!--      &lt;!&ndash;          </div>&ndash;&gt;-->
    <!--      &lt;!&ndash;        </div>&ndash;&gt;-->
    <!--      &lt;!&ndash;      </div>&ndash;&gt;-->
    <!--      &lt;!&ndash;      <div class="row">&ndash;&gt;-->
    <!--      &lt;!&ndash;        <div class="col-6">&ndash;&gt;-->
    <!--      &lt;!&ndash;          <div class="mb-3">&ndash;&gt;-->
    <!--      &lt;!&ndash;            <label for="passport_validity_period__gte" class="form-label"&ndash;&gt;-->
    <!--      &lt;!&ndash;              >Окончание действия паспорта (с)</label&ndash;&gt;-->
    <!--      &lt;!&ndash;            >&ndash;&gt;-->
    <!--      &lt;!&ndash;            <input&ndash;&gt;-->
    <!--      &lt;!&ndash;              type="date"&ndash;&gt;-->
    <!--      &lt;!&ndash;              class="form-control"&ndash;&gt;-->
    <!--      &lt;!&ndash;              id="passport_validity_period__gte"&ndash;&gt;-->
    <!--      &lt;!&ndash;              v-model="searchForm.passport_validity_period__gte"&ndash;&gt;-->
    <!--      &lt;!&ndash;            />&ndash;&gt;-->
    <!--      &lt;!&ndash;          </div>&ndash;&gt;-->
    <!--      &lt;!&ndash;        </div>&ndash;&gt;-->
    <!--      &lt;!&ndash;        <div class="col-6">&ndash;&gt;-->
    <!--      &lt;!&ndash;          <div class="mb-3">&ndash;&gt;-->
    <!--      &lt;!&ndash;            <label for="passport_validity_period__lte" class="form-label"&ndash;&gt;-->
    <!--      &lt;!&ndash;              >Окончание действия паспорта (по)</label&ndash;&gt;-->
    <!--      &lt;!&ndash;            >&ndash;&gt;-->
    <!--      &lt;!&ndash;            <input&ndash;&gt;-->
    <!--      &lt;!&ndash;              type="date"&ndash;&gt;-->
    <!--      &lt;!&ndash;              class="form-control"&ndash;&gt;-->
    <!--      &lt;!&ndash;              id="passport_validity_period__lte"&ndash;&gt;-->
    <!--      &lt;!&ndash;              v-model="searchForm.passport_validity_period__lte"&ndash;&gt;-->
    <!--      &lt;!&ndash;            />&ndash;&gt;-->
    <!--      &lt;!&ndash;          </div>&ndash;&gt;-->
    <!--      &lt;!&ndash;        </div>&ndash;&gt;-->
    <!--      &lt;!&ndash;      </div>&ndash;&gt;-->
    <!--      <div class="row">-->
    <!--        <div class="col-6">-->
    <!--          <div class="mb-3">-->
    <!--            <label for="academy_start_date__gte" class="form-label"-->
    <!--              >Дата поступления (с)</label-->
    <!--            >-->
    <!--            <input-->
    <!--              type="date"-->
    <!--              max="2100"-->
    <!--              class="form-control"-->
    <!--              id="academy_start_date__gte"-->
    <!--              v-model="searchForm.academy_start_date__gte"-->
    <!--            />-->
    <!--          </div>-->
    <!--        </div>-->
    <!--        <div class="col-6">-->
    <!--          <div class="mb-3">-->
    <!--            <label for="academy_start_date__lte" class="form-label"-->
    <!--              >Дата поступления (по)</label-->
    <!--            >-->
    <!--            <input-->
    <!--              type="date"-->
    <!--              class="form-control"-->
    <!--              id="academy_start_date__lte"-->
    <!--              v-model="searchForm.academy_start_date__lte"-->
    <!--            />-->
    <!--          </div>-->
    <!--        </div>-->
    <!--      </div>-->

    <!--      <button type="button" class="btn btn-primary" @click="clearFilter">-->
    <!--        Сбросить фильтр-->
    <!--      </button>-->
    <!--    </template>-->
  </base-list-layout>
</template>

<script>
import { globalCadetAPIInstance } from "@/api/cadet/cadetAPI"
import getCadetCategoryAPIAPIInstance from "@/api/cadet/cadetCategoryAPI"
import getSubdivisionAPIInstance from "@/api/cadet/subdivisionAPI"
import getGroupAPIInstance from "@/api/cadet/groupAPI"
import getRankAPIInstance from "@/api/cadet/rankAPI"
import getSpecialityAPIInstance from "@/api/cadet/specialityAPI"
import getPositionAPIInstance from "@/api/cadet/positionAPI"
import BaseListLayout from "@/components/layouts/BaseListLayout.vue"
import { PaginatorView } from "@/components/common"
import { debounce } from "lodash/function"
import { getLoadListFunction } from "../../../utils"
import BaseListLayoutForCadetUpdate from "@/components/layouts/BaseListLayoutForCadetUpdate.vue"

import { mapGetters } from "vuex"

export default {
  name: "CadetList",
  components: {
    BaseListLayoutForCadetUpdate,
    BaseListLayout,
    PaginatorView,
  },
  data() {
    return {
      cadetList: { count: "", results: [], previous: null, next: null },
      cadetCategoryList: { count: "", results: [], previous: null, next: null },
      isLoading: true,
      isError: false,
      BACKEND_PROTOCOL: process.env.VUE_APP_BACKEND_PROTOCOL,
      BACKEND_HOST: process.env.VUE_APP_BACKEND_HOST,
      BACKEND_PORT: process.env.VUE_APP_BACKEND_PORT,
      cadetAPIInstance: globalCadetAPIInstance,
      cadetCategoryAPIInstance: getCadetCategoryAPIAPIInstance(),
      subdivisionAPIInstance: getSubdivisionAPIInstance(),
      groupAPIInstance: getGroupAPIInstance(),
      rankAPIInstance: getRankAPIInstance(),
      specialityAPIInstance: getSpecialityAPIInstance(),
      positionAPIInstance: getPositionAPIInstance(),
      searchForm: Object.assign({}, globalCadetAPIInstance.searchObj),
      cadetNewForm: {
        last_name_rus: "",
        first_name_rus: "",
        date_of_birth: null,
      },
    }
  },
  async created() {
    await this.loadData()
  },
  methods: {
    async loadData() {
      const listFunction = getLoadListFunction.bind(this)
      this.isLoading = true
      this.isError = false
      try {
        const [cadetCategories, cadets, specialities, positions] =
          await Promise.all([
            listFunction("cadetCategory")(null, 1000),
            listFunction("cadet")(),
          ]).catch(() => (this.isError = true))
        this.cadetCategoryList = cadetCategories
        this.cadetList = cadets
      } catch (e) {
        this.isError = true
      } finally {
        this.isLoading = false
      }
    },
    async updatePaginator(url) {
      this.isLoading = true
      try {
        const response = await this.cadetAPIInstance.updateList(
          url,
          "this.userToken",
        )
        this.cadetList = await response.data
      } catch (error) {
        this.isError = true
      } finally {
        this.isLoading = false
      }
    },
    debouncedSearch: debounce(async function () {
      this.isLoading = true
      this.cadetAPIInstance.searchObj = this.searchForm
      try {
        const cadetAResponse =
          await this.cadetAPIInstance.getItemsList("token is here!!!")
        this.cadetList = await cadetAResponse.data
      } catch (e) {
        this.isError = true
      } finally {
        this.isLoading = false
      }
    }, 500),
    clearFilter() {
      this.searchForm = Object.assign(
        {},
        this.cadetAPIInstance.searchObjDefault,
      )
    },
    showCadetAddModal() {
      let addModal = this.$refs.cadetAddModal
      let myModal = new bootstrap.Modal(addModal, {
        keyboard: false,
      })
      myModal.show()
    },
    async addNewCadet() {
      try {
        const response = await this.cadetAPIInstance.addItem(
          "this.token",
          this.cadetNewForm,
        )
        const newItem = await response.data
        this.cadetList.results.unshift(newItem)
        this.$refs.cadetAddModalCloseButton.click()
        this.cadetNewForm = {
          last_name_rus: "",
          first_name_rus: "",
          date_of_birth: null,
        }
      } catch (e) {
        console.log(e)
        this.isError = true
      } finally {
        this.isLoading = false
      }
    },
  },

  computed: {
    orderedCadetCategories() {
      return this.cadetCategoryList.results
    },
    orderedCadets() {
      return this.cadetList.results
    },
    orderedSubdivisions() {
      return this.subdivisions.results
    },
    orderedGroups() {
      return this.groups.results
    },
    orderedRanks() {
      return this.ranks.results
    },
    orderedSpecialities() {
      return this.specialities.results
    },
    orderedPositions() {
      return this.positions.results
    },
    ...mapGetters({
      groups: "common/getGroups",
      ranks: "common/getRanks",
      subdivisions: "common/getSubdivisions",
      specialities: "common/getSpecialities",
      positions: "common/getPositions",
    }),
  },
  watch: {
    searchForm: {
      handler(newValue, oldValue) {
        this.debouncedSearch()
      },
      deep: true,
    },
  },
}
</script>

<style scoped></style>
