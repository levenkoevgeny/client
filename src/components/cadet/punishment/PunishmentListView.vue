<template></template>

<script>
import BaseListLayout from "@/components/layouts/BaseListLayout.vue"
import { debounce } from "lodash/function"

export default {
  name: "PunishmentListView",
  components: {
    BaseListLayout,
  },
  data() {
    return {}
  },
  async created() {
    await this.loadData()
  },
  methods: {
    async loadData() {
      this.isLoading = true
      this.isError = false
    },
    // debouncedSearch: debounce(async function () {
    //   this.isLoading = true
    //   this.punishmentAPIInstance.searchObj = Object.assign({}, this.searchForm)
    //   try {
    //     const punishmentResponse =
    //       await this.punishmentAPIInstance.getItemsList("token is here!!!")
    //     this.punishmentList = await punishmentResponse.data
    //   } catch (e) {
    //     this.isError = true
    //   } finally {
    //     this.isLoading = false
    //   }
    // }, 500),
  },
  computed: {},
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
