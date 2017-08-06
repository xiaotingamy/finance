import Vue from 'vue'
import Router from 'vue-router'
import Financial from 'components/financial/financial'
import UserCenter from 'components/user-center/user-center'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/financial'
    },
    {
      path: '/financial',
      component: Financial
    },
    {
      path: '/user',
      component: UserCenter
    }
  ]
})
