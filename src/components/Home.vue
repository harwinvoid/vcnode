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
      }
    }
  },
  computed: {
    popContent () {
      if (this.userInfo.success) {
        return `<img class="user_avatar" src="${this.userInfo.avatar_url}">`
      } else {
        return '<i class="fa fa-user" aria-hidden="true"></i>'
      }
    },
    userInfo () {
      return this.$store.state.userInfo
    }
  },
  methods: {
    routeLogin () {
      if (!this.userInfo.success) {
        this.$router.push({name: 'Login'})
      } else {

      }
    }
  }

}
</script>
<style lang="scss">
  .user_avatar {
    width: 40px;
    height: 40px;
    border-radius: 100%;
  }
</style>
