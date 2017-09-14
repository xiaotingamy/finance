<template>
  <div class="product">
    <m-header></m-header>
    <div class="product-detail-wrapper">
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
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import MHeader from 'components/m-header/m-header'
  import {getProduct} from 'api/product'
  import {ERR_OK} from 'common/js/config'
  export default {
    data () {
      return {
        product: {}
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
      }
    },
    components: {
      MHeader
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
    background: $color-background-w
    .product-detail-wrapper
      position absolute
      top 44px
      bottom 55px
      width 100%
      .product-detail-content
        height 100%
        overflow hidden
        .head
          padding: 15px
          border-bottom-1px($color-border)
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


</style>
