<template>
  <base-list-layout :is-loading="isLoading">
    <template v-slot:extra></template>
    <template v-slot:add-button></template>
    <template v-slot:thead></template>
    <template v-slot:tbody></template>
    <template v-slot:paginator> </template>
    <template v-slot:search-form> </template>
  </base-list-layout>
</template>

<script>
import BaseListLayout from "@/components/cadet/BaseListLayout.vue"
import { PaginatorView } from "@/components/common"

export default {
  name: "RankHistoryListView",
  components: { BaseListLayout, PaginatorView },
  data() {
    return {
      rankHistoryList: { results: [], previous: null, next: null },
      rankList: { results: [], previous: null, next: null },
      cadetList: { results: [], previous: null, next: null },
      isLoading: true,
      isError: false,
      BACKEND_PROTOCOL: process.env.VUE_APP_BACKEND_PROTOCOL,
      BACKEND_HOST: process.env.VUE_APP_BACKEND_HOST,
      BACKEND_PORT: process.env.VUE_APP_BACKEND_PORT,
      searchForm: {
        cadet: "",
        rank: "",
        rank_date__gte: "",
        rank_date__lte: "",
        extra_data__icontains: "",
      },
    }
  },
  async created() {},
  methods: {},
  computed: {},
}
</script>

<style scoped></style>
