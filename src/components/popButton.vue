<template>
<div class="popBtn" ref="popBtn" @click="btnClick" :style='position'>
  <span class="popBtn__content" v-html='content'></span>
</div>
</template>

<script>
  export default {
    props: ['content', 'position'],
    methods: {
      btnClick () {
        this.$emit('handleClick')
      }
    }

  }
</script>

<style lang='scss'>
  .popBtn {
    position: fixed;
    width: 40px;
    height: 40px;
    cursor: pointer;
    z-index: 3;
    background: rgba(0,0,0,0.5);
    border-radius: 50%;
    @at-root #{&}__content {
      line-height: 40px;
      color: #fff;
      font-size: 8px;
    }
  }
</style>
