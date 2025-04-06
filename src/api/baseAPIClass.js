import { axiosInstance as axios } from "@/main"

export default class BaseAPI {
  constructor(baseURL, searchObj, formData = {}) {
    this.baseURL = baseURL
    this.searchObj = searchObj
    this.searchObjDefault = Object.assign({}, searchObj)
    this.formData = Object.assign({}, formData)
  }

  getQueryStringFromSearchObj() {
    let queryString = "?"
    for (let key in this.searchObj) {
      queryString = queryString + `${key}=${this.searchObj[key]}&`
    }
    return queryString
  }

  async getItemsList() {
    let query = this.getQueryStringFromSearchObj()
    return axios.get(
      `${process.env.VUE_APP_BACKEND_PROTOCOL}://${process.env.VUE_APP_BACKEND_HOST}:${process.env.VUE_APP_BACKEND_PORT}/api/${this.baseURL}/${query}`,
    )
  }

  async updateList(url) {
    return axios.get(url)
  }

  async getItemData(itemId) {
    return axios.get(
      `${process.env.VUE_APP_BACKEND_PROTOCOL}://${process.env.VUE_APP_BACKEND_HOST}:${process.env.VUE_APP_BACKEND_PORT}/api/${this.baseURL}/${itemId}/`,
    )
  }

  async addItem(itemData) {
    return axios.post(
      `${process.env.VUE_APP_BACKEND_PROTOCOL}://${process.env.VUE_APP_BACKEND_HOST}:${process.env.VUE_APP_BACKEND_PORT}/api/${this.baseURL}/`,
      itemData,
    )
  }

  async updateItem(itemData) {
    return axios.put(
      `${process.env.VUE_APP_BACKEND_PROTOCOL}://${process.env.VUE_APP_BACKEND_HOST}:${process.env.VUE_APP_BACKEND_PORT}/api/${this.baseURL}/${itemData.id}/`,
      itemData,
    )
  }

  async updateItemPartly(itemData) {
    return axios.patch(
      `${process.env.VUE_APP_BACKEND_PROTOCOL}://${process.env.VUE_APP_BACKEND_HOST}:${process.env.VUE_APP_BACKEND_PORT}/api/${this.baseURL}/${itemData.id}/`,
      itemData,
    )
  }

  // FormData only !!!
  async updatePhotoOrAnyFile(cadetId, formData) {
    return axios.patch(
      `${process.env.VUE_APP_BACKEND_PROTOCOL}://${process.env.VUE_APP_BACKEND_HOST}:${process.env.VUE_APP_BACKEND_PORT}/api/${this.baseURL}/${cadetId}/`,
      formData,
    )
  }

  async deleteItem(itemId) {
    return axios.delete(
      `${process.env.VUE_APP_BACKEND_PROTOCOL}://${process.env.VUE_APP_BACKEND_HOST}:${process.env.VUE_APP_BACKEND_PORT}/api/${this.baseURL}/${itemId}/`,
    )
  }
}
