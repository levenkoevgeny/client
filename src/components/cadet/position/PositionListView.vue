<template>
  <base-list-layout>
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
export default {
  name: "PositionListView",
  components: { BaseListLayout },
  data() {
    return {}
  },
  async created() {},
  methods: {},
  computed: {},
}
</script>

<style scoped></style>
