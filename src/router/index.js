import Vue from 'vue'
import Router from 'vue-router'
// import Home from '@/components/Home'
// import Detail from '@/components/Detail'
// import Reply from '@/components/Reply'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: resolve => {
        require.ensure(['@/components/Home'], () => {
          resolve(require('@/components/Home'))
        })
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: resolve => {
        require.ensure(['@/components/Login'], () => {
          resolve(require('@/components/Login'))
        })
      }

    },
    {
      path: '/item/:id',
      name: 'Detail',
      component: resolve => {
        require.ensure(['@/components/Detail'], () => {
          resolve(require('@/components/Detail'))
        })
      }
    },
    {
      path: '/item/reply',
      name: 'Reply',
      component: resolve => {
        require.ensure(['@/components/Reply'], () => {
          resolve(require('@/components/Reply'))
        })
      }
    }
  ]
})
