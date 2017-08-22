import Vue from 'vue'
import Router from 'vue-router'
import Financial from 'components/financial/financial'
import UserCenter from 'components/user-center/user-center'
import ProductDetail from 'components/product-detail/product-detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/financial'
    },
    {
      path: '/financial',
      component: Financial,
      children: [{
        path: ':id',
        component: ProductDetail
      }]
    },
    {
      path: '/user',
      component: UserCenter
    }
  ]
})
