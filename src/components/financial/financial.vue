<template>
  <div class="financial">
    <scroll :data="recommends" ref="scroll" class="financial-content">
      <div>
        <div  v-if="banners.length" class="slider-wrapper">
          <div class="slider-content">
            <slider ref="slider">
              <div v-for="item in banners">
                <a :href="item.remark">
                  <img class="needsclick" :src="item.imageUrl" @load="loadImage">
                </a>
              </div>
            </slider>
          </div>
        </div>
        <div class="fixed-deposit">
          <h1 class="title"><span class="lnr lnr-star"></span>活期</h1>
          <div class="piggybank border-top-1px border-bottom-1px">
            <div class="piggybank-title border-bottom-1px">
              <p>储银罐</p>
              <p class="mark">灵活高效，年化随存放周期而涨</p>
            </div>
            <div class="piggybank-content border-bottom-1px">
              <div class="content-left">
                <p class="c-rate">5.8~7<span class="percent">%</span></p>
                <p class="rate-desc">预期年化收益</p>
              </div>
              <div class="content-right">
                <div class="rule-desc"><p>随存随取</p><p class="s-row">1元起投</p></div>
              </div>
            </div>
            <div class="piggybank-bottom">
              <p>*储银罐是微银理财推出的随时随取的活期理财产品</p>
            </div>
          </div>
        </div>
        <div class="recommends">
            <h1 class="title"><span class="lnr lnr-star"></span>定期</h1>
            <div class="recommends-list border-top-1px">
              <router-link tag="div" class="recommend-item border-bottom-1px" to="/financial" v-for="item in recommends" :key="item.id">
                <div class="recommend-title border-bottom-1px">{{item.name}}</div>
                <div class="recommend-content">
                  <div class="content-left">
                    <p class="c-rate">{{item.yearIncome}}<span class="percent">%</span><span class="increase-interest" v-if="item.increaseInterest">+{{item.increaseInterest}}<i class="percent">%</i></span></p>
                    <p class="rate-desc">预期年化收益</p>
                  </div>
                  <div class="content-right">
                    <p class="period">期限 {{item.financePeriod}} 天</p>
                    <div class="soldout">
                      <p>已售{{calculatePercent(item.actualAmount, item.totalAmount)}}%</p>
                      <div class="progress-bar-wrapper">
                        <progress-bar :percent="calculatePercent(item.actualAmount, item.totalAmount)"></progress-bar>
                      </div>
                    </div>
                  </div>
                </div>
              </router-link>
            </div>
        </div>
      </div>
    </scroll>
  </div>
</template>

<script type="text/ecmascript-6">
  import Scroll from 'base/scroll/scroll'
  import Slider from 'base/slider/slider'
  import ProgressBar from 'base/progress-bar/progress-bar'
  import {getBanners, getRecommends} from 'api/financial'
  import {ERR_OK} from 'common/js/config'
  export default {
    data() {
      return {
        banners: [],
        recommends: []
      }
    },
    created() {
      this._getBanners()
      this._getRecommends()
    },
    activated () {
      setTimeout(() => {
        this.$refs.slider && this.$refs.slider.refresh()
      }, 20)
    },
    methods: {
      calculatePercent(actual, total) {
        var percent = ((actual / total) * 100).toFixed(2)
        if (percent > 0 && percent < 1) {
          percent = 1
        } else {
          percent = Math.floor(percent)
        }
        return percent
      },
      _getBanners() {
        getBanners().then((res) => {
          if (res.code === ERR_OK) {
            this.banners = res.data
          }
        })
      },
      _getRecommends() {
        getRecommends().then((res) => {
          if (res.pages) {
            this.recommends = res.products.slice(0, 3)
            console.log(this.recommends)
          }
        })
      },
      loadImage() {
        if (!this.checkloaded) {
          this.checkloaded = true
          setTimeout(() => {
            this.$refs.scroll.refresh()
          }, 20)
        }
      }
    },
    components: {
      Scroll,
      Slider,
      ProgressBar
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/mixin"
  @import "~common/stylus/variable"

  .financial
    position absolute
    top 0
    bottom 49px
    width 100%
    .financial-content
      height: 100%
      overflow: hidden
      .slider-wrapper
        position: relative
        width: 100%
        height: 0
        padding-top: 190px
        overflow: hidden
        .slider-content
          position: absolute
          top: 0
          left: 0
          width: 100%
          height: 100%
      .fixed-deposit
        .title
          height:42px
          line-height: 42px
          padding-left: 15px
          font-size: $font-size-medium
          color: $color-text-l
          .lnr
            margin-right: 5px
        .piggybank
          padding: 0 14px
          background: $color-background-w
          border-top-1px($color-border)
          border-bottom-1px($color-border)
          .piggybank-title
            display: flex
            justify-content: space-between
            height: 45px
            line-height: 45px
            color: $color-text
            font-size: $font-size-large
            border-bottom-1px($color-border)
            .mark
              font-size: $font-size-small
              color: #ff5467
          .piggybank-content
            display: flex
            height: 87px
            align-items: center
            border-bottom-1px($color-border)
            .content-left
              flex: 0 0 50%
              .c-rate
                font-size $font-size-large-xxx
                color $color-theme
                .percent
                  font-size $font-size-small
              .rate-desc
                font-size: $font-size-small
                color: $color-text-l
                margin-top: 8px


            .content-right
              .rule-desc
                font-size: $font-size-medium-x
                color: $color-text-n
                margin-top: 11px
                .s-row
                  font-size: $font-size-small
                  margin-top: 12px
          .piggybank-bottom
            height: 37px
            line-height: 37px
            font-size: $font-size-medium
            color: $color-text-l

      .recommends
        .title
          height:42px
          line-height: 42px
          padding-left: 15px
          font-size: $font-size-medium
          color: $color-text-l
          .lnr
            margin-right: 5px
        .recommends-list
          background: $color-background-w
          border-top-1px($color-border)
          .recommend-item
            padding: 0 14px
            border-bottom-1px($color-border)
            .recommend-title
              height: 45px
              line-height: 45px
              color: $color-text
              font-size: $font-size-medium-x
              border-bottom-1px($color-border)
            .recommend-content
              display flex
              height 80px
              align-items: center
              .content-left
                flex: 0 0 50%
                .c-rate
                  font-size $font-size-large-xxx
                  color $color-theme
                  .percent
                    font-size $font-size-small
                  .increase-interest
                    font-size $font-size-large
                    color #ff773d
                    .percent
                      font-size $font-size-small
                      font-style normal
                .rate-desc
                  font-size: $font-size-small
                  color: $color-text-l
                  margin-top: 8px
              .content-right
                .period
                  font-size: $font-size-large
                  color: $color-text-n
                  margin-top: 10px
                .soldout
                  font-size 0
                  margin-top: 10px
                  p
                    display inline-block
                    vertical-align middle
                    font-size: $font-size-small
                    color: $color-text-l
                    margin-right 7px
                  .progress-bar-wrapper
                    display inline-block
                    vertical-align middle


</style>
