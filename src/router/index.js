import Vue from 'vue'
import Router from 'vue-router'
import Financial from 'components/financial/financial'
import UserCenter from 'components/user-center/user-center'
import ProductDetail from 'components/product/detail/detail'
import ProductDescription from 'components/product/description/description'
import ProductObligatoryRight from 'components/product/obligatory-right/obligatory-right'
import ProductSecurity from 'components/product/security/security'
import ProductTradeDetail from 'components/product/product-trade-detail/product-trade-detail'

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
        component: ProductDetail,
        children: [{
          path: 'description',
          component: ProductDescription
        }, {
          path: 'obligatoryRight',
          component: ProductObligatoryRight
        }, {
          path: 'security',
          component: ProductSecurity
        }, {
          path: 'trade/detail',
          component: ProductTradeDetail
        }]
      }]
    },
    {
      path: '/user',
      component: UserCenter
    }
  ]
})
