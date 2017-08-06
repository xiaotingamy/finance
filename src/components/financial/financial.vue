<template>
  <div class="financial">
    <scroll ref="scroll" class="financial-content">
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
      </div>
    </scroll>
  </div>
</template>

<script type="text/ecmascript-6">
  import Scroll from 'base/scroll/scroll'
  import Slider from 'base/slider/slider'
  import {getBanners} from 'api/financial'
  import {ERR_OK} from 'common/js/config'
  export default {
    data() {
      return {
        banners: []
      }
    },
    created() {
      this._getBanners()
    },
    activated () {
      setTimeout(() => {
        this.$refs.slider && this.$refs.slider.refresh()
      }, 20)
    },
    methods: {
      _getBanners() {
        getBanners().then((res) => {
          if (res.code === ERR_OK) {
            this.banners = res.data
          }
        })
      },
      loadImage() {
        if (!this.checkloaded) {
          this.checkload = true
          setTimeout(() => {
            this.$refs.scroll.refresh()
          }, 20)
        }
      }
    },
    components: {
      Scroll,
      Slider
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
</style>
