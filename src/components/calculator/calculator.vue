<template>
  <transition name="confirm-fade">
    <div class="calculator" v-show="showFlag" @click.stop>
      <div class="calculator-wrapper">
        <div class="calculator-content">
          <div class="calculator-head border-bottom-1px">计算收益</div>
          <div class="lnr lnr-cross" @click="hide"></div>
          <div class="row border-bottom-1px">
            <p class="title">投资金额(元)</p>
            <input type="tel" v-model="amount" placeholder="请输入投资金额" class="amount" maxlength="8"/>
          </div>
          <div class="row border-bottom-1px">
            <p class="title">投资期限(天)</p>
            <p class="text">{{period}}天</p>
          </div>
          <div class="row border-bottom-1px">
            <p class="title">预期年化收益</p>
            <p class="text">{{yearIncome}}%</p>
          </div>
          <div class="row border-bottom-1px">
            <p class="title">预期收益(元)</p>
            <p class="text red">{{result}}</p>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      period: {
        type: Number,
        default: 0
      },
      yearIncome: {
        type: Number,
        default: 0
      }
    },
    data() {
      return {
        amount: '',
        showFlag: false
      }
    },
    computed: {
      result() {
        return this.amount ? (this.amount * this.yearIncome * this.period / 36500).toFixed(2) : '0'
      }
    },
    methods: {
      show() {
        this.showFlag = true
      },
      hide() {
        this.showFlag = false
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/mixin"
  @import "~common/stylus/variable"
  .calculator
    position fixed
    top 0
    left 0
    bottom 0
    right 0
    z-index 102
    background rgba(0,0,0,0.5)
    &.confirm-fade-enter-active
      animation confirm-fadein 0.3s
      .calculator-content
        animation confirm-zoom 0.3s
    .calculator-wrapper
      position absolute
      top 50%
      left 50%
      transform translate(-50%, -50%)
      z-index 103
      .calculator-content
        width 300px
        border-radius 5px
        background $color-background-w
        .calculator-head
          height 60px
          line-height 60px
          text-align center
          font-size 15px
          color $color-text
          border-bottom-1px($color-border)
        .row
          height 50px
          display flex
          justify-content space-between
          align-items center
          padding 0 15px
          border-bottom-1px($color-border)
          .title
            font-size 15px
            color $color-text
          .text
            font-size $font-size-medium
            color $color-text-l
            &.red
              color $color-theme
          .amount
            font-size $font-size-medium
            color $color-text-l
            border 0
            flex 1
            height 20px
            line-height 20px
            text-align right
            outline 0
        .lnr-cross
          position absolute
          top 10px
          right 10px
          font-size $font-size-large-x
          color $color-text-l

  @keyframes confirm-fadein
    0%
      opacity: 0
    100%
      opacity: 1
  @keyframes confirm-zoom
    0%
      transform: scale(0)
    50%
      transform: scale(1.1)
    100%
      transform: scale(1)
</style>
