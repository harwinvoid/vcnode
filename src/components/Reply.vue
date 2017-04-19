<template>
  <div class="markdown-body">
    <ul>
      <li v-for='reply in replies' v-html="reply.content">
      <li/>
    </ul>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        replies: []
      }
    },
    beforeMount () {
      this.replies = this.$store.state.currentTopicReplies
    }
  }
</script>

<style lang="">

</style>
