<template>
  <h1>List</h1>
</template>

<script>
import NavigationLayout from "@/components/layouts/NavigationLayout.vue"

export default {
  name: "EntranceListView",
  components: { NavigationLayout },
  data() {
    return {
      currentTime: new Date(),
    }
  },
  async created() {},
  methods: {},
  computed: {},
}
</script>
