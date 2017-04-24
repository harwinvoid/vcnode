/*
 * @Author: Harwin
 * @Date: 2017-04-13 23:57:45
 * @Last Modified by: Harwin
 * @Last Modified time: 2017-04-24 20:39:10
 */

import Vue from 'vue'
import Vuex from 'vuex'
import * as api from './api'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    user: {
      isLogin: false
    },
    topics: [],
    tabs: {
      all: {
        text: '全部',
        tab: 'all'
      },
      share: {
        text: '分享',
        tab: 'share'
      },
      good: {
        text: '精华',
        tab: 'good'
      },
      ask: {
        text: '问答',
        tab: 'ask'
      },
      job: {
        text: '招聘',
        tab: 'job'
      }
    },
    activeTab: 'all',
    currentTopicReplyies: []
  },
  actions: {
    GET_TOPICS: ({ commit, dispatch, state }, params) => {
      return api.getTopics(params).then(topics => {
        commit('SET_TOPICS', { topics })
      })
    }
  },
  mutations: {
    SET_TOPICS: (state, { topics }) => {
      state.topics = topics
    },
    SET_ACTIVE_TAB: (state, tab) => {
      state.activeTab = tab
    },
    SET_REPLY: (state, replies) => {
      state.currentTopicReplies = replies
    }
  }
})

export default store

