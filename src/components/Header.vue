<template>
  <header class="app-header">
    <div class="app-header__select"
         @click='showMenu'>
      <p class="app-header__select--current">{{currentTab.text}}</p><i class="fa fa-sort-desc app-header__more"
         aria-hidden="true"></i>
    </div>
    <transition name="slide-fade">
      <template v-if="expand">
        <ul class="app-header__select__menu"
            ref="headerMenu"
            @blur='hideMenu'
            tabindex="1">
          <li v-for="(item, key) in tabs"
              @click='selectMenu(item, $event)'>
            <span>{{item.text}}</span>
          </li>
        </ul>
      </template>
    </transition>
  </header>
</template>
<script>
export default {
  props: ['tabs', 'initActiveTab'],
  data () {
    return {
      expand: false,
      currentTab: this.initActiveTab
    }
  },
  methods: {
    showMenu () {
      this.expand = true
    },
    hideMenu () {
      this.expand = false
    },
    selectMenu (item, event) {
      this.currentTab = item
      this.$store.commit('SET_ACTIVE_TAB', item.tab)
      this.$store.dispatch('GET_TOPICS', {tab: item.tab})
      this.expand = false
    }
  },
  watch: {
    expand () {
      this.$nextTick(function () {
        this.expand ? this.$refs.headerMenu.focus() : ''
      })
    }
  }
}
</script>
<style lang="scss">
.app-header {
  background: #4A90E2;
  color: #fff;
  height: 45px;
  @at-root #{&}__more {
    margin-left: 5px;
    vertical-align: 3px;
    cursor: pointer;
  }
  @at-root #{&}__select {
    line-height: 45px;
    width: 100px;
    margin: 0 auto;
    position: relative;
    @at-root #{&}--current {
      display: inline-block;
      cursor: pointer;
    }
    @at-root #{&}__menu {
      list-style: none;
      width: 100px;
      font-size: 12px;
      top: 40px;
      left: 50%;
      box-shadow: 1px 1px 3px gray;
      border-radius: 1px;
      transform: translateX(-50%);
      color: #333;
      background: #f7f7f7;
      position: absolute;
      z-index: 100;
      &:focus {
        box-shadow: 1px 1px 3px gray;
        outline: none;
      }
      li {
        text-align: center;
        padding: 5px;
      }
    }
  }
}
</style>
