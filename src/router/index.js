import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/index'
import Main from '@/components/main/index'
import personalInfo from '@/components/main/content/notification'
import effect from '@/components/main/content/effect'
import basicKnowledge from '@/components/main/content/basicKnowledge'
import normalTools from '@/components/main/content/normalTools'
import algorithm from '@/components/main/content/algorithm'
import mixins1 from '@/components/main/content/mixinsDemo1'
import mixins2 from '@/components/main/content/mixinsDemo2'

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
        { path: '', component: personalInfo },
        { path: 'effect', component: effect },
        { path: 'basicKnowledge', component: basicKnowledge },
        { path: 'normalTools', component: normalTools },
        { path: 'algorithm', component: algorithm },
        { path: 'mixins1', component: mixins1 },
        { path: 'mixins2', component: mixins2 }
      ]
    }
  ]
})
