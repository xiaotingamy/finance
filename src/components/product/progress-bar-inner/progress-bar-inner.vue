<template>
  <div class="progress-bar-wrapper">
    <div class="progress-bar">
      <p ref="ratio" class="ratio">
        <span>{{percent}}%</span>
        <i class="triangle"></i>
      </p>
      <div class="bar" ref="bar"></div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      percent: {
        type: Number,
        default: 0
      }
    },
    mounted () {
      setTimeout(() => {
        if (this.percent) {
          this._offset(this.percent)
        }
      }, 20)
    },
    methods: {
      _offset(width) {
        if (this.$refs.bar && this.$refs.ratio) {
          this.$refs.bar.style.width = `${width}%`
          this.$refs.ratio.style.left = `${width}%`
        }
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/mixin"
  @import "~common/stylus/variable"
  .progress-bar-wrapper
    padding 44px 22px 0
    .progress-bar
      position relative
      width 100%
      height 4px
      border-radius 4px
      background #dfdfdf
      .bar
        position absolute
        top 0
        left 0
        height 4px
        border-radius 4px
        background: $color-theme
      .ratio
        position:absolute
        top -30px
        left 0
        display block
        width 40px
        text-align center
        font-size 12px
        color #fff
        padding 3px 0
        margin-left -20px
        background $color-theme
        border-radius 5px
        .triangle
          position absolute
          top 16px
          left 16px
          width 0
          height 0px
          border-left 4px solid transparent
          border-right 4px solid transparent
          border-top 8px solid $color-theme
</style>
