<template>
  <div>EncouragementListView
    {{orderedEncouragements}}
  </div>
</template>

<script>
import encouragementAPIInstance from "@/api/cadet/encouragementAPI"

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
        encouragement_date__gte: "",
        encouragement_date__lte: "",
        encouragement_extra_data__icontains: "",
      },
    }
  },
  async created() {
    const response = await encouragementAPIInstance.getItemsList('token is here!!!')
    this.encouragementList = await response.data
  },
  methods: {},
  computed: {
    orderedEncouragements() {
      return this.encouragementList.results
    },
  },
}
</script>

<style scoped></style>
