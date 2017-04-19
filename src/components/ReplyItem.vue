<template>
   <li class="reply__item">
     <div class="user__avatar">
      <img class="user__avatar"
           :src="item.author.avatar_url"
           :title="item.author.loginname"
           :alt="item.author.loginname">
    </div>
    <div class="reply-info">
      <div class="reply-info__meta">
        <p>{{item.author.loginname}}</p>
        <time>{{createTime}}</time>
      </div>
      <p class="reply-info__content" v-html='item.content'></p>
    </div>
    <div class="action-box-wrap">
      <div class="action-box">
      <span class="action-box__reply"><i class="fa fa-commenting-o" aria-hidden="true"></i></span>
      <span class="action-box__like"><i class="fa fa-thumbs-o-up" aria-hidden="true"></i></span>
    </div>
    </div>

   </li>
</template>

<script>
export default {
  props: ['item'],
  computed: {
    createTime () {
      return this.moment(this.item.create_at).fromNow()
    }
  }
}
</script>

<style lang="scss">
  .reply__item {
    display: flex;
    flex-wrap: wrap;
    padding: 15px 0;
    &:not(:last-child) {
      border-bottom: solid 1px #eee;
    }
    .reply-info {
      flex: 1;
      align-self: center;
      text-align: left;
      p {
        margin-bottom: 0 !important;
      }
      @at-root #{&}__meta {
        position: relative;
        margin-bottom: 5px;
        p {
          font-weight: bold
        }
        time {
          position: absolute;
          right: 0;
          top: 0;
        }
      }
      @at-root #{&}__content {
        font-size: 10px;
        word-break: break-all;
      }
    }

    .action-box-wrap {
      width: 100%;
      position: relative;
      height: 30px;
      margin-top: 10px;
      .action-box {
        position: absolute;
        right: 0;
        top: 0;
        line-height: 30px;
        height: 30px;
        border: 1px solid #eee;
        border-radius: 5px;
        text-align: left;
        span {
          width: 45px;
          text-align: center;
          display: inline-block;
          &:not(:last-child) {
            border-right: solid 1px #eee;
          }
      }
    }
  }
}

</style>
