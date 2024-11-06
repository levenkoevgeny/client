<template>
  {{ orderedOrderOwners }}<br />
  {{ selected }}
  <v-select
    multiple
    v-model="selected"
    :options="orderedOrderOwners"
    label="order_owner"
    :filterable="false"
    @search="onSearch"
    taggable
    push-tags
  >
    <template slot="no-options">
      type to search GitHub repositories..
    </template>
    <template slot="option" slot-scope="option">
      <div class="d-center">
        {{ option }}
      </div>
    </template>
    <template slot="selected-option" slot-scope="option">
      <div class="selected d-center">
        {{ option }}
      </div>
    </template>
  </v-select>
  <!--  <template slot="option" slot-scope="option">-->
  <!--    <div class="d-center">-->
  <!--      {{ order_owner }}-->
  <!--    </div>-->
  <!--  </template>-->

  <base-list-layout :is-loading="isLoading">
    <template v-slot:list> hh</template>
    <template v-slot:search-form> form</template>
  </base-list-layout>
</template>

<script>
import getEncouragementAPIInstance from "@/api/cadet/encouragementAPI"
import getEncouragementKindAPIInstance from "@/api/cadet/encouragementKindAPI"
import getCadetAPIInstance from "@/api/cadet/cadetAPI"
import getOrderOwnerAPIInstance from "@/api/cadet/orderOwnerAPI"

import BaseListLayout from "@/components/layouts/BaseListLayout.vue"
import { PaginatorView } from "@/components/common"
import { debounce } from "lodash/function"
import { getLoadListFunction } from "../../../../utils"
import axios from "axios"

export default {
  name: "EncouragementListView",
  components: {
    BaseListLayout,
    PaginatorView,
  },
  data() {
    return {
      isLoading: true,
      isError: false,
      options: [],
      orderOwnerList: { count: "", results: [], previous: null, next: null },
      orderOwnerAPIInstance: getOrderOwnerAPIInstance(),
      searchForm: {},
      selected: [],
    }
  },
  async created() {
    await this.loadData()
  },
  methods: {
    async loadData() {
      this.isLoading = true
      this.isError = false
      const listFunction = getLoadListFunction.bind(this)
      this.isLoading = true
      this.isError = false
      try {
        const [orderOwners] = await Promise.all([listFunction("orderOwner")()])
        this.orderOwnerList = orderOwners
      } catch (e) {
        this.isError = true
      } finally {
        this.isLoading = false
      }

      // try {
      //   const [encouragements, encouragementKinds, cadets, orderOwners] =
      //     await Promise.all([
      //       this.getEncouragements(),
      //       this.getEncouragementKinds(),
      //       this.getCadets(),
      //       this.getOrderOwners(),
      //     ]).catch(() => (this.isError = true))
      //
      //   this.encouragementList = encouragements
      //   this.encouragementKindList = encouragementKinds
      //   this.cadetList = cadets
      //   this.orderOwnerList = orderOwners
      // } catch (e) {
      //   this.isError = true
      // } finally {
      //   this.isLoading = false
      // }
    },
    async onSearch(search, loading) {
      if (search.length) {
        loading(true)
        const response = await axios(
          `http://localhost:8000/api/order-owner/?order_owner__icontains=${search}`,
        )
        const data = await response.data
        this.options = data
        console.log(data)
        loading(false)
        // this.search(loading, search, this)
      }
    },
    async updatePaginator(url) {
      this.isLoading = true
      try {
        const response = await this.encouragementAPIInstance.updateList(
          url,
          "this.userToken",
        )
        this.encouragementList = await response.data
      } catch (error) {
        this.isError = true
      } finally {
        this.isLoading = false
      }
    },
    // debouncedSearch: debounce(async function () {
    //   this.isLoading = true
    //   this.encouragementAPIInstance.searchObj = Object.assign(
    //     {},
    //     this.searchForm,
    //   )
    //   try {
    //     const encouragementResponse =
    //       await this.encouragementAPIInstance.getItemsList("token is here!!!")
    //     this.encouragementList = await encouragementResponse.data
    //   } catch (e) {
    //     this.isError = true
    //   } finally {
    //     this.isLoading = false
    //   }
    // }, 500),
  },
  computed: {
    orderedMainList() {
      return this.mainItemList.results
    },
    orderedEncouragementKinds() {
      return this.encouragementKindList.results
    },
    orderedCadets() {
      return this.cadetList.results
    },
    orderedOrderOwners() {
      return this.options.results
    },
  },
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
