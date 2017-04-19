<template>
  <router-link :to="'/item/' + topic.id"
               tag='li'
               class="topic"
               v-if="topic">
    <div class="topic__avatar">
      <img class="topic__avatar"
           :src="topic.author.avatar_url"
           :title="topic.author.loginname"
           :alt="topic.author.loginname">
    </div>
    <div class="topic__meta">
      <div class="topic__meta__title">{{topic.title}}</div>
      <div class="topic__meta__info">
        <span>{{counter}}</span>
        <span v-if="topic.tab">{{currentTab}}</span>
        <span class="topic__meta__info--top"
              v-if="topic.top">顶</span>
        <span class="topic__meta__info--good"
              v-if="topic.good">精</span>
        <time class='topic__meta__info--time'>{{formatedTime}}</time>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    topic: {
      type: Object
    }
  },
  computed: {
    counter () {
      return this.topic.reply_count + '/' + this.topic.visit_count
    },
    currentTab () {
      return this.$store.state.tabs[this.topic.tab].text
    },
    formatedTime () {
      return this.moment(this.topic.last_reply_at).fromNow()
    }
  }
}

</script>

<style lang="scss">

.topic {
  display: flex;
  position: relative;
  padding: 15px 15px;
  border-bottom: 1px solid #eee;
  @at-root #{&}__avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 15px;
  }
  @at-root #{&}__meta {
    width: 80%;
    text-align: left;
    @at-root #{&}__title {
      font-size: 12px;
      margin-bottom: 5px;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden
    }
    @at-root #{&}__info {
      font-size: 10px;
      font-weight: 300;
      display: flex;
      justify-content: flex-start;
      color: rgba(0, 0, 0, 0.5);
      span:not(:nth-last-child(-n+2)) {
        margin-right: 15px;
      }
      @at-root #{&}--time {
        position: absolute;
        right: 15px;
      }
      @at-root #{&}--good {
        color: #42b983;
      }
      @at-root #{&}--top {
        color: #4A90E2;
      }
    }
  }
}


</style>
