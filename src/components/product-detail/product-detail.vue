<template>
  <div class="product">
    <m-header></m-header>
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
    bottom: 49px
    right: 0
    background: $color-background-w
    .title
      position absolute
      top: 0px
      left: 0
</style>
