<template>
  <div id="app">
    <app-header :tabs='tabs' :initActiveTab='currentTab'></app-header>
    <list></list>
    <pop-btn :content='popContent' @handleClick="routeLogin" :position='pos'></pop-btn>
  </div>
</template>

<script>
import AppHeader from '@/components/Header'
import List from '@/components/List'
import PopBtn from '@/components/PopButton'

export default {
  name: 'app',
  components: {
    AppHeader,
    List,
    PopBtn
  },
  data () {
    return {
      tabs: this.$store.state.tabs,
      currentTab: this.$store.state.tabs[this.$store.state.activeTab],
      pos: {
        left: '30px',
        bottom: '30px'
      },
      popContent: '<i class="fa fa-user" aria-hidden="true"></i>'
    }
  },
  methods: {
    routeLogin () {
      this.$router.push({name: 'Login'})
    }
  }

}
</script>
