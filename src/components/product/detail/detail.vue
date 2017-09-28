<template>
  <div class="product">
    <m-header></m-header>
    <scroll ref="scroll" class="product-detail-wrapper">
      <div class="product-detail-content">
        <div class="head border-bottom-1px">
          <div class="income-data">
            <span class="data">9.6</span>
            <span class="util">%</span>
            <span class="increase-income">+2%</span>
          </div>
          <div class="income-title">预期年化收益率</div>
          <div class="activity-mark">
            <span>尾返</span>
          </div>
          <div class="limit-box">
            <div class="period">
              <p>60天</p>
              <p>投资期限</p>
            </div>
            <div class="middle-line"></div>
            <div class="lowest-amount">
              <p>1000元</p>
              <p>起投金额</p>
            </div>
          </div>
        </div>
        <div class="secondary border-bottom-1px">
          <div class="progress-box">
            <progress-bar-inner percent=30></progress-bar-inner>
          </div>
          <div class="amount-box">
            <p>募集金额：100000元</p>
            <p>剩余金额：<span class="red">6000</span>元</p>
          </div>
          <div class="remark">
            还款方式：到期次日本息一次性返还至您的账户余额
          </div>
        </div>
        <split></split>
        <div class="activity-wrapper border-bottom-1px">
          <ul class="content">
            <li>
              <div class="icon icon-first"></div>
              <p class="text">首单可随机获得100-300个嘉银币</p>
            </li>
            <li>
              <div class="icon icon-last"></div>
              <p class="text">尾单可随机获得投资金额*10%的嘉银币</p>
            </li>
            <li>
              <div class="icon icon-back"></div>
              <div class="text">
                <p>单笔投资满1返2元红包</p>
              </div>
            </li>
          </ul>
        </div>
        <split></split>
        <ul class="list-link">
          <li class="border-bottom-1px" @click="toDescription(product.description)">
            <h4>产品详情</h4>
            <span class="lnr lnr-chevron-right"></span>
          </li>
          <li class="border-bottom-1px">
            <h4>债权信息</h4>
            <span class="lnr lnr-chevron-right"></span>
          </li>
          <li class="border-bottom-1px">
            <h4>安全保障</h4>
            <span class="lnr lnr-chevron-right"></span>
          </li>
          <li class="border-bottom-1px">
            <h4>投资记录</h4>
            <div class="text-info">23人</div>
            <span class="lnr lnr-chevron-right"></span>
          </li>
        </ul>
      </div>
    </scroll>
    <div class="product-detail-footer">
      <div class="footer-box">
        <div class="icon-calculate"></div>
        <div class="buy">立即购买</div>
        <!--<div class="buy">{{buyDesc}}</div>-->
      </div>
    </div>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script type="text/ecmascript-6">
  import MHeader from 'components/m-header/m-header'
  import Scroll from 'base/scroll/scroll'
  import ProgressBarInner from 'components/product/progress-bar-inner/progress-bar-inner'
  import Split from 'components/split/split'
  import {getProduct} from 'api/product'
  import {ERR_OK} from 'common/js/config'
  import {mapMutations} from 'vuex'
  export default {
    data () {
      return {
        product: {
          id: '1910',
          description: {
            productId: '1910',
            title: '123',
            text: '123456'
          }
        }
      }
    },
    created() {
      console.log(this.$route.params.id)
      this._getProduct()
    },
    methods: {
      _getProduct () {
        getProduct(this.$route.params.id).then((res) => {
          if (res.code === ERR_OK) {
            this.product = res.data
          }
        })
      },
      toDescription (desc) {
        this.$router.push({
          path: `${this.product.id}/description`
        })
        this.setProductDescription(desc)
      },
      ...mapMutations({
        setProductDescription: 'SET_PRODUCT_DESCRIPTION'
      })
    },
    components: {
      MHeader,
      ProgressBarInner,
      Split,
      Scroll
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/mixin"
  @import "~common/stylus/variable"
  .product
    position: fixed
    z-index: 100
    top: 0
    left: 0
    bottom: 0
    right: 0
    background: $color-background
    .product-detail-wrapper
      position absolute
      top 44px
      bottom 55px
      width 100%
      overflow hidden
      .product-detail-content
        padding-bottom 10px
        .head
          padding: 15px
          border-bottom-1px($color-border)
          background-color $color-background-w
          .income-data
            text-align center
            font-size 0
            color $color-theme
            line-height 1
            .data
              font-size 48px
            .util
              font-size $font-size-small-s
            .increase-income
              font-size $font-size-small-s
              color $color-increase
          .income-title
            margin-top 12px
            margin-bottom 10px
            text-align center
            color $color-text-l
            font-size $font-size-small
          .activity-mark
            text-align center
            height 22px
            span
              color $color-theme
              border-radius 4px
              padding 1px 5px
              font-size $font-size-small-s
              border 1px solid $color-theme
          .limit-box
            display flex
            align-items center
            margin-top 20px
            font-size $font-size-small
            color $color-text-l
            .middle-line
              height 30px
              width 0px
              border-left: 1px solid $color-border
            .period
              width 49%
              text-align center
              p
                &:first-child
                  color $color-text-n
                  font-size $font-size-large
                  margin-bottom: 6px
            .lowest-amount
              width 49%
              text-align center
              p
                &:first-child
                  color $color-text-n
                  font-size $font-size-large
                  margin-bottom 6px
        .secondary
          padding-bottom 16px
          border-bottom-1px($color-border)
          background-color $color-background-w
          .progress-box
            margin-bottom: 12px
          .amount-box
            display flex
            justify-content space-between
            padding 0 22px
            margin-bottom 8px
            font-size $font-size-small
            color $color-text-l
            .red
              color $color-theme
          .remark
            padding 0 22px
            font-size $font-size-small
            color $color-text-l
        .activity-wrapper
          padding 10px 24px
          background: $color-background-w
          border-bottom-1px($color-border)
          .content
            li
              display flex
              margin-bottom 6px
              &:last-child
                margin-bottom 0
              .icon
                width 18px
                height 18px
                margin-right 8px
                &.icon-first
                  bg-image('first')
                  background-size 18px
                &.icon-last
                  bg-image('last')
                  background-size 18px
                &.icon-back
                  bg-image('back')
                  background-size 18px
              .text
                flex: 1
                font-size $font-size-small
                color $color-text-n
                line-height 18px
        .list-link
          li
            display flex
            justify-content space-between
            align-items center
            padding 0 15px
            height 50px
            background $color-background-w
            border-bottom-1px($color-border)
            h4
              font-size 15px
              color $color-text
            .lnr-chevron-right
              color #ccc
            .text-info
              flex 1 1 auto
              text-align right
              font-size 14px
              color $color-text-l
              margin-right 10px
    .product-detail-footer
      position absolute
      bottom 0
      left 0
      width 100%
      height 55px
      border-top 1px solid $color-border
      background $color-background-w
      .footer-box
        display flex
        justify-content space-between
        align-items center
        padding 0 15px
        height 100%
        .icon-calculate
          flex 0 0 30px
          margin-right 15px
          width 30px
          height 30px
          bg-image('calculate')
          background-size 30px
        .buy
          flex 1
          height 40px
          text-align center
          font-size 15px
          line-height 40px
          border-radius 4px
          color $color-background-w
          background #ddd
          &.active
            color $color-background-w
            background $color-theme
</style>
