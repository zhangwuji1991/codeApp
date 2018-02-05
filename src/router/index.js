import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/index'
import Creat from '@/components/creat'
import Message from '@/components/message'
import TopicDetail from '@/components/topicDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: HelloWorld
    },
    {
      path: '/topic-create',
      name: 'topic-create',
      component: Creat
    },
    {
      path: '/self-messages',
      name: 'self-messages',
      component: Message
    },
    {
        path: '/topic/:id', // 查看帖子信息
        name: 'topic-detail',
        meta: { auth: false },
        component: TopicDetail
      },
    {
      path: '/self-home',
      name: 'self-home',
      component: HelloWorld
    }
  ]
})
