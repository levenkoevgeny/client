<template>
  <div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-8">
          <ul class="nav nav-links my-3 mb-lg-2 mx-n3">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#"
                ><span>Всего </span
                ><span class="text-body-tertiary fw-semibold">(68817)</span></a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#"
                ><span>Абитуриенты </span
                ><span class="text-body-tertiary fw-semibold">(70348)</span></a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#"
                ><span>Обучаются </span
                ><span class="text-body-tertiary fw-semibold">(17)</span></a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#"
                ><span>Выпустились </span
                ><span class="text-body-tertiary fw-semibold">(810)</span></a
              >
            </li>
          </ul>

          <div class="my-4 d-flex">
            <button class="btn btn-primary">
              <span class="fas fa-plus me-2"></span>Добавить запись
            </button>
          </div>

          <div class="table-responsive">
            <table class="table table-hover fw-light">
              <thead>
                <tr>
                  <th scope="col">
                    <div class="form-check">
                      <input
                        type="checkbox"
                        class="form-check-input"
                        id="exampleCheck1"
                      />
                    </div>
                  </th>
                  <th scope="col"></th>
                  <th scope="col">Фамилия, имя, отчество</th>
                  <th scope="col">Адрес</th>
                  <th scope="col">Специальность</th>
                  <th scope="col">Начало обучения</th>
                  <th scope="col">Окончание обучения</th>
                </tr>
              </thead>
              <tbody class="table-borderless">
                <tr
                  class="align-middle"
                  v-for="cadet in orderedCadets"
                  :key="cadet.id"
                >
                  <th scope="row" class="text-center align-middle">
                    <div class="form-check">
                      <input
                        type="checkbox"
                        class="form-check-input"
                        id="exampleCheck1"
                      />
                    </div>
                  </th>
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
                  <td>{{ cadet.address }}</td>
                  <td>{{ cadet.speciality }}</td>
                  <td>{{ cadet.academy_start_year }}</td>
                  <td>{{ cadet.academy_end_year }}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <PaginatorView
            :update-paginator="updatePaginator"
            :list-next="cadetList.next"
            :list-previous="cadetList.previous"
            v-if="cadetList.previous || cadetList.next"
          />
        </div>
        <div class="col-4" style="max-height: 90vh; overflow: auto">
          <h5 class="my-3">Поиск по критериям</h5>
          <form method="get" action="">
            <div class="mb-3">
              <label class="form-label">Фамилия</label>
              <select class="form-select" aria-label="Default select example">
                <option selected>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div class="mb-3">
              <label class="form-label">Адрес (содержит)</label>
              <input type="text" class="form-control" />
            </div>
            <div class="mb-3">
              <label class="form-label">Год окончания школы (с)</label>
              <input type="number" class="form-control" />
            </div>
            <div class="mb-3">
              <label class="form-label">Год окончания школы (по)</label>
              <input type="number" class="form-control" />
            </div>
            <div class="mb-3">
              <label class="form-label">Средний балл аттестата (с)</label>
              <input type="number" class="form-control" />
            </div>
            <div class="mb-3">
              <label class="form-label">Средний балл аттестата (по)</label>
              <input type="number" class="form-control" />
            </div>
            <div class="mb-3">
              <label class="form-label">Специальность</label>
              <select class="form-select" aria-label="Default select example">
                <option selected>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div class="mb-3">
              <label class="form-label">Группа</label>
              <select class="form-select" aria-label="Default select example">
                <option selected>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <button type="submit" class="btn btn-primary me-2">Поиск</button>
            <button type="button" class="btn btn-primary">
              Сбросить фильтр
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { cadetAPI } from "@/api/cadet/cadetAPI"
import { PaginatorView } from "@/components/common"

export default {
  name: "CadetList",
  components: { PaginatorView },
  data() {
    return {
      cadetList: { results: [], previous: null, next: null },
      isLoading: true,
      isError: false,
      BACKEND_PROTOCOL: process.env.VUE_APP_BACKEND_PROTOCOL,
      BACKEND_HOST: process.env.VUE_APP_BACKEND_HOST,
      BACKEND_PORT: process.env.VUE_APP_BACKEND_PORT,
      searchForm: {
        last_name_rus: "",
      },
    }
  },
  async created() {
    await this.loadData()
  },
  methods: {
    async loadData() {
      this.isLoading = true
      this.isError = false
      try {
        const cadetsRespoonse = await cadetAPI.getItemsList(
          "this.userToken",
          this.searchForm.dictionary,
        )
        this.cadetList = await cadetsRespoonse.data
      } catch (e) {
        this.isError = true
      } finally {
        this.isLoading = false
      }
    },
    async updatePaginator(url) {
      this.isLoading = true
      try {
        const response = await cadetAPI.updateList(url, "this.userToken")
        this.cadetList = await response.data
      } catch (error) {
        this.isError = true
      } finally {
        this.isLoading = false
      }
    },
  },
  computed: {
    orderedCadets() {
      return this.cadetList.results
    },
  },
}
</script>

<style scoped></style>
