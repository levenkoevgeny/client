<template>
  <div>EncouragementListView</div>
</template>

<script>
export default {
  name: "EncouragementListView",
  components: {},
  data() {
    return {
      encouragementList: { results: [], previous: null, next: null },
      isLoading: true,
      isError: false,
      BACKEND_PROTOCOL: process.env.VUE_APP_BACKEND_PROTOCOL,
      BACKEND_HOST: process.env.VUE_APP_BACKEND_HOST,
      BACKEND_PORT: process.env.VUE_APP_BACKEND_PORT,
      searchForm: {
        encouragement_cadet: "",
        encouragement_kind: "",
        encouragement_date_start: "",
        encouragement_date_end: "",
        encouragement_extra_data: "",
      },
    }
  },
  async created() {},
  methods: {},
  computed: {
    orderedEncouragements() {
      return this.encouragementList.results
    },
  },
}
</script>

<style scoped></style>
