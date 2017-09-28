<template>
  <div class="description-wrapper">
    <div class="description-content">
      <split></split>
      <panel :title="productDescription.title" :text="productDescription.text"></panel>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  import Panel from 'base/panel/panel'
  import Split from 'components/split/split'
  import {mapGetters} from 'vuex'

  export default {
    computed: {
      ...mapGetters([
        'productDescription'
      ])
    },
    methods: {
      _getDesc () {
        if (!this.productDescription.title) {
          this.$router.push(`/financial/${this.productDescription.productId}`)
          return
        }
      }
    },
    created () {
      this._getDesc()
    },
    components: {
      Panel,
      Split
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/mixin"
  @import "~common/stylus/variable"
  .description-wrapper
    position: fixed
    z-index: 100
    top: 0
    left: 0
    bottom: 0
    right: 0
    background: $color-background
</style>
