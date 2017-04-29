/*
 * @Author: Harwin
 * @Date: 2017-04-13 23:46:51
 * @Last Modified by: Harwin
 * @Last Modified time: 2017-04-29 11:42:45
 */

import axios from 'axios'
const API_ROOT = '/api/'

/**
 * 主题首页
 * @param {Number} page 页数
 * @param {String} tab  主题分类。目前有 ask share job good
 * @param {Number} limit 每一页的主题数量
 * @param {String} mdrender  当为 false 时，不渲染。默认为 true，渲染出现的所有 markdown 格式文本。
 */
export function getTopics ({ page, tab }) {
  return axios.get(API_ROOT + 'topics', {
    params: {
      page: page,
      tab: tab,
      limit: 20,
      mdrender: true
    }

  })
    .then(function (respone) {
      if (respone.data.success) {
        return respone.data.data
      }
    })
    .catch(function (respone) {
      return respone
    })
}

export function getTopicById (id) {
  return axios.get(API_ROOT + 'topic/' + id)
    .then(function (respone) {
      if (respone.data.success) {
        return respone.data.data
      }
    })
    .catch(function (respone) {
      return respone
    })
}

export function validateToken (token) {
  return axios.post(API_ROOT + 'accesstoken', {
    accesstoken: token
  }).then(respone => {
    if (respone.data.success) {
      localStorage.setItem('token', token)
      return respone.data
    }
  })
}
