<template>
  <div id="app">
    <app-header :tabs='tabs' :initActiveTab='currentTab'></app-header>
    <list></list>
  </div>
</template>

<script>
import AppHeader from '@/components/Header'
import List from '@/components/List'

export default {
  name: 'app',
  components: {
    AppHeader,
    List
  },
  data () {
    return {
      tabs: this.$store.state.tabs,
      currentTab: this.$store.state.tabs[this.$store.state.activeTab]
    }
  }

}
</script>
