import Vue from 'vue'
import Router from 'vue-router'
// 引用模板
import indexBlog from './page/indexBlog.vue'
import aboutBlog from './page/aboutBlog.vue'
import jobDetail from './components/jobDetail.vue'

Vue.use(Router)

export default new Router({

  routes: [
    {
      path: '/indexBlog',
         component: indexBlog
    },
    {
      path: '/',
         component: indexBlog
    },
    {
        path: '/aboutBlog',
        component: aboutBlog
      }
      ,
      {
        path:'/jobDetail/:id',
        component:jobDetail,
        props:true
      }
  ]
})