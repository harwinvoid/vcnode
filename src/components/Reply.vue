<template>
  <div class="reply">
    <header class="reply__header">
      评论（{{replies.length}}）
    </header>
    <main class="markdown-body">
      <ul class="reply__list">
        <reply-item v-for='reply in replies' :item='reply'>
        </reply-item>
      </ul>
    </main>
  </div>
</template>
<script>
  import ReplyItem from '@/components/ReplyItem'
  export default {
    data () {
      return {
        replies: []
      }
    },
    components: {
      ReplyItem
    },
    beforeMount () {
      this.replies = this.$store.state.currentTopicReplies
    }
  }
</script>

<style lang="scss">
.reply {
  font-size: 10px;
  @at-root #{&}__header {
    background: #4A90E2;
    height: 45px;
    line-height: 45px;
    font-weight: bold;
    font-size:  14px;
    color: #fff;
  }
  .markdown-body {
    padding: 15px;
  }
  @at-root #{&}__list {
    list-style: none;
    padding-left: 0 !important;
    font-size: 10px;
  }
}

</style>
