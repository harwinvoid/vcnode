<template>
  <div class="detail "
       v-if="topic">
    <header class="detail__header">
      <div class="topic__avatar">
        <img class="topic__avatar"
             :src="topic.author.avatar_url"
             :title="topic.author.loginname"
             :alt="topic.author.loginname">
      </div>
      <div class="detail__info">
        <p>{{topic.title}}</p>
        <p class="detail__info--meta"><i class="fa fa-clock-o" aria-hidden="true"></i><span>{{formatedTime}}</span></p>
      </div>
    </header>
    <div class="markdown-body detail__body"
         v-html="topic.content">

    </div>
  </div>
</template>
<script>
import { getTopicById } from '../store/api'
import moment from 'moment'
export default {
  data () {
    return {
      topic: null
    }
  },
  computed: {
    formatedTime () {
      return moment(this.topic.last_reply_at).fromNow()
    }
  },
  beforeMount () {
    var id = this.$store.state.route.params.id
    getTopicById(id).then((topic) => {
      this.topic = topic
    })
  }
}
</script>
<style lang="scss">
.detail {
  @at-root #{&}__header {
    margin-bottom: 25px;
    background: purple;
    display: flex;
    opacity: 0.6;
    font-size: 12px;
    color: #fff;
    align-items: center;
    padding: 30px 20px 20px;
  }
  @at-root #{&}__info {
    text-align: left;
    @at-root #{&}--meta {
      margin-top: 5px;
      font-size: 10px;
      color: #eee;
      i {
        margin-right: 5px;
      }
    }
  }
  @at-root #{&}__body {
    padding: 0 15px;
  }
}
</style>
