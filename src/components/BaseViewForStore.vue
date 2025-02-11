<template>
  <router-view />
</template>

<script>
import { mapGetters } from "vuex"

export default {
  name: "BaseViewForStore",
  async created() {
    await this.$store.dispatch("common/actionGetCommonLists", {
      token: this.token,
    })
  },
  computed: {
    ...mapGetters({
      token: "auth/getToken",
    }),
  },
}
</script>
