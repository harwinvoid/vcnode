<template>
  <ul v-infinite-scroll='loadMore'
      infinite-scroll-disabled="loading"
      infinite-scroll-distance="20">
    <item v-for="item in topics"
          :topic='item'></item>
  </ul>
</template>

<script>

import Item from '@/components/item'
import { Indicator } from 'mint-ui'

export default {
  data () {
    return {
      topics: [],
      loading: false,
      currentPage: 1
    }
  },
  computed: {
    tab () {
      return this.$store.state.activeTab
    }
  },
  components: {
    Item
  },
  watch: {
    tab () {
      Indicator.open('Loading...')
      console.log(Indicator)
      this.$store.dispatch('GET_TOPICS', { tab: this.tab }).then(() => {
        this.topics = this.$store.state.topics
        Indicator.close()
      })
    }
  },
  methods: {
    loadMore () {
      this.loading = true
      this.$store.dispatch('GET_TOPICS', { page: this.currentPage++, tab: this.tab }).then(() => {
        this.topics.push(...this.$store.state.topics)
        this.loading = false
      })
    }
  }
}
</script>

<style lang="scss">

</style>
