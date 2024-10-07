import axios from "axios"
import { authHeaders } from "@/api/auth/authAPI"

export default class BaseAPI {
  constructor(baseURL, searchObj) {
    this.baseURL = baseURL
    this.searchObj = searchObj
  }

  getQueryStringFromSearchObj() {
    let queryString = "?"
    for (let key in this.searchObj) {
      queryString = queryString + `${key}=${this.searchObj[key]}&`
    }
    return queryString
  }

  async getItemsList(token) {
    let query = this.getQueryStringFromSearchObj()
    return axios.get(
      `${process.env.VUE_APP_BACKEND_PROTOCOL}://${process.env.VUE_APP_BACKEND_HOST}:${process.env.VUE_APP_BACKEND_PORT}/api/${this.baseURL}/${query}`,
      authHeaders(token),
    )
  }

  async updateList(url, token) {
    return axios.get(url, authHeaders(token))
  }

  async getItemData(token, itemId) {
    return axios.get(
      `${process.env.VUE_APP_BACKEND_PROTOCOL}://${process.env.VUE_APP_BACKEND_HOST}:${process.env.VUE_APP_BACKEND_PORT}/api/${this.baseURL}/${itemId}/`,
      authHeaders(token),
    )
  }

  async addItem(token, itemData) {
    return axios.post(
      `${process.env.VUE_APP_BACKEND_PROTOCOL}://${process.env.VUE_APP_BACKEND_HOST}:${process.env.VUE_APP_BACKEND_PORT}/api/${this.baseURL}/`,
      itemData,
      authHeaders(token),
    )
  }

  async updateItem(token, itemData) {
    return axios.put(
      `${process.env.VUE_APP_BACKEND_PROTOCOL}://${process.env.VUE_APP_BACKEND_HOST}:${process.env.VUE_APP_BACKEND_PORT}/api/${this.baseURL}/${itemData.id}/`,
      itemData,
      authHeaders(token),
    )
  }

  async deleteItem(token, itemId) {
    return axios.delete(
      `${process.env.VUE_APP_BACKEND_PROTOCOL}://${process.env.VUE_APP_BACKEND_HOST}:${process.env.VUE_APP_BACKEND_PORT}/api/${this.baseURL}/${itemId}/`,
      authHeaders(token),
    )
  }

}
