<template>
  <transition name="slide">
    <div class="product-trade-detail">
      <trade-detail :tag="tag" :productId="productId"></trade-detail>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  import TradeDetail from 'components/trade-detail/trade-detail'
  export default {
    data() {
      return {
        tag: 'product',
        productId: ''
      }
    },
    created() {
      this.productId = this.$route.params.id
    },
    components: {
      TradeDetail
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/mixin"
  @import "~common/stylus/variable"
  .product-trade-detail
    position absolute
    top 44px
    left 0
    bottom 0
    right 0
    background $color-background-w
    &.slide-enter-active, &.slide-leave-active
      transition all .3s
    &.slide-enter, &.slide-leave-to
      transform translate3d(100%, 0, 0)
</style>
