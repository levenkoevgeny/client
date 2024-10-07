import axios from "axios"
import { authHeaders } from "@/api/auth/authAPI"

let base_url = "rank-history"

export const rankHistoryAPI = {
  async getItemsList(token, query = { cadet: "" }) {
    let { cadet } = query
    return axios.get(
      `${process.env.VUE_APP_BACKEND_PROTOCOL}://${process.env.VUE_APP_BACKEND_HOST}:${process.env.VUE_APP_BACKEND_PORT}/api/${base_url}/?cadet=${cadet}`,
      authHeaders(token),
    )
  },
  async updateList(url, token) {
    return axios.get(url, authHeaders(token))
  },
  async getItemData(token, itemId) {
    return axios.get(
      `${process.env.VUE_APP_BACKEND_PROTOCOL}://${process.env.VUE_APP_BACKEND_HOST}:${process.env.VUE_APP_BACKEND_PORT}/api/${base_url}/${itemId}/`,
      authHeaders(token),
    )
  },
  async addItem(token, itemData) {
    return axios.post(
      `${process.env.VUE_APP_BACKEND_PROTOCOL}://${process.env.VUE_APP_BACKEND_HOST}:${process.env.VUE_APP_BACKEND_PORT}/api/${base_url}/`,
      itemData,
      authHeaders(token),
    )
  },
  async updateItem(token, itemData) {
    return axios.put(
      `${process.env.VUE_APP_BACKEND_PROTOCOL}://${process.env.VUE_APP_BACKEND_HOST}:${process.env.VUE_APP_BACKEND_PORT}/api/${base_url}/${itemData.id}/`,
      itemData,
      authHeaders(token),
    )
  },
  async deleteItem(token, itemId) {
    return axios.delete(
      `${process.env.VUE_APP_BACKEND_PROTOCOL}://${process.env.VUE_APP_BACKEND_HOST}:${process.env.VUE_APP_BACKEND_PORT}/api/${base_url}/${itemId}/`,
      authHeaders(token),
    )
  },
}
