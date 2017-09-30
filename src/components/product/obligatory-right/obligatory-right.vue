<template>
  <transition name="slide">
    <scroll ref="scroll" class="description-wrapper">
      <div class="description-content">
        <split v-if="productDescription.obligatoryRight != ''"></split>
        <panel v-if="productDescription.obligatoryRight != ''" title="借款人信息" :text="productDescription.obligatoryRight"></panel>
        <split v-if="productDescription.productContract != null && product.productContract.productAttachments.length > 0"></split>
        <div v-if="productDescription.productContract != null && product.productContract.productAttachments.length > 0" class="panel border-bottom-1px">
          <h4 class="border-bottom-1px">合同信息</h4>
          <div class="text">
            <img v-for="item in productDescription.productAttachments" :src="item.url">
          </div>
        </div>
      </div>
    </scroll>
  </transition>
</template>
<script type="text/ecmascript-6">
  import Panel from 'base/panel/panel'
  import Split from 'components/split/split'
  import Scroll from 'base/scroll/scroll'
  import {mapGetters} from 'vuex'

  export default {
    computed: {
      ...mapGetters([
        'productDescription'
      ])
    },
    methods: {
      _getDesc() {
        if (!this.productDescription.productId) {
          this.$router.push('/')
          return
        }
      }
    },
    created() {
      this._getDesc()
    },
    components: {
      Panel,
      Split,
      Scroll
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/mixin"
  @import "~common/stylus/variable"
  .description-wrapper
    position: absolute
    z-index: 100
    top: 44px
    left: 0
    bottom: 0
    right: 0
    background: $color-background
    &.slide-enter-active, &.slide-leave-active
      transition all .3s
    &.slide-enter, &.slide-leave-to
      transform translate3d(100%, 0, 0)
  .panel
    padding 0 15px
    border-bottom-1px($color-border)
    background $color-background-w
    h4
      height 54px
      font-size $font-size-large
      color $color-text
      line-height 54px
      border-bottom-1px($color-border)
    .text
      padding 15px 0
      line-height 22px
      font-size $font-size-medium
      color $color-text-n
      img
        width 100%
</style>
