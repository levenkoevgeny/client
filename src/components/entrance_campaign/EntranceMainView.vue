<template>
  <div class="container-fluid">
    {{ currentTime }}
    <h1 class="mt-3">Анкета абитуриента</h1>

    <div class="row mt-3">
      <div class="col-lg-4">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Персональные данные</h5>
            <form action="">
              <div class="form-floating mb-3">
                <input type="text" class="form-control" placeholder="Фамилия" />
                <label>Фамилия</label>
              </div>
              <div class="form-floating mb-3">
                <input type="text" class="form-control" placeholder="Имя" />
                <label>Имя</label>
              </div>
              <div class="form-floating">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Отчество"
                />
                <label>Отчество</label>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div class="col-lg-4">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Куда поступает</h5>
            <form action="">
              <div class="form-floating mb-3">
                <select
                  class="form-select"
                  id="floatingSelect"
                  aria-label="Floating label select example"
                >
                  <option selected>-------</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
                <label for="floatingSelect">Учебное образование</label>
              </div>
              <div class="form-floating mb-3">
                <select
                  class="form-select"
                  id="floatingSelect"
                  aria-label="Floating label select example"
                >
                  <option selected>-------</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
                <label for="floatingSelect">Факультет</label>
              </div>
              <div class="form-floating">
                <select
                  class="form-select"
                  id="floatingSelect"
                  aria-label="Floating label select example"
                >
                  <option selected>-------</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
                <label for="floatingSelect">Форма обучения</label>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div class="col-lg-4">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Блок 3</h5>
            <form action="">
              <div class="form-floating mb-3">
                <select
                  class="form-select"
                  id="floatingSelect"
                  aria-label="Floating label select example"
                >
                  <option selected>-------</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
                <label for="floatingSelect">Select 1</label>
              </div>
              <div class="form-floating mb-3">
                <select
                  class="form-select"
                  id="floatingSelect"
                  aria-label="Floating label select example"
                >
                  <option selected>-------</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
                <label for="floatingSelect">Select 2</label>
              </div>
              <div class="form-floating">
                <select
                  class="form-select"
                  id="floatingSelect"
                  aria-label="Floating label select example"
                >
                  <option selected>-------</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
                <label for="floatingSelect">Select 3</label>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

    <div class="my-4">
      <nav>
        <div class="nav nav-tabs" id="nav-tab" role="tablist">
          <button
            class="nav-link active"
            id="nav-assembly-organ-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-assembly-organ"
            type="button"
            role="tab"
            aria-controls="nav-assembly-organ"
            aria-selected="true"
          >
            Комплектующий орган
          </button>
          <button
            class="nav-link"
            id="nav-education-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-education"
            type="button"
            role="tab"
            aria-controls="nav-education"
            aria-selected="false"
          >
            Образование
          </button>
          <button
            class="nav-link"
            id="nav-contact-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-contact"
            type="button"
            role="tab"
            aria-controls="nav-contact"
            aria-selected="false"
          >
            Личная информация
          </button>
          <button
            class="nav-link"
            id="nav-representatives-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-representatives"
            type="button"
            role="tab"
            aria-controls="nav-representatives"
            aria-selected="false"
          >
            Представители
          </button>
          <button
            class="nav-link"
            id="nav-contact-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-questionary"
            type="button"
            role="tab"
            aria-controls="nav-questionary"
            aria-selected="false"
          >
            Анкета
          </button>
        </div>
      </nav>
      <div class="tab-content" id="nav-tabContent">
        <div
          class="tab-pane fade show active"
          id="nav-assembly-organ"
          role="tabpanel"
          aria-labelledby="nav-assembly-organ-tab"
          tabindex="0"
        >
          <div>
            <div class="my-3">
              <div class="row">
                <div class="col-lg-6">
                  <div class="form-floating mb-3">
                    <select
                      class="form-select"
                      id="floatingSelect"
                      aria-label="Floating label select example"
                    >
                      <option selected>---------</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                    <label for="floatingSelect">Комплектующий орган</label>
                  </div>
                  <div class="form-floating mb-3">
                    <select
                      class="form-select"
                      id="floatingSelect"
                      aria-label="Floating label select example"
                    >
                      <option selected>---------</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                    <label for="floatingSelect">Категория</label>
                  </div>
                  <div class="form-floating mb-3">
                    <select
                      class="form-select"
                      id="floatingSelect"
                      aria-label="Floating label select example"
                    >
                      <option selected>---------</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                    <label for="floatingSelect">Прибыл из ГО-РОВД</label>
                  </div>
                  <div class="form-floating mb-3">
                    <select
                      class="form-select"
                      id="floatingSelect"
                      aria-label="Floating label select example"
                    >
                      <option selected>---------</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                    <label for="floatingSelect">Область для медкомиссии</label>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="form-floating mb-3">
                    <select
                      class="form-select"
                      id="floatingSelect"
                      aria-label="Floating label select example"
                    >
                      <option selected>---------</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                    <label for="floatingSelect">Социальный статус</label>
                  </div>
                  <div class="form-floating mb-3">
                    <select
                      class="form-select"
                      id="floatingSelect"
                      aria-label="Floating label select example"
                    >
                      <option selected>---------</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                    <label for="floatingSelect">УДИН</label>
                  </div>
                  <div class="form-floating">
                    <select
                      class="form-select"
                      id="floatingSelect"
                      aria-label="Floating label select example"
                    >
                      <option selected>---------</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                    <label for="floatingSelect">Военкомат</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="tab-pane fade"
          id="nav-education"
          role="tabpanel"
          aria-labelledby="nav-education-tab"
          tabindex="0"
        >
          <div>
            <div class="my-3">
              <div class="row">
                <div class="col-lg-6">
                  <div class="form-floating mb-3">
                    <select
                      class="form-select"
                      id="floatingSelect"
                      aria-label="Floating label select example"
                    >
                      <option selected>---------</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                    <label for="floatingSelect">Комплектующий орган</label>
                  </div>
                  <div class="form-floating mb-3">
                    <select
                      class="form-select"
                      id="floatingSelect"
                      aria-label="Floating label select example"
                    >
                      <option selected>---------</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                    <label for="floatingSelect">Категория</label>
                  </div>
                  <div class="form-floating mb-3">
                    <select
                      class="form-select"
                      id="floatingSelect"
                      aria-label="Floating label select example"
                    >
                      <option selected>---------</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                    <label for="floatingSelect">Прибыл из ГО-РОВД</label>
                  </div>
                  <div class="form-floating mb-3">
                    <select
                      class="form-select"
                      id="floatingSelect"
                      aria-label="Floating label select example"
                    >
                      <option selected>---------</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                    <label for="floatingSelect">Область для медкомиссии</label>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="form-floating mb-3">
                    <select
                      class="form-select"
                      id="floatingSelect"
                      aria-label="Floating label select example"
                    >
                      <option selected>---------</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                    <label for="floatingSelect">Социальный статус</label>
                  </div>
                  <div class="form-floating mb-3">
                    <select
                      class="form-select"
                      id="floatingSelect"
                      aria-label="Floating label select example"
                    >
                      <option selected>---------</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                    <label for="floatingSelect">УДИН</label>
                  </div>
                  <div class="form-floating">
                    <select
                      class="form-select"
                      id="floatingSelect"
                      aria-label="Floating label select example"
                    >
                      <option selected>---------</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                    <label for="floatingSelect">Военкомат</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="tab-pane fade"
          id="nav-contact"
          role="tabpanel"
          aria-labelledby="nav-contact-tab"
          tabindex="0"
        >
          <div>
            <div class="my-3">
              <div class="row">
                <div class="col-lg-6">
                  <div class="form-floating mb-3">
                    <select
                      class="form-select"
                      id="floatingSelect"
                      aria-label="Floating label select example"
                    >
                      <option selected>---------</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                    <label for="floatingSelect">Комплектующий орган</label>
                  </div>
                  <div class="form-floating mb-3">
                    <select
                      class="form-select"
                      id="floatingSelect"
                      aria-label="Floating label select example"
                    >
                      <option selected>---------</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                    <label for="floatingSelect">Категория</label>
                  </div>
                  <div class="form-floating mb-3">
                    <select
                      class="form-select"
                      id="floatingSelect"
                      aria-label="Floating label select example"
                    >
                      <option selected>---------</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                    <label for="floatingSelect">Прибыл из ГО-РОВД</label>
                  </div>
                  <div class="form-floating mb-3">
                    <select
                      class="form-select"
                      id="floatingSelect"
                      aria-label="Floating label select example"
                    >
                      <option selected>---------</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                    <label for="floatingSelect">Область для медкомиссии</label>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="form-floating mb-3">
                    <select
                      class="form-select"
                      id="floatingSelect"
                      aria-label="Floating label select example"
                    >
                      <option selected>---------</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                    <label for="floatingSelect">Социальный статус</label>
                  </div>
                  <div class="form-floating mb-3">
                    <select
                      class="form-select"
                      id="floatingSelect"
                      aria-label="Floating label select example"
                    >
                      <option selected>---------</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                    <label for="floatingSelect">УДИН</label>
                  </div>
                  <div class="form-floating">
                    <select
                      class="form-select"
                      id="floatingSelect"
                      aria-label="Floating label select example"
                    >
                      <option selected>---------</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                    <label for="floatingSelect">Военкомат</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="tab-pane fade"
          id="nav-representatives"
          role="tabpanel"
          aria-labelledby="nav-representatives-tab"
          tabindex="0"
        >
          <div>Представители</div>
        </div>
        <div
          class="tab-pane fade"
          id="nav-questionary"
          role="tabpanel"
          aria-labelledby="nav-questionary-tab"
          tabindex="0"
        >
          <div>Анкета</div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-4">
        <h3>Выбор специальностей</h3>
        <div class="form-floating mb-3">
          <select
            class="form-select"
            id="floatingSelect"
            aria-label="Floating label select example"
          >
            <option selected>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
          <label for="floatingSelect">Works with selects</label>
        </div>
        <div class="form-floating mb-3">
          <select
            class="form-select"
            id="floatingSelect"
            aria-label="Floating label select example"
          >
            <option selected>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
          <label for="floatingSelect">Works with selects</label>
        </div>
        <div class="form-floating mb-3">
          <select
            class="form-select"
            id="floatingSelect"
            aria-label="Floating label select example"
          >
            <option selected>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
          <label for="floatingSelect">Works with selects</label>
        </div>
        <div class="form-floating mb-3">
          <select
            class="form-select"
            id="floatingSelect"
            aria-label="Floating label select example"
          >
            <option selected>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
          <label for="floatingSelect">Works with selects</label>
        </div>
        <div class="form-floating">
          <select
            class="form-select"
            id="floatingSelect"
            aria-label="Floating label select example"
          >
            <option selected>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
          <label for="floatingSelect">Works with selects</label>
        </div>
      </div>
      <div class="col-lg-8">
        <h3>Набранные баллы</h3>
        <div class="row">
          <div class="col-lg-4">
            <div class="form-floating mb-3">
              <input
                type="number"
                class="form-control"
                id="floatingInput"
                placeholder="Русский язык ЦТ"
              />
              <label for="floatingInput">Русский язык ЦТ</label>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="form-floating mb-3">
              <input
                type="number"
                class="form-control"
                id="floatingInput"
                placeholder="Русский язык ЦТ"
              />
              <label for="floatingInput">Русский язык ЦТ</label>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="form-floating mb-3">
              <input
                type="number"
                class="form-control"
                id="floatingInput"
                placeholder="Русский язык ЦТ"
              />
              <label for="floatingInput">Русский язык ЦТ</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "EntranceMainView",
  components: {},
  data() {
    return {
      currentTime: new Date(),
    }
  },
  async created() {
    setInterval(() => {
      this.currentTime = new Date()
    }, 1000)
  },
  methods: {},
  computed: {},
}
</script>

<style scoped></style>
