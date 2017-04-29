<template>
  
  <div class="login-page">
    <div class="login-wrap">
      <input class="vinput" type="text" placeholder="AccessToken" v-model="accessToken">
      <m-Button type="primary" @click='login'>登录</m-Button>
    </div>
  </div>

</template>

<script>
  import {Button, Field} from 'mint-ui'
  export default {
    components: {
      MButton: Button,
      Field
    },
    data () {
      return {
        accessToken: ''
      }
    },
    methods: {
      login () {
        this.$store.dispatch('GET_USERINFO', this.accessToken).then(() => {
          this.$router.go(-1)
        })
      }
    }
  }

</script>

<<style lang="scss">
  .login-page {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    flex-wrap: wrap;
    input + button {
      margin-top: 20px;
    }
  }
  .vinput {
    width: 300px;
    height: 35px;
    padding: 6px 12px;
    box-sizing: border-box;
    outline: none;
    border: none;
    border-bottom: 1px solid rgba(0,0,0,0.3)
  }
</style>>
