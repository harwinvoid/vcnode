<template>
  <div class="detail "
       v-if="topic">
    <header class="detail__header" :style='bg'>
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
    <pop-btn :content='replyContent' @handleClick="openReply" :position='replyPos'></pop-btn>
    <pop-btn content='<i class="fa fa-long-arrow-left" aria-hidden="true"></i>' @handleClick="goback" :position='backPos'></pop-btn>
   <div>
   </div>
  </div>
</template>
<script>
import { getTopicById } from '../store/api'
import PopBtn from '@/components/PopButton'
import moment from 'moment'
export default {
  data () {
    return {
      topic: null,
      colors: ['#4A148C', '#7C4DFF', '#00BCD4', '#26A69A', '#FF5722', '#607D8B'],
      replyPos: {
        right: '30px',
        bottom: '30px'
      },
      backPos: {
        left: '30px',
        bottom: '30px'

      }
    }
  },
  components: {
    PopBtn
  },
  methods: {
    openReply () {
      this.$router.push({name: 'Reply'})
    },
    goback () { // 返回上一个页面
      this.$router.go(-1)
    }
  },
  computed: {
    formatedTime () {
      return moment(this.topic.last_reply_at).fromNow()
    },
    bg () { // 随机顶部北京颜色
      let randomIndex = Math.floor(Math.random() * this.colors.length)
      return 'background-color:' + this.colors[randomIndex]
    },
    replyContent () {
      return '<i class="fa fa-reply" style="margin-right:5px" aria-hidden="true"></i>' + this.topic.reply_count
    }
  },
  beforeMount () {
    var id = this.$store.state.route.params.id
    getTopicById(id).then((topic) => {
      this.topic = topic
      this.$store.commit('SET_REPLY', topic.replies)
    })
  }
}
</script>
<style lang="scss">
.detail {
  @at-root #{&}__header {
    margin-bottom: 25px;
    display: flex;
    position: fixed;
    width: 100%;
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
    padding-top: 105px;
  }
}
</style>
