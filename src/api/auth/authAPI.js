import axios from "axios"
import index from "@/router"

export function authHeaders(token) {
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
}

axios.interceptors.response.use(
  function (response) {
    return response
  },
  async function (error) {
    console.log("error", error)
    if (error.code === "ERR_NETWORK") {
      window.location.href = "/network-error"
      return Promise.reject(error)
    }
    // if (error.response.status === 401 || error.response.status === 403) {
    //   await store.dispatch("auth/actionRemoveLogIn")
    //   await index.replace({ name: "login" })
    // }
    if (error.response.status === 500) {
      await index.replace({ name: "server-error" })
    }
    return Promise.reject(error)
  },
)
