import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/index'
import Main from '@/components/main/index'
import personalInfo from '@/components/main/content/notification'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/main',
      component: Main,
      children: [
        { path: '', component: personalInfo }
      ]
    }
  ]
})
