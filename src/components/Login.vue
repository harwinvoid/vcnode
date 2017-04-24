<template>
  <div class="login-page">
    <m-Button><i class="fa fa-camera" aria-hidden="true"></i>扫码登录</m-Button>
  </div>
</template>

<script>
  import {Button} from 'mint-ui'

  export default {
    components: {
      MButton: Button
    }
  }

</script>

<<style lang="scss">
  .login-page {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
</style>>
